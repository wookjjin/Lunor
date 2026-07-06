import type { HTMLAttributes, ReactNode } from 'react'

export type InputGroupVariant
  = | 'outline'
    | 'filled'

export type InputGroupSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface InputGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** 색상 변형 */
  variant?: InputGroupVariant
  /** 크기 */
  size?: InputGroupSize
  /** 에러 상태 */
  invalid?: boolean
  /** 비활성화 */
  disabled?: boolean
  /** 전체 너비 */
  fullWidth?: boolean
  /** 선행 아이콘 (Material Symbols 이름) */
  icon?: string
  /** 아이콘을 우측에 배치 */
  iconRight?: boolean
  /** 선행 addon 텍스트/요소 */
  prefix?: ReactNode
  /** 후행 addon 텍스트/요소 */
  suffix?: ReactNode
  /** Input 요소 (children) */
  children?: ReactNode
}
