import type { ReactNode } from 'react'
import type { Column, TableProps } from '@/core/components/Table/Table.types'

export function Table<T extends object>({
  columns,
  data,
  rowKey,
  onRowClick,
  hoverable = true,
  bordered = false,
  compact = false,
  className,
  ...props
}: TableProps<T>) {
  const getRowKey = (row: T, index: number): string | number => {
    if (typeof rowKey === 'function')
      return rowKey(row, index)
    return (row[rowKey as keyof T] as string | number) ?? index
  }

  const tableClasses = [
    'table',
    hoverable && 'table--hoverable',
    bordered && 'table--bordered',
    compact && 'table--compact',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const getAlignClass = (align?: 'left' | 'center' | 'right') =>
    align ? `table__cell--${align}` : ''

  const getColumnStyle = (col: Column<T>) => {
    const style: Record<string, string | number> = {}
    if (col.width !== undefined)
      style.width = col.width
    return style
  }

  return (
    <div className="table__scroll">
      <table className={tableClasses} {...props}>
        <thead className="table__head">
          <tr className="table__row">
            {columns.map(col => (
              <th
                key={String(col.key)}
                className={['table__header', getAlignClass(col.align)].filter(Boolean).join(' ')}
                style={getColumnStyle(col)}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((row, rowIndex) => (
            <tr
              key={getRowKey(row, rowIndex)}
              className="table__row"
              onClick={onRowClick ? () => onRowClick(row, rowIndex) : undefined}
            >
              {columns.map((col) => {
                const value: unknown = col.key in row ? (row as Record<string, unknown>)[col.key as string] : undefined
                return (
                  <td
                    key={String(col.key)}
                    className={['table__cell', getAlignClass(col.align)].filter(Boolean).join(' ')}
                  >
                    {col.render ? col.render(value, row, rowIndex) : (value as ReactNode)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
