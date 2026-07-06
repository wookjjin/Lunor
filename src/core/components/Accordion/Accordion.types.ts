import type { HTMLAttributes, ReactNode } from 'react'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /** 다중 확장 허용 */
  multiple?: boolean
  /** 기본적으로 열려있는 아이템 id 배열 */
  defaultOpen?: string[]
}

export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 고유 id (미지정 시 자동 생성) */
  id?: string
  /** 헤더 타이틀 */
  title: ReactNode
  /** 선행 아이콘 (Material Symbols 이름) */
  icon?: string
  /** 비활성화 */
  disabled?: boolean
  /** 패널 내용 */
  children?: ReactNode
}
