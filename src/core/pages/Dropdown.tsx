import { Dropdown } from '@/core/components/Dropdown/Dropdown'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

export default function DropdownPage() {
  const { props } = usePlaygroundContext()
  const defaultOpen = Boolean(props.defaultOpen)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <Dropdown defaultOpen={defaultOpen}>
        <Dropdown.Trigger>
          Options
          <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>arrow_drop_down</span>
        </Dropdown.Trigger>
        <Dropdown.Content>
          <Dropdown.Item onSelect={() => {}}>Profile</Dropdown.Item>
          <Dropdown.Item onSelect={() => {}}>Settings</Dropdown.Item>
          <Dropdown.Separator />
          <Dropdown.Item onSelect={() => {}}>Logout</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>
  )
}
