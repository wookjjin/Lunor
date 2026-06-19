import type { PlaygroundOutletContext } from './ComponentPlaygroundContext'
import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router'
import { useThemeStore } from '@/app/store/theme.store'
import { Button } from '@/core/components/Button/Button'
import { useBreakpoints } from '@/core/hooks/useMediaQuery'
import { defaultPropsMap, getComponentType } from './ComponentPlaygroundContext'
import PropertiesPanel from './PropertiesPanel'
import PropsControls from './PropsControls'
import { sidebarNavGroups } from './sidebarNav'

/* =============================================================================
   ComponentsShell — Storybook 스타일 Core 컴포넌트 레이아웃
   사이드바(브랜드+검색+그룹Nav+Footer) + 앱바(Breadcrumb+탭+액션) + 워크스페이스(캔버스+속성패널)
   반응형: 모바일 드로어 ↔ 데스크톱 고정 사이드바 / 바텀시트 ↔ 우측 패널
   ============================================================================= */

/** 현재 경로에서 Breadcrumb 표시용 라벨 추출 */
function getBreadcrumbLabel(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  // Home 페이지 (/components 또는 /components/)
  if (segments.length === 1 && segments[0] === 'components')
    return 'Home'
  if (segments.length >= 2 && segments[0] === 'components') {
    return segments[1].charAt(0).toUpperCase() + segments[1].slice(1)
  }
  return 'Canvas'
}

export default function ComponentsShell() {
  const location = useLocation()
  const currentLabel = getBreadcrumbLabel(location.pathname)
  const componentType = getComponentType(location.pathname)
  const isHomePage = location.pathname === '/components' || location.pathname === '/components/'
  const { isDesktop } = useBreakpoints()
  const { theme, toggleTheme } = useThemeStore()

  // 사이드바 열림/닫힘 상태 (모바일/태블릿 드로어)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // 속성 패널(바텀시트) 열림/닫힘 상태 (모바일/태블릿)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  // 컴포넌트별 Playground Props 상태 관리
  const [propsState, setPropsState] = useState<Record<string, unknown>>(
    () => defaultPropsMap[componentType] ?? {},
  )

  // 경로 변경 시 기본값으로 리셋
  const prevTypeRef = useRef(componentType)
  if (componentType !== prevTypeRef.current) {
    prevTypeRef.current = componentType
    setPropsState(defaultPropsMap[componentType] ?? {})
  }

  // 데스크톱 전환 시 사이드바/패널 상태 초기화 (렌더 단계 ref 패턴)
  const prevIsDesktopRef = useRef(isDesktop)
  if (isDesktop && !prevIsDesktopRef.current) {
    setIsSidebarOpen(false)
    setIsPanelOpen(false)
  }
  if (prevIsDesktopRef.current !== isDesktop) {
    prevIsDesktopRef.current = isDesktop
  }

  const setProp = useCallback((key: string, value: unknown) => {
    setPropsState(prev => ({ ...prev, [key]: value }))
  }, [])

  // 데스크톱 전환 시 body 스크롤 잠금 해제 (DOM 사이드 이펙트)
  useEffect(() => {
    if (isDesktop) {
      document.body.style.overflow = ''
    }
  }, [isDesktop])

  // 사이드바 토글
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => {
      const next = !prev
      // 모바일에서 body 스크롤 잠금
      if (!isDesktop) {
        document.body.style.overflow = next ? 'hidden' : ''
      }
      return next
    })
  }, [isDesktop])

  // 사이드바 닫기
  const closeSidebar = useCallback(() => {
    setIsSidebarOpen(false)
    if (!isDesktop) {
      document.body.style.overflow = ''
    }
  }, [isDesktop])

  // 속성 패널 토글
  const togglePanel = useCallback(() => {
    setIsPanelOpen((prev) => {
      const next = !prev
      if (!isDesktop) {
        document.body.style.overflow = next ? 'hidden' : ''
      }
      return next
    })
  }, [isDesktop])

  // 속성 패널 닫기
  const closePanel = useCallback(() => {
    setIsPanelOpen(false)
    if (!isDesktop) {
      document.body.style.overflow = ''
    }
  }, [isDesktop])

  // Outlet Context로 Canvas 페이지에 props 전달
  const outletContext: PlaygroundOutletContext = {
    props: propsState,
    setProp,
    componentType,
  }

  return (
    <div className="layout-shell">
      {/* ── Sidebar Overlay (모바일/태블릿) ── */}
      <div
        className={`layout-sidebar-overlay${isSidebarOpen ? ' layout-sidebar-overlay--visible' : ''}`}
        onClick={(e) => {
          e.stopPropagation()
          closeSidebar()
        }}
        aria-hidden="true"
      />

      {/* ── Sidebar ── */}
      <aside className={`layout-sidebar scrollbar-hide${isSidebarOpen ? ' layout-sidebar--open' : ''}`}>
        {/* Brand Header */}
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '\'FILL\' 1', color: 'var(--color-interactive-default, #7dd3fc)' }}>
              deployed_code
            </span>
          </div>
          <div>
            <div className="sidebar-brand-title">Core UI</div>
            <div className="sidebar-brand-version">v1.0.0</div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="sidebar-search">
          <span className="material-symbols-outlined sidebar-search-icon">search</span>
          <input
            className="sidebar-search-input"
            placeholder="Search Components"
            type="text"
          />
          <div className="sidebar-search-kbd">
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </div>
        </div>

        {/* Navigation Groups */}
        <nav className="sidebar-nav">
          {sidebarNavGroups.map(group => (
            <div key={group.groupLabel}>
              <div className="sidebar-nav-group-label">{group.groupLabel}</div>
              <ul className="sidebar-nav-group-list">
                {group.items.map(item => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.end}
                      className={({ isActive }) =>
                        `sidebar-nav-item${isActive ? ' sidebar-nav-item--active' : ''}`}
                      onClick={closeSidebar}
                    >
                      <span className="sidebar-nav-item-icon">
                        {item.icon && (
                          <span className="material-symbols-outlined">{item.icon}</span>
                        )}
                        <span>{item.label}</span>
                      </span>
                      {item.badge != null && (
                        <span className="sidebar-nav-badge">{item.badge}</span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer Action */}
        <div className="sidebar-footer">
          <Button variant="ghost" size="sm" className="sidebar-footer-btn">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </Button>
        </div>
      </aside>

      {/* ── Main Viewport ── */}
      <main className="layout-main-viewport">
        {/* ── Top App Bar ── */}
        <header className="layout-top-appbar">
          <div className="appbar-breadcrumb">
            {/* 햄버거 메뉴 (모바일/태블릿) */}
            <Button
              variant="ghost"
              size="sm"
              className="appbar-menu-btn"
              onClick={toggleSidebar}
              aria-label="Toggle navigation"
            >
              <span className="material-symbols-outlined">menu</span>
            </Button>
            <span className="appbar-breadcrumb-segment">Components</span>
            <span className="appbar-breadcrumb-separator">/</span>
            <span className="appbar-breadcrumb-current">{currentLabel}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <nav className="appbar-tabs">
              <a className="appbar-tab appbar-tab--active" href="#">Canvas</a>
              <a className="appbar-tab" href="#">Docs</a>
              <a className="appbar-tab" href="#">Props</a>
            </nav>
            <div className="appbar-actions">
              <Button
                variant="ghost"
                size="sm"
                className="appbar-action-btn"
                onClick={(e) => { toggleTheme(e.clientX, e.clientY) }}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <span className="theme-ticker">
                  <span className="theme-ticker__track">
                    <span className="theme-ticker__icon material-symbols-outlined">dark_mode</span>
                    <span className="theme-ticker__icon material-symbols-outlined">light_mode</span>
                  </span>
                </span>
              </Button>
              <Button variant="ghost" size="sm" className="appbar-action-btn">
                <span className="material-symbols-outlined">grid_view</span>
              </Button>
              <a className="appbar-action-btn" href="#">
                <span className="material-symbols-outlined">terminal</span>
              </a>
              <div className="appbar-avatar">
                <img
                  alt="User profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Bo5Yrfjxjd8JVh03eJWl0_3op63ZK97NPQ_lIXUtb3FG7RLia-3qzQee_kxo4e4mTZh3_fIEWf61YieJqDlt9A3SJIAaBAP4PnWTX54kNEbEo-wPRCz4iD24XUUTlZrLKEsp74n8KFlsZ762goS8ErFk_4Iu6RXVN-fPLvTVI9dSB8qyRlInU1yZY_ndAZe2rNSd5wokInDU8yi88DImeiTuW92yyCEuHGdbItzib2CDQXkrkbGPI-ArT6dwxzaonulIvUMXIk_k"
                />
              </div>
            </div>
          </div>
        </header>

        {/* ── Workspace: Canvas + Properties Panel ── */}
        <div className="layout-workspace">
          <div className="layout-canvas-area canvas-dots">
            <Outlet context={outletContext} />
            {/* Floating Control Hint */}
            <div className="canvas-floating-hint">
              <div className="canvas-floating-hint-item">
                <span className="material-symbols-outlined">zoom_in</span>
                100%
              </div>
              <div className="canvas-floating-hint-divider" />
              <div className="canvas-floating-hint-item">
                <span className="material-symbols-outlined">center_focus_strong</span>
                Center
              </div>
            </div>
          </div>
          {!isHomePage && (
            <PropertiesPanel isOpen={isPanelOpen} onClose={closePanel}>
              <PropsControls props={propsState} setProp={setProp} componentType={componentType} />
            </PropertiesPanel>
          )}
        </div>
      </main>

      {/* ── FAB: 속성 패널 토글 (모바일/태블릿) — Home에서 숨김 ── */}
      {!isHomePage && (
        <Button
          variant="solid"
          size="sm"
          className="layout-fab-toggle"
          onClick={togglePanel}
          aria-label="Toggle properties panel"
        >
          <span className="material-symbols-outlined">
            {isPanelOpen ? 'keyboard_arrow_down' : 'settings_input_component'}
          </span>
        </Button>
      )}

      {/* ── Bottom Sheet Overlay (모바일/태블릿) — Home에서 숨김 ── */}
      {!isHomePage && (
        <div
          className={`layout-bottomsheet-overlay${isPanelOpen ? ' layout-bottomsheet-overlay--visible' : ''}`}
          onClick={(e) => {
            e.stopPropagation()
            closePanel()
          }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
