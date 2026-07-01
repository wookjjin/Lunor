import { useState } from 'react'
import { FileInput } from '@/core/components/FileInput/FileInput'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   FileInputPage — Glacier UI 스타일 FileInput 쇼케이스
   ============================================================================= */

export default function FileInputPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'default') as 'default' | 'filled'
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'
  const fullWidth = Boolean(props.fullWidth)
  const disabled = Boolean(props.disabled)

  const [files, setFiles] = useState<File[]>([])

  return (
    <Showcase
      title="FileInput"
      description="The file input component provides a drag-and-drop zone for uploading files, with a click-to-browse fallback."
      cols={3}
    >
      {/* Default Variant */}
      <ShowcaseItem label="Default" variant="primary" badge="Active" className="glacier-glass">
        <FileInput variant={variant} size={size} fullWidth={fullWidth} disabled={disabled} />
        <div className="showcase__row">
          <FileInput variant={variant} size={size} placeholder="Disabled" disabled />
        </div>
      </ShowcaseItem>

      {/* Filled Variant */}
      <ShowcaseItem label="Filled" variant="secondary" className="glacier-glass">
        <FileInput variant="filled" size={size} fullWidth={fullWidth} disabled={disabled} />
        <div className="showcase__row">
          <FileInput variant="filled" size={size} placeholder="Disabled" disabled />
        </div>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" className="glacier-glass">
        <FileInput variant={variant} size="sm" placeholder="Small" />
        <FileInput variant={variant} size="md" placeholder="Medium" />
        <FileInput variant={variant} size="lg" placeholder="Large" />
      </ShowcaseItem>

      {/* Controlled */}
      <ShowcaseItem label="Controlled" variant="secondary" className="glacier-glass">
        <FileInput
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          placeholder="Upload a file..."
          onChange={setFiles}
        />
        <div className="showcase__row">
          <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-tertiary)' }}>
            {files.length > 0
              ? `Selected: ${files.map(f => f.name).join(', ')}`
              : 'No files selected'}
          </span>
        </div>
      </ShowcaseItem>

      {/* Accept & Multiple */}
      <ShowcaseItem label="Accept & Multiple" variant="ghost" className="glacier-glass">
        <FileInput variant={variant} size={size} fullWidth accept="image/*" placeholder="Images only..." />
        <FileInput variant={variant} size={size} fullWidth multiple placeholder="Multiple files..." />
      </ShowcaseItem>

      {/* States */}
      <ShowcaseItem label="States" variant="ghost" className="glacier-glass">
        <FileInput variant={variant} size={size} fullWidth placeholder="Default state" />
        <FileInput variant={variant} size={size} fullWidth disabled placeholder="Disabled state" />
      </ShowcaseItem>
    </Showcase>
  )
}