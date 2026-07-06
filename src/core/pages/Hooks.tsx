import { useRef, useState } from 'react'
import { Badge } from '@/core/components/Badge/Badge'
import { Button } from '@/core/components/Button/Button'
import { Card } from '@/core/components/Card/Card'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Stack } from '@/core/components/Stack/Stack'
import { useClickOutside } from '@/core/hooks/useClickOutside'
import { useClipboard } from '@/core/hooks/useClipboard'
import { useEscapeKey } from '@/core/hooks/useEscapeKey'
import { useFocusTrap } from '@/core/hooks/useFocusTrap'
import { useIntersection } from '@/core/hooks/useIntersection'
import { usePrevious } from '@/core/hooks/usePrevious'

/* =============================================================================
   HooksPage — 6개 커스텀 훅 쇼케이스
   ============================================================================= */

export default function HooksPage() {
  return (
    <Showcase
      title="Hooks"
      description="Custom React hooks for common UI patterns — click outside detection, clipboard, escape key, focus trap, intersection observer, and previous value tracking."
      cols={3}
    >
      <UseClickOutsideDemo />
      <UseClipboardDemo />
      <UseEscapeKeyDemo />
      <UseFocusTrapDemo />
      <UseIntersectionDemo />
      <UsePreviousDemo />
    </Showcase>
  )
}

/* ── useClickOutside ── */
function UseClickOutsideDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [clickedOutside, setClickedOutside] = useState(false)

  useClickOutside(ref, () => setClickedOutside(true), true)

  return (
    <ShowcaseItem label="useClickOutside" variant="primary" badge="Active" className="glacier-glass">
      <Stack direction="column" gap="sm">
        <div
          ref={ref}
          style={{
            padding: 'var(--space-4)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border-default)',
            textAlign: 'center',
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--color-interactive-default)' }}>
            touch_app
          </span>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', margin: 'var(--space-1) 0 0' }}>
            Click inside this box, then click outside
          </p>
        </div>
        {clickedOutside && (
          <Card variant="outlined" padding="sm" style={{ width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-danger-text)' }}>
                warning
              </span>
              <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)' }}>
                Clicked outside! Trigger resets on re-mount.
              </span>
              <Button variant="ghost" size="sm" onClick={() => setClickedOutside(false)}>Reset</Button>
            </div>
          </Card>
        )}
      </Stack>
    </ShowcaseItem>
  )
}

/* ── useClipboard ── */
function UseClipboardDemo() {
  const { copied, copy } = useClipboard(2000)

  return (
    <ShowcaseItem label="useClipboard" variant="primary" className="glacier-glass">
      <Stack direction="column" gap="sm">
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', margin: 0 }}>
          Copy text to clipboard with auto-reset state.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button
            variant={copied ? 'solid' : 'outline'}
            size="sm"
            icon={copied ? 'check' : 'content_copy'}
            onClick={() => copy('Glacier UI rocks!')}
          >
            {copied ? 'Copied!' : 'Copy Text'}
          </Button>
          <Button variant="ghost" size="sm" icon="code" onClick={() => copy('const x = 42')}>
            Copy Code
          </Button>
        </div>
        {copied && (
          <Badge variant="success" size="sm" icon="check_circle">Clipboard updated</Badge>
        )}
      </Stack>
    </ShowcaseItem>
  )
}

/* ── useEscapeKey ── */
function UseEscapeKeyDemo() {
  const [escapeCount, setEscapeCount] = useState(0)
  const [active, setActive] = useState(false)

  useEscapeKey(() => {
    setEscapeCount(prev => prev + 1)
    setActive(false)
  }, active)

  return (
    <ShowcaseItem label="useEscapeKey" variant="secondary" className="glacier-glass">
      <Stack direction="column" gap="sm">
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', margin: 0 }}>
          Press
          {' '}
          <kbd style={{ padding: '2px 6px', borderRadius: 'var(--radius-sm)', background: 'var(--color-bg-muted)', font: 'inherit', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-2xs)' }}>Esc</kbd>
          {' '}
          after enabling.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Button
            variant={active ? 'solid' : 'outline'}
            size="sm"
            onClick={() => setActive(!active)}
          >
            {active ? 'Listening...' : 'Enable Listener'}
          </Button>
          {escapeCount > 0 && (
            <Badge variant="primary" size="sm">
              Esc pressed:
              {escapeCount}
            </Badge>
          )}
        </div>
      </Stack>
    </ShowcaseItem>
  )
}

/* ── useFocusTrap ── */
function UseFocusTrapDemo() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useFocusTrap(ref, active)

  return (
    <ShowcaseItem label="useFocusTrap" variant="secondary" className="glacier-glass">
      <Stack direction="column" gap="sm">
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', margin: 0 }}>
          Traps Tab key focus within a container. Useful for modals.
        </p>
        {active
          ? (
              <div
                ref={ref}
                style={{
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-interactive-default)',
                  display: 'flex',
                  gap: 'var(--space-2)',
                  flexWrap: 'wrap',
                }}
              >
                <Button variant="outline" size="sm">First</Button>
                <Button variant="outline" size="sm">Second</Button>
                <Button variant="outline" size="sm">Third</Button>
                <Button variant="danger" size="sm" onClick={() => setActive(false)}>Exit Trap</Button>
              </div>
            )
          : (
              <Button variant="outline" size="sm" onClick={() => setActive(true)}>Activate Focus Trap</Button>
            )}
      </Stack>
    </ShowcaseItem>
  )
}

/* ── useIntersection ── */
function UseIntersectionDemo() {
  const [ref, isIntersecting] = useIntersection<HTMLDivElement>({ threshold: 0.5 })

  return (
    <ShowcaseItem label="useIntersection" variant="ghost" className="glacier-glass">
      <Stack direction="column" gap="sm">
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', margin: 0 }}>
          Detects when an element enters the viewport. Scroll to see it trigger.
        </p>
        <div style={{ height: '6rem', overflowY: 'auto', border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-2)' }}>
          <div style={{ height: '4rem' }} />
          <div
            ref={ref}
            style={{
              padding: 'var(--space-4)',
              borderRadius: 'var(--radius-lg)',
              background: isIntersecting ? 'var(--color-success-bg)' : 'var(--color-bg-muted)',
              border: '1px solid var(--color-border-default)',
              textAlign: 'center',
              transition: 'background var(--duration-200) var(--ease-out)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 'var(--font-size-xl)', color: isIntersecting ? 'var(--color-success-text)' : 'var(--color-text-tertiary)' }}>
              {isIntersecting ? 'visibility' : 'visibility_off'}
            </span>
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', margin: 'var(--space-1) 0 0' }}>
              {isIntersecting ? 'In viewport!' : 'Scroll to see me'}
            </p>
          </div>
          <div style={{ height: '2rem' }} />
        </div>
        <Badge variant={isIntersecting ? 'success' : 'ghost'} size="sm">
          {isIntersecting ? 'Intersecting' : 'Not intersecting'}
        </Badge>
      </Stack>
    </ShowcaseItem>
  )
}

/* ── usePrevious ── */
function UsePreviousDemo() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <ShowcaseItem label="usePrevious" variant="ghost" className="glacier-glass">
      <Stack direction="column" gap="sm">
        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-secondary)', margin: 0 }}>
          Tracks the previous value across renders.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>Previous</div>
            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-text-tertiary)' }}>
              {prevCount ?? '—'}
            </div>
          </div>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-text-tertiary)' }}>arrow_forward</span>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>Current</div>
            <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-interactive-default)' }}>
              {count}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <Button variant="outline" size="sm" icon="remove" onClick={() => setCount(c => c - 1)}>Decrement</Button>
          <Button variant="solid" size="sm" icon="add" onClick={() => setCount(c => c + 1)}>Increment</Button>
        </div>
      </Stack>
    </ShowcaseItem>
  )
}
