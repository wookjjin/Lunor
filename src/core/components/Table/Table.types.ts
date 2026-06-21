import type { ReactNode, TableHTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react'

export interface Column<T> {
  key: keyof T | string
  header: ReactNode
  render?: (value: unknown, row: T, rowIndex: number) => ReactNode
  width?: number | string
  align?: 'left' | 'center' | 'right'
}

export interface TableProps<T extends object>
  extends Omit<TableHTMLAttributes<HTMLTableElement>, 'children'> {
  columns: Column<T>[]
  data: T[]
  rowKey: keyof T | ((row: T, index: number) => string | number)
  onRowClick?: (row: T, index: number) => void
  hoverable?: boolean
  bordered?: boolean
  compact?: boolean
}

export interface TableHeaderCellProps
  extends ThHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right'
}

export interface TableDataCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right'
}
