import type { ReactNode } from 'react'

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  // TODO: 토스트 컨텍스트 구현
  return <>{children}</>
}
