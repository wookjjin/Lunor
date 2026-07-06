import type { ChangeEvent, HTMLAttributes } from 'react'

export type SliderVariant
  = | 'default'
    | 'filled'

export type SliderSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** 색상 변형 */
  variant?: SliderVariant
  /** 크기 */
  size?: SliderSize
  /** 비활성화 */
  disabled?: boolean
  /** 현재 값 표시 여부 */
  showValue?: boolean
  /** 최소값 */
  min?: number
  /** 최대값 */
  max?: number
  /** 스텝 */
  step?: number
  /** 제어 상태 (controlled) */
  value?: number
  /** 비제어 초기 상태 (uncontrolled) */
  defaultValue?: number
  /** form name */
  name?: string
  /** onChange 핸들러 */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
