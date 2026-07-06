import { Card } from '@/core/components/Card/Card'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Stack } from '@/core/components/Stack/Stack'

/* =============================================================================
   ShadowsPage — 디자인 토큰 Shadow 시각화
   Elevation Scale, Inner Shadow, Focus Ring, Semantic Aliases
   ============================================================================= */

const elevationTokens = [
  { name: '--shadow-none', desc: 'No shadow' },
  { name: '--shadow-xs', desc: 'elevation-1: Card default' },
  { name: '--shadow-sm', desc: 'elevation-2: Card hover' },
  { name: '--shadow-md', desc: 'elevation-3: Dropdown' },
  { name: '--shadow-lg', desc: 'elevation-4: Modal' },
  { name: '--shadow-xl', desc: 'elevation-5: Drawer' },
  { name: '--shadow-2xl', desc: 'elevation-6: Full overlay' },
]

const innerTokens = [
  { name: '--shadow-inner-sm', desc: 'Subtle inset' },
  { name: '--shadow-inner-md', desc: 'Medium inset' },
  { name: '--shadow-inner-lg', desc: 'Deep inset' },
]

const focusTokens = [
  { name: '--shadow-focus-primary', desc: 'Primary focus ring' },
  { name: '--shadow-focus-danger', desc: 'Danger focus ring' },
  { name: '--shadow-focus-success', desc: 'Success focus ring' },
  { name: '--shadow-focus-neutral', desc: 'Neutral focus ring' },
]

const semanticTokens = [
  { name: '--shadow-card', desc: 'Card' },
  { name: '--shadow-card-hover', desc: 'Card hover' },
  { name: '--shadow-dropdown', desc: 'Dropdown' },
  { name: '--shadow-popover', desc: 'Popover' },
  { name: '--shadow-modal', desc: 'Modal' },
  { name: '--shadow-drawer', desc: 'Drawer' },
  { name: '--shadow-toast', desc: 'Toast' },
  { name: '--shadow-button', desc: 'Button' },
]

function ShadowBox({ name, desc }: { name: string, desc: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
      <div
        style={{
          width: '5rem',
          height: '5rem',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-surface-default)',
          boxShadow: `var(${name})`,
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-primary)', whiteSpace: 'nowrap' }}>
          {name}
        </div>
        <div style={{ fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>
          {desc}
        </div>
      </div>
    </div>
  )
}

function InnerShadowBox({ name, desc }: { name: string, desc: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
      <div
        style={{
          width: '5rem',
          height: '5rem',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-bg-subtle)',
          boxShadow: `var(${name})`,
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-primary)' }}>
          {name}
        </div>
        <div style={{ fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>
          {desc}
        </div>
      </div>
    </div>
  )
}

function FocusRingBox({ name, desc }: { name: string, desc: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-2)' }}>
      <div
        style={{
          width: '5rem',
          height: '5rem',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--color-surface-default)',
          boxShadow: `var(${name})`,
          border: '1px solid var(--color-border-default)',
        }}
      />
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-primary)' }}>
          {name}
        </div>
        <div style={{ fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>
          {desc}
        </div>
      </div>
    </div>
  )
}

export default function ShadowsPage() {
  return (
    <Showcase
      title="Shadows"
      description="The shadow tokens define elevation scale, inner shadows, and focus rings that provide depth and hierarchy across the design system."
    >
      {/* Elevation Scale */}
      <ShowcaseItem label="Elevation" variant="primary" badge="7 levels" className="glacier-glass">
        <Stack direction="row" gap="lg" wrap justify="center">
          {elevationTokens.map(token => (
            <ShadowBox key={token.name} name={token.name} desc={token.desc} />
          ))}
        </Stack>
      </ShowcaseItem>

      {/* Inner Shadow */}
      <ShowcaseItem label="Inner" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="lg" wrap justify="center">
          {innerTokens.map(token => (
            <InnerShadowBox key={token.name} name={token.name} desc={token.desc} />
          ))}
        </Stack>
      </ShowcaseItem>

      {/* Focus Ring */}
      <ShowcaseItem label="Focus Ring" variant="primary" className="glacier-glass">
        <Stack direction="row" gap="lg" wrap justify="center">
          {focusTokens.map(token => (
            <FocusRingBox key={token.name} name={token.name} desc={token.desc} />
          ))}
        </Stack>
      </ShowcaseItem>

      {/* Semantic Aliases */}
      <ShowcaseItem label="Semantic" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="lg" wrap justify="center">
          {semanticTokens.map(token => (
            <ShadowBox key={token.name} name={token.name} desc={token.desc} />
          ))}
        </Stack>
      </ShowcaseItem>

      {/* Info */}
      <ShowcaseItem label="Info" variant="ghost" className="glacier-glass">
        <Card variant="outlined" padding="md" style={{ width: '100%' }}>
          <Stack direction="column" gap="sm">
            <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-text-primary)' }}>
              Shadow System
            </span>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)' }}>
              Shadows adapt to the active theme. Dark mode uses higher opacity values for visibility,
              while light mode uses softer, more subtle shadows. Focus rings use 3px spread for accessibility.
            </span>
          </Stack>
        </Card>
      </ShowcaseItem>
    </Showcase>
  )
}
