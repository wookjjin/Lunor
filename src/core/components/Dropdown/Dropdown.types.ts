import type { ReactNode } from 'react'
import type { ButtonProps } from '@/core/components/Button/Button.types'

export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'

export interface DropdownRootProps {
  children: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  placement?: DropdownPlacement
}

export interface DropdownContentProps {
  children: ReactNode
  className?: string
}

export interface DropdownTriggerProps extends ButtonProps {
  children: ReactNode
}

export interface DropdownItemProps {
  children: ReactNode
  disabled?: boolean
  danger?: boolean
  onSelect?: () => void
}

export interface DropdownSeparatorProps {
  className?: string
}
