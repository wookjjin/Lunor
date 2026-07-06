import type { SelectProps } from '@/core/components/Select/Select.types'
import { useId, useState } from 'react'

export function Select({
  variant = 'outline',
  size = 'md',
  invalid = false,
  disabled = false,
  fullWidth = false,
  placeholder = 'Select an option',
  value: valueProp,
  defaultValue,
  name,
  className,
  children,
  onChange,
  ...props
}: SelectProps) {
  const isControlled = valueProp !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const value = isControlled ? valueProp : internalValue

  const generatedId = useId()
  const selectId = props.id ?? generatedId

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (!isControlled)
      setInternalValue(event.target.value)
    onChange?.(event)
  }

  return (
    <div
      className={[
        'select',
        `select--${variant}`,
        `select--${size}`,
        invalid && 'select--invalid',
        disabled && 'select--disabled',
        fullWidth && 'select--full-width',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <select
        id={selectId}
        name={name}
        className="select__native"
        value={isControlled ? value : undefined}
        defaultValue={isControlled ? undefined : value}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {children}
      </select>
      <span className="select__icon material-symbols-outlined" aria-hidden="true">
        expand_more
      </span>
    </div>
  )
}
