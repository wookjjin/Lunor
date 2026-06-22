import type { MouseEvent, ReactNode } from 'react'

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

export interface DropdownTriggerProps {
  children: ReactNode
  className?: string
  asChild?: boolean
  disabled?: boolean
  onClick?: (event: MouseEvent) => void
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
