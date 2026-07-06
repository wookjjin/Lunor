import { useEffect, useRef } from 'react'

/**
 * useFocusTrap — 모달/드로어 포커스 트랩
 * 지정한 컨테이너 내부에서만 Tab 키 포커스 이동을 제한
 * @param ref 포커스를 트랩할 컨테이너 ref
 * @param active 활성화 여부 (기본: true)
 */
export function useFocusTrap(
  ref: React.RefObject<HTMLElement | null>,
  active = true,
) {
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!active || !ref.current)
      return

    const container = ref.current

    // 현재 포커스 저장
    previousFocusRef.current = document.activeElement as HTMLElement

    // 컨테이너 내 포커스 가능한 요소 수집
    const getFocusable = (): HTMLElement[] => {
      return Array.from(
        container.querySelectorAll<HTMLElement>(
          'button:not(:disabled), [href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter(el => el.offsetParent !== null)
    }

    // 컨테이너로 포커스 이동
    const focusable = getFocusable()
    focusable[0]?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab')
        return

      const currentFocusable = getFocusable()
      if (currentFocusable.length === 0)
        return

      const first = currentFocusable[0]
      const last = currentFocusable[currentFocusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      }
      else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    container.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('keydown', handleKeyDown)
      previousFocusRef.current?.focus()
    }
  }, [ref, active])
}
