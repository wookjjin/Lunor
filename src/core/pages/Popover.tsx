import { Badge } from '@/core/components/Badge/Badge'
import { Button } from '@/core/components/Button/Button'
import { Popover } from '@/core/components/Popover/Popover'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Stack } from '@/core/components/Stack/Stack'

export default function PopoverPage() {
  return (
    <Showcase
      title="Popover"
      description="The popover component displays floating content triggered by a click, with automatic outside-click and Escape dismissal."
      cols={3}
    >
      <ShowcaseItem label="Basic" variant="primary" badge="Active" className="glacier-glass">
        <Popover trigger={<Button variant="outline" size="md">Click me</Button>}>
          <Stack direction="column" gap="sm">
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>
              Popover Title
            </span>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
              This is popover content. Click outside or press Escape to close.
            </span>
          </Stack>
        </Popover>
      </ShowcaseItem>

      <ShowcaseItem label="Placements" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="sm" wrap>
          <Popover placement="bottom-start" trigger={<Button variant="ghost" size="sm">Bottom Start</Button>}>
            <span style={{ fontSize: 'var(--font-size-xs)' }}>Bottom-start content</span>
          </Popover>
          <Popover placement="bottom-end" trigger={<Button variant="ghost" size="sm">Bottom End</Button>}>
            <span style={{ fontSize: 'var(--font-size-xs)' }}>Bottom-end content</span>
          </Popover>
        </Stack>
        <Stack direction="row" gap="sm" wrap>
          <Popover placement="top-start" trigger={<Button variant="ghost" size="sm">Top Start</Button>}>
            <span style={{ fontSize: 'var(--font-size-xs)' }}>Top-start content</span>
          </Popover>
          <Popover placement="top-end" trigger={<Button variant="ghost" size="sm">Top End</Button>}>
            <span style={{ fontSize: 'var(--font-size-xs)' }}>Top-end content</span>
          </Popover>
        </Stack>
      </ShowcaseItem>

      <ShowcaseItem label="Rich Content" variant="primary" className="glacier-glass">
        <Popover trigger={<Button variant="solid" size="md">User Info</Button>}>
          <Stack direction="column" gap="sm">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 'var(--font-size-2xl)' }}>person</span>
              <div>
                <div style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)' }}>John Doe</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>john@example.com</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
              <Badge variant="success" size="sm">Active</Badge>
              <Badge variant="ghost" size="sm">Admin</Badge>
            </div>
          </Stack>
        </Popover>
      </ShowcaseItem>

      <ShowcaseItem label="With Actions" variant="secondary" className="glacier-glass">
        <Popover trigger={<Button variant="outline" size="md">Delete item?</Button>}>
          <Stack direction="column" gap="sm">
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              Are you sure you want to delete this item?
            </span>
            <Stack direction="row" gap="sm" justify="end">
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button variant="danger" size="sm">Delete</Button>
            </Stack>
          </Stack>
        </Popover>
      </ShowcaseItem>

      <ShowcaseItem label="Controlled" variant="ghost" className="glacier-glass">
        <Popover defaultOpen trigger={<Button variant="ghost" size="md">Default open</Button>}>
          <span style={{ fontSize: 'var(--font-size-xs)' }}>This popover starts open.</span>
        </Popover>
      </ShowcaseItem>

      <ShowcaseItem label="Tooltip-like" variant="ghost" className="glacier-glass">
        <Popover
          placement="bottom-start"
          trigger={(
            <span style={{ cursor: 'pointer', borderBottom: '1px dashed var(--color-interactive-default)', fontSize: 'var(--font-size-sm)' }}>
              Hover info
            </span>
          )}
        >
          <span style={{ fontSize: 'var(--font-size-xs)' }}>Click to open, click outside to close.</span>
        </Popover>
      </ShowcaseItem>
    </Showcase>
  )
}
