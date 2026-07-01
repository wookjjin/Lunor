import type { ChangeEvent, ReactNode } from 'react'
import type { InputHTMLAttributes } from 'react'

export type CheckboxVariant
  = | 'default'
    | 'card'

export type CheckboxSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** 색상/레이아웃 변형 */
  variant?: CheckboxVariant
  /** 크기 */
  size?: CheckboxSize
  /** 제어 상태 (controlled) */
  checked?: boolean
  /** 비제어 초기 상태 (uncontrolled) */
  defaultChecked?: boolean
  /** indeterminate(부분 선택) 상태 */
  indeterminate?: boolean
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