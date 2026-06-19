import { Input } from '@/core/components/Input/Input'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   InputPage — Glacier UI 스타일 Input 쇼케이스
   반응형 flex: 모바일 1열 → 태블릿 2열 → 와이드 4열
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
          <Input
            variant="outline"
            size={size}
            placeholder={placeholder}
            fullWidth
            disabled
          />
          <Input
            variant="outline"
            size={size}
            invalid
            placeholder="Error state"
            fullWidth={fullWidth}
          />
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
          <Input
            variant="filled"
            size={size}
            placeholder={placeholder}
            fullWidth
            disabled
          />
          <Input
            variant="filled"
            size={size}
            invalid
            placeholder="Error state"
            fullWidth={fullWidth}
          />
        </div>
      </ShowcaseItem>

      {/* Sizes Showcase */}
      <ShowcaseItem label="Sizes" variant="ghost" className="glacier-glass">
        <Input
          variant={variant}
          size="sm"
          invalid={invalid}
          disabled={disabled}
          placeholder="Small input"
          fullWidth={fullWidth}
        />
        <Input
          variant={variant}
          size="md"
          invalid={invalid}
          disabled={disabled}
          placeholder="Medium input"
          fullWidth={fullWidth}
        />
        <Input
          variant={variant}
          size="lg"
          invalid={invalid}
          disabled={disabled}
          placeholder="Large input"
          fullWidth={fullWidth}
        />
      </ShowcaseItem>
    </Showcase>
  )
}
