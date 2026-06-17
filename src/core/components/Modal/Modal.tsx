import type { ReactNode } from 'react'
import { Button } from '@/core/components/Button/Button'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  title?: string
}

export function Modal({ children, isOpen, onClose, title }: ModalProps) {
  if (!isOpen)
    return null

  return (
    <div role="dialog" aria-modal="true">
      <div onClick={onClose} />
      <div>
        {title && <h2>{title}</h2>}
        <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close">
          ✕
        </Button>
        {children}
      </div>
    </div>
  )
}
