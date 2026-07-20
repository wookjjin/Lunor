import type { HTMLAttributes } from 'react'

export type FileInputVariant
  = | 'default'
    | 'filled'

export type FileInputSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface FileInputProps extends Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  /** 색상 변형 */
  variant?: FileInputVariant
  /** 크기 */
  size?: FileInputSize
  /** 비활성화 */
  disabled?: boolean
  /** 전체 너비 */
  fullWidth?: boolean
  /** 다중 파일 선택 */
  multiple?: boolean
  /** 허용 파일 타입 (e.g. "image/*") */
  accept?: string
  /** 플레이스홀더 */
  placeholder?: string
  /** 드래그 영역 라벨 */
  _dragLabel?: string
  /** form name */
  name?: string
  /** onChange 핸들러 — File[] 전달 */
  onChange?: (files: File[]) => void
}
