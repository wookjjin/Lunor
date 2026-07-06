import type { HTMLAttributes, ReactNode } from 'react'

export type ConfirmDialogVariant
  = | 'default'
    | 'warning'
    | 'danger'

export type ConfirmDialogSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface ConfirmDialogProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 열림 상태 */
  open: boolean
  /** 타이틀 */
  title?: ReactNode
  /** 설명 */
  description?: ReactNode
  /** 확인 버튼 라벨 */
  confirmLabel?: string
  /** 취소 버튼 라벨 */
  cancelLabel?: string
  /** 색상 변형 */
  variant?: ConfirmDialogVariant
  /** 크기 */
  size?: ConfirmDialogSize
  /** 확인 콜백 */
  onConfirm?: () => void
  /** 취소 콜백 */
  onCancel?: () => void
  /** 추가 내용 (children) */
  children?: ReactNode
}
