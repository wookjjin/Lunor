import type { AnchorHTMLAttributes, ReactNode } from 'react'

export type LinkVariant
  = | 'default'
    | 'subtle'
    | 'underline'

export type LinkSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  /** 색상 변형 */
  variant?: LinkVariant
  /** 크기 */
  size?: LinkSize
  /** 외부 링크 여부 (target=_blank + rel 자동 추가) */
  external?: boolean
  /** 선행 아이콘 (Material Symbols 이름) */
  icon?: string
  /** 후행 아이콘 (Material Symbols 이름) */
  iconRight?: string
  /** 링크 텍스트/콘텐츠 */
  children: ReactNode
}