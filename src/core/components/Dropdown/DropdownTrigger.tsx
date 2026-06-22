import type { KeyboardEvent, ReactElement } from 'react'
import type { DropdownTriggerProps } from '@/core/components/Dropdown/Dropdown.types'
import { cloneElement, isValidElement } from 'react'
import { useDropdownContext } from '@/core/components/Dropdown/Dropdown.context'

interface TriggerChildProps {
  'onClick'?: (event: React.MouseEvent) => void
  'aria-expanded'?: boolean
  'aria-haspopup'?: string
}

export function DropdownTrigger({ children, className, onClick, asChild = false, disabled = false, ...rest }: DropdownTriggerProps) {
  const { open, setOpen } = useDropdownContext()

  const handleClick = (event: React.MouseEvent) => {
    if (disabled)
      return
    onClick?.(event)
    setOpen(!open)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled)
      return
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'Spacebar') {
      event.preventDefault()
      setOpen(!open)
    }
  }

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<TriggerChildProps>
    return cloneElement(child, {
      'aria-expanded': open,
      'aria-haspopup': 'menu',
      'onClick': handleClick,
    })
  }

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-expanded={open}
      aria-haspopup="menu"
      aria-disabled={disabled || undefined}
      className={[
        'dropdown__trigger',
        'input',
        'input--outline',
        'input--md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </div>
  )
}
