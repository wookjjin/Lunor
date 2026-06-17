import type { DropdownContentProps } from '@/core/components/Dropdown/Dropdown.types'
import { useEffect, useRef } from 'react'
import { useDropdownContext } from '@/core/components/Dropdown/Dropdown.context'

export function DropdownContent({ children, className }: DropdownContentProps) {
  const { open, setOpen, placement } = useDropdownContext()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open || !ref.current)
      return

    const items = Array.from(
      ref.current.querySelectorAll<HTMLButtonElement>(
        '[role="menuitem"]:not(:disabled)',
      ),
    )

    const onKeyDown = (e: KeyboardEvent) => {
      const index = items.findIndex(el => el === document.activeElement)

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          items[(index + 1) % items.length]?.focus()
          break
        case 'ArrowUp':
          e.preventDefault()
          items[(index - 1 + items.length) % items.length]?.focus()
          break
        case 'Home':
          e.preventDefault()
          items[0]?.focus()
          break
        case 'End':
          e.preventDefault()
          items[items.length - 1]?.focus()
          break
        case 'Escape':
          setOpen(false)
          break
      }
    }

    document.addEventListener('keydown', onKeyDown)
    items[0]?.focus()

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, setOpen])

  if (!open)
    return null

  return (
    <div
      ref={ref}
      role="menu"
      className={['dropdown__content', `dropdown__content--${placement}`, className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}
