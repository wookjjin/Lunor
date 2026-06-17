import type { DropdownSeparatorProps } from '@/core/components/Dropdown/Dropdown.types'

export function DropdownSeparator({
  className,
}: DropdownSeparatorProps) {
  return (
    <div
      role="separator"
      className={['dropdown__separator', className]
        .filter(Boolean)
        .join(' ')}
    />
  )
}
