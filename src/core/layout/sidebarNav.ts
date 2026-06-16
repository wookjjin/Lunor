/* =============================================================================
   Sidebar Navigation Configuration
   사이드바 내비게이션 항목 설정 — 새 컴포넌트 추가 시 이 파일만 업데이트
   ============================================================================= */

export interface NavItem {
  label: string
  path: string
  icon?: string
  children?: NavItem[]
}

export const sidebarNavItems: NavItem[] = [
  {
    label: 'Button',
    path: '/components/button',
    icon: 'smart_button',
  },
  {
    label: 'Input',
    path: '/components/input',
    icon: 'text_fields',
  },
]
