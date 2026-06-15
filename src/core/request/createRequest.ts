// createRequest.ts

import { ofetch } from 'ofetch'

import { requestInterceptors } from '@/core/request/interceptors'

import {
  executeRequestInterceptors,
  executeResponseErrorInterceptors,
  executeResponseInterceptors,
} from '@/core/request/utils/executeInterceptor'

export function createRequest() {
  return ofetch.create({
    baseURL:
      import.meta.env.VITE_API_BASE_URL,

    timeout: 10000,

    retry: 0,

    async onRequest(context) {
      await executeRequestInterceptors(
        requestInterceptors,
        context,
      )
    },

    async onResponse(context) {
      await executeResponseInterceptors(
        requestInterceptors,
        context,
      )
    },

    async onResponseError(context) {
      await executeResponseErrorInterceptors(
        requestInterceptors,
        context,
      )
    },
  })
}
