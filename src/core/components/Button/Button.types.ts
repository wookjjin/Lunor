import type { ButtonHTMLAttributes } from 'react'

export type ButtonVariant
  = | 'solid'
    | 'outline'
    | 'ghost'
    | 'danger'

export type ButtonSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}
