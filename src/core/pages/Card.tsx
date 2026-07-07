import { Badge } from '@/core/components/Badge/Badge'
import { Button } from '@/core/components/Button/Button'
import { Card } from '@/core/components/Card/Card'
import { Stack } from '@/core/components/Stack/Stack'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   CardPage — Glacier UI 스타일 Card 쇼케이스
   ============================================================================= */

export default function CardPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'default') as 'default' | 'outlined' | 'elevated'
  const padding = (props.padding ?? 'md') as 'none' | 'sm' | 'md' | 'lg'
  const children = (props.children ?? 'Card content') as string

  return (
    <Showcase
      title="Card"
      description="The card component is a flexible container used to group related content and actions."
      cols={3}
    >
      {/* Variants */}
      <ShowcaseItem label="Variants" variant="primary" badge="Active" className="glacier-glass">
        <Card variant="default" padding={padding}>{children}</Card>
        <Card variant="outlined" padding={padding}>Outlined card</Card>
        <Card variant="elevated" padding={padding}>Elevated card</Card>
      </ShowcaseItem>

      {/* Playground */}
      <ShowcaseItem label="Playground" variant="secondary" className="glacier-glass">
        <Card variant={variant} padding={padding}>{children}</Card>
      </ShowcaseItem>

      {/* With Content */}
      <ShowcaseItem label="With Content" variant="primary" className="glacier-glass">
        <Card variant={variant} padding={padding}>
          <Stack direction="column" gap="sm">
            <strong style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)' }}>Card Title</strong>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              Description text with secondary color for readability.
            </span>
          </Stack>
        </Card>
      </ShowcaseItem>

      {/* With Badge */}
      <ShowcaseItem label="With Badge" variant="secondary" className="glacier-glass">
        <Card variant={variant} padding={padding}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <span style={{ fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', flex: 1 }}>Status</span>
            <Badge variant="success" size="sm" icon="check_circle">Active</Badge>
          </div>
        </Card>
      </ShowcaseItem>

      {/* With Action */}
      <ShowcaseItem label="With Action" variant="ghost" className="glacier-glass">
        <Card variant={variant} padding={padding}>
          <Stack direction="column" gap="md">
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              Card with action buttons.
            </span>
            <Stack direction="row" gap="sm" justify="end">
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button variant="solid" size="sm" icon="save">Save</Button>
            </Stack>
          </Stack>
        </Card>
      </ShowcaseItem>

      {/* Padding */}
      <ShowcaseItem label="Padding" variant="ghost" className="glacier-glass">
        <Card variant={variant} padding="none">No padding</Card>
        <Card variant={variant} padding="sm">Small padding</Card>
        <Card variant={variant} padding="md">Medium padding</Card>
        <Card variant={variant} padding="lg">Large padding</Card>
      </ShowcaseItem>
    </Showcase>
  )
}