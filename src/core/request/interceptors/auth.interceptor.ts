import type { RequestInterceptor } from '@/core/request/types'

export const authInterceptor: RequestInterceptor = {
  onRequest({ options }) {
    const token
      = localStorage.getItem('accessToken')

    if (!token) {
      return
    }

    options.headers = new Headers(
      options.headers,
    )

    options.headers.set(
      'Authorization',
      `Bearer ${token}`,
    )
  },
}
