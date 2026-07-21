import type { HTMLAttributes, ReactNode } from 'react'

export type TooltipPlacement
  = | 'top'
    | 'bottom'
    | 'left'
    | 'right'

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'content'> {
  /** 툴팁 내용 */
  content: ReactNode
  /** 위치 */
  placement?: TooltipPlacement
  /** 표시 지연(ms) */
  delay?: number
  /** 트리거 요소 */
  children: ReactNode
}