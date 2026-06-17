import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useThemeStore } from '@/app/store/theme.store'

interface ThemeProviderProps {
  children: ReactNode
}

/**
 * 테마 초기화 및 시스템 색상 스킴 감지 Provider
 *
 * - Zustand store의 setTheme/toggleTheme가 호출될 때 DOM 동기화는 store 내부에서 처리됩니다.
 * - View Transition API를 통한 Circular Reveal도 store 내부에서 처리됩니다.
 * - 이 Provider는 시스템 prefers-color-scheme 변경 감지만 수행합니다.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const setTheme = useThemeStore(state => state.setTheme)

  // 시스템 색상 스킴 변경 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)')

    const handleChange = (e: MediaQueryListEvent) => {
      const systemTheme = e.matches ? 'light' : 'dark'
      setTheme(systemTheme)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [setTheme])

  return <>{children}</>
}
