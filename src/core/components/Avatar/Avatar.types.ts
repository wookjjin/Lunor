import type { HTMLAttributes } from 'react'

export type AvatarSize
  = | 'sm'
    | 'md'
    | 'lg'
    | 'xl'

export type AvatarVariant
  = | 'default'
    | 'primary'
    | 'danger'
    | 'success'
    | 'warning'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** 크기 */
  size?: AvatarSize
  /** 색상 변형 (fallback/icon 배경색) */
  variant?: AvatarVariant
  /** 이미지 URL */
  src?: string
  /** 이미지 alt 텍스트 */
  alt?: string
  /** 이미지 로드 실패 시 대체 텍스트 (이니셜 등) */
  fallback?: string
  /** 기본 아이콘 (Material Symbols, 미지정 시 'person') */
  icon?: string
  /** 외곽 링 표시 */
  ring?: boolean
  /** 원형 대신 사각형 */
  square?: boolean
}