import { useState } from 'react'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Slider } from '@/core/components/Slider/Slider'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   SliderPage — Glacier UI 스타일 Slider 쇼케이스
   ============================================================================= */

export default function SliderPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'default') as 'default' | 'filled'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const showValue = Boolean(props.showValue)
  const disabled = Boolean(props.disabled)

  const [controlled, setControlled] = useState(50)

  return (
    <Showcase
      title="Slider"
      description="The slider component allows users to select a value within a range by dragging a handle along a track."
      cols={3}
    >
      {/* Default Variant */}
      <ShowcaseItem label="Default" variant="primary" badge="Active" className="glacier-glass">
        <Slider variant={variant} size={size} showValue={showValue} disabled={disabled} defaultValue={40} />
        <div className="showcase__row">
          <Slider variant={variant} size={size} defaultValue={20} />
          <Slider variant={variant} size={size} disabled defaultValue={60} />
        </div>
      </ShowcaseItem>

      {/* Filled Variant */}
      <ShowcaseItem label="Filled" variant="secondary" className="glacier-glass">
        <Slider variant="filled" size={size} showValue={showValue} disabled={disabled} defaultValue={70} />
        <div className="showcase__row">
          <Slider variant="filled" size={size} defaultValue={30} />
          <Slider variant="filled" size={size} disabled defaultValue={50} />
        </div>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" className="glacier-glass">
        <Slider variant={variant} size="sm" showValue defaultValue={25} />
        <Slider variant={variant} size="md" showValue defaultValue={50} />
        <Slider variant={variant} size="lg" showValue defaultValue={75} />
      </ShowcaseItem>

      {/* Controlled */}
      <ShowcaseItem label="Controlled" variant="secondary" className="glacier-glass">
        <Slider
          variant={variant}
          size={size}
          showValue
          value={controlled}
          onChange={e => setControlled(Number(e.target.value))}
        />
        <div className="showcase__row">
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            Value:
            {' '}
            {controlled}
          </span>
        </div>
      </ShowcaseItem>

      {/* Range & Step */}
      <ShowcaseItem label="Range & Step" variant="ghost" className="glacier-glass">
        <Slider variant={variant} size={size} showValue min={0} max={10} step={1} defaultValue={5} />
        <Slider variant={variant} size={size} showValue min={0} max={1000} step={100} defaultValue={300} />
        <Slider variant={variant} size={size} showValue min={-50} max={50} step={10} defaultValue={0} />
      </ShowcaseItem>

      {/* Show Value */}
      <ShowcaseItem label="Show Value" variant="ghost" className="glacier-glass">
        <Slider variant={variant} size={size} showValue defaultValue={42} />
        <Slider variant={variant} size={size} defaultValue={42} />
        <Slider variant={variant} size={size} showValue disabled defaultValue={80} />
      </ShowcaseItem>
    </Showcase>
  )
}
