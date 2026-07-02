import type { HTMLAttributes } from 'react'

export type SpacerSize
  = | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  /** 고정 크기 (flex grow 없이 명시적 간격) */
  size?: SpacerSize
  /** flex 값 직접 지정 */
  flex?: number
  /** flex-grow: 1 (남은 공간 채우기) */
  grow?: boolean
  /** flex-shrink: 1 */
  shrink?: boolean
}