import type { ChangeEvent, ReactNode, SelectHTMLAttributes } from 'react'

export type SelectVariant
  = | 'outline'
    | 'filled'

export type SelectSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** 색상 변형 */
  variant?: SelectVariant
  /** 크기 */
  size?: SelectSize
  /** 에러 상태 */
  invalid?: boolean
  /** 비활성화 */
  disabled?: boolean
  /** 전체 너비 */
  fullWidth?: boolean
  /** 플레이스홀더 (빈 값 옵션) */
  placeholder?: string
  /** 제어 상태 (controlled) */
  value?: string
  /** 비제어 초기 상태 (uncontrolled) */
  defaultValue?: string
  /** form name */
  name?: string
  /** onChange 핸들러 */
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  /** 옵션들 (option 요소들) */
  children?: ReactNode
}
