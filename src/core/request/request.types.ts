// core/request/request.types.ts

export type RequestBody = Record<string, any> | BodyInit | null | undefined

export interface RequestConfig {
  timeout?: number

  retry?: number

  headers?: HeadersInit
}
