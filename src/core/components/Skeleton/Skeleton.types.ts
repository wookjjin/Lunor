import type { CSSProperties, HTMLAttributes } from 'react'

export type SkeletonVariant
  = | 'text'
    | 'rect'
    | 'card'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** 형태 변형 (text일 경우 여러 줄 렌더링, rect/card는 단일 블록) */
  variant?: SkeletonVariant
  /** 너비 */
  width?: string | number
  /** 높이 */
  height?: string | number
  /** border-radius 커스텀 */
  radius?: string | number
  /** 둥근 모서리 (radius-full) */
  rounded?: boolean
  /** 원형 (width=height 기준) */
  circle?: boolean
  /** text variant 시 줄 수 */
  lines?: number
  /** 인라인 style (width/height/radius보다 우선) */
  style?: CSSProperties
}