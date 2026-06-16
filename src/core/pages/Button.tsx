import { Button } from '@/core/components/Button/Button'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

export default function ButtonPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'solid') as 'solid' | 'outline' | 'ghost' | 'danger'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const fullWidth = Boolean(props.fullWidth)
  const disabled = Boolean(props.disabled)
  const children = (props.children ?? 'Button') as string

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Button
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled}
      >
        {children}
      </Button>
    </div>
  )
}
