import type { Theme } from '@/core/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type { Theme }

/** 시스템 색상 스킴 감지 (SSR 안전) */
function getSystemTheme(): Theme {
  if (typeof window === 'undefined')
    return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

/** html[data-theme] 속성을 테마 상태와 동기화 */
function applyThemeToDOM(theme: Theme): void {
  if (typeof document === 'undefined')
    return
  document.documentElement.setAttribute('data-theme', theme)
}

/**
 * View Transition API를 사용한 Circular Reveal 테마 전환
 *  미지원 브라우저에서는 즉시 전환 (하위 호환성 유지)
 */
function transitionTheme(next: Theme, x?: number, y?: number): void {
  // 클릭 좌표가 있으면 CSS 커스텀 프로퍼티로 전달
  if (x !== undefined && y !== undefined) {
    document.documentElement.style.setProperty('--vt-x', `${x}px`)
    document.documentElement.style.setProperty('--vt-y', `${y}px`)
  }

  // View Transition API 지원 여부 확인
  if (!document.startViewTransition) {
    applyThemeToDOM(next)
    return
  }

  const transition = document.startViewTransition(() => {
    applyThemeToDOM(next)
  })

  transition.finished.catch(() => {
    // 전환 중단/에러 시에도 테마는 이미 적용됨
  })
}

interface ThemeState {
  /** 현재 테마 */
  theme: Theme
  /** 테마 변경 (View Transition 적용) */
  setTheme: (theme: Theme, x?: number, y?: number) => void
  /** dark ↔ light 토글 (View Transition 적용) */
  toggleTheme: (x?: number, y?: number) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      theme: getSystemTheme(),
      setTheme: (theme: Theme, x?: number, y?: number) => {
        set({ theme })
        transitionTheme(theme, x, y)
      },
      toggleTheme: (x?: number, y?: number) => {
        set((state) => {
          const next = state.theme === 'dark' ? 'light' : 'dark'
          transitionTheme(next, x, y)
          return { theme: next }
        })
      },
    }),
    {
      name: 'lunor-theme',
      // localStorage에 값이 없으면 시스템 설정을 따름
      onRehydrateStorage: () => (state) => {
        if (state) {
          applyThemeToDOM(state.theme)
        }
      },
    },
  ),
)
