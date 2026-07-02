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
  /** true면 정확히 일치할 때만 active 표시 (접두사 매칭 방지) */
  end?: boolean
  children?: NavGroup[]
}

export interface NavGroup {
  groupLabel: string
  items: NavItem[]
}

export const sidebarNavGroups: NavGroup[] = [
  {
    groupLabel: 'Overview',
    items: [
      {
        label: 'Home',
        path: '/components',
        icon: 'home',
        end: true,
      },
    ],
  },
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
      {
        label: 'Stack',
        path: '/components/stack',
        icon: 'view_stream',
      },
      {
        label: 'Divider',
        path: '/components/divider',
        icon: 'horizontal_rule',
      },
      {
        label: 'Spacer',
        path: '/components/spacer',
        icon: 'space_bar',
      },
      {
        label: 'Container',
        path: '/components/container',
        icon: 'crop_landscape',
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
        label: 'Avatar',
        path: '/components/avatar',
        icon: 'account_circle',
      },
      {
        label: 'Checkbox',
        path: '/components/checkbox',
        icon: 'check_box',
      },
      {
        label: 'Radio',
        path: '/components/radio',
        icon: 'radio_button_checked',
      },
      {
        label: 'Switch',
        path: '/components/switch',
        icon: 'toggle_on',
      },
      {
        label: 'Select',
        path: '/components/select',
        icon: 'arrow_drop_down_circle',
      },
      {
        label: 'Textarea',
        path: '/components/textarea',
        icon: 'edit_note',
      },
      {
        label: 'Slider',
        path: '/components/slider',
        icon: 'tune',
      },
      {
        label: 'FileInput',
        path: '/components/file-input',
        icon: 'upload_file',
      },
      {
        label: 'InputGroup',
        path: '/components/input-group',
        icon: 'text_fields',
      },
      {
        label: 'Badge',
        path: '/components/badge',
        icon: 'sell',
      },
      {
        label: 'Chip',
        path: '/components/chip',
        icon: 'label',
      },
      {
        label: 'List',
        path: '/components/list',
        icon: 'list',
      },
      {
        label: 'Accordion',
        path: '/components/accordion',
        icon: 'expand_more',
      },
      {
        label: 'Tabs',
        path: '/components/tabs',
        icon: 'tab',
      },
      {
        label: 'Table',
        path: '/components/table',
        icon: 'table',
      },
      {
        label: 'DataTable',
        path: '/components/datatable',
        icon: 'table_chart',
      },
      {
        label: 'Dropdown',
        path: '/components/dropdown',
        icon: 'arrow_drop_down',
      },
      {
        label: 'Pagination',
        path: '/components/pagination',
        icon: 'more_horiz',
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
        label: 'Spinner',
        path: '/components/spinner',
        icon: 'progress_activity',
      },
      {
        label: 'ProgressBar',
        path: '/components/progress-bar',
        icon: 'linear_scale',
      },
      {
        label: 'Skeleton',
        path: '/components/skeleton',
        icon: 'skeleton',
      },
      {
        label: 'Alert',
        path: '/components/alert',
        icon: 'warning',
      },
      {
        label: 'Dialog',
        path: '/components/dialog',
        icon: 'chat_bubble',
      },
    ],
  },
]

/** Flat list of all nav items (for backward compatibility) */
export const sidebarNavItems: NavItem[] = sidebarNavGroups.flatMap(g => g.items)
