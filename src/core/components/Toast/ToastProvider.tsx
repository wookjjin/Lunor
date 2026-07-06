import type { ReactNode } from 'react'
import type { ToastOptions } from '@/core/components/Toast/Toast.types'
import { useCallback, useState } from 'react'
import { Toast } from '@/core/components/Toast/Toast'
import { ToastContext } from '@/core/components/Toast/ToastContext'

/* =============================================================================
   ToastProvider — 전역 Toast 상태 관리
   toast() 함수로 토스트를 추가하고 duration 후 자동 제거
   ============================================================================= */

interface ToastItem extends ToastOptions {
  id: string
}

let toastId = 0

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const dismiss = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const dismissAll = useCallback(() => {
    setToasts([])
  }, [])

  const toast = useCallback((options: ToastOptions) => {
    const id = `toast-${++toastId}`
    const duration = options.duration ?? 4000

    setToasts(prev => [...prev, { ...options, id }])

    if (duration > 0) {
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== id))
      }, duration)
    }
  }, [])

  const value = { toast, dismiss, dismissAll }

  return (
    <ToastContext value={value}>
      {children}
      {/* ── Toast Container ── */}
      {toasts.length > 0 && (
        <div className="toast-container">
          {toasts.map(item => (
            <Toast
              key={item.id}
              variant={item.variant}
              title={item.title}
              description={item.description}
              icon={item.icon}
              closable={item.closable ?? true}
              onClose={() => dismiss(item.id)}
            />
          ))}
        </div>
      )}
    </ToastContext>
  )
}
