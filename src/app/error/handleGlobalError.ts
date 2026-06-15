// app/error/handleGlobalError.ts

import { HttpError } from '@/core/request'

export function handleGlobalError(
  error: unknown,
) {
  if (!(error instanceof HttpError)) {
    return false
  }

  switch (error.status) {
    case 401:
      // authStore.logout()

      // toast.error(
      //   '로그인이 만료되었습니다.',
      // )

      return true

    case 403:
      // toast.error(
      //   '접근 권한이 없습니다.',
      // )

      return true

    case 500:
      // toast.error(
      //   '서버 오류가 발생했습니다.',
      // )

      return true

    default:
      return false
  }
}
