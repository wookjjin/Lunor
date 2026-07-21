import type { ModalProps } from '@/core/components/Modal/Modal.types'
import { Dialog } from '@/core/components/Dialog/Dialog'

/**
 * Modal — Dialog의 레거시 alias
 * Dialog 컴포넌트에 위임하여 동일한 동작을 보장.
 * 기존 `isOpen` → `open`, `title` → `title` 매핑.
 */
export function Modal({ children, isOpen, onClose, title, size }: ModalProps) {
  return (
    <Dialog
      open={isOpen}
      size={size}
      title={title}
      onClose={onClose}
    >
      {children}
    </Dialog>
  )
}
