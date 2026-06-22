import type { DataTableProps } from '@/core/components/DataTable/DataTable.types'
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { Table } from '@/core/components/Table/Table'

export function DataTable<T extends object>({
  columns,
  data,
  rowKey,
  onRowClick,
  virtual = false,
  height = 400,
  rowHeight = 48,
  overscan = 5,
  emptyContent,
  hoverable = true,
  bordered = false,
  compact = false,
  className,
  ...props
}: DataTableProps<T>) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)

  const handleScroll = useCallback(() => {
    if (scrollRef.current)
      setScrollTop(scrollRef.current.scrollTop)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el || !virtual)
      return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [virtual, handleScroll])

  // 가상 스크롤 활성화 시 계산 (모든 Hook는 조건부 return 이전에 호출되어야 함)
  const totalHeight = data.length * rowHeight
  const visibleCount = Math.ceil(height / rowHeight)
  const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan)
  const endIndex = Math.min(
    data.length,
    Math.floor(scrollTop / rowHeight) + visibleCount + overscan,
  )

  const visibleData = useMemo(
    () => (virtual ? data.slice(startIndex, endIndex) : data),
    [virtual, data, startIndex, endIndex],
  )

  const offsetY = startIndex * rowHeight

  const containerClasses = ['data-table', 'data-table--virtual', className]
    .filter(Boolean)
    .join(' ')

  // 가상 스크롤이 활성화되지 않은 경우: 일반 Table 렌더링
  if (!virtual) {
    if (data.length === 0 && emptyContent) {
      return (
        <div className="data-table" data-empty>
          <Table
            columns={columns}
            data={[]}
            rowKey={rowKey}
            hoverable={hoverable}
            bordered={bordered}
            compact={compact}
            className={className}
            {...props}
          />
          <div className="data-table__empty">{emptyContent}</div>
        </div>
      )
    }

    return (
      <div className="data-table">
        <Table
          columns={columns}
          data={data}
          rowKey={rowKey}
          onRowClick={onRowClick}
          hoverable={hoverable}
          bordered={bordered}
          compact={compact}
          className={className}
          {...props}
        />
      </div>
    )
  }

  if (data.length === 0 && emptyContent) {
    return (
      <div className={containerClasses} data-empty>
        <Table
          columns={columns}
          data={[]}
          rowKey={rowKey}
          hoverable={hoverable}
          bordered={bordered}
          compact={compact}
          {...props}
        />
        <div className="data-table__empty">{emptyContent}</div>
      </div>
    )
  }

  return (
    <div
      ref={scrollRef}
      className={containerClasses}
      style={{ height, overflowY: 'auto', overflowX: 'auto', position: 'relative' }}
    >
      {/* 헤더는 상단에 고정 */}
      <div className="data-table__header-wrapper">
        <Table
          columns={columns}
          data={[]}
          rowKey={rowKey}
          hoverable={false}
          bordered={bordered}
          compact={compact}
          {...props}
        />
      </div>

      {/* 가상 스크롤 바디 */}
      <div
        className="data-table__body-wrapper"
        style={{ height: totalHeight, position: 'relative' }}
      >
        <div
          className="data-table__virtual-inner"
          style={{
            position: 'absolute',
            top: offsetY,
            left: 0,
            right: 0,
          }}
        >
          <Table
            columns={columns}
            data={visibleData}
            rowKey={rowKey}
            onRowClick={onRowClick}
            hoverable={hoverable}
            bordered={bordered}
            compact={compact}
          />
        </div>
      </div>
    </div>
  )
}
