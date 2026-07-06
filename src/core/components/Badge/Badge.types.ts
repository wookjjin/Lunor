import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant
  = | 'solid'
    | 'secondary'
    | 'ghost'
    | 'danger'
    | 'success'
    | 'warning'

export type BadgeSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** 색상 변형 */
  variant?: BadgeVariant
  /** 크기 */
  size?: BadgeSize
  /** 선행 dot 표시 여부 */
  dot?: boolean
  /** Material Symbols 아이콘 이름 */
  icon?: string
  /** 배지 내용 */
  children?: ReactNode
}
