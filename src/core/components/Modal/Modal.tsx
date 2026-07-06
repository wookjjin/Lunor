import type { ReactNode } from 'react'
import { Dialog } from '@/core/components/Dialog/Dialog'

/**
 * Modal — Dialog의 레거시 alias
 * Dialog 컴포넌트에 위임하여 동일한 동작을 보장.
 * 기존 `isOpen` → `open`, `title` → `title` 매핑.
 */
interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
}

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      title={title}
      onClose={onClose}
    >
      {children}
    </Dialog>
  )
}
