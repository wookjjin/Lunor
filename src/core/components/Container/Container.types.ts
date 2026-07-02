import type { HTMLAttributes, ReactNode } from 'react'

export type ContainerSize
  = | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'full'

export type ContainerPadding
  = | 'none'
    | 'sm'
    | 'md'
    | 'lg'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** 최대 너비 */
  size?: ContainerSize
  /** 좌우 패딩 */
  padding?: ContainerPadding
  /** 중앙 정렬 (margin: 0 auto) */
  centered?: boolean
  /** 자식 요소들 */
  children?: ReactNode
}