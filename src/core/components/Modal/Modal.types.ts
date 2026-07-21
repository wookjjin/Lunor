import type { ReactNode } from 'react'
import type { DialogSize } from '@/core/components/Dialog/Dialog.types'

/**
 * Modal — Dialog의 레거시 alias
 * 기존 `isOpen` → `open`, `title` → `title` 매핑을 유지.
 */
export interface ModalProps {
  /** 모달 콘텐츠 */
  children: ReactNode
  /** 열림 여부 */
  isOpen: boolean
  /** 닫기 콜백 */
  onClose: () => void
  /** 제목 */
  title?: string
  /** 크기 (Dialog size에 위임) */
  size?: DialogSize
}