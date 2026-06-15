import type { ReactNode } from 'react'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // TODO: 테마 컨텍스트 구현
  return <>{children}</>
}
