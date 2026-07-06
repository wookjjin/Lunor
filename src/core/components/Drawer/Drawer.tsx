import type { DrawerProps } from '@/core/components/Drawer/Drawer.types'
import { useEffect } from 'react'

export function Drawer({
  open,
  side = 'right',
  title,
  description,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  onClose,
  children,
  footer,
  className,
  ...props
}: DrawerProps) {
  useEffect(() => {
    if (!open || !closeOnEscape)
      return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape')
        onClose?.()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, closeOnEscape, onClose])

  if (!open)
    return null

  return (
    <div className="drawer-root">
      <div
        className="drawer__overlay"
        onClick={closeOnOverlayClick ? onClose : undefined}
        aria-hidden="true"
      />
      <aside
        className={[
          'drawer',
          `drawer--${side}`,
          `drawer--${size}`,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        {(title || description) && (
          <div className="drawer__header">
            {title && <h2 className="drawer__title">{title}</h2>}
            {description && <p className="drawer__description">{description}</p>}
            <button
              type="button"
              className="drawer__close"
              onClick={onClose}
              aria-label="Close drawer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        )}
        <div className="drawer__body">
          {children}
        </div>
        {footer && (
          <div className="drawer__footer">
            {footer}
          </div>
        )}
      </aside>
    </div>
  )
}
