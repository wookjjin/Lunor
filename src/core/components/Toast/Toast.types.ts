import type { HTMLAttributes, ReactNode } from 'react'

export type ToastVariant
  = | 'info'
    | 'success'
    | 'warning'
    | 'danger'

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** 색상 변형 */
  variant?: ToastVariant
  /** 타이틀 */
  title?: ReactNode
  /** 설명 텍스트 */
  description?: ReactNode
  /** 커스텀 아이콘 (Material Symbols 이름, 미지정 시 variant 기본값) */
  icon?: string
  /** 닫기 버튼 표시 여부 */
  closable?: boolean
  /** 닫기 콜백 */
  onClose?: () => void
}

export interface ToastOptions {
  variant?: ToastVariant
  title?: ReactNode
  description?: ReactNode
  icon?: string
  duration?: number
  closable?: boolean
}

export interface ToastContextValue {
  toast: (options: ToastOptions) => void
  dismiss: (id: string) => void
  dismissAll: () => void
}
