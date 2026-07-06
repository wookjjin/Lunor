import { useState } from 'react'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Switch } from '@/core/components/Switch/Switch'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   SwitchPage — Glacier UI 스타일 Switch 쇼케이스
   ============================================================================= */

export default function SwitchPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const variant = (props.variant ?? 'default') as 'default' | 'card'
  const label = (props.label ?? 'Notifications') as string
  const description = (props.description ?? 'Receive push notifications') as string

  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)

  return (
    <Showcase
      title="Switch"
      description="The switch component toggles a binary state on or off, commonly used for settings and preferences."
      cols={3}
    >
      {/* Default Variant */}
      <ShowcaseItem label="Default" variant="primary" badge="Active" className="glacier-glass">
        <Switch
          variant={variant}
          size={size}
          checked={checked1}
          label={label}
          description={description}
          onChange={() => setChecked1(!checked1)}
        />
        <div className="showcase__row">
          <Switch variant={variant} size={size} label="Unchecked" />
          <Switch variant={variant} size={size} disabled label="Disabled" />
        </div>
      </ShowcaseItem>

      {/* Card Variant */}
      <ShowcaseItem label="Card" variant="secondary" className="glacier-glass">
        <Switch
          variant="card"
          size={size}
          checked={checked2}
          label="Dark mode"
          description="Toggle dark theme appearance"
          onChange={() => setChecked2(!checked2)}
        />
        <div className="showcase__row">
          <Switch variant="card" size={size} label="Unchecked Card" />
          <Switch variant="card" size={size} disabled defaultChecked label="Disabled Card" />
        </div>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" className="glacier-glass">
        <Switch variant={variant} size="sm" defaultChecked label="Small" />
        <Switch variant={variant} size="md" defaultChecked label="Medium" />
        <Switch variant={variant} size="lg" defaultChecked label="Large" />
      </ShowcaseItem>

      {/* With Description */}
      <ShowcaseItem label="Description" variant="secondary" className="glacier-glass">
        <Switch
          variant={variant}
          size={size}
          defaultChecked
          label="Auto-save"
          description="Automatically save changes every 30 seconds"
        />
        <Switch
          variant={variant}
          size={size}
          label="Analytics"
          description="Send anonymous usage data to improve the product"
        />
      </ShowcaseItem>

      {/* Controlled */}
      <ShowcaseItem label="Controlled" variant="ghost" className="glacier-glass">
        <Switch
          variant={variant}
          size={size}
          checked={checked1}
          label="Sync settings"
          onChange={() => setChecked1(!checked1)}
        />
        <div className="showcase__row">
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            State:
            {' '}
            {checked1 ? 'ON' : 'OFF'}
          </span>
        </div>
      </ShowcaseItem>

      {/* No Label */}
      <ShowcaseItem label="No Label" variant="ghost" className="glacier-glass">
        <Switch variant={variant} size={size} defaultChecked />
        <Switch variant={variant} size={size} />
        <Switch variant={variant} size={size} disabled />
        <Switch variant={variant} size={size} disabled defaultChecked />
      </ShowcaseItem>
    </Showcase>
  )
}
