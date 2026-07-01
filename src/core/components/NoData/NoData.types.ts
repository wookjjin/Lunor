import type { ReactNode } from 'react'
import type { HTMLAttributes } from 'react'

export type NoDataSize = 'sm' | 'md' | 'lg'

export interface NoDataProps extends HTMLAttributes<HTMLDivElement> {
  /** Material Symbols 아이콘 이름 (빈 문자열 시 아이콘 미표시) */
  icon?: string
  /** 메인 타이틀 */
  title?: ReactNode
  /** 보조 설명 텍스트 */
  description?: ReactNode
  /** 하단 액션 영역 (버튼, 링크 등) */
  action?: ReactNode
  /** 크기 */
  size?: NoDataSize
}