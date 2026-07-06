import { Input } from '@/core/components/Input/Input'
import { InputGroup } from '@/core/components/InputGroup/InputGroup'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   InputGroupPage — Glacier UI 스타일 InputGroup 쇼케이스
   ============================================================================= */

export default function InputGroupPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'outline') as 'outline' | 'filled'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const fullWidth = Boolean(props.fullWidth)
  const disabled = Boolean(props.disabled)

  return (
    <Showcase
      title="InputGroup"
      description="The input group component wraps inputs with icons, prefixes, or suffixes for rich form field composition."
      cols={3}
    >
      {/* Left Icon */}
      <ShowcaseItem label="Left Icon" variant="primary" badge="Active" className="glacier-glass">
        <InputGroup variant={variant} size={size} fullWidth={fullWidth} disabled={disabled} icon="search">
          <Input variant="outline" size={size} placeholder="Search..." />
        </InputGroup>
        <div className="showcase__row">
          <InputGroup variant={variant} size={size} icon="person" disabled>
            <Input variant="outline" size={size} placeholder="Username" disabled />
          </InputGroup>
        </div>
      </ShowcaseItem>

      {/* Right Icon */}
      <ShowcaseItem label="Right Icon" variant="secondary" className="glacier-glass">
        <InputGroup variant={variant} size={size} fullWidth={fullWidth} disabled={disabled} icon="visibility" iconRight>
          <Input variant="outline" size={size} type="password" placeholder="Password" />
        </InputGroup>
        <div className="showcase__row">
          <InputGroup variant={variant} size={size} icon="calendar_today" iconRight>
            <Input variant="outline" size={size} placeholder="Date" />
          </InputGroup>
        </div>
      </ShowcaseItem>

      {/* Prefix Addon */}
      <ShowcaseItem label="Prefix" variant="primary" className="glacier-glass">
        <InputGroup variant={variant} size={size} fullWidth={fullWidth} disabled={disabled} prefix="$">
          <Input variant="outline" size={size} placeholder="0.00" />
        </InputGroup>
        <div className="showcase__row">
          <InputGroup variant={variant} size={size} prefix="https://">
            <Input variant="outline" size={size} placeholder="example.com" />
          </InputGroup>
        </div>
      </ShowcaseItem>

      {/* Suffix Addon */}
      <ShowcaseItem label="Suffix" variant="secondary" className="glacier-glass">
        <InputGroup variant={variant} size={size} fullWidth={fullWidth} disabled={disabled} suffix="kg">
          <Input variant="outline" size={size} placeholder="Weight" />
        </InputGroup>
        <div className="showcase__row">
          <InputGroup variant={variant} size={size} suffix="@company.com">
            <Input variant="outline" size={size} placeholder="email" />
          </InputGroup>
        </div>
      </ShowcaseItem>

      {/* Combined */}
      <ShowcaseItem label="Combined" variant="ghost" className="glacier-glass">
        <InputGroup variant={variant} size={size} fullWidth={fullWidth} icon="attach_money" prefix="$" suffix=".00">
          <Input variant="outline" size={size} placeholder="Amount" />
        </InputGroup>
        <InputGroup variant={variant} size={size} fullWidth={fullWidth} icon="mail" suffix="@">
          <Input variant="outline" size={size} placeholder="Email" />
        </InputGroup>
      </ShowcaseItem>

      {/* Sizes & States */}
      <ShowcaseItem label="Sizes" variant="ghost" className="glacier-glass">
        <InputGroup variant={variant} size="sm" icon="search">
          <Input variant="outline" size="sm" placeholder="Small" />
        </InputGroup>
        <InputGroup variant={variant} size="md" icon="search">
          <Input variant="outline" size="md" placeholder="Medium" />
        </InputGroup>
        <InputGroup variant={variant} size="lg" icon="search">
          <Input variant="outline" size="lg" placeholder="Large" />
        </InputGroup>
      </ShowcaseItem>
    </Showcase>
  )
}
