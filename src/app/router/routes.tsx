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
        path: 'colors',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Colors')
          return { Component }
        },
      },
      {
        path: 'hooks',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Hooks')
          return { Component }
        },
      },
      {
        path: 'typography',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Typography')
          return { Component }
        },
      },
      {
        path: 'shadows',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Shadows')
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
        path: 'badge',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Badge')
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
        path: 'checkbox',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Checkbox')
          return { Component }
        },
      },
      {
        path: 'radio',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Radio')
          return { Component }
        },
      },
      {
        path: 'switch',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Switch')
          return { Component }
        },
      },
      {
        path: 'select',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Select')
          return { Component }
        },
      },
      {
        path: 'textarea',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Textarea')
          return { Component }
        },
      },
      {
        path: 'slider',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Slider')
          return { Component }
        },
      },
      {
        path: 'file-input',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/FileInput')
          return { Component }
        },
      },
      {
        path: 'input-group',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/InputGroup')
          return { Component }
        },
      },
      {
        path: 'stack',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Stack')
          return { Component }
        },
      },
      {
        path: 'divider',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Divider')
          return { Component }
        },
      },
      {
        path: 'spacer',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Spacer')
          return { Component }
        },
      },
      {
        path: 'container',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Container')
          return { Component }
        },
      },
      {
        path: 'avatar',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Avatar')
          return { Component }
        },
      },
      {
        path: 'chip',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Chip')
          return { Component }
        },
      },
      {
        path: 'list',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/List')
          return { Component }
        },
      },
      {
        path: 'accordion',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Accordion')
          return { Component }
        },
      },
      {
        path: 'tabs',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Tabs')
          return { Component }
        },
      },
      {
        path: 'breadcrumb',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Breadcrumb')
          return { Component }
        },
      },
      {
        path: 'menu-item',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/MenuItem')
          return { Component }
        },
      },
      {
        path: 'no-data',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/NoData')
          return { Component }
        },
      },
      {
        path: 'popover',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Popover')
          return { Component }
        },
      },
      {
        path: 'drawer',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Drawer')
          return { Component }
        },
      },
      {
        path: 'confirm-dialog',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/ConfirmDialog')
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
        path: 'progress-bar',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/ProgressBar')
          return { Component }
        },
      },
      {
        path: 'toast',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Toast')
          return { Component }
        },
      },
      {
        path: 'spinner',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Spinner')
          return { Component }
        },
      },
      {
        path: 'skeleton',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Skeleton')
          return { Component }
        },
      },
      {
        path: 'alert',
        lazy: async () => {
          const { default: Component } = await import('@/core/pages/Alert')
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
