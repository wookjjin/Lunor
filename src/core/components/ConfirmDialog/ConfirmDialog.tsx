import type { ConfirmDialogProps } from '@/core/components/ConfirmDialog/ConfirmDialog.types'
import { useEffect } from 'react'
import { Button } from '@/core/components/Button/Button'

export function ConfirmDialog({
  open,
  title = 'Confirm',
  description = 'Are you sure you want to proceed?',
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'default',
  size = 'sm',
  onConfirm,
  onCancel,
  children,
  ...props
}: ConfirmDialogProps) {
  useEffect(() => {
    if (!open)
      return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape')
        onCancel?.()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onCancel])

  if (!open)
    return null

  return (
    <div
      className={[
        'confirm-dialog',
        `confirm-dialog--${variant}`,
        `confirm-dialog--${size}`,
      ]
        .filter(Boolean)
        .join(' ')}
      role="alertdialog"
      aria-modal="true"
      {...props}
    >
      <div className="confirm-dialog__overlay" onClick={onCancel} />
      <div className="confirm-dialog__panel">
        <div className="confirm-dialog__icon-wrapper">
          <span className="confirm-dialog__icon material-symbols-outlined" aria-hidden="true">
            {variant === 'danger' ? 'error' : variant === 'warning' ? 'warning' : 'help'}
          </span>
        </div>
        <div className="confirm-dialog__content">
          {title && <h2 className="confirm-dialog__title">{title}</h2>}
          {description && <p className="confirm-dialog__description">{description}</p>}
          {children}
        </div>
        <div className="confirm-dialog__actions">
          <Button variant="ghost" size="md" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button
            variant={variant === 'danger' ? 'danger' : 'solid'}
            size="md"
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
