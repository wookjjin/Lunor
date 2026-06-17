import { Input } from '@/core/components/Input/Input'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   InputPage — Glacier UI 스타일 Input 쇼케이스
   반응형 그리드: 모바일 1열 → 태블릿 2열 → 데스크톱 3열
   ============================================================================= */

export default function InputPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'outline') as 'outline' | 'filled'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const invalid = Boolean(props.invalid)
  const disabled = Boolean(props.disabled)
  const placeholder = (props.placeholder ?? 'Enter text...') as string
  const fullWidth = Boolean(props.fullWidth)

  return (
    <div className="showcase-container">
      {/* 페이지 헤더 */}
      <header className="showcase-header">
        <h2 className="showcase-title">Input</h2>
        <p className="showcase-description">
          The input component allows users to enter and edit text within a form or standalone context.
        </p>
      </header>

      {/* 반응형 그리드 쇼케이스 */}
      <div className="showcase-grid">
        {/* Outline Variant */}
        <section className="showcase-card glacier-glass">
          <div className="showcase-card-header">
            <h3 className="showcase-card-label showcase-card-label--primary">Outline</h3>
            <span className="showcase-badge showcase-badge--primary">Active</span>
          </div>
          <div className="showcase-card-body">
            <Input
              variant="outline"
              size={size}
              invalid={invalid}
              disabled={disabled}
              placeholder={placeholder}
              fullWidth={fullWidth}
            />
            <div className="showcase-row">
              <Input
                variant="outline"
                size={size}
                placeholder={placeholder}
                fullWidth
                disabled
              />
              <Input
                variant="outline"
                size={size}
                invalid
                placeholder="Error state"
                fullWidth={fullWidth}
              />
            </div>
          </div>
        </section>

        {/* Filled Variant */}
        <section className="showcase-card glacier-glass">
          <div className="showcase-card-header">
            <h3 className="showcase-card-label showcase-card-label--secondary">Filled</h3>
          </div>
          <div className="showcase-card-body">
            <Input
              variant="filled"
              size={size}
              invalid={invalid}
              disabled={disabled}
              placeholder={placeholder}
              fullWidth={fullWidth}
            />
            <div className="showcase-row">
              <Input
                variant="filled"
                size={size}
                placeholder={placeholder}
                fullWidth
                disabled
              />
              <Input
                variant="filled"
                size={size}
                invalid
                placeholder="Error state"
                fullWidth={fullWidth}
              />
            </div>
          </div>
        </section>

        {/* Sizes Showcase */}
        <section className="showcase-card glacier-glass">
          <div className="showcase-card-header">
            <h3 className="showcase-card-label showcase-card-label--ghost">Sizes</h3>
          </div>
          <div className="showcase-card-body">
            <Input
              variant={variant}
              size="sm"
              invalid={invalid}
              disabled={disabled}
              placeholder="Small input"
              fullWidth={fullWidth}
            />
            <Input
              variant={variant}
              size="md"
              invalid={invalid}
              disabled={disabled}
              placeholder="Medium input"
              fullWidth={fullWidth}
            />
            <Input
              variant={variant}
              size="lg"
              invalid={invalid}
              disabled={disabled}
              placeholder="Large input"
              fullWidth={fullWidth}
            />
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
