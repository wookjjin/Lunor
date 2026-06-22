import type { KeyboardEvent } from 'react'
import type { DropdownItemProps } from '@/core/components/Dropdown/Dropdown.types'
import { useDropdownContext } from '@/core/components/Dropdown/Dropdown.context'

export function DropdownItem({
  children,
  disabled = false,
  danger = false,
  onSelect,
}: DropdownItemProps) {
  const { setOpen } = useDropdownContext()

  const handleSelect = () => {
    if (disabled)
      return

    onSelect?.()
    setOpen(false)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled)
      return
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault()
      handleSelect()
    }
  }

  return (
    <div
      role="menuitem"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled || undefined}
      className={[
        'dropdown__item',
        danger && 'dropdown__item--danger',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={handleSelect}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  )
}
