import { Button } from '@/core/components/Button/Button'
import { Spinner } from '@/core/components/Spinner/Spinner'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   SpinnerPage — Glacier UI 스타일 Spinner 쇼케이스
   ============================================================================= */

export default function SpinnerPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'default') as SpinnerVariant
  const size = (props.size ?? 'md') as SpinnerSize
  const showLabel = Boolean(props.showLabel)

  return (
    <Showcase
      title="Spinner"
      description="The spinner component indicates loading states with an animated SVG ring, available in multiple sizes and semantic colors."
      cols={3}
    >
      {/* Variants */}
      <ShowcaseItem label="Variants" variant="primary" badge="5 colors" className="glacier-glass">
        <div className="showcase__row" style={{ justifyContent: 'space-around' }}>
          <Spinner variant="default" size={size} />
          <Spinner variant="primary" size={size} />
          <Spinner variant="danger" size={size} />
          <Spinner variant="success" size={size} />
          <Spinner variant="warning" size={size} />
        </div>
        <div className="showcase__row" style={{ justifyContent: 'space-around' }}>
          <Spinner variant="default" size={size} label="Default" />
          <Spinner variant="primary" size={size} label="Primary" />
        </div>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="secondary" className="glacier-glass">
        <div className="showcase__row" style={{ justifyContent: 'space-around', alignItems: 'center' }}>
          <Spinner variant={variant} size="sm" />
          <Spinner variant={variant} size="md" />
          <Spinner variant={variant} size="lg" />
        </div>
        <div className="showcase__row" style={{ justifyContent: 'space-around', alignItems: 'center' }}>
          <Spinner variant={variant} size="sm" label="16px" />
          <Spinner variant={variant} size="md" label="24px" />
          <Spinner variant={variant} size="lg" label="36px" />
        </div>
      </ShowcaseItem>

      {/* With Label */}
      <ShowcaseItem label="With Label" variant="primary" className="glacier-glass">
        <Spinner variant={variant} size={size} label={showLabel ? 'Loading...' : undefined} />
        <Spinner variant="primary" size={size} label="Fetching data..." />
        <Spinner variant="success" size={size} label="Saving..." />
      </ShowcaseItem>

      {/* Button Loading */}
      <ShowcaseItem label="Button Loading" variant="secondary" className="glacier-glass">
        <Button variant="solid" size="md" disabled>
          <Spinner variant="default" size="sm" />
          Submitting...
        </Button>
        <Button variant="danger" size="md" disabled>
          <Spinner variant="default" size="sm" />
          Deleting...
        </Button>
        <Button variant="ghost" size="md" disabled>
          <Spinner variant="primary" size="sm" />
          Syncing...
        </Button>
      </ShowcaseItem>

      {/* Inline */}
      <ShowcaseItem label="Inline" variant="ghost" className="glacier-glass">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Spinner variant="primary" size="sm" />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            Loading content...
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Spinner variant="success" size="sm" />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            Processing...
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <Spinner variant="warning" size="sm" />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            Almost there...
          </span>
        </div>
      </ShowcaseItem>

      {/* Full Page Demo */}
      <ShowcaseItem label="Centered" variant="ghost" className="glacier-glass">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '120px', gap: 'var(--space-3)' }}>
          <Spinner variant="primary" size="lg" />
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>
            Page is loading...
          </span>
        </div>
      </ShowcaseItem>
    </Showcase>
  )
}

type SpinnerVariant = 'default' | 'primary' | 'danger' | 'success' | 'warning'
type SpinnerSize = 'sm' | 'md' | 'lg'