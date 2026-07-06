import type { ReactNode } from 'react'
import { ToastProvider as CoreToastProvider } from '@/core/components/Toast/ToastProvider'

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  return <CoreToastProvider>{children}</CoreToastProvider>
}
