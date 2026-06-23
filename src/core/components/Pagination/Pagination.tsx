import type {
  PaginationItem,
  PaginationProps,
} from '@/core/components/Pagination/Pagination.types'
import { useMemo } from 'react'

function range(start: number, end: number): number[] {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

function computeItems(
  currentPage: number,
  totalPages: number,
  siblingCount: number,
  boundaryCount: number,
): PaginationItem[] {
  // 전체 페이지가 충분히 적으면 모두 표시
  const totalNumbers = siblingCount * 2 + boundaryCount * 2 + 3 // current + ellipses
  if (totalPages <= totalNumbers) {
    return range(1, totalPages)
  }

  const items: PaginationItem[] = []

  // 시작 boundary
  const startPages = range(1, boundaryCount)
  items.push(...startPages)

  // 왼쪽 ellipsis 필요 여부
  const leftSiblingStart = Math.max(boundaryCount + 1, currentPage - siblingCount)
  const showLeftEllipsis = leftSiblingStart > boundaryCount + 2

  // 오른쪽 ellipsis 필요 여부
  const rightSiblingEnd = Math.min(totalPages - boundaryCount, currentPage + siblingCount)
  const showRightEllipsis = rightSiblingEnd < totalPages - boundaryCount - 1

  if (showLeftEllipsis) {
    items.push('ellipsis-start')
  }
  else {
    // ellipsis 자리에 숫자 채우기
    items.push(...range(boundaryCount + 1, leftSiblingStart - 1))
  }

  // 중앙 페이지들
  items.push(...range(leftSiblingStart, rightSiblingEnd))

  if (showRightEllipsis) {
    items.push('ellipsis-end')
  }
  else {
    items.push(...range(rightSiblingEnd + 1, totalPages - boundaryCount))
  }

  // 끝 boundary
  const endPages = range(totalPages - boundaryCount + 1, totalPages)
  items.push(...endPages)

  return items
}

export function Pagination({
  variant = 'full',
  size = 'md',
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  boundaryCount = 1,
  showFirstLast = false,
  disabled = false,
  ariaLabel = '페이지네이션',
  className,
}: PaginationProps) {
  const items = useMemo(
    () => computeItems(currentPage, totalPages, siblingCount, boundaryCount),
    [currentPage, totalPages, siblingCount, boundaryCount],
  )

  const isFirst = currentPage <= 1
  const isLast = currentPage >= totalPages

  const handlePage = (page: number) => {
    if (disabled)
      return
    if (page < 1 || page > totalPages)
      return
    onPageChange(page)
  }

  return (
    <nav
      aria-label={ariaLabel}
      className={[
        'pagination',
        `pagination--${variant}`,
        `pagination--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {showFirstLast && (
        <button
          type="button"
          className="pagination__button pagination__button--first"
          onClick={() => handlePage(1)}
          disabled={disabled || isFirst}
          aria-label="첫 페이지"
        >
          «
        </button>
      )}

      <button
        type="button"
        className="pagination__button pagination__button--prev"
        onClick={() => handlePage(currentPage - 1)}
        disabled={disabled || isFirst}
        aria-label="이전 페이지"
      >
        ‹
      </button>

      {variant === 'full' && (
        <span className="pagination__items">
          {items.map((item, index) => {
            if (item === 'ellipsis-start' || item === 'ellipsis-end') {
              return (
                <span
                  key={`${item}-${index}`}
                  className="pagination__ellipsis"
                  aria-hidden="true"
                >
                  …
                </span>
              )
            }
            const isCurrent = item === currentPage
            return (
              <button
                key={item}
                type="button"
                className="pagination__button pagination__button--page"
                onClick={() => handlePage(item)}
                disabled={disabled}
                aria-current={isCurrent ? 'page' : undefined}
                aria-label={`${item} 페이지`}
              >
                {item}
              </button>
            )
          })}
        </span>
      )}

      {variant === 'simple' && (
        <span className="pagination__info">
          {currentPage}
          {' '}
          /
          {totalPages}
        </span>
      )}

      <button
        type="button"
        className="pagination__button pagination__button--next"
        onClick={() => handlePage(currentPage + 1)}
        disabled={disabled || isLast}
        aria-label="다음 페이지"
      >
        ›
      </button>

      {showFirstLast && (
        <button
          type="button"
          className="pagination__button pagination__button--last"
          onClick={() => handlePage(totalPages)}
          disabled={disabled || isLast}
          aria-label="마지막 페이지"
        >
          »
        </button>
      )}
    </nav>
  )
}
