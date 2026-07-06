import type { HTMLAttributes, LiHTMLAttributes, MouseEvent, ReactNode } from 'react'

export type ListVariant
  = | 'default'
    | 'nav'
    | 'plain'

export type ListSize
  = | 'sm'
    | 'md'
    | 'lg'

export type ListDensity
  = | 'comfortable'
    | 'compact'

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  /** 스타일 변형 (default: 마커 표시, nav: 마커 없이, plain: 패딩 없음) */
  variant?: ListVariant
  /** 크기 */
  size?: ListSize
  /** 행 간격 */
  density?: ListDensity
  /** ordered list (ol) 사용 */
  ordered?: boolean
  /** 마커(불릿/숫자) 표시 여부 */
  marker?: boolean
  /** 추가 className */
  className?: string
}

export interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {
  /** 선행 아이콘 (Material Symbols 이름) */
  icon?: string
  /** 후행 요소 (Badge, 버튼 등) */
  trailing?: ReactNode
  /** 선택 상태 */
  selected?: boolean
  /** 비활성화 */
  disabled?: boolean
  /** 클릭 핸들러 — 있으면 interactive item이 됨 */
  onClick?: (event: MouseEvent<HTMLLIElement>) => void
  /** 내용 */
  children?: ReactNode
}
