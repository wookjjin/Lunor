import type { ShowcaseProps } from '@/core/components/Showcase/Showcase.types'

/**
 * Showcase — 컴포넌트 쇼케이스 공통 레이아웃
 *
 * 페이지 헤더(title + description) + 반응형 flex 컨테이너 + 인터랙티비티 프리뷰를 제공한다.
 * children으로 전달되는 카드들이 flex 아이템으로 배치된다.
 *
 * 반응형: 모바일 1열 → 태블릿 2열 → 와이드 4열
 */
export function Showcase({
  title,
  description,
  children,
  previewText = 'Real-time state monitoring active',
  className,
}: ShowcaseProps) {
  return (
    <div
      className={[
        'showcase',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* 페이지 헤더 */}
      <header className="showcase__header">
        <h2 className="showcase__title">{title}</h2>
        <p className="showcase__description">{description}</p>
      </header>

      {/* 반응형 flex 쇼케이스 */}
      <div className="showcase__flex">
        {children}
      </div>

      {/* 인터랙티비티 프리뷰 */}
      <div className="showcase__preview">
        <div className="showcase__preview-gradient" />
        <div className="showcase__preview-content">
          <p className="showcase__preview-label">Interactivity Preview</p>
          <p className="showcase__preview-text">{previewText}</p>
        </div>
      </div>
    </div>
  )
}
