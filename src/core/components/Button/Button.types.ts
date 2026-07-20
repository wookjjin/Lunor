import type { ButtonHTMLAttributes } from 'react'

export type ButtonVariant
  = | 'solid'
    | 'secondary'
    | 'ghost'
    | 'danger'
    | 'outline'

export type ButtonSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  /** 선행 아이콘 (Material Symbols 이름) */
  icon?: string
  /** 후행 아이콘 (Material Symbols 이름) */
  iconRight?: string
}
