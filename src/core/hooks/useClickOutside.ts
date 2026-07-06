import type { RefObject } from 'react'
import { useEffect } from 'react'

/**
 * useClickOutside — 요소 외부 클릭 감지
 * @param ref 감지할 요소의 ref
 * @param handler 외부 클릭 시 호출할 콜백
 * @param enabled 활성화 여부 (기본: true)
 */
export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled)
      return

    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current
      if (!el || el.contains(event.target as Node))
        return
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, enabled])
}
