import type { HTMLAttributes, ReactNode } from 'react'

export type PopoverPlacement
  = | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'

export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** 기본 열림 상태 (uncontrolled) */
  defaultOpen?: boolean
  /** 제어 상태 (controlled) */
  open?: boolean
  /** 열림/닫힘 콜백 */
  onOpenChange?: (open: boolean) => void
  /** 위치 */
  placement?: PopoverPlacement
  /** 트리거 요소 */
  trigger: ReactNode
  /** 팝오버 내용 */
  children?: ReactNode
}
