import type { FileInputProps } from '@/core/components/FileInput/FileInput.types'
import { useId, useRef, useState } from 'react'

export function FileInput({
  variant = 'default',
  size = 'md',
  disabled = false,
  fullWidth = false,
  multiple = false,
  accept,
  placeholder = 'Choose file...',
  dragLabel = 'Drop files here or click to browse',
  name,
  className,
  onChange,
  ...props
}: FileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const generatedId = useId()
  const inputId = props.id ?? generatedId

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList)
      return
    const arr = Array.from(fileList)
    setFiles(arr)
    onChange?.(arr)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(event.target.files)
  }

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDragging(false)
    if (disabled)
      return
    handleFiles(event.dataTransfer.files)
  }

  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    if (!disabled)
      setIsDragging(true)
  }

  const handleDragLeave = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  const displayText = files.length === 0
    ? placeholder
    : files.length === 1
      ? files[0].name
      : `${files.length} files selected`

  return (
    <label
      className={[
        'file-input',
        `file-input--${variant}`,
        `file-input--${size}`,
        isDragging && 'file-input--dragging',
        disabled && 'file-input--disabled',
        fullWidth && 'file-input--full-width',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      htmlFor={inputId}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <input
        ref={inputRef}
        type="file"
        id={inputId}
        name={name}
        className="file-input__native"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleChange}
        onClick={e => e.stopPropagation()}
        {...props}
      />
      <span className="file-input__icon material-symbols-outlined" aria-hidden="true">
        {isDragging ? 'file_download' : 'upload_file'}
      </span>
      <span className="file-input__text">{displayText}</span>
      {!disabled && (
        <span className="file-input__button" onClick={handleClick} role="button" tabIndex={-1}>
          Browse
        </span>
      )}
    </label>
  )
}