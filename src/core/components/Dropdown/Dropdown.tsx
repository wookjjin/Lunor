import { DropdownContent } from '@/core/components/Dropdown/DropdownContent'
import { DropdownItem } from '@/core/components/Dropdown/DropdownItem'
import { DropdownRoot } from '@/core/components/Dropdown/DropdownRoot'
import { DropdownSeparator } from '@/core/components/Dropdown/DropdownSeparator'
import { DropdownTrigger } from '@/core/components/Dropdown/DropdownTrigger'

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
  Separator: DropdownSeparator,
})
