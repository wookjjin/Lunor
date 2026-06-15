import { authInterceptor } from '@/core/request/interceptors/auth.interceptor'
import { errorInterceptor } from '@/core/request/interceptors/error.interceptor'
import { loggerInterceptor } from '@/core/request/interceptors/logger.interceptor'

export const requestInterceptors = [
  authInterceptor,

  loggerInterceptor,

  errorInterceptor,
]
