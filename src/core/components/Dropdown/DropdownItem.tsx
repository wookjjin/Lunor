import type { DropdownItemProps } from '@/core/components/Dropdown/Dropdown.types'
import { useDropdownContext } from '@/core/components/Dropdown/Dropdown.context'

export function DropdownItem({
  children,
  disabled = false,
  danger = false,
  onSelect,
}: DropdownItemProps) {
  const { setOpen } = useDropdownContext()

  return (
    <button
      type="button"
      role="menuitem"
      disabled={disabled}
      className={[
        'dropdown__item',
        danger && 'dropdown__item--danger',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={() => {
        if (disabled)
          return

        onSelect?.()
        setOpen(false)
      }}
    >
      {children}
    </button>
  )
}
