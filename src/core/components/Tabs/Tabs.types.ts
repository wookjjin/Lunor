import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

export type TabsVariant
  = | 'default'
    | 'pills'
    | 'underline'

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  /** 제어 상태 (controlled) */
  value?: string
  /** 비제어 초기값 (uncontrolled) */
  defaultValue?: string
  /** 값 변경 콜백 */
  onValueChange?: (value: string) => void
  /** 스타일 변형 */
  variant?: TabsVariant
}

export interface TabProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  /** 탭 식별자 */
  value: string
  /** 탭 라벨 */
  label: ReactNode
  /** 아이콘 (Material Symbols) */
  icon?: string
  /** 비활성화 */
  disabled?: boolean
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** 탭 식별자 (value가 active tab과 일치할 때 표시) */
  value: string
  /** 패널 내용 */
  children?: ReactNode
}