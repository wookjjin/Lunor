import { Button } from '@/core/components/Button/Button'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   ButtonPage — Glacier UI 스타일 Button 쇼케이스
   반응형 그리드: 모바일 1열 → 태블릿 2열 → 데스크톱 3열
   ============================================================================= */

export default function ButtonPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const fullWidth = Boolean(props.fullWidth)
  const disabled = Boolean(props.disabled)
  const children = (props.children ?? 'Button') as string

  return (
    <div className="showcase-container">
      {/* 페이지 헤더 */}
      <header className="showcase-header">
        <h2 className="showcase-title">Button</h2>
        <p className="showcase-description">
          The button component is used to trigger actions or navigate through the application.
        </p>
      </header>

      {/* 반응형 그리드 쇼케이스 */}
      <div className="showcase-grid">
        {/* Primary Variant */}
        <section className="showcase-card glacier-glass">
          <div className="showcase-card-header">
            <h3 className="showcase-card-label showcase-card-label--primary">Primary</h3>
            <span className="showcase-badge showcase-badge--primary">Active</span>
          </div>
          <div className="showcase-card-body">
            <Button variant="solid" size={size} fullWidth={fullWidth} disabled={disabled}>
              {children}
            </Button>
            <div className="showcase-row">
              <Button variant="solid" size={size} fullWidth disabled>
                Disabled
              </Button>
              <Button variant="solid" size={size} fullWidth={fullWidth} disabled={disabled}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                Icon
              </Button>
            </div>
          </div>
        </section>

        {/* Secondary Variant */}
        <section className="showcase-card glacier-glass">
          <div className="showcase-card-header">
            <h3 className="showcase-card-label showcase-card-label--secondary">Secondary</h3>
          </div>
          <div className="showcase-card-body">
            <Button variant="secondary" size={size} fullWidth={fullWidth} disabled={disabled}>
              Secondary Action
            </Button>
            <div className="showcase-row">
              <Button variant="secondary" size={size} fullWidth disabled>
                Disabled
              </Button>
              <Button variant="secondary" size={size} fullWidth={fullWidth} disabled={disabled}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>upload</span>
                Icon
              </Button>
            </div>
          </div>
        </section>

        {/* Ghost Variant */}
        <section className="showcase-card glacier-glass">
          <div className="showcase-card-header">
            <h3 className="showcase-card-label showcase-card-label--ghost">Ghost</h3>
          </div>
          <div className="showcase-card-body">
            <Button variant="ghost" size={size} fullWidth={fullWidth} disabled={disabled}>
              Ghost Action
            </Button>
            <div className="showcase-row">
              <Button variant="ghost" size={size} fullWidth disabled>
                Disabled
              </Button>
              <Button variant="ghost" size={size} fullWidth={fullWidth} disabled={disabled}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>link</span>
                Icon
              </Button>
            </div>
          </div>
        </section>

        {/* Danger Variant */}
        <section className="showcase-card glacier-glass">
          <div className="showcase-card-header">
            <h3 className="showcase-card-label showcase-card-label--danger">Danger</h3>
          </div>
          <div className="showcase-card-body">
            <Button variant="danger" size={size} fullWidth={fullWidth} disabled={disabled}>
              Delete Action
            </Button>
            <div className="showcase-row">
              <Button variant="danger" size={size} fullWidth disabled>
                Disabled
              </Button>
              <Button variant="danger" size={size} fullWidth={fullWidth} disabled={disabled}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                Icon
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* 인터랙티비티 프리뷰 */}
      <div className="showcase-preview">
        <div className="showcase-preview-gradient" />
        <div className="showcase-preview-content">
          <p className="showcase-preview-label">Interactivity Preview</p>
          <p className="showcase-preview-text">Real-time state monitoring active</p>
        </div>
      </div>
    </div>
  )
}
