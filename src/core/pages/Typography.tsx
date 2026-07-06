import { Card } from '@/core/components/Card/Card'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Stack } from '@/core/components/Stack/Stack'

/* =============================================================================
   TypographyPage — 디자인 토큰 Typography 시각화
   Font Size, Weight, Line Height, Letter Spacing, Semantic Text Styles
   ============================================================================= */

const fontSizeTokens = [
  { name: '--font-size-2xs', value: '0.625rem', px: '10px' },
  { name: '--font-size-xs', value: '0.75rem', px: '12px' },
  { name: '--font-size-sm', value: '0.875rem', px: '14px' },
  { name: '--font-size-md', value: '1rem', px: '16px' },
  { name: '--font-size-lg', value: '1.125rem', px: '18px' },
  { name: '--font-size-xl', value: '1.25rem', px: '20px' },
  { name: '--font-size-2xl', value: '1.5rem', px: '24px' },
  { name: '--font-size-3xl', value: '1.875rem', px: '30px' },
  { name: '--font-size-4xl', value: '2.25rem', px: '36px' },
  { name: '--font-size-5xl', value: '3rem', px: '48px' },
  { name: '--font-size-6xl', value: '3.75rem', px: '60px' },
]

const fontWeightTokens = [
  { name: '--font-weight-light', value: '300' },
  { name: '--font-weight-regular', value: '400' },
  { name: '--font-weight-medium', value: '500' },
  { name: '--font-weight-semibold', value: '600' },
  { name: '--font-weight-bold', value: '700' },
  { name: '--font-weight-extrabold', value: '800' },
]

const lineHeightTokens = [
  { name: '--line-height-none', value: '1' },
  { name: '--line-height-tight', value: '1.25' },
  { name: '--line-height-snug', value: '1.375' },
  { name: '--line-height-normal', value: '1.5' },
  { name: '--line-height-relaxed', value: '1.625' },
  { name: '--line-height-loose', value: '2' },
]

const letterSpacingTokens = [
  { name: '--letter-spacing-tighter', value: '-0.05em' },
  { name: '--letter-spacing-tight', value: '-0.025em' },
  { name: '--letter-spacing-normal', value: '0em' },
  { name: '--letter-spacing-wide', value: '0.025em' },
  { name: '--letter-spacing-wider', value: '0.05em' },
  { name: '--letter-spacing-widest', value: '0.1em' },
  { name: '--letter-spacing-ultrawide', value: '0.2em' },
]

const textStyles = [
  { name: 'Display 2XL', size: 'var(--font-size-6xl)', weight: 'var(--font-weight-bold)', leading: 'var(--line-height-tight)' },
  { name: 'Display XL', size: 'var(--font-size-5xl)', weight: 'var(--font-weight-bold)', leading: 'var(--line-height-tight)' },
  { name: 'Display LG', size: 'var(--font-size-4xl)', weight: 'var(--font-weight-bold)', leading: 'var(--line-height-tight)' },
  { name: 'Heading XL', size: 'var(--font-size-3xl)', weight: 'var(--font-weight-semibold)', leading: 'var(--line-height-snug)' },
  { name: 'Heading LG', size: 'var(--font-size-2xl)', weight: 'var(--font-weight-semibold)', leading: 'var(--line-height-snug)' },
  { name: 'Heading MD', size: 'var(--font-size-xl)', weight: 'var(--font-weight-semibold)', leading: 'var(--line-height-snug)' },
  { name: 'Heading SM', size: 'var(--font-size-lg)', weight: 'var(--font-weight-semibold)', leading: 'var(--line-height-snug)' },
  { name: 'Heading XS', size: 'var(--font-size-md)', weight: 'var(--font-weight-semibold)', leading: 'var(--line-height-snug)' },
  { name: 'Body XL', size: 'var(--font-size-lg)', weight: 'var(--font-weight-regular)', leading: 'var(--line-height-relaxed)' },
  { name: 'Body LG', size: 'var(--font-size-md)', weight: 'var(--font-weight-regular)', leading: 'var(--line-height-relaxed)' },
  { name: 'Body MD', size: 'var(--font-size-sm)', weight: 'var(--font-weight-regular)', leading: 'var(--line-height-normal)' },
  { name: 'Body SM', size: 'var(--font-size-xs)', weight: 'var(--font-weight-regular)', leading: 'var(--line-height-normal)' },
  { name: 'Label LG', size: 'var(--font-size-md)', weight: 'var(--font-weight-medium)', leading: 'var(--line-height-none)' },
  { name: 'Label MD', size: 'var(--font-size-sm)', weight: 'var(--font-weight-medium)', leading: 'var(--line-height-none)' },
  { name: 'Label SM', size: 'var(--font-size-xs)', weight: 'var(--font-weight-medium)', leading: 'var(--line-height-none)' },
]

export default function TypographyPage() {
  return (
    <Showcase
      title="Typography"
      description="The typography tokens define font families, sizes, weights, line heights, letter spacing, and composite semantic text styles."
    >
      {/* Font Family */}
      <ShowcaseItem label="Font Family" variant="primary" badge="2 families" className="glacier-glass">
        <Card variant="outlined" padding="md" style={{ width: '100%' }}>
          <div style={{ fontFamily: 'var(--font-family-sans)', fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-2)' }}>
            Pretendard Sans — The quick brown fox
          </div>
          <div style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-md)', color: 'var(--color-text-secondary)' }}>
            JetBrains Mono — const tokens = getCSSVars()
          </div>
        </Card>
      </ShowcaseItem>

      {/* Font Size */}
      <ShowcaseItem label="Font Size" variant="primary" className="glacier-glass">
        <Stack direction="column" gap="sm">
          {fontSizeTokens.map(token => (
            <div key={token.name} style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
              <span style={{ fontSize: token.value, color: 'var(--color-text-primary)', whiteSpace: 'nowrap' }}>
                {token.px}
              </span>
              <span style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>
                {token.name}
                {' '}
                (
                {token.value}
                )
              </span>
            </div>
          ))}
        </Stack>
      </ShowcaseItem>

      {/* Font Weight */}
      <ShowcaseItem label="Font Weight" variant="secondary" className="glacier-glass">
        <Stack direction="column" gap="sm">
          {fontWeightTokens.map(token => (
            <div key={token.name} style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
              <span style={{ fontSize: 'var(--font-size-lg)', fontWeight: token.value, color: 'var(--color-text-primary)' }}>
                Glacier
                {' '}
                {token.value}
              </span>
              <span style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>
                {token.name}
              </span>
            </div>
          ))}
        </Stack>
      </ShowcaseItem>

      {/* Line Height */}
      <ShowcaseItem label="Line Height" variant="secondary" className="glacier-glass">
        <Stack direction="column" gap="sm">
          {lineHeightTokens.map(token => (
            <div key={token.name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <div style={{ lineHeight: token.value, fontSize: 'var(--font-size-sm)', color: 'var(--color-text-primary)', width: '8rem' }}>
                The quick brown fox jumps over the lazy dog.
              </div>
              <span style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>
                {token.name}
                {' '}
                (
                {token.value}
                )
              </span>
            </div>
          ))}
        </Stack>
      </ShowcaseItem>

      {/* Letter Spacing */}
      <ShowcaseItem label="Letter Spacing" variant="ghost" className="glacier-glass">
        <Stack direction="column" gap="sm">
          {letterSpacingTokens.map(token => (
            <div key={token.name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span style={{ letterSpacing: token.value, fontSize: 'var(--font-size-md)', color: 'var(--color-text-primary)', textTransform: 'uppercase' }}>
                Glacier
              </span>
              <span style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>
                {token.name}
                {' '}
                (
                {token.value}
                )
              </span>
            </div>
          ))}
        </Stack>
      </ShowcaseItem>

      {/* Semantic Text Styles */}
      <ShowcaseItem label="Text Styles" variant="ghost" className="glacier-glass">
        <Stack direction="column" gap="sm">
          {textStyles.map(style => (
            <div key={style.name} style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
              <span style={{
                fontSize: style.size,
                fontWeight: style.weight,
                lineHeight: style.leading,
                color: 'var(--color-text-primary)',
              }}
              >
                {style.name}
              </span>
              <span style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>
                {style.size}
                {' '}
                /
                {style.weight}
              </span>
            </div>
          ))}
        </Stack>
      </ShowcaseItem>
    </Showcase>
  )
}
