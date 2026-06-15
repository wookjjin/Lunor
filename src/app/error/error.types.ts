export interface AppError {
  code: string
  message: string
  statusCode?: number
  details?: unknown
}

export interface ApiError extends AppError {
  statusCode: number
  url: string
  method: string
}
