import type { PopoverProps } from '@/core/components/Popover/Popover.types'
import { useCallback, useEffect, useRef, useState } from 'react'

export function Popover({
  defaultOpen = false,
  open: openProp,
  onOpenChange,
  placement = 'bottom-start',
  trigger,
  children,
  className,
  ...props
}: PopoverProps) {
  const isControlled = openProp !== undefined
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const open = isControlled ? openProp : internalOpen
  const ref = useRef<HTMLDivElement>(null)

  const setOpen = useCallback((next: boolean) => {
    if (!isControlled)
      setInternalOpen(next)
    onOpenChange?.(next)
  }, [isControlled, onOpenChange])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && ref.current && !ref.current.contains(e.target as Node))
        setOpen(false)
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape')
        setOpen(false)
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open, setOpen])

  return (
    <div
      ref={ref}
      className={[
        'popover',
        `popover--${placement}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <div
        className="popover__trigger"
        onClick={() => setOpen(!open)}
      >
        {trigger}
      </div>
      {open && (
        <div className={`popover__content popover__content--${placement}`}>
          {children}
        </div>
      )}
    </div>
  )
}
