import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <div>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input {...props} />
      {error && <span>{error}</span>}
    </div>
  )
}
