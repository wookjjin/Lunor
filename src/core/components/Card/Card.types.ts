import type { HTMLAttributes } from 'react'

export type CardVariant
  = | 'default'
    | 'outlined'
    | 'elevated'

export type CardPadding
  = | 'none'
    | 'sm'
    | 'md'
    | 'lg'

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
}
