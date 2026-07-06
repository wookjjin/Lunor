import { useState } from 'react'
import { Select } from '@/core/components/Select/Select'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   SelectPage — Glacier UI 스타일 Select 쇼케이스
   ============================================================================= */

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
      description="The select component allows users to choose a single option from a dropdown list using the native select element."
      cols={3}
    >
      {/* Outline Variant */}
      <ShowcaseItem label="Outline" variant="primary" badge="Active" className="glacier-glass">
        <Select variant="outline" size={size} fullWidth={fullWidth} disabled={disabled} invalid={invalid} placeholder="Choose...">
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="svelte">Svelte</option>
        </Select>
        <div className="showcase__row">
          <Select variant="outline" size={size} placeholder="Disabled" disabled>
            <option value="a">Option A</option>
          </Select>
          <Select variant="outline" size={size} invalid placeholder="Invalid">
            <option value="a">Option A</option>
          </Select>
        </div>
      </ShowcaseItem>

      {/* Filled Variant */}
      <ShowcaseItem label="Filled" variant="secondary" className="glacier-glass">
        <Select variant="filled" size={size} fullWidth={fullWidth} disabled={disabled} invalid={invalid} placeholder="Choose...">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </Select>
        <div className="showcase__row">
          <Select variant="filled" size={size} placeholder="Disabled" disabled>
            <option value="a">Option A</option>
          </Select>
          <Select variant="filled" size={size} invalid placeholder="Invalid">
            <option value="a">Option A</option>
          </Select>
        </div>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" className="glacier-glass">
        <Select variant={variant} size="sm" placeholder="Small">
          <option value="a">Option A</option>
          <option value="b">Option B</option>
        </Select>
        <Select variant={variant} size="md" placeholder="Medium">
          <option value="a">Option A</option>
          <option value="b">Option B</option>
        </Select>
        <Select variant={variant} size="lg" placeholder="Large">
          <option value="a">Option A</option>
          <option value="b">Option B</option>
        </Select>
      </ShowcaseItem>

      {/* Controlled */}
      <ShowcaseItem label="Controlled" variant="secondary" className="glacier-glass">
        <Select
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          value={controlled}
          placeholder="Select framework..."
          onChange={e => setControlled(e.target.value)}
        >
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="svelte">Svelte</option>
          <option value="angular">Angular</option>
        </Select>
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
        <Select variant={variant} size={size} fullWidth placeholder="Default">
          <option value="a">Option A</option>
          <option value="b">Option B</option>
        </Select>
        <Select variant={variant} size={size} fullWidth invalid placeholder="Invalid state">
          <option value="a">Option A</option>
        </Select>
        <Select variant={variant} size={size} fullWidth disabled placeholder="Disabled">
          <option value="a">Option A</option>
        </Select>
      </ShowcaseItem>

      {/* Full Width */}
      <ShowcaseItem label="Full Width" variant="ghost" className="glacier-glass">
        <Select variant={variant} size={size} fullWidth placeholder="Full width select">
          <option value="a">Option A — stretches to container</option>
          <option value="b">Option B</option>
          <option value="c">Option C</option>
        </Select>
      </ShowcaseItem>
    </Showcase>
  )
}
