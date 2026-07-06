import type { HTMLAttributes, ReactNode } from 'react'

export type StackDirection
  = | 'column'
    | 'row'

export type StackGap
  = | 'none'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'

export type StackAlign
  = | 'start'
    | 'center'
    | 'end'
    | 'stretch'

export type StackJustify
  = | 'start'
    | 'center'
    | 'end'
    | 'between'
    | 'around'
    | 'evenly'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** 방향 */
  direction?: StackDirection
  /** 간격 */
  gap?: StackGap
  /** 교차축 정렬 */
  align?: StackAlign
  /** 주축 정렬 */
  justify?: StackJustify
  /** 줄 바꿈 */
  wrap?: boolean
  /** 자식 요소들 */
  children?: ReactNode
}
