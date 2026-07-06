import { Divider } from '@/core/components/Divider/Divider'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   DividerPage — Glacier UI 스타일 Divider 쇼케이스
   ============================================================================= */

export default function DividerPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'default') as 'default' | 'subtle' | 'strong'
  const labelPosition = (props.labelPosition ?? 'center') as 'start' | 'center' | 'end'

  return (
    <Showcase
      title="Divider"
      description="The divider component separates content with horizontal or vertical lines, with optional label support."
      cols={3}
    >
      {/* Horizontal */}
      <ShowcaseItem label="Horizontal" variant="primary" badge="Active" className="glacier-glass">
        <Divider variant={variant} />
        <Divider variant="subtle" />
        <Divider variant="strong" />
      </ShowcaseItem>

      {/* With Label */}
      <ShowcaseItem label="With Label" variant="secondary" className="glacier-glass">
        <Divider variant={variant} label="Section 1" labelPosition={labelPosition} />
        <Divider variant={variant} label="Start" labelPosition="start" />
        <Divider variant={variant} label="End" labelPosition="end" />
      </ShowcaseItem>

      {/* Variants */}
      <ShowcaseItem label="Variants" variant="primary" className="glacier-glass">
        <Divider variant="default" label="default" />
        <Divider variant="subtle" label="subtle" />
        <Divider variant="strong" label="strong" />
      </ShowcaseItem>

      {/* Vertical */}
      <ShowcaseItem label="Vertical" variant="secondary" className="glacier-glass">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', height: '3rem' }}>
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Left</span>
          <Divider orientation="vertical" variant={variant} />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>Right</span>
        </div>
      </ShowcaseItem>

      {/* In Content */}
      <ShowcaseItem label="In Content" variant="ghost" className="glacier-glass">
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
          First section content goes here.
        </p>
        <Divider variant={variant} />
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
          Second section content follows the divider.
        </p>
      </ShowcaseItem>

      {/* Playground */}
      <ShowcaseItem label="Playground" variant="ghost" className="glacier-glass">
        <Divider variant={variant} label="Label" labelPosition={labelPosition} />
      </ShowcaseItem>
    </Showcase>
  )
}
