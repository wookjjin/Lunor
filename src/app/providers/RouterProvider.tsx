import type { RouterProviderProps } from 'react-router/dom'
import { RouterProvider as ReactRouterProvider } from 'react-router/dom'

export function RouterProvider({ router, ...props }: RouterProviderProps) {
  return <ReactRouterProvider router={router} {...props} />
}
