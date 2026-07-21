import { Icon } from '@/core/components/Icon/Icon'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   IconPage — Glacier UI 스타일 Icon 쇼케이스
   ============================================================================= */

const SAMPLE_ICONS = [
  'home',
  'search',
  'settings',
  'person',
  'notifications',
  'calendar_today',
  'mail',
  'favorite',
  'star',
  'download',
  'upload',
  'delete',
]

export default function IconPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg' | 'xl'
  const variant = (props.variant ?? 'default') as 'default' | 'primary' | 'secondary' | 'muted'

  return (
    <Showcase
      title="Icon"
      description="The icon component renders Material Symbols with consistent sizing, color variants, and accessibility support."
      cols={3}
    >
      {/* Playground */}
      <ShowcaseItem label="Playground" variant="primary" badge="Active" className="glacier-glass">
        <div className="showcase__row" style={{ gap: 'var(--space-3)' }}>
          {SAMPLE_ICONS.slice(0, 6).map(name => (
            <Icon key={name} name={name} size={size} variant={variant} />
          ))}
        </div>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          Use Properties panel to adjust size and variant.
        </span>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="secondary" className="glacier-glass">
        <div className="showcase__row" style={{ alignItems: 'center', gap: 'var(--space-3)' }}>
          <Icon name="home" size="sm" />
          <Icon name="home" size="md" />
          <Icon name="home" size="lg" />
          <Icon name="home" size="xl" />
        </div>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          sm · md · lg · xl
        </span>
      </ShowcaseItem>

      {/* Variants */}
      <ShowcaseItem label="Variants" variant="ghost" className="glacier-glass">
        <div className="showcase__row" style={{ gap: 'var(--space-3)' }}>
          <Icon name="star" variant="default" />
          <Icon name="star" variant="primary" />
          <Icon name="star" variant="secondary" />
          <Icon name="star" variant="muted" />
        </div>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          default · primary · secondary · muted
        </span>
      </ShowcaseItem>

      {/* Labeled (Accessible) */}
      <ShowcaseItem label="Accessible" variant="primary" className="glacier-glass">
        <div className="showcase__row" style={{ gap: 'var(--space-3)' }}>
          <Icon name="favorite" label="Like" size="lg" variant="primary" />
          <Icon name="bookmark" label="Save" size="lg" />
        </div>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          With label prop — role="img" + aria-label
        </span>
      </ShowcaseItem>

      {/* Gallery */}
      <ShowcaseItem label="Gallery" variant="secondary" className="glacier-glass">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--space-2)' }}>
          {SAMPLE_ICONS.map(name => (
            <Icon key={name} name={name} size={size} variant={variant} />
          ))}
        </div>
      </ShowcaseItem>

      {/* Decorative */}
      <ShowcaseItem label="Decorative" variant="ghost" className="glacier-glass">
        <div className="showcase__row" style={{ gap: 'var(--space-3)' }}>
          <Icon name="check_circle" size="xl" variant="primary" />
          <Icon name="error" size="xl" variant="primary" />
          <Icon name="warning" size="xl" variant="primary" />
        </div>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          aria-hidden="true" — 장식용
        </span>
      </ShowcaseItem>
    </Showcase>
  )
}