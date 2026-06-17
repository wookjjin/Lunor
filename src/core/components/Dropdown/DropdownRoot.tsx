import type { DropdownRootProps } from '@/core/components/Dropdown/Dropdown.types'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { DropdownContext } from '@/core/components/Dropdown/Dropdown.context'

export function DropdownRoot({
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  placement = 'bottom-start',
}: DropdownRootProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)

  const isControlled = open !== undefined
  const currentOpen = open ?? internalOpen

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(nextOpen)
      }

      onOpenChange?.(nextOpen)
    },
    [isControlled, onOpenChange],
  )

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [setOpen])

  const value = useMemo(
    () => ({
      open: currentOpen,
      setOpen,
      placement,
    }),
    [currentOpen, setOpen, placement],
  )

  return (
    <DropdownContext value={value}>
      <div ref={ref} className="dropdown">
        {children}
      </div>
    </DropdownContext>
  )
}
