import { Button } from '@/core/components/Button/Button'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   ButtonPage — Glacier UI 스타일 Button 쇼케이스
   ============================================================================= */

export default function ButtonPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'solid') as 'solid' | 'secondary' | 'ghost' | 'danger'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const fullWidth = Boolean(props.fullWidth)
  const disabled = Boolean(props.disabled)
  const children = (props.children ?? 'Button') as string

  return (
    <Showcase
      title="Button"
      description="The button component is used to trigger actions or navigate through the application."
      cols={3}
    >
      {/* Variants */}
      <ShowcaseItem label="Variants" variant="primary" badge="Active" className="glacier-glass">
        <Button variant="solid" size={size} fullWidth={fullWidth} disabled={disabled}>
          {children}
        </Button>
        <Button variant="secondary" size={size} fullWidth={fullWidth} disabled={disabled}>
          Secondary
        </Button>
        <Button variant="ghost" size={size} fullWidth={fullWidth} disabled={disabled}>
          Ghost
        </Button>
        <Button variant="danger" size={size} fullWidth={fullWidth} disabled={disabled}>
          Danger
        </Button>
      </ShowcaseItem>

      {/* Playground */}
      <ShowcaseItem label="Playground" variant="secondary" className="glacier-glass">
        <Button variant={variant} size={size} fullWidth={fullWidth} disabled={disabled}>
          {children}
        </Button>
        <Button variant={variant} size={size} fullWidth disabled>
          Disabled
        </Button>
      </ShowcaseItem>

      {/* With Icon */}
      <ShowcaseItem label="With Icon" variant="primary" className="glacier-glass">
        <Button variant={variant} size={size} icon="download" disabled={disabled}>
          Download
        </Button>
        <Button variant={variant} size={size} icon="upload" disabled={disabled}>
          Upload
        </Button>
        <Button variant={variant} size={size} iconRight="arrow_forward" disabled={disabled}>
          Next
        </Button>
        <Button variant={variant} size={size} icon="delete" iconRight="close" disabled={disabled}>
          Both
        </Button>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="secondary" className="glacier-glass">
        <Button variant={variant} size="sm" disabled={disabled}>
          Small
        </Button>
        <Button variant={variant} size="md" disabled={disabled}>
          Medium
        </Button>
        <Button variant={variant} size="lg" disabled={disabled}>
          Large
        </Button>
      </ShowcaseItem>

      {/* Full Width */}
      <ShowcaseItem label="Full Width" variant="ghost" className="glacier-glass">
        <Button variant={variant} size={size} fullWidth disabled={disabled}>
          Full Width Button
        </Button>
        <Button variant={variant} size={size} fullWidth icon="rocket_launch" disabled={disabled}>
          Launch
        </Button>
      </ShowcaseItem>

      {/* States */}
      <ShowcaseItem label="States" variant="ghost" className="glacier-glass">
        <Button variant={variant} size={size}>
          Default
        </Button>
        <Button variant={variant} size={size} disabled>
          Disabled
        </Button>
        <Button variant={variant} size={size} icon="check" iconRight="expand_more">
          With Icons
        </Button>
      </ShowcaseItem>
    </Showcase>
  )
}