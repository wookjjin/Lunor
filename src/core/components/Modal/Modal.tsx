import type { ReactNode } from 'react'

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
        <button type="button" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}
