import type { ReactNode } from 'react'
import type { Column, TableProps } from '@/core/components/Table/Table.types'

export interface DataTableProps<T extends object>
  extends Omit<TableProps<T>, 'data'> {
  data: T[]
  /** 가상 스크롤 활성화 여부 */
  virtual?: boolean
  /** 스크롤 컨테이너 높이 (px) */
  height?: number
  /** 각 행의 높이 (px), 가상 스크롤 시 필수 */
  rowHeight?: number
  /** 가시 영역 위/아래로 추가 렌더링할 행 수 (오버스캔) */
  overscan?: number
  /** 빈 데이터 표시 노드 */
  emptyContent?: ReactNode
}

export type { Column }
