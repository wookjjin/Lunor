import type { ChangeEvent, ReactNode } from 'react'
import type { InputHTMLAttributes } from 'react'

export type SwitchVariant
  = | 'default'
    | 'card'

export type SwitchSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 색상/레이아웃 변형 */
  variant?: SwitchVariant
  /** 크기 */
  size?: SwitchSize
  /** 제어 상태 (controlled) */
  checked?: boolean
  /** 비제어 초기 상태 (uncontrolled) */
  defaultChecked?: boolean
  /** 비활성화 */
  disabled?: boolean
  /** 라벨 텍스트 */
  label?: ReactNode
  /** 보조 설명 텍스트 */
  description?: ReactNode
  /** onChange 핸들러 */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** 라벨 영역 (label이 없을 때 대체) */
  children?: ReactNode
}