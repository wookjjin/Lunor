import { NavLink, Outlet, useLocation } from 'react-router'
import PropertiesPanel from './PropertiesPanel'
import { sidebarNavGroups } from './sidebarNav'

/* =============================================================================
   ComponentsShell — Storybook 스타일 Core 컴포넌트 레이아웃
   사이드바(브랜드+검색+그룹Nav+Footer) + 앱바(Breadcrumb+탭+액션) + 워크스페이스(캔버스+속성패널)
   ============================================================================= */

/** 현재 경로에서 Breadcrumb 표시용 라벨 추출 */
function getBreadcrumbLabel(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length >= 2 && segments[0] === 'components') {
    return segments[1].charAt(0).toUpperCase() + segments[1].slice(1)
  }
  return 'Canvas'
}

export default function ComponentsShell() {
  const location = useLocation()
  const currentLabel = getBreadcrumbLabel(location.pathname)

  return (
    <div className="layout-shell">
      {/* ── Sidebar ── */}
      <aside className="layout-sidebar scrollbar-hide">
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
                      className={({ isActive }) =>
                        `sidebar-nav-item${isActive ? ' sidebar-nav-item--active' : ''}`}
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
          <button className="sidebar-footer-btn" type="button">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* ── Main Viewport ── */}
      <main className="layout-main-viewport">
        {/* ── Top App Bar ── */}
        <header className="layout-top-appbar">
          <div className="appbar-breadcrumb">
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
              <button className="appbar-action-btn" type="button">
                <span className="material-symbols-outlined">light_mode</span>
              </button>
              <button className="appbar-action-btn" type="button">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
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
            <Outlet />
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
          <PropertiesPanel />
        </div>
      </main>
    </div>
  )
}
