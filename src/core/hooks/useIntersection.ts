import { useEffect, useRef, useState } from 'react'

/**
 * useIntersection — IntersectionObserver 래퍼
 * 요소가 뷰포트에 들어오거나 나갈 때 감지
 * @param options IntersectionObserver 옵션
 * @returns [ref, isIntersecting] 튜플
 */
export function useIntersection<T extends Element = HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el)
      return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(el)

    return () => observer.disconnect()
  }, [options])

  return [ref, isIntersecting] as const
}
