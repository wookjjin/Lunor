import { Card } from '@/core/components/Card/Card'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   CardPage — Glacier UI 스타일 Card 쇼케이스
   반응형 flex: 모바일 1열 → 태블릿 2열 → 와이드 4열
   ============================================================================= */

export default function CardPage() {
  const { props } = usePlaygroundContext()
  const padding = (props.padding ?? 'md') as 'none' | 'sm' | 'md' | 'lg'
  const children = (props.children ?? 'Card content') as string

  return (
    <Showcase
      title="Card"
      description="The card component is a flexible container used to group related content and actions."
    >
      {/* Default Variant */}
      <ShowcaseItem label="Default" variant="primary" badge="Active" className="glacier-glass">
        <Card variant="default" padding={padding}>
          {children}
        </Card>
        <div className="showcase__row">
          <Card variant="default" padding={padding}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>dashboard</span>
            Icon Card
          </Card>
          <Card variant="default" padding={padding}>
            <strong>Title</strong>
            <p style={{ margin: 0 }}>Description text</p>
          </Card>
        </div>
      </ShowcaseItem>

      {/* Outlined Variant */}
      <ShowcaseItem label="Outlined" variant="secondary" className="glacier-glass">
        <Card variant="outlined" padding={padding}>
          {children}
        </Card>
        <div className="showcase__row">
          <Card variant="outlined" padding={padding}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>border_outer</span>
            Icon Card
          </Card>
          <Card variant="outlined" padding={padding}>
            <strong>Title</strong>
            <p style={{ margin: 0 }}>Description text</p>
          </Card>
        </div>
      </ShowcaseItem>

      {/* Elevated Variant */}
      <ShowcaseItem label="Elevated" variant="ghost" className="glacier-glass">
        <Card variant="elevated" padding={padding}>
          {children}
        </Card>
        <div className="showcase__row">
          <Card variant="elevated" padding={padding}>
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>layers</span>
            Icon Card
          </Card>
          <Card variant="elevated" padding={padding}>
            <strong>Title</strong>
            <p style={{ margin: 0 }}>Description text</p>
          </Card>
        </div>
      </ShowcaseItem>
    </Showcase>
  )
}
