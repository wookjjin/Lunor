import type { ReactNode } from 'react'

export type SelectVariant
  = | 'outline'
    | 'filled'

export type SelectSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface SelectOption {
  value: string
  label: ReactNode
  disabled?: boolean
}

export interface SelectProps {
  /** 선택 옵션 목록 */
  options: SelectOption[]
  /** 제어 모드 값 */
  value?: string
  /** 비제어 모드 초기값 */
  defaultValue?: string
  /** 값 변경 시 호출 */
  onChange?: (value: string) => void
  /** 선택된 값이 없을 때 표시할 텍스트 */
  placeholder?: string
  variant?: SelectVariant
  size?: SelectSize
  invalid?: boolean
  disabled?: boolean
  fullWidth?: boolean
  /** 지정 시 hidden input을 렌더링해 네이티브 form submit과 연동 */
  name?: string
  id?: string
  className?: string
}
