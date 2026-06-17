import { useState } from 'react'
import { Dialog } from '@/core/components/Dialog/Dialog'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

export default function DialogPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const closeOnOverlayClick = Boolean(props.closeOnOverlayClick)
  const closeOnEscape = Boolean(props.closeOnEscape)
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          border: '1px solid var(--color-border-default, #334155)',
          background: 'var(--color-bg-default, #0f172a)',
          color: 'var(--color-text-default, #f8fafc)',
          cursor: 'pointer',
        }}
      >
        Open Dialog
      </button>
      <Dialog
        open={open}
        size={size}
        closeOnOverlayClick={closeOnOverlayClick}
        closeOnEscape={closeOnEscape}
        onClose={() => setOpen(false)}
        title="Dialog Title"
        footer={(
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                padding: '0.375rem 0.75rem',
                borderRadius: '6px',
                border: '1px solid var(--color-border-default, #334155)',
                background: 'transparent',
                color: 'var(--color-text-default, #f8fafc)',
                cursor: 'pointer',
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                padding: '0.375rem 0.75rem',
                borderRadius: '6px',
                border: 'none',
                background: 'var(--color-interactive-default, #7dd3fc)',
                color: 'var(--color-text-on-interactive, #0c4a6e)',
                cursor: 'pointer',
              }}
            >
              Confirm
            </button>
          </div>
        )}
      >
        This is a dialog content area. You can place any content here.
      </Dialog>
    </div>
  )
}
