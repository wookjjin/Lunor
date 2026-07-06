import { Card } from '@/core/components/Card/Card'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Skeleton } from '@/core/components/Skeleton/Skeleton'
import { Spinner } from '@/core/components/Spinner/Spinner'

/* =============================================================================
   SkeletonPage — Glacier UI 스타일 Skeleton 쇼케이스
   ============================================================================= */

export default function SkeletonPage() {
  return (
    <Showcase
      title="Skeleton"
      description="The skeleton component displays animated placeholder shapes while content is loading, preserving layout and reducing perceived wait time."
      cols={3}
    >
      {/* Text Lines */}
      <ShowcaseItem label="Text Lines" variant="primary" badge="Active" className="glacier-glass">
        <Skeleton variant="text" lines={3} />
        <Skeleton variant="text" lines={5} />
      </ShowcaseItem>

      {/* Rect */}
      <ShowcaseItem label="Rect" variant="secondary" className="glacier-glass">
        <Skeleton variant="rect" height="3rem" />
        <Skeleton variant="rect" height="6rem" radius="var(--radius-lg)" />
        <div className="showcase__row">
          <Skeleton variant="rect" width="48%" height="2rem" />
          <Skeleton variant="rect" width="48%" height="2rem" />
        </div>
      </ShowcaseItem>

      {/* Circle */}
      <ShowcaseItem label="Circle" variant="primary" className="glacier-glass">
        <div className="showcase__row" style={{ justifyContent: 'space-around', alignItems: 'center' }}>
          <Skeleton circle width="2rem" />
          <Skeleton circle width="3rem" />
          <Skeleton circle width="4rem" />
        </div>
      </ShowcaseItem>

      {/* Card Placeholder */}
      <ShowcaseItem label="Card" variant="secondary" className="glacier-glass">
        <Card variant="outlined" padding="md">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
              <Skeleton circle width="3rem" />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                <Skeleton variant="text" width="40%" />
                <Skeleton variant="text" width="25%" />
              </div>
            </div>
            <Skeleton variant="rect" height="8rem" radius="var(--radius-lg)" />
            <Skeleton variant="text" lines={2} />
          </div>
        </Card>
      </ShowcaseItem>

      {/* Table Placeholder */}
      <ShowcaseItem label="Table" variant="ghost" className="glacier-glass">
        {Array.from({ length: 4 }, (_, i) => `row-${i}`).map(key => (
          <div key={key} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
            <Skeleton circle width="2rem" />
            <Skeleton variant="text" width="30%" />
            <Skeleton variant="text" width="20%" />
            <Skeleton variant="text" width="15%" />
          </div>
        ))}
      </ShowcaseItem>

      {/* vs Spinner */}
      <ShowcaseItem label="vs Spinner" variant="ghost" className="glacier-glass">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Spinner variant="primary" size="sm" />
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
              Spinner — indeterminate loading
            </span>
          </div>
          <Skeleton variant="text" lines={2} />
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            Skeleton — layout-preserving placeholder
          </span>
        </div>
      </ShowcaseItem>
    </Showcase>
  )
}
