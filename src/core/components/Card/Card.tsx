import type { CardProps } from '@/core/components/Card/Card.types'

export function Card({
  className,
  variant = 'default',
  padding = 'md',
  ...props
}: CardProps) {
  return (
    <div
      className={[
        'card',
        `card--${variant}`,
        `card--${padding}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}
