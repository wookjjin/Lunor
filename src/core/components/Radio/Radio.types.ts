import type { InputHTMLAttributes, ReactNode } from 'react'

export type RadioVariant
  = | 'default'
    | 'card'

export type RadioSize
  = | 'sm'
    | 'md'
    | 'lg'

export type RadioOrientation
  = | 'vertical'
    | 'horizontal'

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'checked' | 'onChange'> {
  /** 라디오 값 */
  value: string
  /** 색상/레이아웃 변형 */
  variant?: RadioVariant
  /** 크기 */
  size?: RadioSize
  /** 비활성화 */
  disabled?: boolean
  /** 라벨 텍스트 */
  label?: ReactNode
  /** 보조 설명 텍스트 */
  description?: ReactNode
  /** 라벨 영역 (label이 없을 때 대체) */
  children?: ReactNode
}

export interface RadioGroupProps {
  /** 라디오 그룹 name (form 제출용) */
  name: string
  /** 제어 상태 (controlled) */
  value?: string
  /** 비제어 초기 상태 (uncontrolled) */
  defaultValue?: string
  /** 값 변경 콜백 */
  onValueChange?: (value: string) => void
  /** 정렬 방향 */
  orientation?: RadioOrientation
  /** 추가 className */
  className?: string
  /** 하위 Radio 아이템들 */
  children: ReactNode
}