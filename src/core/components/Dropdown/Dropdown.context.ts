import type { DropdownPlacement } from '@/core/components/Dropdown/Dropdown.types'
import { createContext, use } from 'react'

export interface DropdownContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  placement: DropdownPlacement
}

export const DropdownContext = createContext<DropdownContextValue | null>(null)

export function useDropdownContext() {
  const context = use(DropdownContext)

  if (!context) {
    throw new Error('Dropdown components must be used within Dropdown.')
  }

  return context
}
