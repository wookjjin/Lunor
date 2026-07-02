import type { HTMLAttributes, ReactNode } from 'react'

export type ProgressBarVariant
  = | 'default'
    | 'primary'
    | 'success'
    | 'warning'
    | 'danger'

export type ProgressBarSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** 색상 변형 */
  variant?: ProgressBarVariant
  /** 크기 (트랙 높이) */
  size?: ProgressBarSize
  /** 현재 값 */
  value?: number
  /** 최대값 */
  max?: number
  /** 우측 퍼센트 표시 */
  showValue?: boolean
  /** 스트라이프 패턴 */
  striped?: boolean
  /** 스트라이프 애니메이션 */
  animated?: boolean
  /** 라벨 (트랙 상단) */
  label?: ReactNode
}