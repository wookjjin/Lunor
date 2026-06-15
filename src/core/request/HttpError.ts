export class HttpError extends Error {
  readonly status: number
  readonly code?: string
  readonly data?: unknown

  constructor({
    status,
    code,
    message,
    data,
  }: {
    status: number
    code?: string
    message?: string
    data?: unknown
  }) {
    super(message)

    this.name = 'HttpError'
    this.status = status
    this.code = code
    this.data = data
  }
}
