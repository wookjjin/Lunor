import { Container } from '@/core/components/Container/Container'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'

/* =============================================================================
   ContainerPage — Glacier UI 스타일 Container 쇼케이스
   ============================================================================= */

export default function ContainerPage() {
  return (
    <Showcase
      title="Container"
      description="The container component constrains content to a maximum width and centers it, providing consistent layout spacing across breakpoints."
      cols={3}
    >
      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" badge="5 widths" className="glacier-glass">
        {(['sm', 'md', 'lg', 'xl', 'full'] as const).map(size => (
          <Container key={size} size={size} padding="sm" className="container-demo">
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
              {size.toUpperCase()}
              {' '}
              — max-width
            </span>
          </Container>
        ))}
      </ShowcaseItem>

      {/* Padding */}
      <ShowcaseItem label="Padding" variant="secondary" className="glacier-glass">
        {(['none', 'sm', 'md', 'lg'] as const).map(pad => (
          <Container key={pad} size="sm" padding={pad} className="container-demo">
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
              padding:
              {' '}
              {pad}
            </span>
          </Container>
        ))}
      </ShowcaseItem>

      {/* Centered */}
      <ShowcaseItem label="Centered" variant="primary" className="glacier-glass">
        <Container size="sm" padding="md" centered className="container-demo">
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            margin: 0 auto (centered)
          </span>
        </Container>
        <Container size="sm" padding="md" centered={false} className="container-demo">
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            centered=false (left aligned)
          </span>
        </Container>
      </ShowcaseItem>

      {/* Content Demo */}
      <ShowcaseItem label="Content Demo" variant="ghost" className="glacier-glass">
        <Container size="md" padding="md" className="container-demo">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>
              Page Content
            </span>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
              This container constrains content width and applies horizontal padding.
            </span>
          </div>
        </Container>
      </ShowcaseItem>

      {/* Full Width */}
      <ShowcaseItem label="Full Width" variant="ghost" className="glacier-glass">
        <Container size="full" padding="md" className="container-demo">
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            max-width: 100% — no constraint
          </span>
        </Container>
      </ShowcaseItem>

      {/* Comparison */}
      <ShowcaseItem label="Comparison" variant="ghost" className="glacier-glass">
        <Container size="sm" padding="sm" className="container-demo container-demo--sm">
          <span style={{ fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>SM (640px)</span>
        </Container>
        <Container size="md" padding="sm" className="container-demo container-demo--md">
          <span style={{ fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>MD (896px)</span>
        </Container>
        <Container size="lg" padding="sm" className="container-demo container-demo--lg">
          <span style={{ fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>LG (1152px)</span>
        </Container>
        <Container size="xl" padding="sm" className="container-demo container-demo--xl">
          <span style={{ fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>XL (1280px)</span>
        </Container>
      </ShowcaseItem>
    </Showcase>
  )
}
