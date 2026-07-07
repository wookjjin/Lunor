import type { DropdownPlacement } from '@/core/components/Dropdown/Dropdown.types'
import { useState } from 'react'
import { Button } from '@/core/components/Button/Button'
import { Dropdown } from '@/core/components/Dropdown/Dropdown'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   DropdownPage — Glacier UI 스타일 Dropdown 쇼케이스
   ============================================================================= */

export default function DropdownPage() {
  const { props } = usePlaygroundContext()
  const defaultOpen = Boolean(props.defaultOpen)
  const placement = (props.placement ?? 'bottom-start') as DropdownPlacement
  const [controlledOpen, setControlledOpen] = useState(false)

  return (
    <Showcase
      title="Dropdown"
      description="The dropdown component displays a list of actions or options that users can interact with, triggered by a button or other element."
      cols={3}
    >
      {/* Placement Variants */}
      <ShowcaseItem label="Placement" variant="primary" badge="4 options" className="glacier-glass">
        <Dropdown defaultOpen={defaultOpen} placement={placement}>
          <Dropdown.Trigger asChild>
            <Button variant="solid" size="md" iconRight="arrow_drop_down">Options</Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item onSelect={() => {}} icon="person">Profile</Dropdown.Item>
            <Dropdown.Item onSelect={() => {}} icon="settings">Settings</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item onSelect={() => {}} icon="logout" danger>Logout</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
        <div className="showcase__row">
          <Dropdown placement="bottom-start">
            <Dropdown.Trigger asChild>
              <Button variant="outline" size="sm" iconRight="arrow_drop_down">Bottom Start</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
              <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
          <Dropdown placement="bottom-end">
            <Dropdown.Trigger asChild>
              <Button variant="outline" size="sm" iconRight="arrow_drop_down">Bottom End</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
              <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </div>
        <div className="showcase__row">
          <Dropdown placement="top-start">
            <Dropdown.Trigger asChild>
              <Button variant="outline" size="sm" iconRight="arrow_drop_up">Top Start</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
              <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
          <Dropdown placement="top-end">
            <Dropdown.Trigger asChild>
              <Button variant="outline" size="sm" iconRight="arrow_drop_up">Top End</Button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
              <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </div>
      </ShowcaseItem>

      {/* Item States */}
      <ShowcaseItem label="Item States" variant="secondary" className="glacier-glass">
        <Dropdown defaultOpen={defaultOpen} placement={placement}>
          <Dropdown.Trigger asChild>
            <Button variant="solid" size="md" iconRight="arrow_drop_down">Actions</Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item onSelect={() => {}}>Normal Item</Dropdown.Item>
            <Dropdown.Item disabled onSelect={() => {}}>Disabled Item</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item danger onSelect={() => {}}>Danger Item</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </ShowcaseItem>

      {/* asChild Trigger */}
      <ShowcaseItem label="asChild" variant="primary" className="glacier-glass">
        <Dropdown placement={placement}>
          <Dropdown.Trigger asChild>
            <Button variant="solid" size="md" iconRight="arrow_drop_down">Actions</Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item onSelect={() => {}} icon="person">Profile</Dropdown.Item>
            <Dropdown.Item onSelect={() => {}} icon="settings">Settings</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item onSelect={() => {}} icon="logout" danger>Logout</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </ShowcaseItem>

      {/* With Icons */}
      <ShowcaseItem label="With Icons" variant="secondary" className="glacier-glass">
        <Dropdown defaultOpen={defaultOpen} placement={placement}>
          <Dropdown.Trigger asChild>
            <Button variant="outline" size="md" icon="edit" iconRight="arrow_drop_down">Edit Menu</Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item onSelect={() => {}} icon="content_copy">Copy</Dropdown.Item>
            <Dropdown.Item onSelect={() => {}} icon="content_paste">Paste</Dropdown.Item>
            <Dropdown.Item onSelect={() => {}} icon="content_cut">Cut</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item onSelect={() => {}} icon="delete" danger>Delete</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </ShowcaseItem>

      {/* Controlled */}
      <ShowcaseItem label="Controlled" variant="ghost" className="glacier-glass">
        <Dropdown
          open={controlledOpen}
          onOpenChange={setControlledOpen}
          placement={placement}
        >
          <Dropdown.Trigger asChild>
            <Button variant="solid" size="md" iconRight={controlledOpen ? 'arrow_drop_up' : 'arrow_drop_down'}>
              {controlledOpen ? 'Close' : 'Open'}
            </Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item onSelect={() => setControlledOpen(false)} icon="person">Profile</Dropdown.Item>
            <Dropdown.Item onSelect={() => setControlledOpen(false)} icon="settings">Settings</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item onSelect={() => setControlledOpen(false)} icon="logout" danger>Logout</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </ShowcaseItem>

      {/* Default Open */}
      <ShowcaseItem label="Default Open" variant="ghost" className="glacier-glass">
        <Dropdown defaultOpen placement={placement}>
          <Dropdown.Trigger asChild>
            <Button variant="ghost" size="md" iconRight="arrow_drop_down">Starts Open</Button>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
            <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </ShowcaseItem>
    </Showcase>
  )
}