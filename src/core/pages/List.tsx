import { useState } from 'react'
import { Badge } from '@/core/components/Badge/Badge'
import { List, ListItem } from '@/core/components/List/List'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   ListPage — Glacier UI 스타일 List 쇼케이스
   ============================================================================= */

export default function ListPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'nav') as 'default' | 'nav' | 'plain'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const density = (props.density ?? 'comfortable') as 'comfortable' | 'compact'

  const [selected, setSelected] = useState('inbox')

  const menuItems = [
    { id: 'inbox', label: 'Inbox', icon: 'inbox', badge: 12 },
    { id: 'starred', label: 'Starred', icon: 'star', badge: 3 },
    { id: 'sent', label: 'Sent', icon: 'send' },
    { id: 'drafts', label: 'Drafts', icon: 'draft', badge: 5 },
    { id: 'trash', label: 'Trash', icon: 'delete', disabled: true },
  ]

  return (
    <Showcase
      title="List"
      description="The list component displays structured items with optional icons, trailing elements, and interactive selection states."
      cols={3}
    >
      {/* Nav List (Interactive) */}
      <ShowcaseItem label="Nav List" variant="primary" badge="Interactive" className="glacier-glass">
        <List variant="nav" size={size} density={density}>
          {menuItems.map(item => (
            <ListItem
              key={item.id}
              icon={item.icon}
              selected={selected === item.id}
              disabled={item.disabled}
              onClick={() => setSelected(item.id)}
              trailing={item.badge ? <Badge variant="primary" size="sm">{item.badge}</Badge> : undefined}
            >
              {item.label}
            </ListItem>
          ))}
        </List>
      </ShowcaseItem>

      {/* Default List (with markers) */}
      <ShowcaseItem label="Default" variant="secondary" className="glacier-glass">
        <List variant="default" size={size} density={density}>
          <ListItem>First item in the list</ListItem>
          <ListItem>Second item with more text</ListItem>
          <ListItem>Third item</ListItem>
        </List>
        <List variant="default" size={size} density={density} ordered>
          <ListItem>Ordered first</ListItem>
          <ListItem>Ordered second</ListItem>
          <ListItem>Ordered third</ListItem>
        </List>
      </ShowcaseItem>

      {/* With Icons */}
      <ShowcaseItem label="With Icons" variant="primary" className="glacier-glass">
        <List variant="nav" size={size} density={density}>
          <ListItem icon="home">Home</ListItem>
          <ListItem icon="search">Search</ListItem>
          <ListItem icon="notifications">Notifications</ListItem>
          <ListItem icon="settings">Settings</ListItem>
          <ListItem icon="help">Help & Support</ListItem>
        </List>
      </ShowcaseItem>

      {/* With Trailing */}
      <ShowcaseItem label="With Trailing" variant="secondary" className="glacier-glass">
        <List variant="nav" size={size} density={density}>
          <ListItem icon="person" trailing={<Badge variant="success" size="sm">Online</Badge>}>Alice</ListItem>
          <ListItem icon="person" trailing={<Badge variant="ghost" size="sm">Away</Badge>}>Bob</ListItem>
          <ListItem icon="person" trailing={<Badge variant="danger" size="sm">Offline</Badge>}>Charlie</ListItem>
        </List>
      </ShowcaseItem>

      {/* Density Comparison */}
      <ShowcaseItem label="Density" variant="ghost" className="glacier-glass">
        <List variant="nav" size={size} density="comfortable">
          <ListItem icon="view_agenda">Comfortable</ListItem>
          <ListItem icon="view_agenda">Comfortable</ListItem>
        </List>
        <List variant="nav" size={size} density="compact">
          <ListItem icon="view_list">Compact</ListItem>
          <ListItem icon="view_list">Compact</ListItem>
        </List>
      </ShowcaseItem>

      {/* Playground */}
      <ShowcaseItem label="Playground" variant="ghost" className="glacier-glass">
        <List variant={variant} size={size} density={density}>
          <ListItem icon="folder" selected>Selected item</ListItem>
          <ListItem icon="folder">Normal item</ListItem>
          <ListItem icon="folder" disabled>Disabled item</ListItem>
        </List>
      </ShowcaseItem>
    </Showcase>
  )
}