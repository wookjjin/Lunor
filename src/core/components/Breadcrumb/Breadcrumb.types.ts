import type { HTMLAttributes, LiHTMLAttributes, MouseEvent, ReactNode } from 'react'

export type BreadcrumbSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /** 구분자 (기본: '/') */
  separator?: string
  /** 크기 */
  size?: BreadcrumbSize
}

export interface BreadcrumbItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** 링크 URL (있으면 a 태그, 없으면 button) */
  href?: string
  /** 선행 아이콘 (Material Symbols) */
  icon?: string
  /** 현재 페이지 (마지막 아이템) */
  current?: boolean
  /** 클릭 핸들러 */
  onClick?: (event: MouseEvent<HTMLElement>) => void
  /** 내용 */
  children?: ReactNode
}
