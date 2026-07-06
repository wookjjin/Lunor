import type { ToastProps } from '@/core/components/Toast/Toast.types'

export function Toast({
  variant = 'info',
  title,
  description,
  icon,
  closable = true,
  onClose,
  className,
  ...props
}: ToastProps) {
  const defaultIcon = {
    info: 'info',
    success: 'check_circle',
    warning: 'warning',
    danger: 'error',
  }[variant]

  return (
    <div
      className={[
        'toast',
        `toast--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="alert"
      {...props}
    >
      <span className="toast__icon material-symbols-outlined" aria-hidden="true">
        {icon ?? defaultIcon}
      </span>
      <div className="toast__content">
        {title && <p className="toast__title">{title}</p>}
        {description && <p className="toast__description">{description}</p>}
      </div>
      {closable && (
        <button
          type="button"
          className="toast__close"
          onClick={onClose}
          aria-label="Close toast"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      )}
    </div>
  )
}
