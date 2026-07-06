import { useCallback, useRef, useState } from 'react'

/**
 * useClipboard — 클립보드 복사 + 상태 관리
 * @param timeout 복사 완료 상태 유지 시간 (ms, 기본: 2000)
 * @returns { copied, copy } — copied: 복사 완료 여부, copy: 복사 함수
 */
export function useClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)

        if (timerRef.current)
          clearTimeout(timerRef.current)

        timerRef.current = setTimeout(setCopied, timeout, false)
      }
      catch {
        setCopied(false)
      }
    },
    [timeout],
  )

  return { copied, copy } as const
}
