import { Alert } from '@/core/components/Alert/Alert'
import { Button } from '@/core/components/Button/Button'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   AlertPage — Glacier UI 스타일 Alert 쇼케이스
   ============================================================================= */

export default function AlertPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'info') as 'info' | 'success' | 'warning' | 'danger'
  const closable = Boolean(props.closable)
  const title = (props.title ?? 'Alert title') as string
  const description = (props.description ?? 'Alert description text') as string

  return (
    <Showcase
      title="Alert"
      description="The alert component displays inline, static messages within page content to communicate important information or feedback."
      cols={3}
    >
      {/* Variants */}
      <ShowcaseItem label="Variants" variant="primary" badge="4 types" className="glacier-glass">
        <Alert variant="info" title="Information" description="A new system update is available for download." />
        <Alert variant="success" title="Success" description="Your profile has been updated successfully." />
        <Alert variant="warning" title="Warning" description="Your subscription expires in 3 days." />
        <Alert variant="danger" title="Error" description="Failed to connect to the server. Please try again." />
      </ShowcaseItem>

      {/* Title Only */}
      <ShowcaseItem label="Title Only" variant="secondary" className="glacier-glass">
        <Alert variant="info" title="No description alert" />
        <Alert variant="success" title="Changes saved" />
        <Alert variant="warning" title="Storage almost full" />
        <Alert variant="danger" title="Connection lost" />
      </ShowcaseItem>

      {/* Description Only */}
      <ShowcaseItem label="Description Only" variant="primary" className="glacier-glass">
        <Alert variant="info" description="Just a description without a title for compact messaging." />
        <Alert variant="success" description="Your data has been synced across all devices." />
        <Alert variant="warning" description="Please save your work before leaving this page." />
      </ShowcaseItem>

      {/* Closable */}
      <ShowcaseItem label="Closable" variant="secondary" className="glacier-glass">
        <Alert variant="info" title="Closable" description="Click the X button to dismiss this alert." closable />
        <Alert variant="warning" title="Dismissable" description="This alert can be closed by the user." closable />
      </ShowcaseItem>

      {/* With Action */}
      <ShowcaseItem label="With Action" variant="ghost" className="glacier-glass">
        <Alert
          variant="warning"
          title="Subscription expiring"
          description="Renew now to avoid interruption."
          action={<Button variant="solid" size="sm">Renew</Button>}
        />
        <Alert
          variant="danger"
          title="Sync failed"
          description="Check your network connection and try again."
          action={<Button variant="danger" size="sm">Retry</Button>}
        />
      </ShowcaseItem>

      {/* Playground Live */}
      <ShowcaseItem label="Playground" variant="ghost" className="glacier-glass">
        <Alert
          variant={variant}
          title={title}
          description={description}
          closable={closable}
        />
      </ShowcaseItem>
    </Showcase>
  )
}
