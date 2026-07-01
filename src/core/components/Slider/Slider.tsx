import type { SliderProps } from '@/core/components/Slider/Slider.types'
import { useId, useState } from 'react'

export function Slider({
  variant = 'default',
  size = 'md',
  disabled = false,
  showValue = false,
  min = 0,
  max = 100,
  step = 1,
  value: valueProp,
  defaultValue = 0,
  name,
  className,
  onChange,
  ...props
}: SliderProps) {
  const isControlled = valueProp !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue)
  const value = isControlled ? valueProp : internalValue

  const generatedId = useId()
  const sliderId = props.id ?? generatedId

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled)
      setInternalValue(Number(event.target.value))
    onChange?.(event)
  }

  const percent = ((value - min) / (max - min)) * 100

  return (
    <div
      className={[
        'slider',
        `slider--${size}`,
        `slider--${variant}`,
        disabled && 'slider--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        type="range"
        id={sliderId}
        name={name}
        className="slider__input"
        min={min}
        max={max}
        step={step}
        value={isControlled ? value : undefined}
        defaultValue={isControlled ? undefined : value}
        disabled={disabled}
        onChange={handleChange}
        style={{ '--slider-percent': `${percent}%` } as React.CSSProperties}
        {...props}
      />
      {showValue && (
        <span className="slider__value">{value}</span>
      )}
    </div>
  )
}