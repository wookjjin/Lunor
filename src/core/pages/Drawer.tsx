import { useState } from 'react'
import { Button } from '@/core/components/Button/Button'
import { Drawer } from '@/core/components/Drawer/Drawer'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

export default function DrawerPage() {
  const { props } = usePlaygroundContext()
  const side = (props.side ?? 'right') as 'left' | 'right' | 'top' | 'bottom'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'

  const [open, setOpen] = useState(false)

  return (
    <Showcase
      title="Drawer"
      description="The drawer component slides in from a screen edge to display supplementary content without losing context."
      cols={3}
    >
      <ShowcaseItem label="Basic" variant="primary" badge="Active" className="glacier-glass">
        <Button variant="solid" size="md" onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer
          open={open}
          side={side}
          size={size}
          title="Drawer Title"
          description="A drawer panel with header and body content."
          onClose={() => setOpen(false)}
          footer={(
            <>
              <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
              <Button variant="solid" size="sm" onClick={() => setOpen(false)}>Save</Button>
            </>
          )}
        >
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)', margin: 0 }}>
            Drawer content goes here. You can put any content — forms, lists, settings, etc.
          </p>
        </Drawer>
      </ShowcaseItem>

      <ShowcaseItem label="Sides" variant="secondary" className="glacier-glass">
        <Button variant="outline" size="sm" onClick={() => { setOpen(true) }}>Open (Playground side)</Button>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          Use Properties panel to change side & size
        </span>
      </ShowcaseItem>

      <ShowcaseItem label="No Header" variant="primary" className="glacier-glass">
        <Button variant="ghost" size="md" onClick={() => setOpen(true)}>Open No Header</Button>
        <Drawer open={open} side={side} size={size} onClose={() => setOpen(false)}>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
            This drawer has no header — just body content.
          </p>
        </Drawer>
      </ShowcaseItem>

      <ShowcaseItem label="With Footer" variant="secondary" className="glacier-glass">
        <Button variant="solid" size="md" onClick={() => setOpen(true)}>Open With Footer</Button>
      </ShowcaseItem>

      <ShowcaseItem label="Content Types" variant="ghost" className="glacier-glass">
        <Button variant="outline" size="md" onClick={() => setOpen(true)}>Open Form Drawer</Button>
        <Drawer open={open} side={side} size={size} title="Settings" onClose={() => setOpen(false)} footer={<Button variant="solid" size="sm">Apply</Button>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', fontSize: 'var(--font-size-sm)' }}>
              <span>Theme</span>
              <input type="text" defaultValue="Glacier" style={{ padding: 'var(--space-2)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-input)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)', outline: 'none' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', fontSize: 'var(--font-size-sm)' }}>
              <span>Version</span>
              <input type="text" defaultValue="1.0.0" style={{ padding: 'var(--space-2)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-input)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)', outline: 'none' }} />
            </label>
          </div>
        </Drawer>
      </ShowcaseItem>

      <ShowcaseItem label="Playground" variant="ghost" className="glacier-glass">
        <Button variant="solid" size="md" onClick={() => setOpen(true)}>
          Open (
          {side}
          /
          {size}
          )
        </Button>
      </ShowcaseItem>
    </Showcase>
  )
}
