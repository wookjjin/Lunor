import type { ButtonProps } from '@/core/components/Button/Button.types'

export function Button({
  className,
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  icon,
  iconRight,
  type = 'button',
  children,
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
    >
      {icon && (
        <span className="button__icon material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {iconRight && (
        <span className="button__icon button__icon--right material-symbols-outlined" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </button>
  )
}
