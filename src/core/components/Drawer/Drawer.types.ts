import type { HTMLAttributes, ReactNode } from 'react'

export type DrawerSide
  = | 'left'
    | 'right'
    | 'top'
    | 'bottom'

export type DrawerSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 열림 상태 */
  open: boolean
  /** 위치 */
  side?: DrawerSide
  /** 타이틀 */
  title?: ReactNode
  /** 설명 */
  description?: ReactNode
  /** 크기 */
  size?: DrawerSize
  /** 오버레이 클릭 시 닫기 */
  closeOnOverlayClick?: boolean
  /** Escape 키로 닫기 */
  closeOnEscape?: boolean
  /** 닫기 콜백 */
  onClose?: () => void
  /** 푸터 영역 (버튼 등) */
  footer?: ReactNode
  /** 내용 */
  children?: ReactNode
}
