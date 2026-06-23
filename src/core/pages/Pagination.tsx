import { useState } from 'react'
import { Pagination } from '@/core/components/Pagination/Pagination'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   PaginationPage — Glacier UI 스타일 Pagination 쇼케이스
   반응형 flex: 모바일 1열 → 태블릿 2열 → 와이드 4열
   ============================================================================= */

export default function PaginationPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'full') as 'full' | 'simple'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const showFirstLast = Boolean(props.showFirstLast)
  const disabled = Boolean(props.disabled)
  const currentPage = Number(props.currentPage ?? 5)
  const totalPages = Number(props.totalPages ?? 10)

  // 로컬 인터랙티브 상태
  const [fullPage, setFullPage] = useState(currentPage)
  const [simplePage, setSimplePage] = useState(1)

  return (
    <Showcase
      title="Pagination"
      description="The pagination component is used to navigate through pages of data."
    >
      {/* Full Variant */}
      <ShowcaseItem label="Full" variant="primary" badge={`${totalPages} pages`} className="glacier-glass showcase__item--wide">
        <Pagination
          variant="full"
          size={size}
          currentPage={fullPage}
          totalPages={totalPages}
          onPageChange={setFullPage}
          showFirstLast={showFirstLast}
          disabled={disabled}
        />
        <div className="showcase__row">
          <span className="showcase__hint">
            Current:
            {fullPage}
          </span>
        </div>
      </ShowcaseItem>

      {/* Simple Variant */}
      <ShowcaseItem label="Simple" variant="secondary" className="glacier-glass showcase__item--wide">
        <Pagination
          variant="simple"
          size={size}
          currentPage={simplePage}
          totalPages={totalPages}
          onPageChange={setSimplePage}
          showFirstLast={showFirstLast}
          disabled={disabled}
        />
        <div className="showcase__row">
          <span className="showcase__hint">
            Current:
            {simplePage}
          </span>
        </div>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="ghost" className="glacier-glass showcase__item--wide">
        <div className="showcase__row">
          <Pagination
            variant={variant}
            size="sm"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={() => {}}
            showFirstLast={showFirstLast}
          />
        </div>
        <div className="showcase__row">
          <Pagination
            variant={variant}
            size="md"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={() => {}}
            showFirstLast={showFirstLast}
          />
        </div>
        <div className="showcase__row">
          <Pagination
            variant={variant}
            size="lg"
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={() => {}}
            showFirstLast={showFirstLast}
          />
        </div>
      </ShowcaseItem>

      {/* States */}
      <ShowcaseItem label="States" variant="ghost" className="glacier-glass showcase__item--wide">
        <div className="showcase__row">
          <Pagination
            variant={variant}
            size={size}
            currentPage={1}
            totalPages={totalPages}
            onPageChange={() => {}}
            showFirstLast
          />
        </div>
        <div className="showcase__row">
          <Pagination
            variant={variant}
            size={size}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={() => {}}
            showFirstLast
            disabled
          />
        </div>
        <div className="showcase__row">
          <Pagination
            variant={variant}
            size={size}
            currentPage={totalPages}
            totalPages={totalPages}
            onPageChange={() => {}}
            showFirstLast
          />
        </div>
      </ShowcaseItem>
    </Showcase>
  )
}
