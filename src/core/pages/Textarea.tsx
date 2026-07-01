import { useState } from 'react'
import { Textarea } from '@/core/components/Textarea/Textarea'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   TextareaPage — Glacier UI 스타일 Textarea 쇼케이스
   ============================================================================= */

export default function TextareaPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'outline') as 'outline' | 'filled'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const resize = (props.resize ?? 'vertical') as 'none' | 'vertical' | 'horizontal' | 'both'
  const fullWidth = Boolean(props.fullWidth)
  const invalid = Boolean(props.invalid)
  const disabled = Boolean(props.disabled)

  const [controlled, setControlled] = useState('')

  return (
    <Showcase
      title="Textarea"
      description="The textarea component is a multi-line text input for longer content such as comments, descriptions, or messages."
      cols={3}
    >
      {/* Outline Variant */}
      <ShowcaseItem label="Outline" variant="primary" badge="Active" className="glacier-glass">
        <Textarea
          variant="outline"
          size={size}
          resize={resize}
          fullWidth={fullWidth}
          disabled={disabled}
          placeholder="Write your message..."
        />
        <div className="showcase__row">
          <Textarea variant="outline" size={size} rows={2} placeholder="Disabled" disabled />
          <Textarea variant="outline" size={size} rows={2} invalid placeholder="Invalid input" />
        </div>
      </ShowcaseItem>

      {/* Filled Variant */}
      <ShowcaseItem label="Filled" variant="secondary" className="glacier-glass">
        <Textarea
          variant="filled"
          size={size}
          resize={resize}
          fullWidth={fullWidth}
          disabled={disabled}
          placeholder="Write your message..."
        />
        <div className="showcase__row">
          <Textarea variant="filled" size={size} rows={2} placeholder="Disabled" disabled />
          <Textarea variant="filled" size={size} rows={2} invalid placeholder="Invalid input" />
        </div>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" className="glacier-glass">
        <Textarea variant={variant} size="sm" rows={2} placeholder="Small textarea" />
        <Textarea variant={variant} size="md" rows={3} placeholder="Medium textarea" />
        <Textarea variant={variant} size="lg" rows={4} placeholder="Large textarea" />
      </ShowcaseItem>

      {/* Resize Modes */}
      <ShowcaseItem label="Resize" variant="secondary" className="glacier-glass">
        <Textarea variant={variant} size={size} resize="none" rows={3} placeholder="No resize" />
        <Textarea variant={variant} size={size} resize="vertical" rows={3} placeholder="Vertical resize" />
        <Textarea variant={variant} size={size} resize="horizontal" rows={3} placeholder="Horizontal resize" />
        <Textarea variant={variant} size={size} resize="both" rows={3} placeholder="Both resize" />
      </ShowcaseItem>

      {/* Controlled */}
      <ShowcaseItem label="Controlled" variant="ghost" className="glacier-glass">
        <Textarea
          variant={variant}
          size={size}
          resize={resize}
          fullWidth={fullWidth}
          value={controlled}
          placeholder="Type something..."
          onChange={e => setControlled(e.target.value)}
        />
        <div className="showcase__row">
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            Length: {controlled.length}
          </span>
        </div>
      </ShowcaseItem>

      {/* States */}
      <ShowcaseItem label="States" variant="ghost" className="glacier-glass">
        <Textarea variant={variant} size={size} fullWidth rows={3} placeholder="Default" />
        <Textarea variant={variant} size={size} fullWidth rows={3} invalid placeholder="Invalid state" />
        <Textarea variant={variant} size={size} fullWidth rows={3} disabled placeholder="Disabled" />
      </ShowcaseItem>
    </Showcase>
  )
}