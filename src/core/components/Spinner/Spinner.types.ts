import type { HTMLAttributes, ReactNode } from 'react'

export type SpinnerVariant
  = | 'default'
    | 'primary'
    | 'danger'
    | 'success'
    | 'warning'

export type SpinnerSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** 색상 변형 */
  variant?: SpinnerVariant
  /** 크기 */
  size?: SpinnerSize
  /** 라벨 (스피너 우측 또는 하단 텍스트) */
  label?: ReactNode
}