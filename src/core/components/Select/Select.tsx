import type { KeyboardEvent } from 'react'
import type { SelectOption, SelectProps } from '@/core/components/Select/Select.types'
import { useEffect, useId, useRef, useState } from 'react'
import { useClickOutside } from '@/core/hooks/useClickOutside'
import { useEscapeKey } from '@/core/hooks/useEscapeKey'

/* =============================================================================
   Select — 완전 커스텀 리스트박스 기반 선택 컴포넌트
   네이티브 <select>의 옵션 팝업은 브라우저가 렌더링해 스타일 커스텀이 불가능하므로,
   Dropdown과 동일하게 팝업을 직접 그려 디자인 시스템 룩앤필을 유지한다.
   ============================================================================= */

export function Select({
  options,
  value: valueProp,
  defaultValue,
  onChange,
  placeholder = 'Select an option',
  variant = 'outline',
  size = 'md',
  invalid = false,
  disabled = false,
  fullWidth = false,
  name,
  id,
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')

  const isControlled = valueProp !== undefined
  const value = isControlled ? valueProp : internalValue
  const selectedOption = options.find(option => option.value === value)

  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const generatedId = useId()
  const selectId = id ?? generatedId

  useClickOutside(rootRef, () => setOpen(false), open)
  useEscapeKey(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, open)

  useEffect(() => {
    if (!open || !listRef.current)
      return

    const items = Array.from(
      listRef.current.querySelectorAll<HTMLDivElement>('[role="option"]:not([aria-disabled="true"])'),
    )
    const activeIndex = items.findIndex(el => el.dataset.value === value)

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      const index = items.findIndex(el => el === document.activeElement)

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          items[(index + 1) % items.length]?.focus()
          break
        case 'ArrowUp':
          event.preventDefault()
          items[(index - 1 + items.length) % items.length]?.focus()
          break
        case 'Home':
          event.preventDefault()
          items[0]?.focus()
          break
        case 'End':
          event.preventDefault()
          items[items.length - 1]?.focus()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    ;(items[activeIndex] ?? items[0])?.focus()

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, value])

  const handleSelect = (option: SelectOption) => {
    if (option.disabled)
      return

    if (!isControlled)
      setInternalValue(option.value)

    onChange?.(option.value)
    setOpen(false)
    triggerRef.current?.focus()
  }

  const handleOptionKeyDown = (event: KeyboardEvent<HTMLDivElement>, option: SelectOption) => {
    if (option.disabled)
      return
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleSelect(option)
    }
  }

  const handleTriggerClick = () => {
    if (disabled)
      return
    setOpen(prev => !prev)
  }

  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (disabled)
      return
    if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      setOpen(true)
    }
  }

  return (
    <div
      ref={rootRef}
      className={['select', fullWidth && 'select--full-width', className].filter(Boolean).join(' ')}
    >
      {name && <input type="hidden" name={name} value={value} />}

      <div
        ref={triggerRef}
        id={selectId}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-disabled={disabled || undefined}
        className={[
          'select__trigger',
          'input',
          `input--${variant}`,
          `input--${size}`,
          invalid && 'input--invalid',
          fullWidth && 'input--full-width',
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className={['select__value', !selectedOption && 'select__value--placeholder'].filter(Boolean).join(' ')}>
          {selectedOption?.label ?? placeholder}
        </span>
        <span className="select__icon material-symbols-outlined" aria-hidden="true">
          expand_more
        </span>
      </div>

      {open && (
        <div ref={listRef} role="listbox" aria-labelledby={selectId} className="select__content">
          {options.map(option => (
            <div
              key={option.value}
              role="option"
              tabIndex={option.disabled ? -1 : 0}
              aria-selected={option.value === value}
              aria-disabled={option.disabled || undefined}
              data-value={option.value}
              className={[
                'select__option',
                option.value === value && 'select__option--selected',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => handleSelect(option)}
              onKeyDown={event => handleOptionKeyDown(event, option)}
            >
              <span className="select__option-label">{option.label}</span>
              {option.value === value && (
                <span className="select__option-check material-symbols-outlined" aria-hidden="true">
                  check
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
