// core/request/request.ts

import type { RequestBody, RequestConfig } from '@/core/request/request.types'

import { createRequest } from '@/core/request/createRequest'

const client = createRequest()

export const request = {
  get<T>(
    url: string,
    config?: RequestConfig,
  ) {
    return client<T>(url, {
      method: 'GET',
      ...config,
    })
  },

  post<T>(
    url: string,
    body?: RequestBody,
    config?: RequestConfig,
  ) {
    return client<T>(url, {
      method: 'POST',
      body,
      ...config,
    })
  },

  put<T>(
    url: string,
    body?: RequestBody,
    config?: RequestConfig,
  ) {
    return client<T>(url, {
      method: 'PUT',
      body,
      ...config,
    })
  },

  patch<T>(
    url: string,
    body?: RequestBody,
    config?: RequestConfig,
  ) {
    return client<T>(url, {
      method: 'PATCH',
      body,
      ...config,
    })
  },

  delete<T>(
    url: string,
    config?: RequestConfig,
  ) {
    return client<T>(url, {
      method: 'DELETE',
      ...config,
    })
  },
}
