import type { SwitchProps } from '@/core/components/Switch/Switch.types'
import { useId, useState } from 'react'

export function Switch({
  variant = 'default',
  size = 'md',
  checked: checkedProp,
  defaultChecked = false,
  disabled = false,
  label,
  description,
  className,
  children,
  onChange,
  ...props
}: SwitchProps) {
  const isControlled = checkedProp !== undefined
  const [internalChecked, setInternalChecked] = useState(defaultChecked)
  const checked = isControlled ? checkedProp : internalChecked

  const generatedId = useId()
  const switchId = props.id ?? generatedId

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled)
      setInternalChecked(event.target.checked)
    onChange?.(event)
  }

  return (
    <label
      className={[
        'switch',
        `switch--${size}`,
        `switch--${variant}`,
        checked && 'switch--checked',
        disabled && 'switch--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      htmlFor={switchId}
    >
      <input
        type="checkbox"
        id={switchId}
        className="switch__input"
        checked={isControlled ? checked : undefined}
        defaultChecked={isControlled ? undefined : checked}
        disabled={disabled}
        onChange={handleChange}
        role="switch"
        aria-checked={checked}
        {...props}
      />
      <span className="switch__track" aria-hidden="true">
        <span className="switch__thumb" />
      </span>
      {(label || children) && (
        <span className="switch__text">
          {label ?? children}
          {description && <span className="switch__description">{description}</span>}
        </span>
      )}
    </label>
  )
}
