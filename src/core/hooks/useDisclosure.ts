import { useCallback, useState } from 'react'

/**
 * 열기/닫기 상태를 관리하는 훅 (모달, 드롭다운 등에 사용)
 */
export function useDisclosure(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  return { isOpen, open, close, toggle }
}
