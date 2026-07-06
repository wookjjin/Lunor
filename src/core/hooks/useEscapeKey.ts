import { useEffect } from 'react'

/**
 * useEscapeKey — Escape 키 감지
 * @param handler Escape 키 눌림 시 호출할 콜백
 * @param enabled 활성화 여부 (기본: true)
 */
export function useEscapeKey(handler: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled)
      return

    const listener = (event: KeyboardEvent) => {
      if (event.key === 'Escape')
        handler()
    }

    document.addEventListener('keydown', listener)

    return () => document.removeEventListener('keydown', listener)
  }, [handler, enabled])
}
