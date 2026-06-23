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
        index: true,
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Home')
          return { Component }
        },
      },
      {
        path: 'button',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Button')
          return { Component }
        },
      },
      {
        path: 'card',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Card')
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
      {
        path: 'dialog',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Dialog')
          return { Component }
        },
      },
      {
        path: 'dropdown',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Dropdown')
          return { Component }
        },
      },
      {
        path: 'pagination',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Pagination')
          return { Component }
        },
      },
      {
        path: 'table',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Table')
          return { Component }
        },
      },
      {
        path: 'datatable',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/DataTable')
          return { Component }
        },
      },
    ],
  },
])

export default router
