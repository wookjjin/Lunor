import type { TabPanelProps, TabProps, TabsProps } from '@/core/components/Tabs/Tabs.types'
import { createContext, use, useId, useState } from 'react'
import type { ReactNode } from 'react'

/* =============================================================================
   Tabs — Tab Navigation + Panel
   context 기반 active tab 상태 관리, controlled/uncontrolled 지원
   ============================================================================= */

interface TabsContextValue {
  activeTab: string
  setActiveTab: (id: string) => void
  variant: 'default' | 'pills' | 'underline'
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const ctx = use(TabsContext)
  if (!ctx)
    throw new Error('Tabs components must be used within Tabs')
  return ctx
}

export function Tabs({
  defaultValue,
  value: valueProp,
  onValueChange,
  variant = 'default',
  className,
  children,
  ...props
}: TabsProps) {
  const isControlled = valueProp !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const activeTab = isControlled ? valueProp : internalValue

  const setActiveTab = (id: string) => {
    if (!isControlled)
      setInternalValue(id)
    onValueChange?.(id)
  }

  const ctx: TabsContextValue = { activeTab, setActiveTab, variant }

  return (
    <TabsContext value={ctx}>
      <div
        className={[
          'tabs',
          `tabs--${variant}`,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </div>
    </TabsContext>
  )
}

export function Tab({
  value,
  label,
  icon,
  disabled = false,
  className,
  ...props
}: TabProps) {
  const { activeTab, setActiveTab, variant } = useTabsContext()
  const isActive = activeTab === value
  const tabId = useId()

  return (
    <button
      type="button"
      id={tabId}
      className={[
        'tabs__tab',
        `tabs__tab--${variant}`,
        isActive && 'tabs__tab--active',
        disabled && 'tabs__tab--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="tab"
      aria-selected={isActive}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      onClick={() => !disabled && setActiveTab(value)}
      {...props}
    >
      {icon && (
        <span className="tabs__tab-icon material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="tabs__tab-label">{label}</span>
    </button>
  )
}

export function TabList({
  className,
  children,
  ...props
}: { className?: string, children: ReactNode } & Omit<React.HTMLAttributes<HTMLDivElement>, 'className' | 'children'>) {
  return (
    <div
      className={['tabs__list', className].filter(Boolean).join(' ')}
      role="tablist"
      {...props}
    >
      {children}
    </div>
  )
}

export function TabPanel({
  value,
  className,
  children,
  ...props
}: TabPanelProps) {
  const { activeTab } = useTabsContext()
  const isActive = activeTab === value

  if (!isActive)
    return null

  return (
    <div
      className={[
        'tabs__panel',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="tabpanel"
      {...props}
    >
      {children}
    </div>
  )
}