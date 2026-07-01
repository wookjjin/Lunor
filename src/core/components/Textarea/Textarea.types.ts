import type { ChangeEvent, TextareaHTMLAttributes } from 'react'

export type TextareaVariant
  = | 'outline'
    | 'filled'

export type TextareaSize
  = | 'sm'
    | 'md'
    | 'lg'

export type TextareaResize
  = | 'none'
    | 'vertical'
    | 'horizontal'
    | 'both'

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** 색상 변형 */
  variant?: TextareaVariant
  /** 크기 */
  size?: TextareaSize
  /** 에러 상태 */
  invalid?: boolean
  /** 비활성화 */
  disabled?: boolean
  /** 전체 너비 */
  fullWidth?: boolean
  /** resize 허용 방향 */
  resize?: TextareaResize
  /** 행 수 */
  rows?: number
  /** 플레이스홀더 */
  placeholder?: string
  /** 제어 상태 (controlled) */
  value?: string
  /** 비제어 초기 상태 (uncontrolled) */
  defaultValue?: string
  /** form name */
  name?: string
  /** onChange 핸들러 */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
}