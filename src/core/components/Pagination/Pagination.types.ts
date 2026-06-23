export type PaginationVariant
  = | 'full'
    | 'simple'

export type PaginationSize
  = | 'sm'
    | 'md'
    | 'lg'

export type PaginationItem
  = | number
    | 'ellipsis-start'
    | 'ellipsis-end'

export interface PaginationProps {
  /** 페이지네이션 표시 방식 */
  variant?: PaginationVariant
  /** 버튼 크기 */
  size?: PaginationSize
  /** 현재 페이지 (1-based) */
  currentPage: number
  /** 전체 페이지 수 */
  totalPages: number
  /** 페이지 변경 콜백 */
  onPageChange: (page: number) => void
  /** 현재 페이지 좌우에 표시할 페이지 개수 (full 모드) */
  siblingCount?: number
  /** 시작/끝에 고정할 페이지 개수 (full 모드) */
  boundaryCount?: number
  /** 첫 페이지 / 마지막 페이지 버튼 표시 여부 */
  showFirstLast?: boolean
  /** 전체 비활성화 */
  disabled?: boolean
  /** nav 요소의 접근성 라벨 */
  ariaLabel?: string
  /** 외부 className */
  className?: string
}
