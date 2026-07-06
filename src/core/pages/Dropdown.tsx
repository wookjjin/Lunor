import type { DropdownPlacement } from '@/core/components/Dropdown/Dropdown.types'
import { useState } from 'react'
import { Dropdown } from '@/core/components/Dropdown/Dropdown'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   DropdownPage — Glacier UI 스타일 Dropdown 쇼케이스
   반응형 flex: 모바일 1열 → 태블릿 2열 → 와이드 4열
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
    >
      {/* Placement Variants */}
      <ShowcaseItem label="Placement" variant="primary" badge="4 options" className="glacier-glass">
        <Dropdown defaultOpen={defaultOpen} placement={placement}>
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
        <div className="showcase__row">
          <Dropdown placement="bottom-start">
            <Dropdown.Trigger>Bottom Start</Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
              <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
          <Dropdown placement="bottom-end">
            <Dropdown.Trigger>Bottom End</Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
              <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </div>
        <div className="showcase__row">
          <Dropdown placement="top-start">
            <Dropdown.Trigger>Top Start</Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Item onSelect={() => {}}>Item 1</Dropdown.Item>
              <Dropdown.Item onSelect={() => {}}>Item 2</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
          <Dropdown placement="top-end">
            <Dropdown.Trigger>Top End</Dropdown.Trigger>
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
          <Dropdown.Trigger>
            Actions
            <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>arrow_drop_down</span>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item onSelect={() => {}}>Normal Item</Dropdown.Item>
            <Dropdown.Item disabled onSelect={() => {}}>
              Disabled Item
            </Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item danger onSelect={() => {}}>
              Danger Item
            </Dropdown.Item>
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

      {/* Controlled */}
      <ShowcaseItem label="Controlled" variant="ghost" className="glacier-glass">
        <Dropdown
          open={controlledOpen}
          onOpenChange={setControlledOpen}
          placement={placement}
        >
          <Dropdown.Trigger>
            {controlledOpen ? 'Close' : 'Open'}
            <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>arrow_drop_down</span>
          </Dropdown.Trigger>
          <Dropdown.Content>
            <Dropdown.Item onSelect={() => setControlledOpen(false)}>Profile</Dropdown.Item>
            <Dropdown.Item onSelect={() => setControlledOpen(false)}>Settings</Dropdown.Item>
            <Dropdown.Separator />
            <Dropdown.Item onSelect={() => setControlledOpen(false)}>Logout</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown>
      </ShowcaseItem>
    </Showcase>
  )
}
