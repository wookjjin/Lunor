import { Link } from '@/core/components/Link/Link'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Stack } from '@/core/components/Stack/Stack'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   LinkPage — Glacier UI 스타일 Link 쇼케이스
   ============================================================================= */

export default function LinkPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'default') as 'default' | 'subtle' | 'underline'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const external = Boolean(props.external)

  return (
    <Showcase
      title="Link"
      description="The link component provides accessible navigation with semantic color variants and external link support."
      cols={3}
    >
      {/* Playground */}
      <ShowcaseItem label="Playground" variant="primary" badge="Active" className="glacier-glass">
        <Link href="#" variant={variant} size={size} external={external}>
          {external ? 'External Link' : 'Internal Link'}
        </Link>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          Use Properties panel to adjust variant, size, and external.
        </span>
      </ShowcaseItem>

      {/* Variants */}
      <ShowcaseItem label="Variants" variant="secondary" className="glacier-glass">
        <Stack direction="column" gap="sm">
          <Link href="#" variant="default">Default Link</Link>
          <Link href="#" variant="subtle">Subtle Link</Link>
          <Link href="#" variant="underline">Underline Link</Link>
        </Stack>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="ghost" className="glacier-glass">
        <Stack direction="column" gap="sm" align="start">
          <Link href="#" size="sm">Small Link</Link>
          <Link href="#" size="md">Medium Link</Link>
          <Link href="#" size="lg">Large Link</Link>
        </Stack>
      </ShowcaseItem>

      {/* With Icon */}
      <ShowcaseItem label="With Icon" variant="primary" className="glacier-glass">
        <Stack direction="column" gap="sm">
          <Link href="#" icon="open_in_new" external>External with icon</Link>
          <Link href="#" iconRight="arrow_forward">Forward link</Link>
          <Link href="#" icon="download" iconRight="chevron_right">Both icons</Link>
        </Stack>
      </ShowcaseItem>

      {/* External */}
      <ShowcaseItem label="External" variant="secondary" className="glacier-glass">
        <Stack direction="column" gap="sm">
          <Link href="https://example.com" external>example.com</Link>
          <Link href="https://github.com" external icon="open_in_new">GitHub</Link>
        </Stack>
        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
          target=_blank + rel=noopener noreferrer
        </span>
      </ShowcaseItem>

      {/* Inline */}
      <ShowcaseItem label="Inline" variant="ghost" className="glacier-glass">
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)', margin: 0 }}>
          This is a paragraph with an
          {' '}
          <Link href="#" variant="underline">inline link</Link>
          {' '}
          that flows naturally within text content.
        </p>
      </ShowcaseItem>
    </Showcase>
  )
}