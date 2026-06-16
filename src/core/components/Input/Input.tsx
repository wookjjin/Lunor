import type { InputProps } from '@/core/components/Input/Input.types'

export function Input({
  ref,
  className,
  variant = 'outline',
  size = 'md',
  invalid = false,
  fullWidth = true,
  ...props
}: InputProps) {
  return (
    <input
      ref={ref}
      className={[
        'input',
        `input--${variant}`,
        `input--${size}`,
        invalid && 'input--invalid',
        fullWidth && 'input--full-width',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}
