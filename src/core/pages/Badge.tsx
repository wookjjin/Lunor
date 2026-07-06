import { Badge } from '@/core/components/Badge/Badge'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   BadgePage — Glacier UI 스타일 Badge 쇼케이스
   반응형 flex: 모바일 1열 → 태블릿 2열 → 와이드 4열
   ============================================================================= */

export default function BadgePage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const dot = Boolean(props.dot)
  const label = (props.label ?? 'Badge') as string

  return (
    <Showcase
      title="Badge"
      description="The badge component displays status, counts, or labels with semantic color variants."
      cols={3}
    >
      {/* Solid Variant */}
      <ShowcaseItem label="Solid" variant="primary" badge="Active" className="glacier-glass">
        <Badge variant="solid" size={size} dot={dot}>
          {label}
        </Badge>
        <div className="showcase__row">
          <Badge variant="solid" size={size} icon="check">
            Verified
          </Badge>
          <Badge variant="solid" size={size} dot={!dot}>
            Online
          </Badge>
        </div>
      </ShowcaseItem>

      {/* Secondary Variant */}
      <ShowcaseItem label="Secondary" variant="secondary" className="glacier-glass">
        <Badge variant="secondary" size={size} dot={dot}>
          {label}
        </Badge>
        <div className="showcase__row">
          <Badge variant="secondary" size={size} icon="star">
            Featured
          </Badge>
          <Badge variant="secondary" size={size} dot={!dot}>
            Pending
          </Badge>
        </div>
      </ShowcaseItem>

      {/* Ghost Variant */}
      <ShowcaseItem label="Ghost" variant="ghost" className="glacier-glass">
        <Badge variant="ghost" size={size} dot={dot}>
          {label}
        </Badge>
        <div className="showcase__row">
          <Badge variant="ghost" size={size} icon="label">
            Tag
          </Badge>
          <Badge variant="ghost" size={size} dot={!dot}>
            Draft
          </Badge>
        </div>
      </ShowcaseItem>

      {/* Danger Variant */}
      <ShowcaseItem label="Danger" variant="danger" className="glacier-glass">
        <Badge variant="danger" size={size} dot={dot}>
          {label}
        </Badge>
        <div className="showcase__row">
          <Badge variant="danger" size={size} icon="error">
            Failed
          </Badge>
          <Badge variant="danger" size={size} dot={!dot}>
            Error
          </Badge>
        </div>
      </ShowcaseItem>

      {/* Success Variant */}
      <ShowcaseItem label="Success" variant="primary" className="glacier-glass">
        <Badge variant="success" size={size} dot={dot}>
          {label}
        </Badge>
        <div className="showcase__row">
          <Badge variant="success" size={size} icon="check_circle">
            Approved
          </Badge>
          <Badge variant="success" size={size} dot={!dot}>
            Active
          </Badge>
        </div>
      </ShowcaseItem>

      {/* Warning Variant */}
      <ShowcaseItem label="Warning" variant="secondary" className="glacier-glass">
        <Badge variant="warning" size={size} dot={dot}>
          {label}
        </Badge>
        <div className="showcase__row">
          <Badge variant="warning" size={size} icon="warning">
            Pending
          </Badge>
          <Badge variant="warning" size={size} dot={!dot}>
            Review
          </Badge>
        </div>
      </ShowcaseItem>
    </Showcase>
  )
}
