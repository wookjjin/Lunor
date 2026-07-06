import type { ContainerProps } from '@/core/components/Container/Container.types'

export function Container({
  size = 'md',
  padding = 'md',
  centered = true,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={[
        'container',
        `container--${size}`,
        `container--padding-${padding}`,
        centered && 'container--centered',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
