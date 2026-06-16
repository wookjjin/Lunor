import { createBrowserRouter } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
  },
  {
    path: '/components',
    lazy: async () => {
      const { default: Component } = await import('@/core/layout/ComponentsShell')
      return { Component }
    },
    children: [
      {
        path: 'button',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Button')
          return { Component }
        },
      },
      {
        path: 'input',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Input')
          return { Component }
        },
      },
    ],
  },
])

export default router
