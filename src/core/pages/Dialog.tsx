import { useState } from 'react'
import { Button } from '@/core/components/Button/Button'
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
      <Button
        variant="solid"
        size="md"
        onClick={() => setOpen(true)}
      >
        Open Dialog
      </Button>
      <Dialog
        open={open}
        size={size}
        closeOnOverlayClick={closeOnOverlayClick}
        closeOnEscape={closeOnEscape}
        onClose={() => setOpen(false)}
        title="Dialog Title"
        footer={(
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="solid"
              size="sm"
              onClick={() => setOpen(false)}
            >
              Confirm
            </Button>
          </div>
        )}
      >
        This is a dialog content area. You can place any content here.
      </Dialog>
    </div>
  )
}
