import { Badge } from '@/core/components/Badge/Badge'
import { Stack } from '@/core/components/Stack/Stack'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   StackPage — Glacier UI 스타일 Stack 쇼케이스
   ============================================================================= */

export default function StackPage() {
  const { props } = usePlaygroundContext()
  const direction = (props.direction ?? 'column') as 'column' | 'row'
  const gap = (props.gap ?? 'md') as 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  const align = props.align as 'start' | 'center' | 'end' | 'stretch' | undefined
  const justify = props.justify as 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | undefined

  return (
    <Showcase
      title="Stack"
      description="The stack component is a flex layout helper that arranges children with configurable direction, gap, alignment, and justification."
      cols={3}
    >
      {/* Direction */}
      <ShowcaseItem label="Direction" variant="primary" badge="2 modes" className="glacier-glass">
        <Stack direction="column" gap="sm">
          <Badge variant="solid" size="sm">Item 1</Badge>
          <Badge variant="solid" size="sm">Item 2</Badge>
          <Badge variant="solid" size="sm">Item 3</Badge>
        </Stack>
        <Stack direction="row" gap="sm">
          <Badge variant="secondary" size="sm">A</Badge>
          <Badge variant="secondary" size="sm">B</Badge>
          <Badge variant="secondary" size="sm">C</Badge>
        </Stack>
      </ShowcaseItem>

      {/* Gap */}
      <ShowcaseItem label="Gap" variant="secondary" className="glacier-glass">
        <Stack direction="column" gap="none">
          <Badge variant="ghost" size="sm">gap: none</Badge>
          <Badge variant="ghost" size="sm">Item</Badge>
        </Stack>
        <Stack direction="column" gap="xs">
          <Badge variant="ghost" size="sm">gap: xs</Badge>
          <Badge variant="ghost" size="sm">Item</Badge>
        </Stack>
        <Stack direction="column" gap="lg">
          <Badge variant="ghost" size="sm">gap: lg</Badge>
          <Badge variant="ghost" size="sm">Item</Badge>
        </Stack>
      </ShowcaseItem>

      {/* Align */}
      <ShowcaseItem label="Align" variant="primary" className="glacier-glass">
        <Stack direction="row" gap="sm" align="start">
          <Badge variant="solid" size="sm">start</Badge>
          <Badge variant="solid" size="sm">item</Badge>
        </Stack>
        <Stack direction="row" gap="sm" align="center">
          <Badge variant="solid" size="sm">center</Badge>
          <Badge variant="solid" size="sm">item</Badge>
        </Stack>
        <Stack direction="row" gap="sm" align="end">
          <Badge variant="solid" size="sm">end</Badge>
          <Badge variant="solid" size="sm">item</Badge>
        </Stack>
      </ShowcaseItem>

      {/* Justify */}
      <ShowcaseItem label="Justify" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="sm" justify="between">
          <Badge variant="ghost" size="sm">A</Badge>
          <Badge variant="ghost" size="sm">B</Badge>
          <Badge variant="ghost" size="sm">C</Badge>
        </Stack>
        <Stack direction="row" gap="sm" justify="center">
          <Badge variant="ghost" size="sm">A</Badge>
          <Badge variant="ghost" size="sm">B</Badge>
        </Stack>
        <Stack direction="row" gap="sm" justify="end">
          <Badge variant="ghost" size="sm">A</Badge>
          <Badge variant="ghost" size="sm">B</Badge>
        </Stack>
      </ShowcaseItem>

      {/* Wrap */}
      <ShowcaseItem label="Wrap" variant="ghost" className="glacier-glass">
        <Stack direction="row" gap="sm" wrap>
          {Array.from({ length: 12 }).map((_, i) => (
            <Badge key={i} variant="solid" size="sm">{i + 1}</Badge>
          ))}
        </Stack>
      </ShowcaseItem>

      {/* Live Playground */}
      <ShowcaseItem label="Playground" variant="ghost" className="glacier-glass">
        <Stack direction={direction} gap={gap} align={align} justify={justify}>
          <Badge variant="primary" size="md">Item 1</Badge>
          <Badge variant="primary" size="md">Item 2</Badge>
          <Badge variant="primary" size="md">Item 3</Badge>
        </Stack>
      </ShowcaseItem>
    </Showcase>
  )
}