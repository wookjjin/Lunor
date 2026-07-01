import { Button } from '@/core/components/Button/Button'
import { Toast } from '@/core/components/Toast/Toast'
import { useToast } from '@/core/components/Toast/ToastProvider'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'

/* =============================================================================
   ToastPage — Glacier UI 스타일 Toast 쇼케이스
   ============================================================================= */

export default function ToastPage() {
  const { toast } = useToast()

  return (
    <Showcase
      title="Toast"
      description="The toast component displays brief, non-blocking notifications that appear temporarily and auto-dismiss."
      cols={3}
    >
      {/* Variants */}
      <ShowcaseItem label="Variants" variant="primary" badge="4 types" className="glacier-glass">
        <Toast variant="info" title="Information" description="A new update is available." closable={false} />
        <Toast variant="success" title="Success" description="Your changes have been saved." closable={false} />
        <Toast variant="warning" title="Warning" description="Your session expires soon." closable={false} />
        <Toast variant="danger" title="Error" description="Failed to save changes." closable={false} />
      </ShowcaseItem>

      {/* Live Demo */}
      <ShowcaseItem label="Live Demo" variant="secondary" className="glacier-glass">
        <Button
          variant="solid"
          size="md"
          onClick={() => toast({ variant: 'info', title: 'Info', description: 'This is an info toast.' })}
        >
          Show Info
        </Button>
        <Button
          variant="solid"
          size="md"
          onClick={() => toast({ variant: 'success', title: 'Success', description: 'Operation completed.' })}
        >
          Show Success
        </Button>
        <Button
          variant="solid"
          size="md"
          onClick={() => toast({ variant: 'warning', title: 'Warning', description: 'Please review before proceeding.' })}
        >
          Show Warning
        </Button>
        <Button
          variant="danger"
          size="md"
          onClick={() => toast({ variant: 'danger', title: 'Error', description: 'Something went wrong.' })}
        >
          Show Error
        </Button>
      </ShowcaseItem>

      {/* Title Only */}
      <ShowcaseItem label="Title Only" variant="ghost" className="glacier-glass">
        <Toast variant="info" title="No description here" closable={false} />
        <Toast variant="success" title="Upload complete" closable={false} />
        <Toast variant="warning" title="Storage almost full" closable={false} />
      </ShowcaseItem>

      {/* Custom Icon */}
      <ShowcaseItem label="Custom Icon" variant="primary" className="glacier-glass">
        <Toast variant="info" title="Custom icon" description="Using a custom Material Symbol." icon="rocket_launch" closable={false} />
        <Toast variant="success" title="Deploy complete" description="Your app is live." icon="cloud_done" closable={false} />
      </ShowcaseItem>

      {/* Closable */}
      <ShowcaseItem label="Closable" variant="secondary" className="glacier-glass">
        <Toast variant="info" title="Closable toast" description="Click the X to dismiss." />
        <Toast variant="success" title="With close button" description="This toast can be closed." />
      </ShowcaseItem>

      {/* Duration */}
      <ShowcaseItem label="Duration" variant="ghost" className="glacier-glass">
        <Button
          variant="ghost"
          size="md"
          onClick={() => toast({ variant: 'info', title: 'Quick (2s)', description: 'Disappears in 2 seconds.', duration: 2000 })}
        >
          2s Toast
        </Button>
        <Button
          variant="ghost"
          size="md"
          onClick={() => toast({ variant: 'success', title: 'Long (6s)', description: 'Disappears in 6 seconds.', duration: 6000 })}
        >
          6s Toast
        </Button>
        <Button
          variant="ghost"
          size="md"
          onClick={() => toast({ variant: 'warning', title: 'Persistent', description: 'Will not auto-dismiss.', duration: 0 })}
        >
          Persistent
        </Button>
      </ShowcaseItem>
    </Showcase>
  )
}