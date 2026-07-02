import type { HTMLAttributes, ReactNode } from 'react'

export type DividerOrientation
  = | 'horizontal'
    | 'vertical'

export type DividerVariant
  = | 'default'
    | 'subtle'
    | 'strong'

export type DividerLabelPosition
  = | 'start'
    | 'center'
    | 'end'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** 방향 */
  orientation?: DividerOrientation
  /** 색상 변형 */
  variant?: DividerVariant
  /** 라벨 텍스트 (horizontal 전용) */
  label?: ReactNode
  /** 라벨 위치 */
  labelPosition?: DividerLabelPosition
}