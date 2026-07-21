import type { TooltipProps } from '@/core/components/Tooltip/Tooltip.types'
import { useCallback, useRef, useState } from 'react'

export function Tooltip({
  content,
  placement = 'top',
  delay = 300,
  children,
  className,
  ...props
}: TooltipProps) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => setOpen(true), delay)
  }, [delay])

  const hide = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    setOpen(false)
  }, [])

  return (
    <div
      className={[
        'tooltip',
        `tooltip--${placement}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      {...props}
    >
      {children}
      {open && (
        <span
          className={`tooltip__bubble tooltip__bubble--${placement}`}
          role="tooltip"
        >
          {content}
        </span>
      )}
    </div>
  )
}