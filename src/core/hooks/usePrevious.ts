import { useRef } from 'react'

/**
 * usePrevious — 이전 값 추적
 * @param value 추적할 값
 * @returns 이전 렌더의 값 (최초 렌더 시 undefined)
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined)

  // render 후 ref에 현재 값 저장
  // (ref.current는 항상 "이전" 값을 가리킴)
  const previous = ref.current
  ref.current = value

  return previous
}
