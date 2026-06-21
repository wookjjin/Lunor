import type { Column } from '@/core/components/DataTable/DataTable.types'
import { useMemo, useState } from 'react'
import { DataTable } from '@/core/components/DataTable/DataTable'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   DataTablePage — Glacier UI 스타일 DataTable 쇼케이스
   가상 스크롤(Virtual Scroll) 기능을 포함한 대용량 데이터 테이블 시연
   ============================================================================= */

interface OrderRow {
  id: number
  orderNo: string
  customer: string
  amount: number
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled'
  date: string
}

const statuses: OrderRow['status'][] = ['Pending', 'Shipped', 'Delivered', 'Cancelled']

function generateData(count: number): OrderRow[] {
  return Array.from({ length: count }, (_, i) => {
    const status = statuses[i % statuses.length]!
    return {
      id: i + 1,
      orderNo: `#ORD-${String(i + 1).padStart(5, '0')}`,
      customer: `Customer ${(i % 200) + 1}`,
      amount: Math.round(((i * 37) % 5000) + 100),
      status,
      date: new Date(2026, 5, 1 + (i % 20)).toISOString().slice(0, 10),
    }
  })
}

const columns: Column<OrderRow>[] = [
  { key: 'orderNo', header: 'Order No', width: 140 },
  { key: 'customer', header: 'Customer', width: 160 },
  {
    key: 'amount',
    header: 'Amount',
    width: 120,
    align: 'right',
    render: value => `$${(value as number).toLocaleString()}`,
  },
  {
    key: 'status',
    header: 'Status',
    width: 130,
    align: 'center',
    render: (value) => {
      const status = value as OrderRow['status']
      const colorMap: Record<OrderRow['status'], string> = {
        Pending: '#f59e0b',
        Shipped: '#3b82f6',
        Delivered: '#16a34a',
        Cancelled: '#ef4444',
      }
      return (
        <span
          style={{
            color: colorMap[status],
            fontWeight: 600,
            fontSize: 13,
          }}
        >
          {status}
        </span>
      )
    },
  },
  { key: 'date', header: 'Date', width: 140, align: 'right' },
]

export default function DataTablePage() {
  const { props } = usePlaygroundContext()
  const bordered = (props.bordered ?? false) as boolean
  const compact = (props.compact ?? false) as boolean
  const [selected, setSelected] = useState<OrderRow | null>(null)

  const smallData = useMemo(() => generateData(20), [])
  const largeData = useMemo(() => generateData(5000), [])

  return (
    <Showcase
      title="DataTable"
      description="A data table component with optional virtual scrolling for rendering large datasets efficiently."
    >
      {/* 기본 (가상 스크롤 미사용) */}
      <ShowcaseItem label="Default" variant="primary" badge="20 rows" className="glacier-glass">
        <DataTable
          columns={columns}
          data={smallData}
          rowKey="id"
          bordered={bordered}
          compact={compact}
        />
      </ShowcaseItem>

      {/* 가상 스크롤 */}
      <ShowcaseItem label="Virtual Scroll" variant="secondary" badge="5,000 rows" className="glacier-glass">
        <DataTable
          columns={columns}
          data={largeData}
          rowKey="id"
          virtual
          height={420}
          rowHeight={48}
          overscan={5}
          bordered={bordered}
          compact={compact}
        />
      </ShowcaseItem>

      {/* 행 클릭 인터랙션 */}
      <ShowcaseItem label="Row Click" variant="ghost" className="glacier-glass">
        <DataTable
          columns={columns}
          data={smallData}
          rowKey="id"
          virtual
          height={320}
          rowHeight={48}
          bordered={bordered}
          compact={compact}
          onRowClick={row => setSelected(row)}
        />
        {selected && (
          <div
            style={{
              marginTop: 12,
              padding: '10px 14px',
              borderRadius: 10,
              background: 'var(--glacier-surface, rgba(255,255,255,0.06))',
              fontSize: 13,
            }}
          >
            선택된 주문:
            {' '}
            <strong>{selected.orderNo}</strong>
            {' '}
            —
            {' '}
            {selected.customer}
            {' '}
            · $
            {selected.amount.toLocaleString()}
          </div>
        )}
      </ShowcaseItem>

      {/* 빈 상태 */}
      <ShowcaseItem label="Empty" variant="ghost" className="glacier-glass">
        <DataTable
          columns={columns}
          data={[]}
          rowKey="id"
          bordered={bordered}
          compact={compact}
          emptyContent={(
            <div style={{ padding: 24, textAlign: 'center', color: '#94a3b8' }}>
              데이터가 없습니다.
            </div>
          )}
        />
      </ShowcaseItem>
    </Showcase>
  )
}
