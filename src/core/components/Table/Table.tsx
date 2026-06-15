import type { ReactNode } from 'react'

interface Column<T> {
  key: keyof T | string
  header: string
  render?: (value: unknown, row: T) => ReactNode
}

interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
  rowKey: keyof T | ((row: T) => string | number)
  onRowClick?: (row: T) => void
}

export function Table<T extends object>({
  columns,
  data,
  rowKey,
  onRowClick,
}: TableProps<T>) {
  const getRowKey = (row: T, index: number): string | number => {
    if (typeof rowKey === 'function')
      return rowKey(row)
    return row[rowKey] as string | number ?? index
  }

  return (
    <table>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={String(col.key)}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={getRowKey(row, index)}
            onClick={onRowClick ? () => onRowClick(row) : undefined}
          >
            {columns.map((col) => {
              const value: unknown = col.key in row ? (row as any)[col.key] : undefined
              return (
                <td key={String(col.key)}>
                  {col.render ? col.render(value, row) : (value as ReactNode)}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export type { Column, TableProps }
