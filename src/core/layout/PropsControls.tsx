import type { PropDefs } from './ComponentPlaygroundContext'
import { propDefsMap } from './ComponentPlaygroundContext'

/* =============================================================================
   PropsControls — PropertiesPanel 내부에 들어가는 동적 Props 컨트롤
   ComponentsShell로부터 전달받은 props/setProp/componentType로 조작
   ============================================================================= */

export interface PropsControlsProps {
  props: Record<string, unknown>
  setProp: (key: string, value: unknown) => void
  componentType: string
}

function ToggleGroup({ options, activeValue, onChange }: {
  options: string[]
  activeValue: string
  onChange: (value: string) => void
}) {
  return (
    <div className="props-toggle-group">
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          className={`props-toggle-btn${opt === activeValue ? ' props-toggle-btn--active' : ''}`}
          onClick={() => onChange(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

function BooleanToggle({ label, checked, onChange }: {
  label: string
  checked: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <div className="props-row">
      <label className="props-label">{label}</label>
      <div className="props-toggle-group">
        <button
          type="button"
          className={`props-toggle-btn${!checked ? ' props-toggle-btn--active' : ''}`}
          onClick={() => onChange(false)}
        >
          false
        </button>
        <button
          type="button"
          className={`props-toggle-btn${checked ? ' props-toggle-btn--active' : ''}`}
          onClick={() => onChange(true)}
        >
          true
        </button>
      </div>
    </div>
  )
}

function TextInput({ label, value, onChange }: {
  label: string
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="props-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '0.375rem' }}>
      <label className="props-label">{label}</label>
      <input
        type="text"
        className="props-text-input"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default function PropsControls({ props, setProp, componentType }: PropsControlsProps) {
  const defs: PropDefs | undefined = propDefsMap[componentType]

  if (!defs) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', opacity: 0.4, textAlign: 'center', padding: '2rem' }}>
        <p style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
          Select a component to view its props.
        </p>
      </div>
    )
  }

  return (
    <>
      {/* Toggle Controls */}
      {defs.toggles.length > 0 && (
        <div className="props-section">
          <h3 className="props-section-heading">Properties</h3>
          <div className="props-section-body">
            {defs.toggles.map(toggle => (
              <div key={toggle.key} className="props-row">
                <label className="props-label">{toggle.label}</label>
                <ToggleGroup
                  options={toggle.options}
                  activeValue={String(props[toggle.key] ?? toggle.options[0])}
                  onChange={value => setProp(toggle.key, value)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Boolean Controls */}
      {defs.booleans.length > 0 && (
        <div className="props-section">
          <h3 className="props-section-heading">State</h3>
          <div className="props-section-body">
            {defs.booleans.map(boolDef => (
              <BooleanToggle
                key={boolDef.key}
                label={boolDef.label}
                checked={Boolean(props[boolDef.key])}
                onChange={value => setProp(boolDef.key, value)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Text Controls */}
      {defs.texts.length > 0 && (
        <div className="props-section">
          <h3 className="props-section-heading">Content</h3>
          <div className="props-section-body">
            {defs.texts.map(textDef => (
              <TextInput
                key={textDef.key}
                label={textDef.label}
                value={String(props[textDef.key] ?? '')}
                onChange={value => setProp(textDef.key, value)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Pro Tip */}
      <div className="props-protip glacier-glass-elevated">
        <h4 className="props-protip-heading">Pro Tip</h4>
        <p className="props-protip-text">
          Use
          {' '}
          <code className="props-protip-code">cmd + shift + c</code>
          {' '}
          to copy the current component's JSX code directly to your clipboard.
        </p>
      </div>
    </>
  )
}
