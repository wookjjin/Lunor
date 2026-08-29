import { useState } from 'react'
import { Select } from '@/core/components/Select/Select'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   SelectPage — Glacier UI 스타일 Select 쇼케이스
   ============================================================================= */

const FRAMEWORK_OPTIONS = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'angular', label: 'Angular' },
]

const THEME_OPTIONS = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'auto', label: 'Auto' },
]

const SINGLE_OPTION = [{ value: 'a', label: 'Option A' }]

const AB_OPTIONS = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
]

const WIDE_OPTIONS = [
  { value: 'a', label: 'Option A — stretches to container' },
  { value: 'b', label: 'Option B' },
  { value: 'c', label: 'Option C' },
]

export default function SelectPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'outline') as 'outline' | 'filled'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const fullWidth = Boolean(props.fullWidth)
  const invalid = Boolean(props.invalid)
  const disabled = Boolean(props.disabled)

  const [controlled, setControlled] = useState('')

  return (
    <Showcase
      title="Select"
      description="The select component lets users choose a single option from a fully custom, styleable popup list — unlike the native select element, every part of the popup can be themed."
      cols={3}
    >
      {/* Outline Variant */}
      <ShowcaseItem label="Outline" variant="primary" badge="Active" className="glacier-glass">
        <Select variant="outline" size={size} fullWidth={fullWidth} disabled={disabled} invalid={invalid} placeholder="Choose..." options={FRAMEWORK_OPTIONS} />
        <div className="showcase__row">
          <Select variant="outline" size={size} placeholder="Disabled" disabled options={SINGLE_OPTION} />
          <Select variant="outline" size={size} invalid placeholder="Invalid" options={SINGLE_OPTION} />
        </div>
      </ShowcaseItem>

      {/* Filled Variant */}
      <ShowcaseItem label="Filled" variant="secondary" className="glacier-glass">
        <Select variant="filled" size={size} fullWidth={fullWidth} disabled={disabled} invalid={invalid} placeholder="Choose..." options={THEME_OPTIONS} />
        <div className="showcase__row">
          <Select variant="filled" size={size} placeholder="Disabled" disabled options={SINGLE_OPTION} />
          <Select variant="filled" size={size} invalid placeholder="Invalid" options={SINGLE_OPTION} />
        </div>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" className="glacier-glass">
        <Select variant={variant} size="sm" placeholder="Small" options={AB_OPTIONS} />
        <Select variant={variant} size="md" placeholder="Medium" options={AB_OPTIONS} />
        <Select variant={variant} size="lg" placeholder="Large" options={AB_OPTIONS} />
      </ShowcaseItem>

      {/* Controlled */}
      <ShowcaseItem label="Controlled" variant="secondary" className="glacier-glass">
        <Select
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          value={controlled}
          placeholder="Select framework..."
          options={FRAMEWORK_OPTIONS}
          onChange={setControlled}
        />
        <div className="showcase__row">
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            Selected:
            {' '}
            {controlled || '(none)'}
          </span>
        </div>
      </ShowcaseItem>

      {/* States */}
      <ShowcaseItem label="States" variant="ghost" className="glacier-glass">
        <Select variant={variant} size={size} fullWidth placeholder="Default" options={AB_OPTIONS} />
        <Select variant={variant} size={size} fullWidth invalid placeholder="Invalid state" options={SINGLE_OPTION} />
        <Select variant={variant} size={size} fullWidth disabled placeholder="Disabled" options={SINGLE_OPTION} />
      </ShowcaseItem>

      {/* Full Width */}
      <ShowcaseItem label="Full Width" variant="ghost" className="glacier-glass">
        <Select variant={variant} size={size} fullWidth placeholder="Full width select" options={WIDE_OPTIONS} />
      </ShowcaseItem>

      {/* Empty Options */}
      <ShowcaseItem label="Empty" variant="ghost" className="glacier-glass">
        <Select variant={variant} size={size} placeholder="No options available" options={[]} />
      </ShowcaseItem>
    </Showcase>
  )
}
