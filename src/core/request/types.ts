import type { FetchContext } from 'ofetch'

export interface RequestInterceptor {
  onRequest?: (context: FetchContext) => Promise<void> | void

  onResponse?: (context: FetchContext) => Promise<void> | void

  onResponseError?: (
    context: FetchContext,
  ) => Promise<void> | void
}
