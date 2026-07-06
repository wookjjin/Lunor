import type { ChipProps } from '@/core/components/Chip/Chip.types'
import { useState } from 'react'

export function Chip({
  variant = 'default',
  size = 'md',
  icon,
  removable = false,
  selected: selectedProp,
  defaultSelected = false,
  onSelect,
  onRemove,
  className,
  children,
  ...props
}: ChipProps) {
  const isControlled = selectedProp !== undefined
  const [internalSelected, setInternalSelected] = useState(defaultSelected)
  const selected = isControlled ? selectedProp : internalSelected

  const handleClick = () => {
    if (!isControlled)
      setInternalSelected(!internalSelected)
    onSelect?.(!selected)
  }

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation()
    onRemove?.()
  }

  return (
    <button
      type="button"
      className={[
        'chip',
        `chip--${variant}`,
        `chip--${size}`,
        selected && 'chip--selected',
        removable && 'chip--removable',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={handleClick}
      {...props}
    >
      {icon && (
        <span className="chip__icon material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="chip__label">{children}</span>
      {removable && (
        <span
          className="chip__remove material-symbols-outlined"
          onClick={handleRemove}
          role="button"
          aria-label="Remove"
        >
          close
        </span>
      )}
    </button>
  )
}
