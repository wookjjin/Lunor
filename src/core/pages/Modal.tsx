import { useState } from 'react'
import { Button } from '@/core/components/Button/Button'
import { Modal } from '@/core/components/Modal/Modal'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { Stack } from '@/core/components/Stack/Stack'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   ModalPage — Glacier UI 스타일 Modal 쇼케이스
   Modal은 Dialog의 레거시 alias이므로 동일한 시각적 결과를 제공.
   ============================================================================= */

export default function ModalPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  return (
    <Showcase
      title="Modal"
      description="The modal component is a legacy alias of Dialog, providing modal content with overlay and focus trap. Use Dialog for new code."
      cols={3}
    >
      {/* Basic */}
      <ShowcaseItem label="Basic" variant="primary" badge="Active" className="glacier-glass">
        <Button variant="solid" size="md" onClick={() => setOpen1(true)}>Open Modal</Button>
        <Modal isOpen={open1} onClose={() => setOpen1(false)} title="Modal Title" size={size}>
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--line-height-relaxed)', margin: 0 }}>
            This is a modal content area. Modal is a legacy alias of Dialog with the same behavior.
          </p>
        </Modal>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="sm" wrap>
          <Button variant="outline" size="sm" onClick={() => setOpen1(true)}>SM</Button>
          <Button variant="outline" size="sm" onClick={() => setOpen2(true)}>MD</Button>
          <Button variant="outline" size="sm" onClick={() => setOpen3(true)}>LG</Button>
        </Stack>
        <Modal isOpen={open1} onClose={() => setOpen1(false)} title="Small Modal" size="sm">
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
            Small modal — max-width 24rem.
          </p>
        </Modal>
        <Modal isOpen={open2} onClose={() => setOpen2(false)} title="Medium Modal" size="md">
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
            Medium modal — max-width 32rem.
          </p>
        </Modal>
        <Modal isOpen={open3} onClose={() => setOpen3(false)} title="Large Modal" size="lg">
          <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', margin: 0 }}>
            Large modal — max-width 40rem.
          </p>
        </Modal>
      </ShowcaseItem>

      {/* Legacy Note */}
      <ShowcaseItem label="Legacy" variant="ghost" className="glacier-glass">
        <Stack direction="column" gap="sm">
          <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
            Modal uses the Dialog component internally.
          </span>
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            For new code, prefer Dialog directly. Modal is kept for backward compatibility.
          </span>
        </Stack>
      </ShowcaseItem>
    </Showcase>
  )
}