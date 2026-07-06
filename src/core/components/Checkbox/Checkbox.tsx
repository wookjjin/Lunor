import type { CheckboxProps } from '@/core/components/Checkbox/Checkbox.types'

export function Checkbox({
  variant = 'default',
  size = 'md',
  checked: checkedProp,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  label,
  description,
  className,
  children,
  onChange,
  ...props
}: CheckboxProps) {
  const isControlled = checkedProp !== undefined
  const checked = isControlled ? checkedProp : defaultChecked

  return (
    <label
      className={[
        'checkbox',
        `checkbox--${size}`,
        `checkbox--${variant}`,
        indeterminate && 'checkbox--indeterminate',
        disabled && 'checkbox--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        type="checkbox"
        className="checkbox__input"
        checked={isControlled ? checked : undefined}
        defaultChecked={isControlled ? undefined : checked}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
      <span className="checkbox__box" aria-hidden="true">
        {indeterminate
          ? (
              <span className="checkbox__icon material-symbols-outlined">remove</span>
            )
          : checked
            ? (
                <span className="checkbox__icon material-symbols-outlined">check</span>
              )
            : null}
      </span>
      {(label || children) && (
        <span className="checkbox__text">
          {label ?? children}
          {description && <span className="checkbox__description">{description}</span>}
        </span>
      )}
    </label>
  )
}
