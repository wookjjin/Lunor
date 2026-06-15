/* eslint-disable no-console */
import type { RequestInterceptor } from '../types'

export const loggerInterceptor: RequestInterceptor
  = {
    onRequest({ request, options }) {
      console.log(
        '[REQUEST]',
        options.method,
        request,
      )
    },

    onResponse({
      request,
      response,
    }) {
      console.log(
        '[RESPONSE]',
        request,
        response?.status,
      )
    },

    onResponseError({
      request,
      response,
    }) {
      console.error(
        '[ERROR]',
        request,
        response?.status,
      )
    },
  }
