import type { HTMLAttributes } from 'react'

export type IconSize
  = | 'sm'
    | 'md'
    | 'lg'
    | 'xl'

export type IconVariant
  = | 'default'
    | 'primary'
    | 'secondary'
    | 'muted'

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Material Symbols 아이콘 이름 (필수) */
  name: string
  /** 아이콘 크기 */
  size?: IconSize
  /** 색상 변형 */
  variant?: IconVariant
  /**
   * 접근성 라벨.
   * 지정하지 않으면 장식용으로 간주하고 `aria-hidden="true"` 처리.
   * 지정하면 `role="img"` + `aria-label` 부여.
   */
  label?: string
}