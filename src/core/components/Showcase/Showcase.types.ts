import type { ReactNode } from 'react'

export interface ShowcaseProps {
  /** 페이지 타이틀 */
  title: string
  /** 페이지 설명 */
  description: string
  /** 쇼케이스 카드들 (flex 아이템) */
  children: ReactNode
  /** 인터랙티비티 프리뷰 하단 텍스트 (기본값: 'Real-time state monitoring active') */
  previewText?: string
  /** 추가 className */
  className?: string
}
