import { useState } from 'react'
import { Chip } from '@/core/components/Chip/Chip'
import { Stack } from '@/core/components/Stack/Stack'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   ChipPage — Glacier UI 스타일 Chip 쇼케이스
   ============================================================================= */

export default function ChipPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'default') as 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const removable = Boolean(props.removable)

  const [chips, setChips] = useState(['React', 'TypeScript', 'Vite', 'Zustand'])

  return (
    <Showcase
      title="Chip"
      description="The chip component represents interactive tags used for filtering, categorization, or removable selections."
      cols={3}
    >
      {/* Variants */}
      <ShowcaseItem label="Variants" variant="primary" badge="6 types" className="glacier-glass">
        <Stack direction="row" gap="sm" wrap>
          <Chip variant="default">Default</Chip>
          <Chip variant="primary">Primary</Chip>
          <Chip variant="secondary">Secondary</Chip>
          <Chip variant="danger">Danger</Chip>
          <Chip variant="success">Success</Chip>
          <Chip variant="warning">Warning</Chip>
        </Stack>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="sm" align="center" wrap>
          <Chip variant={variant} size="sm">Small</Chip>
          <Chip variant={variant} size="md">Medium</Chip>
          <Chip variant={variant} size="lg">Large</Chip>
        </Stack>
      </ShowcaseItem>

      {/* With Icon */}
      <ShowcaseItem label="With Icon" variant="primary" className="glacier-glass">
        <Stack direction="row" gap="sm" wrap>
          <Chip variant="primary" icon="rocket_launch">Launch</Chip>
          <Chip variant="success" icon="check_circle">Verified</Chip>
          <Chip variant="warning" icon="warning">Pending</Chip>
          <Chip variant="danger" icon="error">Failed</Chip>
        </Stack>
      </ShowcaseItem>

      {/* Removable */}
      <ShowcaseItem label="Removable" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="sm" wrap>
          <Chip variant="primary" removable>React</Chip>
          <Chip variant="primary" removable>Vue</Chip>
          <Chip variant="primary" removable>Svelte</Chip>
          <Chip variant="primary" removable>Angular</Chip>
        </Stack>
      </ShowcaseItem>

      {/* Selectable */}
      <ShowcaseItem label="Selectable" variant="ghost" className="glacier-glass">
        <Stack direction="row" gap="sm" wrap>
          <Chip variant={variant} size={size} removable={removable} defaultSelected>Selected</Chip>
          <Chip variant={variant} size={size} removable={removable}>Not Selected</Chip>
          <Chip variant={variant} size={size} removable={removable} defaultSelected icon="star">Favorite</Chip>
        </Stack>
      </ShowcaseItem>

      {/* Dynamic Removal */}
      <ShowcaseItem label="Dynamic" variant="ghost" className="glacier-glass">
        <Stack direction="row" gap="sm" wrap>
          {chips.map(label => (
            <Chip
              key={label}
              variant="primary"
              removable
              onRemove={() => setChips(prev => prev.filter(c => c !== label))}
            >
              {label}
            </Chip>
          ))}
          {chips.length === 0 && (
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
              All chips removed. Refresh to restore.
            </span>
          )}
        </Stack>
      </ShowcaseItem>
    </Showcase>
  )
}