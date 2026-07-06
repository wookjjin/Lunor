import { useCallback, useState } from 'react'
import { Button } from '@/core/components/Button/Button'
import { ConfirmDialog } from '@/core/components/ConfirmDialog/ConfirmDialog'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

export default function ConfirmDialogPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'default') as 'default' | 'warning' | 'danger'
  const size = (props.size ?? 'sm') as 'sm' | 'md' | 'lg'

  const [open, setOpen] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleOpen = useCallback(() => {
    setOpen(true)
    setResult(null)
  }, [])

  const handleConfirm = useCallback(() => {
    setOpen(false)
    setResult('confirmed')
  }, [])

  const handleCancel = useCallback(() => {
    setOpen(false)
    setResult('cancelled')
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <Showcase
      title="ConfirmDialog"
      description="The confirm dialog component displays a focused confirmation prompt with icon, title, description, and action buttons."
      cols={3}
    >
      <ShowcaseItem label="Basic" variant="primary" badge="Active" className="glacier-glass">
        <Button variant="solid" size="md" onClick={handleOpen}>
          Show Confirm
        </Button>
        <ConfirmDialog
          open={open}
          variant={variant}
          size={size}
          title="Delete file?"
          description="This action cannot be undone. The file will be permanently removed."
          confirmLabel="Delete"
          cancelLabel="Cancel"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
        {result && (
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            Result:
            {' '}
            {result}
          </span>
        )}
      </ShowcaseItem>

      <ShowcaseItem label="Variants" variant="secondary" className="glacier-glass">
        <Button variant="ghost" size="sm" onClick={handleOpen}>
          Default
        </Button>
        <Button variant="ghost" size="sm" onClick={handleOpen}>
          Warning (Playground)
        </Button>
        <Button variant="ghost" size="sm" onClick={handleOpen}>
          Danger (Playground)
        </Button>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          Use Properties panel to switch variant
        </span>
      </ShowcaseItem>

      <ShowcaseItem label="Warning" variant="primary" className="glacier-glass">
        <Button variant="outline" size="md" onClick={() => setOpen(true)}>
          Show Warning
        </Button>
        <ConfirmDialog
          open={open}
          variant="warning"
          size={size}
          title="Unsaved changes"
          description="You have unsaved changes. Leaving this page will discard them."
          confirmLabel="Leave"
          cancelLabel="Stay"
          onConfirm={handleClose}
          onCancel={handleClose}
        />
      </ShowcaseItem>

      <ShowcaseItem label="Danger" variant="secondary" className="glacier-glass">
        <Button variant="danger" size="md" onClick={() => setOpen(true)}>
          Delete Account
        </Button>
        <ConfirmDialog
          open={open}
          variant="danger"
          size={size}
          title="Delete account?"
          description="This will permanently delete your account and all associated data. This action cannot be undone."
          confirmLabel="Delete Account"
          cancelLabel="Keep Account"
          onConfirm={handleClose}
          onCancel={handleClose}
        />
      </ShowcaseItem>

      <ShowcaseItem label="Sizes" variant="ghost" className="glacier-glass">
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>SM</Button>
          <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>MD</Button>
          <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>LG</Button>
        </div>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          Use Properties panel to change size
        </span>
      </ShowcaseItem>

      <ShowcaseItem label="Custom Labels" variant="ghost" className="glacier-glass">
        <Button variant="solid" size="md" onClick={() => setOpen(true)}>
          Submit Form
        </Button>
        <ConfirmDialog
          open={open}
          variant={variant}
          size={size}
          title="Submit application?"
          description="Once submitted, you cannot edit your application. Please review carefully."
          confirmLabel="Yes, submit"
          cancelLabel="Review again"
          onConfirm={handleClose}
          onCancel={handleClose}
        />
      </ShowcaseItem>
    </Showcase>
  )
}
