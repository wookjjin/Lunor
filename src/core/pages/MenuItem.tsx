import { Badge } from '@/core/components/Badge/Badge'
import { Card } from '@/core/components/Card/Card'
import { MenuItem } from '@/core/components/MenuItem/MenuItem'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'

/* =============================================================================
   MenuItemPage — Glacier UI 스타일 MenuItem 쇼케이스
   ============================================================================= */

export default function MenuItemPage() {
  return (
    <Showcase
      title="MenuItem"
      description="The menu item component represents a single actionable item within a context menu, dropdown, or command palette."
      cols={3}
    >
      {/* Basic */}
      <ShowcaseItem label="Basic" variant="primary" badge="Active" className="glacier-glass">
        <Card variant="outlined" padding="none" style={{ width: '12rem' }}>
          <MenuItem icon="person">Profile</MenuItem>
          <MenuItem icon="settings">Settings</MenuItem>
          <MenuItem icon="logout" danger>Sign Out</MenuItem>
        </Card>
      </ShowcaseItem>

      {/* With Trailing */}
      <ShowcaseItem label="With Trailing" variant="secondary" className="glacier-glass">
        <Card variant="outlined" padding="none" style={{ width: '14rem' }}>
          <MenuItem icon="draft" trailing={<Badge variant="primary" size="sm">5</Badge>}>Drafts</MenuItem>
          <MenuItem icon="star" trailing={<Badge variant="warning" size="sm">3</Badge>}>Starred</MenuItem>
          <MenuItem icon="inbox" trailing={<span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>⌘I</span>}>Inbox</MenuItem>
          <MenuItem icon="search" trailing={<span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>⌘K</span>}>Search</MenuItem>
        </Card>
      </ShowcaseItem>

      {/* States */}
      <ShowcaseItem label="States" variant="primary" className="glacier-glass">
        <Card variant="outlined" padding="none" style={{ width: '12rem' }}>
          <MenuItem icon="check">Normal</MenuItem>
          <MenuItem icon="check" selected>Selected</MenuItem>
          <MenuItem icon="block" disabled>Disabled</MenuItem>
          <MenuItem icon="delete" danger>Danger</MenuItem>
        </Card>
      </ShowcaseItem>

      {/* With Icons */}
      <ShowcaseItem label="With Icons" variant="secondary" className="glacier-glass">
        <Card variant="outlined" padding="none" style={{ width: '12rem' }}>
          <MenuItem icon="cut">Cut</MenuItem>
          <MenuItem icon="content_copy">Copy</MenuItem>
          <MenuItem icon="content_paste">Paste</MenuItem>
          <MenuItem icon="undo">Undo</MenuItem>
          <MenuItem icon="redo">Redo</MenuItem>
        </Card>
      </ShowcaseItem>

      {/* Danger Items */}
      <ShowcaseItem label="Danger" variant="ghost" className="glacier-glass">
        <Card variant="outlined" padding="none" style={{ width: '12rem' }}>
          <MenuItem icon="delete" danger>Delete file</MenuItem>
          <MenuItem icon="remove_circle" danger>Remove access</MenuItem>
          <MenuItem icon="logout" danger>Sign out</MenuItem>
        </Card>
      </ShowcaseItem>

      {/* Context Menu Demo */}
      <ShowcaseItem label="Context Menu" variant="ghost" className="glacier-glass">
        <Card variant="outlined" padding="none" style={{ width: '14rem' }}>
          <MenuItem icon="share" trailing={<span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>Share</span>}>Share link</MenuItem>
          <MenuItem icon="edit" trailing={<span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>Edit</span>}>Edit details</MenuItem>
          <MenuItem icon="download" trailing={<span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>Export</span>}>Export data</MenuItem>
          <MenuItem icon="archive" disabled>Archive</MenuItem>
          <MenuItem icon="delete_forever" danger>Permanently delete</MenuItem>
        </Card>
      </ShowcaseItem>
    </Showcase>
  )
}
