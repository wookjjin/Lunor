import type { HTMLAttributes, ReactNode } from 'react'

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger'

// HTMLAttributes에서 'title'을 제외한 타입을 베이스로 사용합니다.
export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 색상 변형 */
  variant?: AlertVariant
  /** 타이틀 (이제 ReactNode를 마음껏 사용할 수 있습니다!) */
  title?: ReactNode
  /** 설명 텍스트 */
  description?: ReactNode
  /** 커스텀 아이콘 (Material Symbols 이름, 미지정 시 variant 기본값) */
  icon?: string
  /** 닫기 버튼 표시 여부 */
  closable?: boolean
  /** 닫기 콜백 */
  onClose?: () => void
  /** 우측 액션 영역 (버튼, 링크 등) */
  action?: ReactNode
}
