// app/providers/QueryProvider.tsx

import type { ReactNode } from 'react'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { handleGlobalError } from '@/app/error/handleGlobalError'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error) {
      handleGlobalError(error)
    },
  }),

  mutationCache: new MutationCache({
    onError(error) {
      handleGlobalError(error)
    },
  }),
})

export function QueryProvider({ children }: { children: ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
