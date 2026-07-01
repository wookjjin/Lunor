import { useState } from 'react'
import { Radio, RadioGroup } from '@/core/components/Radio/Radio'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   RadioPage — Glacier UI 스타일 Radio 쇼케이스
   ============================================================================= */

export default function RadioPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const variant = (props.variant ?? 'default') as 'default' | 'card'
  const orientation = (props.orientation ?? 'vertical') as 'vertical' | 'horizontal'

  const [selected, setSelected] = useState('free')

  return (
    <Showcase
      title="Radio"
      description="The radio component allows users to select a single option from a set of mutually exclusive choices."
      cols={3}
    >
      {/* Default Variant */}
      <ShowcaseItem label="Default" variant="primary" badge="Active" className="glacier-glass">
        <RadioGroup name="default-group" defaultValue="pro" orientation={orientation}>
          <Radio value="free" variant={variant} size={size} label="Free" description="Basic features" />
          <Radio value="pro" variant={variant} size={size} label="Pro" description="Advanced features" />
          <Radio value="team" variant={variant} size={size} label="Team" disabled />
        </RadioGroup>
      </ShowcaseItem>

      {/* Card Variant */}
      <ShowcaseItem label="Card" variant="secondary" className="glacier-glass">
        <RadioGroup name="card-group" defaultValue="monthly" orientation={orientation}>
          <Radio value="monthly" variant="card" size={size} label="Monthly" description="$10/month" />
          <Radio value="yearly" variant="card" size={size} label="Yearly" description="$100/year" />
          <Radio value="lifetime" variant="card" size={size} label="Lifetime" description="$500 once" disabled />
        </RadioGroup>
      </ShowcaseItem>

      {/* Horizontal Orientation */}
      <ShowcaseItem label="Horizontal" variant="ghost" className="glacier-glass">
        <RadioGroup name="horizontal-group" defaultValue="center" orientation="horizontal">
          <Radio value="left" variant={variant} size={size} label="Left" />
          <Radio value="center" variant={variant} size={size} label="Center" />
          <Radio value="right" variant={variant} size={size} label="Right" />
        </RadioGroup>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" className="glacier-glass">
        <RadioGroup name="size-group" defaultValue="md" orientation="vertical">
          <Radio value="sm" variant={variant} size="sm" label="Small" />
          <Radio value="md" variant={variant} size="md" label="Medium" />
          <Radio value="lg" variant={variant} size="lg" label="Large" />
        </RadioGroup>
      </ShowcaseItem>

      {/* Controlled */}
      <ShowcaseItem label="Controlled" variant="secondary" className="glacier-glass">
        <RadioGroup
          name="controlled-group"
          value={selected}
          onValueChange={setSelected}
          orientation={orientation}
        >
          <Radio value="free" variant={variant} size={size} label="Free" />
          <Radio value="pro" variant={variant} size={size} label="Pro" />
          <Radio value="enterprise" variant={variant} size={size} label="Enterprise" />
        </RadioGroup>
        <div className="showcase__row">
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            Selected: {selected}
          </span>
        </div>
      </ShowcaseItem>

      {/* No Label */}
      <ShowcaseItem label="No Label" variant="ghost" className="glacier-glass">
        <RadioGroup name="nolabel-group" defaultValue="b" orientation="horizontal">
          <Radio value="a" variant={variant} size={size} />
          <Radio value="b" variant={variant} size={size} />
          <Radio value="c" variant={variant} size={size} />
        </RadioGroup>
      </ShowcaseItem>
    </Showcase>
  )
}