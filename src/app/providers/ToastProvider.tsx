import { ToastProvider as CoreToastProvider } from '@/core/components/Toast/ToastProvider'
import type { ReactNode } from 'react'

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  return <CoreToastProvider>{children}</CoreToastProvider>
}