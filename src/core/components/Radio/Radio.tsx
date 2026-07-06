import type { RadioGroupProps, RadioProps } from '@/core/components/Radio/Radio.types'
import { createContext, use, useMemo, useState } from 'react'

/* =============================================================================
   RadioGroup — 라디오 그룹 컨테이너
   context를 통해 name/value/onChange를 하위 Radio에 전달
   ============================================================================= */

interface RadioContextValue {
  name: string
  value: string | undefined
  onChange: (value: string) => void
}

const RadioContext = createContext<RadioContextValue | null>(null)

function useRadioContext() {
  const ctx = use(RadioContext)
  if (!ctx)
    throw new Error('Radio components must be used within Radio.Group')
  return ctx
}

/* ── RadioGroup ── */
export function RadioGroup({
  name,
  value: valueProp,
  defaultValue,
  onValueChange,
  orientation = 'vertical',
  className,
  children,
}: RadioGroupProps) {
  const isControlled = valueProp !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue)

  const value = isControlled ? valueProp : internalValue

  const handleChange = useMemo(
    () => (nextValue: string) => {
      if (!isControlled)
        setInternalValue(nextValue)
      onValueChange?.(nextValue)
    },
    [isControlled, onValueChange],
  )

  const ctx = useMemo(
    () => ({ name, value, onChange: handleChange }),
    [name, value, handleChange],
  )

  return (
    <RadioContext value={ctx}>
      <div
        className={[
          'radio-group',
          `radio-group--${orientation}`,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        role="radiogroup"
      >
        {children}
      </div>
    </RadioContext>
  )
}

/* ── Radio ── */
export function Radio({
  value,
  variant = 'default',
  size = 'md',
  disabled = false,
  label,
  description,
  className,
  children,
  ...props
}: RadioProps) {
  const { name, value: groupValue, onChange } = useRadioContext()
  const checked = groupValue === value

  return (
    <label
      className={[
        'radio',
        `radio--${size}`,
        `radio--${variant}`,
        checked && 'radio--checked',
        disabled && 'radio--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        type="radio"
        className="radio__input"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange(value)}
        {...props}
      />
      <span className="radio__box" aria-hidden="true">
        {checked && <span className="radio__dot" />}
      </span>
      {(label || children) && (
        <span className="radio__text">
          {label ?? children}
          {description && <span className="radio__description">{description}</span>}
        </span>
      )}
    </label>
  )
}
