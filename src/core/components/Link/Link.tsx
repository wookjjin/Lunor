import type { LinkProps } from '@/core/components/Link/Link.types'

export function Link({
  variant = 'default',
  size = 'md',
  external = false,
  icon,
  iconRight,
  className,
  children,
  ...props
}: LinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <a
      className={[
        'link',
        `link--${variant}`,
        `link--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...externalProps}
      {...props}
    >
      {icon && (
        <span className="link__icon material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
      {iconRight && (
        <span className="link__icon link__icon--right material-symbols-outlined" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </a>
  )
}