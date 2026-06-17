import { useEffect, useState } from 'react'

/**
 * CSS 미디어 쿼리 매칭 상태를 실시간으로 감지하는 훅
 * @param query - CSS 미디어 쿼리 문자열 (예: '(min-width: 1024px)')
 * @returns 현재 미디어 쿼리 매칭 여부
 *
 * @example
 * const isDesktop = useMediaQuery('(min-width: 1024px)')
 * const isTablet = useMediaQuery('(min-width: 768px)')
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    // 초기 상태 동기화
    setMatches(mediaQueryList.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQueryList.addEventListener('change', handleChange)
    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}

/**
 * 브레이크포인트별 상태를 한번에 제공하는 편의 훅
 * tokens/breakpoints.css와 동기화된 값 사용
 */
export function useBreakpoints() {
  const isSm = useMediaQuery('(min-width: 640px)')
  const isMd = useMediaQuery('(min-width: 768px)')
  const isLg = useMediaQuery('(min-width: 1024px)')
  const isXl = useMediaQuery('(min-width: 1280px)')
  const is2Xl = useMediaQuery('(min-width: 1536px)')

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    /** 모바일 전용 화면 (< 640px) */
    isMobile: !isSm,
    /** 태블릿 이상 (>= 768px) */
    isTablet: isMd,
    /** 데스크톱 이상 (>= 1024px) */
    isDesktop: isLg,
  }
}
