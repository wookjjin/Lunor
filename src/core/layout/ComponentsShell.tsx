import { NavLink, Outlet } from 'react-router'
import PropertiesPanel from './PropertiesPanel'
import { sidebarNavItems } from './sidebarNav'

/* =============================================================================
   ComponentsShell — Storybook 스타일 Core 컴포넌트 레이아웃
   사이드바 + 앱바 + 워크스페이스(Outlet) + 속성 패널 구조
   ============================================================================= */

export default function ComponentsShell() {
  return (
    <>
      {/* ── Sidebar ── */}
      <aside className="layout-sidebar glacier-glass scrollbar-hide">
        <h2 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', opacity: 0.5, marginBottom: '1rem' }}>
          Components
        </h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {sidebarNavItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                textDecoration: 'none',
                color: isActive ? 'rgba(125, 211, 252, 1)' : 'rgba(224, 232, 240, 0.7)',
                backgroundColor: isActive ? 'rgba(125, 211, 252, 0.1)' : 'transparent',
                transition: 'background-color 0.15s, color 0.15s',
              })}
            >
              {item.icon && (
                <span className="material-symbols-outlined">{item.icon}</span>
              )}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* ── Main Viewport ── */}
      <main className="layout-main-viewport">
        {/* ── Top App Bar ── */}
        <header className="layout-top-appbar glacier-glass">
          <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>
            Glacier UI
          </span>
          <span style={{ fontSize: '0.75rem', opacity: 0.4 }}>
            Core Components
          </span>
        </header>

        {/* ── Workspace: Canvas + Properties Panel ── */}
        <div className="layout-workspace">
          <div className="layout-canvas-area canvas-dots">
            <Outlet />
          </div>
          <PropertiesPanel />
        </div>
      </main>
    </>
  )
}
