import { GlobalErrorBoundary } from '@/app/error/GlobalErrorBoundary'
import { QueryProvider } from '@/app/providers/QueryProvider'
import { RouterProvider } from '@/app/providers/RouterProvider'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { ToastProvider } from '@/app/providers/ToastProvider'
import router from '@/app/router/routes'

export default function App() {
  return (
    <GlobalErrorBoundary>
      <QueryProvider>
        <ThemeProvider>
          <ToastProvider>
            <RouterProvider router={router} />
          </ToastProvider>
        </ThemeProvider>
      </QueryProvider>
    </GlobalErrorBoundary>
  )
}
