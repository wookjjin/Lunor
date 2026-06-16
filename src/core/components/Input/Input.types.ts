import type { ComponentProps } from 'react'

export type InputVariant
  = | 'outline'
    | 'filled'

export type InputSize
  = | 'sm'
    | 'md'
    | 'lg'

export interface InputProps
  extends Omit<ComponentProps<'input'>, 'size'> {
  variant?: InputVariant
  size?: InputSize
  invalid?: boolean
  fullWidth?: boolean
}
