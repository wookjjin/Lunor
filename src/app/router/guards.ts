import type { LoaderFunction } from 'react-router'

/**
 * 인증이 필요한 라우트에 대한 가드
 */
export function authGuard(loader?: LoaderFunction): LoaderFunction {
  return async (args) => {
    // TODO: 인증 상태 확인 로직 구현
    // const isAuthenticated = useAuthStore.getState().isAuthenticated()
    // if (!isAuthenticated) {
    //   throw redirect('/login')
    // }
    return loader?.(args) ?? null
  }
}
