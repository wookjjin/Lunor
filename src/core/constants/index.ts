/**
 * 애플리케이션 공통 상수
 */

export const APP_NAME = 'Lunor'

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string ?? '/api'

export const DEFAULT_PAGE_SIZE = 20

export const MAX_RETRY_COUNT = 3
