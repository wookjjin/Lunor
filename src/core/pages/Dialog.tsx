import { useState } from 'react'
import { Button } from '@/core/components/Button/Button'
import { Dialog } from '@/core/components/Dialog/Dialog'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Stack } from '@/core/components/Stack/Stack'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   DialogPage — Glacier UI 스타일 Dialog 쇼케이스
   ============================================================================= */

export default function DialogPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const closeOnOverlayClick = Boolean(props.closeOnOverlayClick)
  const closeOnEscape = Boolean(props.closeOnEscape)

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)

  return (
    <Showcase
      title="Dialog"
      description="The dialog component displays modal content with overlay, focus trap, and Escape/overlay-click dismissal."
      cols={3}
    >
      {/* Basic */}
      <ShowcaseItem label="Basic" variant="primary" badge="Active" className="glacier-glass">
        <Button variant="solid" size="md" onClick={() => setOpen1(true)}>Open Dialog</Button>
        <Dialog
          open={open1}
          size={size}
          closeOnOverlayClick={closeOnOverlayClick}
          closeOnEscape={closeOnEscape}
          onClose={() => setOpen1(false)}
          title="Dialog Title"
          footer={(
            <>
              <Button variant="secondary" size="sm" onClick={() => setOpen1(false)}>Cancel</Button>
              <Button variant="solid" size="sm" onClick={() => setOpen1(false)}>Confirm</Button>
            </>
          )}
        >
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)', margin: 0 }}>
            This is a dialog content area. You can place any content here — forms, text, or interactive elements.
          </p>
        </Dialog>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="sm" wrap>
          <Button variant="outline" size="sm" onClick={() => setOpen2(true)}>SM</Button>
          <Button variant="outline" size="sm" onClick={() => setOpen3(true)}>MD</Button>
          <Button variant="outline" size="sm" onClick={() => setOpen4(true)}>LG</Button>
        </Stack>
        <Dialog open={open2} size="sm" onClose={() => setOpen2(false)} title="Small Dialog">
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
            Small dialog — max-width 24rem.
          </p>
        </Dialog>
        <Dialog open={open3} size="md" onClose={() => setOpen3(false)} title="Medium Dialog">
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
            Medium dialog — max-width 32rem.
          </p>
        </Dialog>
        <Dialog open={open4} size="lg" onClose={() => setOpen4(false)} title="Large Dialog">
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
            Large dialog — max-width 40rem. Useful for complex forms or multi-section content.
          </p>
        </Dialog>
      </ShowcaseItem>

      {/* Playground */}
      <ShowcaseItem label="Playground" variant="primary" className="glacier-glass">
        <Button variant="solid" size="md" onClick={() => setOpen1(true)}>
          Open (
          {size}
          )
        </Button>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          Use Properties panel to adjust size, overlay click, and Escape.
        </span>
      </ShowcaseItem>

      {/* No Footer */}
      <ShowcaseItem label="No Footer" variant="secondary" className="glacier-glass">
        <Button variant="ghost" size="md" onClick={() => setOpen2(true)}>Open No Footer</Button>
        <Dialog open={open2} size={size} closeOnOverlayClick={closeOnOverlayClick} closeOnEscape={closeOnEscape} onClose={() => setOpen2(false)} title="Information">
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)', margin: 0 }}>
            This dialog has no footer — just a title and body content. Close with the X button, overlay click, or Escape.
          </p>
        </Dialog>
      </ShowcaseItem>

      {/* No Title */}
      <ShowcaseItem label="No Title" variant="ghost" className="glacier-glass">
        <Button variant="outline" size="md" onClick={() => setOpen3(true)}>Open No Title</Button>
        <Dialog open={open3} size={size} closeOnOverlayClick={closeOnOverlayClick} closeOnEscape={closeOnEscape} onClose={() => setOpen3(false)}>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)', margin: 0 }}>
            This dialog has no title — just body content and a footer. Useful for simple confirmations or alerts.
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}>
            <Button variant="solid" size="sm" onClick={() => setOpen3(false)}>OK</Button>
          </div>
        </Dialog>
      </ShowcaseItem>

      {/* Form Content */}
      <ShowcaseItem label="Form Content" variant="ghost" className="glacier-glass">
        <Button variant="solid" size="md" onClick={() => setOpen4(true)}>Open Form Dialog</Button>
        <Dialog
          open={open4}
          size={size}
          closeOnOverlayClick={closeOnOverlayClick}
          closeOnEscape={closeOnEscape}
          onClose={() => setOpen4(false)}
          title="Create Project"
          footer={(
            <>
              <Button variant="secondary" size="sm" onClick={() => setOpen4(false)}>Cancel</Button>
              <Button variant="solid" size="sm" icon="add" onClick={() => setOpen4(false)}>Create</Button>
            </>
          )}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              <span>Project name</span>
              <input type="text" placeholder="My Project" style={{ padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-input)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)', outline: 'none', fontSize: 'var(--font-size-sm)' }} />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              <span>Description</span>
              <textarea rows={3} placeholder="Optional description" style={{ padding: 'var(--space-2) var(--space-3)', borderRadius: 'var(--radius-md)', background: 'var(--color-surface-input)', border: '1px solid var(--color-border-default)', color: 'var(--color-text-primary)', outline: 'none', fontSize: 'var(--font-size-sm)', resize: 'vertical' }} />
            </label>
          </div>
        </Dialog>
      </ShowcaseItem>
    </Showcase>
  )
}
