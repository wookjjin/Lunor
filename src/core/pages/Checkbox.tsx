import { useState } from 'react'
import { Checkbox } from '@/core/components/Checkbox/Checkbox'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   CheckboxPage — Glacier UI 스타일 Checkbox 쇼케이스
   ============================================================================= */

export default function CheckboxPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const variant = (props.variant ?? 'default') as 'default' | 'card'
  const label = (props.label ?? 'Accept terms') as string
  const description = (props.description ?? 'You agree to our Terms of Service') as string

  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)
  const [indeterminate, setIndeterminate] = useState(true)

  return (
    <Showcase
      title="Checkbox"
      description="The checkbox component allows users to select one or more items from a set, or toggle a binary state."
      cols={3}
    >
      {/* Default Variant */}
      <ShowcaseItem label="Default" variant="primary" badge="Active" className="glacier-glass">
        <Checkbox
          variant={variant}
          size={size}
          checked={checked1}
          label={label}
          description={description}
          onChange={() => setChecked1(!checked1)}
        />
        <div className="showcase__row">
          <Checkbox variant={variant} size={size} label="Unchecked" />
          <Checkbox variant={variant} size={size} disabled label="Disabled" />
        </div>
      </ShowcaseItem>

      {/* Indeterminate */}
      <ShowcaseItem label="Indeterminate" variant="secondary" className="glacier-glass">
        <Checkbox
          variant={variant}
          size={size}
          indeterminate={indeterminate}
          label="Select all"
          description="Some items are selected"
          onChange={() => setIndeterminate(!indeterminate)}
        />
        <div className="showcase__row">
          <Checkbox variant={variant} size={size} indeterminate label="Indeterminate" />
          <Checkbox variant={variant} size={size} indeterminate disabled label="Disabled" />
        </div>
      </ShowcaseItem>

      {/* Card Variant */}
      <ShowcaseItem label="Card" variant="ghost" className="glacier-glass">
        <Checkbox
          variant="card"
          size={size}
          checked={checked2}
          label={label}
          description={description}
          onChange={() => setChecked2(!checked2)}
        />
        <div className="showcase__row">
          <Checkbox variant="card" size={size} label="Unchecked Card" />
          <Checkbox variant="card" size={size} disabled label="Disabled Card" />
        </div>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" className="glacier-glass">
        <Checkbox variant={variant} size="sm" defaultChecked label="Small" />
        <Checkbox variant={variant} size="md" defaultChecked label="Medium" />
        <Checkbox variant={variant} size="lg" defaultChecked label="Large" />
      </ShowcaseItem>

      {/* With Description */}
      <ShowcaseItem label="Description" variant="secondary" className="glacier-glass">
        <Checkbox
          variant={variant}
          size={size}
          defaultChecked
          label="Enable notifications"
          description="Receive push notifications for important updates"
        />
        <Checkbox
          variant={variant}
          size={size}
          label="Email digest"
          description="Get a weekly summary of activity"
        />
      </ShowcaseItem>

      {/* Icon / No Label */}
      <ShowcaseItem label="No Label" variant="ghost" className="glacier-glass">
        <Checkbox variant={variant} size={size} defaultChecked />
        <Checkbox variant={variant} size={size} />
        <Checkbox variant={variant} size={size} indeterminate />
        <Checkbox variant={variant} size={size} disabled />
      </ShowcaseItem>
    </Showcase>
  )
}
