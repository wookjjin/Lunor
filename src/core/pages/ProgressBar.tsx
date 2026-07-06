import { useState } from 'react'
import { ProgressBar } from '@/core/components/ProgressBar/ProgressBar'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   ProgressBarPage — Glacier UI 스타일 ProgressBar 쇼케이스
   ============================================================================= */

export default function ProgressBarPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'default') as 'default' | 'primary' | 'success' | 'warning' | 'danger'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const showValue = Boolean(props.showValue)
  const striped = Boolean(props.striped)
  const animated = Boolean(props.animated)

  const [progress, setProgress] = useState(45)

  return (
    <Showcase
      title="ProgressBar"
      description="The progress bar component visually represents the completion progress of a task or operation."
      cols={3}
    >
      {/* Variants */}
      <ShowcaseItem label="Variants" variant="primary" badge="5 colors" className="glacier-glass">
        <ProgressBar variant="default" value={60} showValue />
        <ProgressBar variant="primary" value={75} showValue />
        <ProgressBar variant="success" value={90} showValue />
        <ProgressBar variant="warning" value={45} showValue />
        <ProgressBar variant="danger" value={20} showValue />
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="secondary" className="glacier-glass">
        <ProgressBar variant={variant} size="sm" value={70} label="Small (4px)" showValue />
        <ProgressBar variant={variant} size="md" value={70} label="Medium (6px)" showValue />
        <ProgressBar variant={variant} size="lg" value={70} label="Large (10px)" showValue />
      </ShowcaseItem>

      {/* Striped & Animated */}
      <ShowcaseItem label="Striped" variant="primary" className="glacier-glass">
        <ProgressBar variant={variant} size={size} value={60} striped label="Striped" showValue />
        <ProgressBar variant={variant} size={size} value={80} striped animated label="Animated" showValue />
      </ShowcaseItem>

      {/* Interactive */}
      <ShowcaseItem label="Interactive" variant="secondary" className="glacier-glass">
        <ProgressBar
          variant={variant}
          size={size}
          value={progress}
          showValue={showValue}
          striped={striped}
          animated={animated}
          label="Click to change"
        />
        <div className="showcase__row">
          <button
            type="button"
            onClick={() => setProgress(Math.max(0, progress - 10))}
            style={{
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-bg-muted)',
              border: '1px solid var(--color-border-default)',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              fontSize: 'var(--font-size-xs)',
            }}
          >
            -10
          </button>
          <button
            type="button"
            onClick={() => setProgress(Math.min(100, progress + 10))}
            style={{
              padding: 'var(--space-1) var(--space-3)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--color-bg-muted)',
              border: '1px solid var(--color-border-default)',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
              fontSize: 'var(--font-size-xs)',
            }}
          >
            +10
          </button>
        </div>
      </ShowcaseItem>

      {/* With Label */}
      <ShowcaseItem label="With Label" variant="ghost" className="glacier-glass">
        <ProgressBar variant="primary" value={100} label="Uploading file..." showValue />
        <ProgressBar variant="success" value={100} label="Installation complete" showValue />
        <ProgressBar variant="warning" value={65} label="Disk usage" showValue />
        <ProgressBar variant="danger" value={15} label="Battery remaining" showValue />
      </ShowcaseItem>

      {/* Track Only */}
      <ShowcaseItem label="Track Only" variant="ghost" className="glacier-glass">
        <ProgressBar variant={variant} size={size} value={25} />
        <ProgressBar variant={variant} size={size} value={50} />
        <ProgressBar variant={variant} size={size} value={75} />
        <ProgressBar variant={variant} size={size} value={100} />
      </ShowcaseItem>
    </Showcase>
  )
}
