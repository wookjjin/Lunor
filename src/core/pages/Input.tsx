import { Input } from '@/core/components/Input/Input'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   InputPage — Glacier UI 스타일 Input 쇼케이스
   ============================================================================= */

export default function InputPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'outline') as 'outline' | 'filled'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const invalid = Boolean(props.invalid)
  const disabled = Boolean(props.disabled)
  const placeholder = (props.placeholder ?? 'Enter text...') as string
  const fullWidth = Boolean(props.fullWidth)

  return (
    <Showcase
      title="Input"
      description="The input component allows users to enter and edit text within a form or standalone context."
      cols={3}
    >
      {/* Outline Variant */}
      <ShowcaseItem label="Outline" variant="primary" badge="Active" className="glacier-glass">
        <Input
          variant="outline"
          size={size}
          invalid={invalid}
          disabled={disabled}
          placeholder={placeholder}
          fullWidth={fullWidth}
        />
        <div className="showcase__row">
          <Input variant="outline" size={size} placeholder="Disabled" fullWidth disabled />
          <Input variant="outline" size={size} invalid placeholder="Error state" fullWidth={fullWidth} />
        </div>
      </ShowcaseItem>

      {/* Filled Variant */}
      <ShowcaseItem label="Filled" variant="secondary" className="glacier-glass">
        <Input
          variant="filled"
          size={size}
          invalid={invalid}
          disabled={disabled}
          placeholder={placeholder}
          fullWidth={fullWidth}
        />
        <div className="showcase__row">
          <Input variant="filled" size={size} placeholder="Disabled" fullWidth disabled />
          <Input variant="filled" size={size} invalid placeholder="Error state" fullWidth={fullWidth} />
        </div>
      </ShowcaseItem>

      {/* Playground */}
      <ShowcaseItem label="Playground" variant="primary" className="glacier-glass">
        <Input
          variant={variant}
          size={size}
          invalid={invalid}
          disabled={disabled}
          placeholder={placeholder}
          fullWidth={fullWidth}
        />
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="secondary" className="glacier-glass">
        <Input variant={variant} size="sm" placeholder="Small input" fullWidth />
        <Input variant={variant} size="md" placeholder="Medium input" fullWidth />
        <Input variant={variant} size="lg" placeholder="Large input" fullWidth />
      </ShowcaseItem>

      {/* States */}
      <ShowcaseItem label="States" variant="ghost" className="glacier-glass">
        <Input variant={variant} size={size} placeholder="Default" fullWidth />
        <Input variant={variant} size={size} placeholder="Invalid" fullWidth invalid />
        <Input variant={variant} size={size} placeholder="Disabled" fullWidth disabled />
      </ShowcaseItem>

      {/* Full Width */}
      <ShowcaseItem label="Full Width" variant="ghost" className="glacier-glass">
        <Input variant={variant} size={size} placeholder="Full width input" fullWidth />
      </ShowcaseItem>
    </Showcase>
  )
}