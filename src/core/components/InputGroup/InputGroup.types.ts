import type { HTMLAttributes, ReactNode } from 'react'

export type InputGroupVariant = 'outline' | 'filled'
export type InputGroupSize = 'sm' | 'md' | 'lg'

// HTMLAttributes에서 기존 'prefix' 속성을 제외해 줍니다.
export interface InputGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'prefix'> {
  /** 색상 변형 */
  variant?: InputGroupVariant
  /** 크기 */
  size?: InputGroupSize
  /** 에러 상태 */
  invalid?: boolean
  /** 비활성화 */
  disabled?: boolean
  /** 전체 너비 */
  fullWidth?: boolean
  /** 선행 아이콘 (Material Symbols 이름) */
  icon?: string
  /** 아이콘을 우측에 배치 */
  iconRight?: boolean
  /** 선행 addon 텍스트/요소 (이제 ReactNode를 안전하게 사용할 수 있습니다!) */
  prefix?: ReactNode
  /** 후행 addon 텍스트/요소 */
  suffix?: ReactNode
  /** Input 요소 (children) */
  children?: ReactNode
}
