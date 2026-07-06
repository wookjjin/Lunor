import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useThreeScene } from '@/core/hooks/useThreeScene'
import '@/core/styles/pages/Home.css'

/* =============================================================================
   HomePage — Core UI 대시보드형 랜딩 페이지
   Three.js Hero + 카테고리 허브 + Featured + Design Tokens + Quick Start + Stats
   ============================================================================= */

/* ── 카테고리 허브 데이터 ── */
const CATEGORY_HUBS = [
  {
    label: 'Foundation',
    icon: 'palette',
    description: 'Colors, Typography, Shadows, Layout',
    count: 7,
    path: '/components/colors',
  },
  {
    label: 'Components',
    icon: 'widgets',
    description: 'Button, Input, Table, Dropdown, Card...',
    count: 16,
    path: '/components/button',
  },
  {
    label: 'Feedback',
    icon: 'feedback',
    description: 'Toast, Spinner, Skeleton, Alert, ProgressBar',
    count: 5,
    path: '/components/toast',
  },
  {
    label: 'Navigation',
    icon: 'navigation',
    description: 'Breadcrumb, MenuItem',
    count: 2,
    path: '/components/breadcrumb',
  },
  {
    label: 'Overlays',
    icon: 'layers',
    description: 'Dialog, ConfirmDialog, Popover, Drawer',
    count: 4,
    path: '/components/dialog',
  },
  {
    label: 'Hooks',
    icon: 'bolt',
    description: 'useClickOutside, useEscapeKey, useFocusTrap...',
    count: 6,
    path: '/components/hooks',
  },
] as const

/* ── Featured 컴포넌트 ── */
const FEATURED = [
  {
    title: 'Drawer',
    description: 'Slide-in panel with 4 directions and overlay.',
    icon: 'dock_to_right',
    path: '/components/drawer',
  },
  {
    title: 'ConfirmDialog',
    description: 'Focused confirmation with variant icons.',
    icon: 'check_circle',
    path: '/components/confirm-dialog',
  },
  {
    title: 'Popover',
    description: 'Non-modal floating content with placement.',
    icon: 'sticky_note_2',
    path: '/components/popover',
  },
  {
    title: 'Accordion',
    description: 'Collapsible sections with single/multiple mode.',
    icon: 'expand_more',
    path: '/components/accordion',
  },
  {
    title: 'Tabs',
    description: 'Tab navigation with 3 visual variants.',
    icon: 'tab',
    path: '/components/tabs',
  },
  {
    title: 'Chip',
    description: 'Removable tags with selected and icon states.',
    icon: 'label',
    path: '/components/chip',
  },
  {
    title: 'Avatar',
    description: 'Profile images with fallback and ring.',
    icon: 'account_circle',
    path: '/components/avatar',
  },
  {
    title: 'List',
    description: 'Styled lists with nav, icon, and density.',
    icon: 'list',
    path: '/components/list',
  },
] as const

/* ── Stats ── */
const STATS = [
  { number: '46', label: 'Components' },
  { number: '6', label: 'Hooks' },
  { number: '29', label: 'Playground Props' },
  { number: '100%', label: 'Accessible' },
] as const

const CODE_INSTALL = `# Install
pnpm add @lunor/core

# or with npm
npm install @lunor/core`

const CODE_EXAMPLE = `import { Button } from '@/core/components/Button/Button'
import { Dialog } from '@/core/components/Dialog/Dialog'

function App() {
  return (
    <Button variant="solid" size="md" icon="rocket_launch">
      Launch
    </Button>
  )
}`

export default function HomePage() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [codeCopied, setCodeCopied] = useState(false)
  const [installCopied, setInstallCopied] = useState(false)
  useThreeScene(canvasRef, { particleCount: 600, crystalSize: 1.2 })

  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
  }, [])

  const handleCardMouseLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)'
  }, [])

  const handleCopyCode = useCallback(() => {
    navigator.clipboard.writeText(CODE_EXAMPLE)
    setCodeCopied(true)
    setTimeout(setCodeCopied, 2000, false)
  }, [])

  const handleCopyInstall = useCallback(() => {
    navigator.clipboard.writeText(CODE_INSTALL)
    setInstallCopied(true)
    setTimeout(setInstallCopied, 2000, false)
  }, [])

  return (
    <div className="home-page">
      {/* ── Hero Section ── */}
      <section className="home-hero">
        <div className="home-hero-canvas" ref={canvasRef} aria-hidden="true" />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <div className="home-hero-badge">
            <span className="home-hero-badge-dot" />
            Glacier Design System v1.0
          </div>
          <h1 className="home-hero-title">
            Build with
            {' '}
            <span className="home-hero-title-accent">Core UI</span>
          </h1>
          <p className="home-hero-subtitle">
            A modern, accessible component library built on the Glacier Design System.
            46 components · 6 hooks · 29 playground props — crafted for clarity, consistency,
            and delightful interactions.
          </p>
          <div className="home-hero-actions">
            <Link to="/components/colors" className="home-cta-primary">
              <span className="material-symbols-outlined">explore</span>
              Explore Foundation
            </Link>
            <Link to="/components/button" className="home-cta-secondary">
              <span className="material-symbols-outlined">widgets</span>
              Browse Components
            </Link>
          </div>
        </div>
        <div className="home-scroll-indicator">
          <div className="home-scroll-mouse" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── Category Hub ── */}
      <section className="home-section">
        <div className="home-section-header">
          <div className="home-section-label">
            <span className="material-symbols-outlined">hub</span>
            Categories
          </div>
          <h2 className="home-section-title">Explore by Category</h2>
          <p className="home-section-description">
            Six organized groups covering everything from foundation tokens to interactive overlays.
          </p>
        </div>
        <div className="home-hub-grid">
          {CATEGORY_HUBS.map(hub => (
            <Link
              key={hub.label}
              to={hub.path}
              className="home-hub-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="home-hub-icon">
                <span className="material-symbols-outlined">{hub.icon}</span>
              </div>
              <div className="home-hub-body">
                <div className="home-hub-header">
                  <h3 className="home-hub-title">{hub.label}</h3>
                  <span className="home-hub-count">{hub.count}</span>
                </div>
                <p className="home-hub-description">{hub.description}</p>
              </div>
              <div className="home-hub-arrow">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Components ── */}
      <section className="home-section">
        <div className="home-section-header">
          <div className="home-section-label">
            <span className="material-symbols-outlined">auto_awesome</span>
            Featured
          </div>
          <h2 className="home-section-title">Recently Added</h2>
          <p className="home-section-description">
            Highlighting the latest components added to the Glacier UI system.
          </p>
        </div>
        <div className="home-card-grid">
          {FEATURED.map(card => (
            <Link
              key={card.title}
              to={card.path}
              className="home-card"
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            >
              <div className="home-card-icon">
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <div className="home-card-body">
                <h3 className="home-card-title">{card.title}</h3>
                <p className="home-card-description">{card.description}</p>
              </div>
              <div className="home-card-arrow">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Design Tokens Preview ── */}
      <section className="home-section">
        <div className="home-section-header">
          <div className="home-section-label">
            <span className="material-symbols-outlined">currency_exchange</span>
            Design Tokens
          </div>
          <h2 className="home-section-title">Foundation System</h2>
          <p className="home-section-description">
            The Glacier Design System is built on CSS custom properties for full theming support.
          </p>
        </div>
        <div className="home-tokens-grid">
          {/* Colors */}
          <Link to="/components/colors" className="home-token-card">
            <div className="home-token-preview home-token-preview--colors">
              <div className="home-token-swatch" style={{ background: 'var(--color-interactive-default)' }} />
              <div className="home-token-swatch" style={{ background: 'var(--color-primary-400)' }} />
              <div className="home-token-swatch" style={{ background: 'var(--color-success-text)' }} />
              <div className="home-token-swatch" style={{ background: 'var(--color-warning-text)' }} />
              <div className="home-token-swatch" style={{ background: 'var(--color-danger-text)' }} />
            </div>
            <div className="home-token-body">
              <span className="material-symbols-outlined home-token-icon">palette</span>
              <div>
                <h3 className="home-token-title">Colors</h3>
                <p className="home-token-description">Primitive scales + semantic aliases</p>
              </div>
            </div>
          </Link>

          {/* Typography */}
          <Link to="/components/typography" className="home-token-card">
            <div className="home-token-preview home-token-preview--typography">
              <span style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-bold)', lineHeight: 'var(--line-height-tight)' }}>
                Aa
              </span>
              <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-regular)', color: 'var(--color-text-tertiary)' }}>
                The quick brown fox
              </span>
            </div>
            <div className="home-token-body">
              <span className="material-symbols-outlined home-token-icon">title</span>
              <div>
                <h3 className="home-token-title">Typography</h3>
                <p className="home-token-description">11 font sizes · 6 weights · 15 text styles</p>
              </div>
            </div>
          </Link>

          {/* Shadows */}
          <Link to="/components/shadows" className="home-token-card">
            <div className="home-token-preview home-token-preview--shadows">
              <div className="home-token-shadow-box" style={{ boxShadow: 'var(--shadow-xs)' }} />
              <div className="home-token-shadow-box" style={{ boxShadow: 'var(--shadow-md)' }} />
              <div className="home-token-shadow-box" style={{ boxShadow: 'var(--shadow-2xl)' }} />
            </div>
            <div className="home-token-body">
              <span className="material-symbols-outlined home-token-icon">layers</span>
              <div>
                <h3 className="home-token-title">Shadows</h3>
                <p className="home-token-description">7 elevation levels · 4 focus rings</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Quick Start ── */}
      <section className="home-quickstart">
        <div className="home-quickstart-header">
          <h2 className="home-quickstart-title">Quick Start</h2>
          <p className="home-quickstart-description">
            Get up and running with Core UI in seconds. Import components and
            customize with design tokens.
          </p>
        </div>
        <div className="home-code-blocks">
          <div className="home-code-block">
            <button
              type="button"
              className="home-code-copy-btn"
              aria-label="Copy install command"
              onClick={handleCopyInstall}
            >
              <span className="material-symbols-outlined">
                {installCopied ? 'check' : 'content_copy'}
              </span>
            </button>
            <pre>
              <code>{CODE_INSTALL}</code>
            </pre>
          </div>
          <div className="home-code-block">
            <button
              type="button"
              className="home-code-copy-btn"
              aria-label="Copy code"
              onClick={handleCopyCode}
            >
              <span className="material-symbols-outlined">
                {codeCopied ? 'check' : 'content_copy'}
              </span>
            </button>
            <pre>
              <code>{CODE_EXAMPLE}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="home-stats">
        {STATS.map(stat => (
          <div key={stat.label} className="home-stat-item">
            <span className="home-stat-number">{stat.number}</span>
            <span className="home-stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* ── Footer ── */}
      <footer className="home-footer">
        <p>
          Core UI — Glacier Design System
          {' · '}
          Built with React & Three.js
        </p>
      </footer>
    </div>
  )
}
