import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ChipVariant
  = | 'default'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'

export type ChipSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  /** 색상 변형 */
  variant?: ChipVariant
  /** 크기 */
  size?: ChipSize
  /** 선행 아이콘 (Material Symbols 이름) */
  icon?: string
  /** 제거 버튼 표시 */
  removable?: boolean
  /** 제어 상태 (selected) */
  selected?: boolean
  /** 비제어 초기 선택 상태 */
  defaultSelected?: boolean
  /** 선택 변경 콜백 */
  onSelect?: (selected: boolean) => void
  /** 제거 콜백 */
  onRemove?: () => void
  /** 라벨 내용 */
  children?: ReactNode
}
