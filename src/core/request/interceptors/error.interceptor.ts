import type { RequestInterceptor } from '../types'

import { HttpError } from '../HttpError'

export const errorInterceptor: RequestInterceptor
  = {
    onResponseError({ response }) {
      if (!response) {
        throw new HttpError({
          status: 0,
          message: 'No response received',
        })
      }

      throw new HttpError({
        status: response.status,
        code: response._data?.code,
        message: response._data?.message,
        data: response._data,
      })
    },
  }
