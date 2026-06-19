import { Button } from '@/core/components/Button/Button'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   ButtonPage — Glacier UI 스타일 Button 쇼케이스
   반응형 flex: 모바일 1열 → 태블릿 2열 → 와이드 4열
   ============================================================================= */

export default function ButtonPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const fullWidth = Boolean(props.fullWidth)
  const disabled = Boolean(props.disabled)
  const children = (props.children ?? 'Button') as string

  return (
    <Showcase
      title="Button"
      description="The button component is used to trigger actions or navigate through the application."
    >
      {/* Primary Variant */}
      <ShowcaseItem label="Primary" variant="primary" badge="Active" className="glacier-glass">
        <Button variant="solid" size={size} fullWidth={fullWidth} disabled={disabled}>
          {children}
        </Button>
        <div className="showcase__row">
          <Button variant="solid" size={size} fullWidth disabled>
            Disabled
          </Button>
          <Button variant="solid" size={size} fullWidth={fullWidth} disabled={disabled}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
            Icon
          </Button>
        </div>
      </ShowcaseItem>

      {/* Secondary Variant */}
      <ShowcaseItem label="Secondary" variant="secondary" className="glacier-glass">
        <Button variant="secondary" size={size} fullWidth={fullWidth} disabled={disabled}>
          Secondary Action
        </Button>
        <div className="showcase__row">
          <Button variant="secondary" size={size} fullWidth disabled>
            Disabled
          </Button>
          <Button variant="secondary" size={size} fullWidth={fullWidth} disabled={disabled}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>upload</span>
            Icon
          </Button>
        </div>
      </ShowcaseItem>

      {/* Ghost Variant */}
      <ShowcaseItem label="Ghost" variant="ghost" className="glacier-glass">
        <Button variant="ghost" size={size} fullWidth={fullWidth} disabled={disabled}>
          Ghost Action
        </Button>
        <div className="showcase__row">
          <Button variant="ghost" size={size} fullWidth disabled>
            Disabled
          </Button>
          <Button variant="ghost" size={size} fullWidth={fullWidth} disabled={disabled}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>link</span>
            Icon
          </Button>
        </div>
      </ShowcaseItem>

      {/* Danger Variant */}
      <ShowcaseItem label="Danger" variant="danger" className="glacier-glass">
        <Button variant="danger" size={size} fullWidth={fullWidth} disabled={disabled}>
          Delete Action
        </Button>
        <div className="showcase__row">
          <Button variant="danger" size={size} fullWidth disabled>
            Disabled
          </Button>
          <Button variant="danger" size={size} fullWidth={fullWidth} disabled={disabled}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
            Icon
          </Button>
        </div>
      </ShowcaseItem>
    </Showcase>
  )
}
