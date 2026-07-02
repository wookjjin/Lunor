import { Spacer } from '@/core/components/Spacer/Spacer'
import { Stack } from '@/core/components/Stack/Stack'
import { Badge } from '@/core/components/Badge/Badge'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'

/* =============================================================================
   SpacerPage — Glacier UI 스타일 Spacer 쇼케이스
   ============================================================================= */

export default function SpacerPage() {
  return (
    <Showcase
      title="Spacer"
      description="The spacer component injects flexible whitespace within flex layouts, pushing elements apart or creating explicit gaps."
      cols={3}
    >
      {/* Fixed Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" badge="5 sizes" className="glacier-glass">
        <Stack direction="row" gap="none" align="center">
          <Badge variant="solid" size="sm">A</Badge>
          <Spacer size="xs" />
          <Badge variant="solid" size="sm">B</Badge>
          <Spacer size="sm" />
          <Badge variant="solid" size="sm">C</Badge>
        </Stack>
        <Stack direction="row" gap="none" align="center">
          <Badge variant="secondary" size="sm">A</Badge>
          <Spacer size="md" />
          <Badge variant="secondary" size="sm">B</Badge>
          <Spacer size="lg" />
          <Badge variant="secondary" size="sm">C</Badge>
        </Stack>
        <Stack direction="row" gap="none" align="center">
          <Badge variant="ghost" size="sm">A</Badge>
          <Spacer size="xl" />
          <Badge variant="ghost" size="sm">B</Badge>
        </Stack>
      </ShowcaseItem>

      {/* Grow */}
      <ShowcaseItem label="Grow" variant="secondary" className="glacier-glass">
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <Badge variant="solid" size="sm">Left</Badge>
          <Spacer grow />
          <Badge variant="solid" size="sm">Right</Badge>
        </div>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <Badge variant="secondary" size="sm">A</Badge>
          <Spacer grow />
          <Badge variant="secondary" size="sm">B</Badge>
          <Spacer grow />
          <Badge variant="secondary" size="sm">C</Badge>
        </div>
      </ShowcaseItem>

      {/* Flex Value */}
      <ShowcaseItem label="Flex Value" variant="primary" className="glacier-glass">
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <Badge variant="ghost" size="sm">1</Badge>
          <Spacer flex={1} />
          <Badge variant="ghost" size="sm">2</Badge>
          <Spacer flex={2} />
          <Badge variant="ghost" size="sm">3</Badge>
        </div>
      </ShowcaseItem>

      {/* Vertical Stack */}
      <ShowcaseItem label="Vertical" variant="secondary" className="glacier-glass">
        <Stack direction="column" align="center">
          <Badge variant="solid" size="sm">Top</Badge>
          <Spacer size="md" />
          <Badge variant="solid" size="sm">Middle</Badge>
          <Spacer size="md" />
          <Badge variant="solid" size="sm">Bottom</Badge>
        </Stack>
      </ShowcaseItem>

      {/* In Action Bar */}
      <ShowcaseItem label="Action Bar" variant="ghost" className="glacier-glass">
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Badge variant="ghost" size="sm">Left Action</Badge>
          <Spacer grow />
          <Badge variant="ghost" size="sm">Center</Badge>
          <Spacer grow />
          <Badge variant="ghost" size="sm">Right</Badge>
        </div>
      </ShowcaseItem>

      {/* Shrink */}
      <ShowcaseItem label="Shrink" variant="ghost" className="glacier-glass">
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <Badge variant="solid" size="sm" style={{ flexShrink: 0 }}>No Shrink</Badge>
          <Spacer shrink />
          <Badge variant="solid" size="sm">Shrinkable</Badge>
        </div>
      </ShowcaseItem>
    </Showcase>
  )
}