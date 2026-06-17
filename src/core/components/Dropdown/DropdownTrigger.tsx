import type { DropdownTriggerProps } from '@/core/components/Dropdown/Dropdown.types'
import { Button } from '@/core/components/Button/Button'
import { useDropdownContext } from '@/core/components/Dropdown/Dropdown.context'

export function DropdownTrigger({ children, onClick, ...rest }: DropdownTriggerProps) {
  const { open, setOpen } = useDropdownContext()

  return (
    <Button
      aria-expanded={open}
      aria-haspopup="menu"
      onClick={(event) => {
        onClick?.(event)
        setOpen(!open)
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}
