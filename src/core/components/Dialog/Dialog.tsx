import type { DialogProps } from '@/core/components/Dialog/Dialog.types'
import { useEffect } from 'react'

import { createPortal } from 'react-dom'

import '@/core/components/Dialog/Dialog.css'

export function Dialog({
  open,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  onClose,
}: DialogProps) {
  useEffect(() => {
    if (!open || !closeOnEscape) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [
    open,
    closeOnEscape,
    onClose,
  ])

  useEffect(() => {
    if (!open) {
      return
    }

    const previousOverflow
      = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow
        = previousOverflow
    }
  }, [open])

  if (!open) {
    return null
  }

  return createPortal(
    <div
      className="dialog-overlay"
      onClick={() => {
        if (closeOnOverlayClick) {
          onClose?.()
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        className={[
          'dialog',
          `dialog--${size}`,
        ].join(' ')}
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        {title && (
          <header className="dialog__header">
            <h2
              id="dialog-title"
              className="dialog__title"
            >
              {title}
            </h2>
          </header>
        )}

        <div className="dialog__body">
          {children}
        </div>

        {footer && (
          <footer className="dialog__footer">
            {footer}
          </footer>
        )}
      </div>
    </div>,
    document.body,
  )
}
