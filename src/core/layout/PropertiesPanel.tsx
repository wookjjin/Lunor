import type { ReactNode } from 'react'
import { useState } from 'react'

/* =============================================================================
   PropertiesPanel — 속성 패널 컴포넌트
   Props / Tokens / Code 탭 + Properties 컨트롤 + Design Tokens 카드 + Pro Tip
   ============================================================================= */

type PanelTab = 'props' | 'tokens' | 'code'

function TabIcon({ tab }: { tab: PanelTab }) {
  switch (tab) {
    case 'props':
      return <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>settings_input_component</span>
    case 'tokens':
      return <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>currency_exchange</span>
    case 'code':
      return <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>code</span>
  }
}

function ToggleGroup({ options, activeIndex }: { options: string[], activeIndex: number }) {
  return (
    <div className="props-toggle-group">
      {options.map((opt, i) => (
        <button
          key={opt}
          type="button"
          className={`props-toggle-btn${i === activeIndex ? ' props-toggle-btn--active' : ''}`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

function TokenCard({ color, name, value, isRadius }: {
  color?: string
  name: string
  value: string
  isRadius?: boolean
}) {
  return (
    <div className="props-token-card">
      <div className="props-token-swatch-wrapper">
        {isRadius
          ? (
              <div className="props-token-swatch--radius">
                <div className="props-token-swatch--radius-inner" />
              </div>
            )
          : (
              <div
                className="props-token-swatch"
                style={{ backgroundColor: color }}
              />
            )}
      </div>
      <div className="props-token-info">
        <span className="props-token-name">{name}</span>
        <span className="props-token-value">{value}</span>
      </div>
    </div>
  )
}

export interface PropertiesPanelProps {
  children?: ReactNode
}

export default function PropertiesPanel({ children }: PropertiesPanelProps) {
  const [activeTab, setActiveTab] = useState<PanelTab>('props')

  const tabs: { key: PanelTab, label: string }[] = [
    { key: 'props', label: 'Props' },
    { key: 'tokens', label: 'Tokens' },
    { key: 'code', label: 'Code' },
  ]

  function renderContent() {
    switch (activeTab) {
      case 'props':
        return children ?? <DefaultPlaceholder tab="props" />
      case 'tokens':
        return <TokensContent />
      case 'code':
        return <DefaultPlaceholder tab="code" />
    }
  }

  return (
    <aside className="layout-properties-panel glacier-glass scrollbar-hide">
      {/* Panel Tabs */}
      <div className="props-tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            type="button"
            className={`props-tab${activeTab === tab.key ? ' props-tab--active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            <TabIcon tab={tab.key} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel Content */}
      <div className="props-content">
        {renderContent()}
      </div>
    </aside>
  )
}

function TokensContent() {
  return (
    <>
      {/* Design Tokens */}
      <div className="props-section">
        <h3 className="props-section-heading">Design Tokens</h3>
        <div className="props-section-body">
          <TokenCard color="#7dd3fc" name="--color-interactive-default" value="#7dd3fc" />
          <TokenCard color="rgba(14,77,110,0.4)" name="--color-interactive-hover" value="#0e4d6e" />
          <TokenCard name="--radius-button-md" value="0.5rem (8px)" isRadius />
        </div>
      </div>
    </>
  )
}

function DefaultPlaceholder({ tab }: { tab: PanelTab }) {
  const labels: Record<PanelTab, string> = {
    props: 'Properties',
    tokens: 'Tokens',
    code: 'Code',
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      opacity: 0.4,
      textAlign: 'center',
      padding: '2rem',
    }}
    >
      <p style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
        {labels[tab]}
        {' '}
        content coming soon.
      </p>
    </div>
  )
}
