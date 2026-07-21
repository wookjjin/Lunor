import type { IconProps } from '@/core/components/Icon/Icon.types'

export function Icon({
  name,
  size = 'md',
  variant = 'default',
  label,
  className,
  ...props
}: IconProps) {
  const isDecorative = !label

  return (
    <span
      className={[
        'icon',
        `icon--${size}`,
        `icon--${variant}`,
        'material-symbols-outlined',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role={isDecorative ? undefined : 'img'}
      aria-hidden={isDecorative ? 'true' : undefined}
      aria-label={isDecorative ? undefined : label}
      {...props}
    >
      {name}
    </span>
  )
}