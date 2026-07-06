import type { HTMLAttributes, ReactNode } from 'react'

export type NoDataSize = 'sm' | 'md' | 'lg'

// HTMLAttributes에서 충돌이 발생하는 'title'을 지워줍니다.
export interface NoDataProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Material Symbols 아이콘 이름 (빈 문자열 시 아이콘 미표시) */
  icon?: string
  /** 메인 타이틀 (이제 ReactNode 타입으로 안전하게 확장됩니다!) */
  title?: ReactNode
  /** 보조 설명 텍스트 */
  description?: ReactNode
  /** 하단 액션 영역 (버튼, 링크 등) */
  action?: ReactNode
  /** 크기 */
  size?: NoDataSize
}
