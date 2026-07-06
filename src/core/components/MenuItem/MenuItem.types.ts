import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface MenuItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  /** 선행 아이콘 (Material Symbols) */
  icon?: string
  /** 후행 요소 (단축키, Badge 등) */
  trailing?: ReactNode
  /** 선택 상태 */
  selected?: boolean
  /** 비활성화 */
  disabled?: boolean
  /** 위험/삭제 액션 */
  danger?: boolean
  /** 클릭 핸들러 */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  /** 라벨 내용 */
  children?: ReactNode
}
