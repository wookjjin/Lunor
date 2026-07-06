import type { ToastContextValue } from '@/core/components/Toast/Toast.types'
import { use } from 'react'
import { ToastContext } from '@/core/components/Toast/ToastContext'

export function useToast(): ToastContextValue {
  const ctx = use(ToastContext)
  if (!ctx)
    throw new Error('useToast must be used within ToastProvider')
  return ctx
}
