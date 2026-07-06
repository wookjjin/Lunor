import { useMemo } from 'react'
import { Card } from '@/core/components/Card/Card'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Stack } from '@/core/components/Stack/Stack'

/* =============================================================================
   ColorsPage — 디자인 토큰 Color 시각화
   CSS Custom Properties를 런타임에서 읽어와 스워치 카드로 표시
   ============================================================================= */

interface TokenItem {
  name: string
  value: string
}

interface TokenGroup {
  label: string
  tokens: TokenItem[]
}

/** :root에서 지정한 prefix의 CSS 변수를 추출 */
function getCSSVars(prefix: string): TokenItem[] {
  const sheets = document.styleSheets
  const result: TokenItem[] = []
  const seen = new Set<string>()

  for (let i = 0; i < sheets.length; i++) {
    try {
      const rules = sheets[i].cssRules
      for (let j = 0; j < rules.length; j++) {
        const style = (rules[j] as CSSStyleRule).style
        if (!style)
          continue
        for (let k = 0; k < style.length; k++) {
          const prop = style.item(k)
          if (prop && prop.startsWith(prefix) && !seen.has(prop)) {
            seen.add(prop)
            const value = style.getPropertyValue(prop).trim()
            if (value)
              result.push({ name: prop, value })
          }
        }
      }
    }
    catch {
      // cross-origin stylesheet — skip
    }
  }

  return result
}

/** 컴퓨티드 스타일에서 실제 렌더링 값을 가져옴 (var() 해석) */
function getComputedVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

export default function ColorsPage() {
  const groups = useMemo<TokenGroup[]>(() => {
    const primitiveGroups: TokenGroup[] = [
      { label: 'Neutral', tokens: getCSSVars('--color-neutral-') },
      { label: 'Primary', tokens: getCSSVars('--color-primary-') },
      { label: 'Secondary', tokens: getCSSVars('--color-secondary-') },
      { label: 'Tertiary', tokens: getCSSVars('--color-tertiary-') },
      { label: 'Danger', tokens: getCSSVars('--color-danger-') },
      { label: 'Success', tokens: getCSSVars('--color-success-') },
      { label: 'Warning', tokens: getCSSVars('--color-warning-') },
      { label: 'Info', tokens: getCSSVars('--color-info-') },
    ]

    const semanticGroups: TokenGroup[] = [
      { label: 'Background', tokens: getCSSVars('--color-bg-') },
      { label: 'Surface', tokens: getCSSVars('--color-surface-') },
      { label: 'Text', tokens: getCSSVars('--color-text-') },
      { label: 'Border', tokens: getCSSVars('--color-border-') },
      { label: 'Interactive', tokens: getCSSVars('--color-interactive-') },
      { label: 'Glow', tokens: getCSSVars('--color-primary-glow-') },
    ]

    return [...primitiveGroups, ...semanticGroups]
  }, [])

  return (
    <Showcase
      title="Colors"
      description="The color tokens define the Glacier Design System palette — primitive scales and semantic aliases that adapt to dark and light themes."
    >
      {groups.map(group => (
        group.tokens.length > 0 && (
          <ShowcaseItem
            key={group.label}
            label={group.label}
            variant="primary"
            className="glacier-glass"
          >
            <Stack direction="row" gap="md" wrap>
              {group.tokens.map((token) => {
                const computed = getComputedVar(token.name)
                const isAlpha = computed.includes('rgba')
                return (
                  <Card key={token.name} variant="outlined" padding="none" style={{ width: '12rem' }}>
                    <div
                      style={{
                        height: '4rem',
                        borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                        background: computed || token.value,
                        backgroundImage: isAlpha
                          ? `linear-gradient(45deg, var(--color-bg-muted) 25%, transparent 25%, transparent 75%, var(--color-bg-muted) 75%), linear-gradient(45deg, var(--color-bg-muted) 25%, transparent 25%, transparent 75%, var(--color-bg-muted) 75%)`
                          : undefined,
                        backgroundSize: isAlpha ? '8px 8px, 8px 8px' : undefined,
                        backgroundPosition: isAlpha ? '0 0, 4px 4px' : undefined,
                        backgroundColor: computed,
                      }}
                    />
                    <div style={{ padding: 'var(--space-2) var(--space-3)' }}>
                      <div style={{ fontSize: 'var(--font-size-2xs)', fontFamily: 'var(--font-family-mono)', color: 'var(--color-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {token.name}
                      </div>
                      <div style={{ fontSize: 'var(--font-size-2xs)', fontFamily: 'var(--font-family-mono)', color: 'var(--color-text-tertiary)' }}>
                        {computed || token.value}
                      </div>
                    </div>
                  </Card>
                )
              })}
            </Stack>
          </ShowcaseItem>
        )
      ))}
    </Showcase>
  )
}
