import type { Column } from '@/core/components/Table/Table.types'
import { useState } from 'react'
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
      const colorMap: Record<User['role'], string> = {
        Admin: 'var(--glacier-accent, #4f8cff)',
        Editor: 'var(--glacier-secondary, #33b3a6)',
        Viewer: 'var(--glacier-muted, #8a94a6)',
      }
      return <span style={{ color: colorMap[role], fontWeight: 600 }}>{role}</span>
    },
  },
  {
    key: 'status',
    header: 'Status',
    width: 120,
    align: 'center',
    render: (value) => {
      const status = value as User['status']
      return (
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            color: status === 'Active' ? '#16a34a' : '#94a3b8',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: status === 'Active' ? '#16a34a' : '#cbd5e1',
            }}
          />
          {status}
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
          <div
            style={{
              marginTop: 12,
              padding: '10px 14px',
              borderRadius: 10,
              background: 'var(--glacier-surface, rgba(255,255,255,0.06))',
              fontSize: 13,
            }}
          >
            선택된 행:
            {' '}
            <strong>{selected.name}</strong>
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
