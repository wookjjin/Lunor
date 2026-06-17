import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useThemeStore } from '@/app/store/theme.store'
import { useThreeScene } from '@/core/hooks/useThreeScene'
import '@/core/pages/Home.css'

/* =============================================================================
   HomePage — Core UI 인터랙티브 랜딩 페이지
   Three.js 파티클 필드 + 크리스탈 3D 배경
   컴포넌트 쇼케이스 그리드 + Quick Start + Stats
   ============================================================================= */

/** 쇼케이스 카드 데이터 */
const COMPONENT_CARDS = [
  {
    title: 'Button',
    description: 'Versatile button variants for actions and navigation.',
    icon: 'smart_button',
    path: '/components/button',
  },
  {
    title: 'Input',
    description: 'Text input fields with validation and styling options.',
    icon: 'input',
    path: '/components/input',
  },
  {
    title: 'Dialog',
    description: 'Modal dialogs for confirmations and content overlays.',
    icon: 'chat_bubble',
    path: '/components/dialog',
  },
  {
    title: 'Dropdown',
    description: 'Dropdown menus for selection and contextual actions.',
    icon: 'arrow_drop_down',
    path: '/components/dropdown',
  },
  {
    title: 'Card',
    description: 'Content containers with glass and elevation variants.',
    icon: 'rectangle',
    path: '/components/card',
  },
  {
    title: 'Badge',
    description: 'Status indicators and count badges for labels.',
    icon: 'sell',
    path: '/components/badge',
  },
  {
    title: 'Table',
    description: 'Data tables with sorting, filtering, and pagination.',
    icon: 'table',
    path: '/components/table',
  },
  {
    title: 'Toast',
    description: 'Non-blocking notifications for status feedback.',
    icon: 'notification_important',
    path: '/components/toast',
  },
] as const

/** Stats 데이터 */
const STATS = [
  { number: '8+', label: 'Components' },
  { number: '50+', label: 'Tokens' },
  { number: '100%', label: 'Accessible' },
  { number: 'v1.0', label: 'Stable' },
] as const

const CODE_EXAMPLE = `import { Button } from '@/core/components/Button/Button'

function App() {
  return <Button variant="solid" size="md">Click me</Button>
}`

export default function HomePage() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [codeCopied, setCodeCopied] = useState(false)
  const theme = useThemeStore(state => state.theme)
  useThreeScene(canvasRef, { particleCount: 600, crystalSize: 1.2 })

  /** 카드 3D tilt 효과 (CSS transform) */
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

  return (
    <div className="home-page" key={theme}>
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
            Crafted for clarity, consistency, and delightful interactions.
          </p>
          <div className="home-hero-actions">
            <Link to="/components/button" className="home-cta-primary">
              <span className="material-symbols-outlined">explore</span>
              Explore Components
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="home-cta-secondary"
            >
              <span className="material-symbols-outlined">code</span>
              View Source
            </a>
          </div>
        </div>
        <div className="home-scroll-indicator">
          <div className="home-scroll-mouse" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ── Component Showcase ── */}
      <section className="home-showcase">
        <div className="home-showcase-header">
          <div className="home-showcase-label">
            <span className="material-symbols-outlined">deployed_code</span>
            Components
          </div>
          <h2 className="home-showcase-title">Everything You Need</h2>
          <p className="home-showcase-description">
            From buttons to complex data tables — every component is designed with
            accessibility, responsiveness, and the Glacier aesthetic in mind.
          </p>
        </div>
        <div className="home-card-grid">
          {COMPONENT_CARDS.map(card => (
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

      {/* ── Quick Start ── */}
      <section className="home-quickstart">
        <div className="home-quickstart-header">
          <h2 className="home-quickstart-title">Quick Start</h2>
          <p className="home-quickstart-description">
            Get up and running with Core UI in seconds. Import components and
            customize with design tokens.
          </p>
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
