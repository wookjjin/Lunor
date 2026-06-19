import type { ReactNode } from 'react'

/** ShowcaseItem 라벨/배지 색상 변형 */
export type ShowcaseItemVariant = 'primary' | 'secondary' | 'ghost' | 'danger'

export interface ShowcaseItemProps {
  /** 카드 헤더 라벨 텍스트 */
  label: string
  /** 라벨/배지 색상 변형 */
  variant: ShowcaseItemVariant
  /** 선택적 배지 텍스트 (예: "Active") */
  badge?: string
  /** 카드 바디 내용 */
  children: ReactNode
  /** 추가 className (예: "glacier-glass") — 외부에서 주입 */
  className?: string
}
