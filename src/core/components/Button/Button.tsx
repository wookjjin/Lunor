import type { ButtonProps } from '@/core/components/Button/Button.types'

export function Button({
  className,
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={[
        'button',
        `button--${variant}`,
        `button--${size}`,
        fullWidth && 'button--full-width',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}
