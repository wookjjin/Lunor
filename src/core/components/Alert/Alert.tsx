import type { AlertProps } from '@/core/components/Alert/Alert.types'
import { useState } from 'react'

export function Alert({
  variant = 'info',
  title,
  description,
  icon,
  closable = false,
  onClose,
  action,
  className,
  ...props
}: AlertProps) {
  const [visible, setVisible] = useState(true)

  if (!visible)
    return null

  const defaultIcon = {
    info: 'info',
    success: 'check_circle',
    warning: 'warning',
    danger: 'error',
  }[variant]

  const handleClose = () => {
    setVisible(false)
    onClose?.()
  }

  return (
    <div
      className={[
        'alert',
        `alert--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="alert"
      {...props}
    >
      <span className="alert__icon material-symbols-outlined" aria-hidden="true">
        {icon ?? defaultIcon}
      </span>
      <div className="alert__content">
        {title && <p className="alert__title">{title}</p>}
        {description && <p className="alert__description">{description}</p>}
      </div>
      {action && <div className="alert__action">{action}</div>}
      {closable && (
        <button
          type="button"
          className="alert__close"
          onClick={handleClose}
          aria-label="Close alert"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      )}
    </div>
  )
}
