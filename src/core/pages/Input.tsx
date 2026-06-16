import { Input } from '@/core/components/Input/Input'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

export default function InputPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'outline') as 'outline' | 'filled'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const invalid = Boolean(props.invalid)
  const disabled = Boolean(props.disabled)
  const placeholder = (props.placeholder ?? 'Enter text...') as string

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', minWidth: '320px' }}>
      <Input
        variant={variant}
        size={size}
        invalid={invalid}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  )
}
