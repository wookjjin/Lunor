import type { BadgeProps } from '@/core/components/Badge/Badge.types'

export function Badge({
  variant = 'solid',
  size = 'md',
  dot = false,
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        'badge',
        `badge--${variant}`,
        `badge--${size}`,
        dot && 'badge--dot',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {dot && <span className="badge__dot" aria-hidden="true" />}
      {icon && (
        <span className="badge__icon material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </span>
  )
}