/* =============================================================================
   Sidebar Navigation Configuration
   사이드바 내비게이션 항목 설정 — 그룹화 구조 지원
   새 컴포넌트 추가 시 이 파일만 업데이트
   ============================================================================= */

export interface NavItem {
  label: string
  path: string
  icon?: string
  badge?: number
  children?: NavGroup[]
}

export interface NavGroup {
  groupLabel: string
  items: NavItem[]
}

export const sidebarNavGroups: NavGroup[] = [
  {
    groupLabel: 'Foundation',
    items: [
      {
        label: 'Colors',
        path: '/components/colors',
        icon: 'palette',
      },
      {
        label: 'Typography',
        path: '/components/typography',
        icon: 'title',
      },
      {
        label: 'Shadows',
        path: '/components/shadows',
        icon: 'layers',
      },
    ],
  },
  {
    groupLabel: 'Components',
    items: [
      {
        label: 'Button',
        path: '/components/button',
        icon: 'smart_button',
        badge: 3,
      },
      {
        label: 'Input',
        path: '/components/input',
        icon: 'input',
      },
      {
        label: 'Card',
        path: '/components/card',
        icon: 'rectangle',
      },
      {
        label: 'Badge',
        path: '/components/badge',
        icon: 'sell',
      },
      {
        label: 'Table',
        path: '/components/table',
        icon: 'table',
      },
    ],
  },
  {
    groupLabel: 'Feedback',
    items: [
      {
        label: 'Toast',
        path: '/components/toast',
        icon: 'notification_important',
      },
      {
        label: 'Alert',
        path: '/components/alert',
        icon: 'warning',
      },
    ],
  },
]

/** Flat list of all nav items (for backward compatibility) */
export const sidebarNavItems: NavItem[] = sidebarNavGroups.flatMap(g => g.items)
