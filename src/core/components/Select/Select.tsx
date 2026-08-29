import type { KeyboardEvent } from 'react'
import type { SelectOption, SelectProps } from '@/core/components/Select/Select.types'
import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { NoData } from '@/core/components/NoData/NoData'
import { useClickOutside } from '@/core/hooks/useClickOutside'
import { useEscapeKey } from '@/core/hooks/useEscapeKey'

/* =============================================================================
   Select — 완전 커스텀 리스트박스 기반 선택 컴포넌트
   네이티브 <select>의 옵션 팝업은 브라우저가 렌더링해 스타일 커스텀이 불가능하므로,
   Dropdown과 동일하게 팝업을 직접 그려 디자인 시스템 룩앤필을 유지한다.

   auto-flip 기준 컨테이너: 뷰포트가 아니라 가장 가까운 "경계" 조상을 찾아 그 안쪽 공간을 기준으로 뒤집는다.
   Showcase 카드(.showcase__item)처럼 container-type을 선언한 요소가 있으면 그걸 경계로 삼고,
   없으면(일반 페이지) 뷰포트로 폴백한다.

   TODO (확장 범위 — 필요해지면 별도 작업으로 진행):
   - 다중 선택(멀티 셀렉트) 미지원. 현재는 단일 value 전용 설계.
   - Dropdown에 있는 onOpenChange 콜백이 없어 부모가 열림 상태를 관찰할 수 없음.
   - ref/onBlur를 노출하지 않아 react-hook-form 등 폼 라이브러리의 register() 패턴과
     연동하기 어려움 (div 기반 커스텀 위젯이라 네이티브 ref 포워딩이 자연스럽지 않음).
   - optgroup(옵션 그룹핑) 미지원 — 카테고리별로 옵션을 묶을 방법이 없음.
   ============================================================================= */

/** container-type을 선언한 가장 가까운 조상(카드 등 시각적 경계)을 찾는다. 없으면 null. */
function findBoundaryElement(start: HTMLElement | null): HTMLElement | null {
  let el = start?.parentElement ?? null
  while (el && el !== document.body) {
    if (getComputedStyle(el).containerType !== 'normal')
      return el
    el = el.parentElement
  }
  return null
}

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
  const [placement, setPlacement] = useState<'top' | 'bottom'>('bottom')

  const isControlled = valueProp !== undefined
  const value = isControlled ? valueProp : internalValue
  const selectedOption = options.find(option => option.value === value)

  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const typeaheadRef = useRef({ query: '', timer: null as ReturnType<typeof setTimeout> | null })

  const generatedId = useId()
  const selectId = id ?? generatedId

  useClickOutside(rootRef, () => setOpen(false), open)
  useEscapeKey(() => {
    setOpen(false)
    triggerRef.current?.focus()
  }, open)

  // disabled로 전환되면 열려있던 팝업을 강제로 닫는다 (예: 선택 직후 비동기 저장 중 disabled 처리)
  useEffect(() => {
    if (disabled) {
      // eslint-disable-next-line react/set-state-in-effect -- 외부 prop(disabled) 변화에 대한 동기화이므로 렌더 중 파생 불가
      setOpen(false)
    }
  }, [disabled])

  useEffect(() => {
    if (!open || !listRef.current)
      return

    const items = Array.from(
      listRef.current.querySelectorAll<HTMLDivElement>('[role="option"]:not([aria-disabled="true"])'),
    )
    const activeIndex = items.findIndex(el => el.dataset.value === value)
    ;(items[activeIndex] ?? items[0])?.focus()
  }, [open, value])

  // 열릴 때마다 "경계" 기준 아래쪽 공간이 팝업 높이보다 부족하면 위로 뒤집는다.
  // 경계 = 가장 가까운 container-type 조상(예: Showcase 카드)이 있으면 그 하단, 없으면 뷰포트 하단.
  // 뷰포트보다 경계가 아래로 더 내려가 있는 경우까지 고려해 둘 중 더 타이트한 쪽을 쓴다.
  // offsetHeight는 top/bottom 배치와 무관하게 실제 렌더된 박스 높이를 주므로 측정이 배치에 영향받지 않는다.
  useLayoutEffect(() => {
    if (!open || !listRef.current || !triggerRef.current)
      return

    const boundary = findBoundaryElement(triggerRef.current)
    const boundaryBottom = boundary
      ? Math.min(boundary.getBoundingClientRect().bottom, window.innerHeight)
      : window.innerHeight
    const spaceBelow = boundaryBottom - triggerRef.current.getBoundingClientRect().bottom
    const contentHeight = listRef.current.offsetHeight
    // eslint-disable-next-line react/set-state-in-effect -- DOM 레이아웃 측정 후 배치를 정하는 패턴이라 렌더 중 계산 불가
    setPlacement(contentHeight > spaceBelow ? 'top' : 'bottom')
  }, [open])

  const jumpToTypeaheadMatch = (char: string, items: HTMLDivElement[]) => {
    const state = typeaheadRef.current
    if (state.timer)
      clearTimeout(state.timer)
    state.query += char.toLowerCase()
    state.timer = setTimeout(() => {
      state.query = ''
    }, 500)

    const currentIndex = items.findIndex(el => el === document.activeElement)
    const ordered = [...items.slice(currentIndex + 1), ...items.slice(0, currentIndex + 1)]
    const match = ordered.find((el) => {
      const option = options.find(o => o.value === el.dataset.value)
      const text = typeof option?.label === 'string' ? option.label.toLowerCase() : ''
      return text.startsWith(state.query)
    })
    match?.focus()
  }

  const handleListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!listRef.current)
      return

    const items = Array.from(
      listRef.current.querySelectorAll<HTMLDivElement>('[role="option"]:not([aria-disabled="true"])'),
    )
    const index = items.findIndex(el => el === document.activeElement)

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        items[index === -1 ? 0 : (index + 1) % items.length]?.focus()
        break
      case 'ArrowUp':
        event.preventDefault()
        items[index === -1 ? items.length - 1 : (index - 1 + items.length) % items.length]?.focus()
        break
      case 'Home':
        event.preventDefault()
        items[0]?.focus()
        break
      case 'End':
        event.preventDefault()
        items[items.length - 1]?.focus()
        break
      default:
        // Space/Enter는 옵션 선택용 키이므로 타이핑 검색에서 제외 (개별 옵션의 onKeyDown이 처리)
        if (event.key.length === 1 && event.key !== ' ' && !event.ctrlKey && !event.metaKey && !event.altKey) {
          event.preventDefault()
          jumpToTypeaheadMatch(event.key, items)
        }
        break
    }
  }

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
      event.stopPropagation()
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
      {name && <input type="hidden" name={name} value={value} readOnly />}

      <div
        ref={triggerRef}
        id={selectId}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-disabled={disabled || undefined}
        aria-invalid={invalid || undefined}
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
        <div
          ref={listRef}
          role="listbox"
          aria-labelledby={selectId}
          className={['select__content', placement === 'top' && 'select__content--top'].filter(Boolean).join(' ')}
          onKeyDown={handleListKeyDown}
        >
          {options.length === 0 && (
            <NoData size="sm" icon="search_off" title="No options" />
          )}
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
