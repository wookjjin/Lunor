import type { InputGroupProps } from '@/core/components/InputGroup/InputGroup.types'

export function InputGroup({
  variant = 'outline',
  size = 'md',
  invalid = false,
  disabled = false,
  fullWidth = false,
  prefix,
  suffix,
  icon,
  iconRight = false,
  className,
  children,
  ...props
}: InputGroupProps) {
  return (
    <div
      className={[
        'input-group',
        `input-group--${variant}`,
        `input-group--${size}`,
        invalid && 'input-group--invalid',
        disabled && 'input-group--disabled',
        fullWidth && 'input-group--full-width',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Left icon */}
      {icon && !iconRight && (
        <span className="input-group__icon input-group__icon--left material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}

      {/* Prefix addon */}
      {prefix && (
        <span className="input-group__addon input-group__addon--left">
          {prefix}
        </span>
      )}

      {/* Input element (children) */}
      <div className="input-group__field">
        {children}
      </div>

      {/* Suffix addon */}
      {suffix && (
        <span className="input-group__addon input-group__addon--right">
          {suffix}
        </span>
      )}

      {/* Right icon */}
      {icon && iconRight && (
        <span className="input-group__icon input-group__icon--right material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
    </div>
  )
}