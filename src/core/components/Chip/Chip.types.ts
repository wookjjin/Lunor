import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ChipVariant = 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
export type ChipSize = 'sm' | 'md' | 'lg'

// 'size'뿐만 아니라 기존 HTML의 'onSelect'도 함께 제외해 줍니다.
export interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size' | 'onSelect'> {
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
  /** 선택 변경 콜백 (내가 정의한 불리언 타입을 안전하게 사용할 수 있습니다!) */
  onSelect?: (selected: boolean) => void
  /** 제거 콜백 */
  onRemove?: () => void
  /** 라벨 내용 */
  children?: ReactNode
}
