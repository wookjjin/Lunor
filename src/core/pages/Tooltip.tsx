import { Button } from '@/core/components/Button/Button'
import { Icon } from '@/core/components/Icon/Icon'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Stack } from '@/core/components/Stack/Stack'
import { Tooltip } from '@/core/components/Tooltip/Tooltip'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   TooltipPage — Glacier UI 스타일 Tooltip 쇼케이스
   ============================================================================= */

export default function TooltipPage() {
  const { props } = usePlaygroundContext()
  const placement = (props.placement ?? 'top') as 'top' | 'bottom' | 'left' | 'right'

  return (
    <Showcase
      title="Tooltip"
      description="The tooltip component displays contextual information on hover or focus, with configurable placement and delay."
      cols={3}
    >
      {/* Playground */}
      <ShowcaseItem label="Playground" variant="primary" badge="Active" className="glacier-glass">
        <Tooltip content={`Tooltip on ${placement}`} placement={placement}>
          <Button variant="solid" size="md">Hover me</Button>
        </Tooltip>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          Use Properties panel to adjust placement.
        </span>
      </ShowcaseItem>

      {/* Placements */}
      <ShowcaseItem label="Placements" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="md" wrap justify="center" align="center">
          <Tooltip content="Top tooltip" placement="top">
            <Button variant="outline" size="sm">Top</Button>
          </Tooltip>
          <Tooltip content="Bottom tooltip" placement="bottom">
            <Button variant="outline" size="sm">Bottom</Button>
          </Tooltip>
          <Tooltip content="Left tooltip" placement="left">
            <Button variant="outline" size="sm">Left</Button>
          </Tooltip>
          <Tooltip content="Right tooltip" placement="right">
            <Button variant="outline" size="sm">Right</Button>
          </Tooltip>
        </Stack>
      </ShowcaseItem>

      {/* On Icon */}
      <ShowcaseItem label="On Icon" variant="ghost" className="glacier-glass">
        <Stack direction="row" gap="lg" justify="center" align="center">
          <Tooltip content="Delete item" placement="top">
            <button type="button" aria-label="Delete" className="icon-button-demo">
              <Icon name="delete" size="lg" />
            </button>
          </Tooltip>
          <Tooltip content="Add to favorites" placement="top">
            <button type="button" aria-label="Favorite" className="icon-button-demo">
              <Icon name="favorite" size="lg" />
            </button>
          </Tooltip>
          <Tooltip content="Share" placement="top">
            <button type="button" aria-label="Share" className="icon-button-demo">
              <Icon name="share" size="lg" />
            </button>
          </Tooltip>
        </Stack>
      </ShowcaseItem>

      {/* Rich Content */}
      <ShowcaseItem label="Rich Content" variant="primary" className="glacier-glass">
        <Tooltip
          content={(
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Icon name="info" size="sm" />
              Detailed information here
            </span>
          )}
          placement="bottom"
        >
          <Button variant="secondary" size="md">Rich tooltip</Button>
        </Tooltip>
      </ShowcaseItem>

      {/* Delay */}
      <ShowcaseItem label="Delay" variant="secondary" className="glacier-glass">
        <Stack direction="column" gap="sm" align="center">
          <Tooltip content="Instant (0ms)" placement="top" delay={0}>
            <Button variant="ghost" size="sm">No delay</Button>
          </Tooltip>
          <Tooltip content="500ms delay" placement="top" delay={500}>
            <Button variant="ghost" size="sm">500ms delay</Button>
          </Tooltip>
        </Stack>
      </ShowcaseItem>

      {/* Focusable */}
      <ShowcaseItem label="Focusable" variant="ghost" className="glacier-glass">
        <Tooltip content="Tooltip on focus too" placement="top">
          <Button variant="outline" size="md">Tab to me</Button>
        </Tooltip>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          Tab to focus — tooltip appears on focus.
        </span>
      </ShowcaseItem>
    </Showcase>
  )
}