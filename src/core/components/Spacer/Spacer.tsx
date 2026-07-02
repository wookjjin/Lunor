import type { SpacerProps } from '@/core/components/Spacer/Spacer.types'

export function Spacer({
  size,
  flex: flexProp,
  grow = false,
  shrink = false,
  className,
  ...props
}: SpacerProps) {
  const flex = flexProp ?? (grow ? 1 : undefined)

  return (
    <div
      className={[
        'spacer',
        size && `spacer--${size}`,
        grow && 'spacer--grow',
        shrink && 'spacer--shrink',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={flex !== undefined ? { flex } : undefined}
      aria-hidden="true"
      {...props}
    />
  )
}