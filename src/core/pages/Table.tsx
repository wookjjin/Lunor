import type { Column } from '@/core/components/Table/Table.types'
import { useState } from 'react'
import { Badge } from '@/core/components/Badge/Badge'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Table } from '@/core/components/Table/Table'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   TablePage — Glacier UI 스타일 Table 쇼케이스
   ============================================================================= */

interface User {
  id: number
  name: string
  email: string
  role: 'Admin' | 'Editor' | 'Viewer'
  status: 'Active' | 'Inactive'
  lastActive: string
}

const users: User[] = [
  { id: 1, name: 'Alice Kim', email: 'alice@lunor.dev', role: 'Admin', status: 'Active', lastActive: '2026-06-21' },
  { id: 2, name: 'Brian Lee', email: 'brian@lunor.dev', role: 'Editor', status: 'Active', lastActive: '2026-06-20' },
  { id: 3, name: 'Cathy Park', email: 'cathy@lunor.dev', role: 'Viewer', status: 'Inactive', lastActive: '2026-06-15' },
  { id: 4, name: 'David Choi', email: 'david@lunor.dev', role: 'Editor', status: 'Active', lastActive: '2026-06-19' },
  { id: 5, name: 'Elena Jung', email: 'elena@lunor.dev', role: 'Viewer', status: 'Active', lastActive: '2026-06-21' },
]

const columns: Column<User>[] = [
  { key: 'name', header: 'Name', width: 160 },
  { key: 'email', header: 'Email' },
  {
    key: 'role',
    header: 'Role',
    width: 120,
    render: (value) => {
      const role = value as User['role']
      const variantMap: Record<User['role'], 'primary' | 'secondary' | 'ghost'> = {
        Admin: 'primary',
        Editor: 'secondary',
        Viewer: 'ghost',
      }
      return <Badge variant={variantMap[role]} size="sm">{role}</Badge>
    },
  },
  {
    key: 'status',
    header: 'Status',
    width: 120,
    align: 'center',
    render: (value) => {
      const status = value as User['status']
      const isActive = status === 'Active'
      return (
        <span
          className="material-symbols-outlined"
          style={{
            fontSize: 'var(--font-size-sm)',
            color: isActive ? 'var(--color-success-text)' : 'var(--color-text-tertiary)',
          }}
        >
          {isActive ? 'check_circle' : 'cancel'}
        </span>
      )
    },
  },
  { key: 'lastActive', header: 'Last Active', width: 140, align: 'right' },
]

export default function TablePage() {
  const { props } = usePlaygroundContext()
  const hoverable = (props.hoverable ?? true) as boolean
  const compact = (props.compact ?? false) as boolean
  const [selected, setSelected] = useState<User | null>(null)

  return (
    <Showcase
      title="Table"
      description="A flexible table component for displaying tabular data with hover, border, and compact modes."
    >
      {/* Default */}
      <ShowcaseItem label="Default" variant="primary" badge="Active" className="glacier-glass showcase__item--wide">
        <Table
          columns={columns}
          data={users}
          rowKey="id"
          hoverable={hoverable}
          compact={compact}
        />
      </ShowcaseItem>

      {/* Bordered */}
      <ShowcaseItem label="Bordered" variant="secondary" className="glacier-glass showcase__item--wide">
        <Table
          columns={columns}
          data={users}
          rowKey="id"
          hoverable={hoverable}
          bordered
          compact={compact}
        />
      </ShowcaseItem>

      {/* Row Click (interactive) */}
      <ShowcaseItem label="Row Click" variant="ghost" className="glacier-glass showcase__item--wide">
        <Table
          columns={columns}
          data={users}
          rowKey="id"
          hoverable={hoverable}
          bordered
          compact={compact}
          onRowClick={row => setSelected(row)}
        />
        {selected && (
          <div style={{
            marginTop: 'var(--space-3)',
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-bg-subtle)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
          }}
          >
            Selected:
            {' '}
            <strong style={{ color: 'var(--color-text-primary)' }}>{selected.name}</strong>
            {' '}
            (
            {selected.email}
            )
          </div>
        )}
      </ShowcaseItem>

      {/* Empty */}
      <ShowcaseItem label="Empty" variant="ghost" className="glacier-glass showcase__item--wide">
        <Table
          columns={columns}
          data={[]}
          rowKey="id"
          hoverable={hoverable}
          bordered
          compact={compact}
        />
      </ShowcaseItem>
    </Showcase>
  )
}
