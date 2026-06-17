/**
 * 공통 타입 정의
 */

/** 페이지네이션 요청 파라미터 */
export interface PaginationParams {
  page: number
  pageSize: number
  sort?: string
  order?: 'asc' | 'desc'
}

/** 페이지네이션 응답 래퍼 */
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

/** API 공통 응답 래퍼 */
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

/** ID 타입 */
export type ID = string | number

/** 테마 타입 */
export type Theme = 'dark' | 'light'
