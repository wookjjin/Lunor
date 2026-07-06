import type { ReactNode } from 'react'
import type { AccordionItemProps, AccordionProps } from '@/core/components/Accordion/Accordion.types'
import { createContext, use, useCallback, useId, useState } from 'react'

/* =============================================================================
   Accordion — Collapsible Sections
   단일/다중 확장 모드 지원, context로 상태 관리
   ============================================================================= */

interface AccordionContextValue {
  openItems: Set<string>
  toggle: (id: string) => void
  multiple: boolean
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordionContext() {
  const ctx = use(AccordionContext)
  if (!ctx)
    throw new Error('Accordion components must be used within Accordion')
  return ctx
}

export function Accordion({
  multiple = false,
  defaultOpen = [],
  className,
  children,
  ...props
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(() => new Set(defaultOpen))

  const toggle = useCallback((id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      }
      else {
        if (!multiple)
          next.clear()
        next.add(id)
      }
      return next
    })
  }, [multiple])

  const value: AccordionContextValue = { openItems, toggle, multiple }

  return (
    <AccordionContext value={value}>
      <div
        className={['accordion', className].filter(Boolean).join(' ')}
        {...props}
      >
        {children}
      </div>
    </AccordionContext>
  )
}

export function AccordionItem({
  id,
  title,
  icon,
  disabled = false,
  children,
  className,
  ...props
}: AccordionItemProps) {
  const { openItems, toggle } = useAccordionContext()
  const generatedId = useId()
  const itemId = id ?? `accordion-item-${generatedId}`
  const isOpen = openItems.has(itemId)

  const handleClick = () => {
    if (!disabled)
      toggle(itemId)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled)
      return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(itemId)
    }
  }

  return (
    <div
      className={[
        'accordion__item',
        isOpen && 'accordion__item--open',
        disabled && 'accordion__item--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <button
        type="button"
        className="accordion__header"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-disabled={disabled || undefined}
        disabled={disabled}
      >
        {icon && (
          <span className="accordion__icon material-symbols-outlined" aria-hidden="true">
            {icon}
          </span>
        )}
        <span className="accordion__title">{title}</span>
        <span className="accordion__chevron material-symbols-outlined" aria-hidden="true">
          {isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
        </span>
      </button>
      <div
        className="accordion__panel"
        hidden={!isOpen}
      >
        <div className="accordion__content">
          {children as ReactNode}
        </div>
      </div>
    </div>
  )
}
