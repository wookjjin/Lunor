import type { RequestInterceptor } from '@/core/request/types'

export async function executeRequestInterceptors(
  interceptors: RequestInterceptor[],
  context: any,
) {
  for (const interceptor of interceptors) {
    await interceptor.onRequest?.(context)
  }
}

export async function executeResponseInterceptors(
  interceptors: RequestInterceptor[],
  context: any,
) {
  for (const interceptor of interceptors) {
    await interceptor.onResponse?.(context)
  }
}

export async function executeResponseErrorInterceptors(
  interceptors: RequestInterceptor[],
  context: any,
) {
  for (const interceptor of interceptors) {
    await interceptor.onResponseError?.(context)
  }
}
