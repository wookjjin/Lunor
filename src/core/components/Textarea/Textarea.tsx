import type { TextareaProps } from '@/core/components/Textarea/Textarea.types'
import { useId, useState } from 'react'

export function Textarea({
  variant = 'outline',
  size = 'md',
  invalid = false,
  disabled = false,
  fullWidth = false,
  resize = 'vertical',
  rows = 4,
  placeholder = 'Enter text...',
  value: valueProp,
  defaultValue,
  name,
  className,
  onChange,
  ...props
}: TextareaProps) {
  const isControlled = valueProp !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const value = isControlled ? valueProp : internalValue

  const generatedId = useId()
  const textareaId = props.id ?? generatedId

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isControlled)
      setInternalValue(event.target.value)
    onChange?.(event)
  }

  return (
    <textarea
      id={textareaId}
      name={name}
      rows={rows}
      className={[
        'textarea',
        `textarea--${variant}`,
        `textarea--${size}`,
        `textarea--resize-${resize}`,
        invalid && 'textarea--invalid',
        disabled && 'textarea--disabled',
        fullWidth && 'textarea--full-width',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      placeholder={placeholder}
      aria-invalid={invalid || undefined}
      value={isControlled ? value : undefined}
      defaultValue={isControlled ? undefined : value}
      disabled={disabled}
      onChange={handleChange}
      {...props}
    />
  )
}
