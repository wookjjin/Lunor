import type { SpinnerProps } from '@/core/components/Spinner/Spinner.types'

export function Spinner({
  variant = 'default',
  size = 'md',
  label,
  className,
  ...props
}: SpinnerProps) {
  return (
    <div
      className={[
        'spinner-wrapper',
        `spinner-wrapper--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="status"
      aria-live="polite"
      {...props}
    >
      <svg
        className={[
          'spinner',
          `spinner--${variant}`,
          `spinner--${size}`,
        ]
          .filter(Boolean)
          .join(' ')}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="spinner__track"
          cx="12"
          cy="12"
          r="9"
          fill="none"
          strokeWidth="2.5"
        />
        <circle
          className="spinner__head"
          cx="12"
          cy="12"
          r="9"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength="100"
        />
      </svg>
      {label && <span className="spinner__label">{label}</span>}
    </div>
  )
}
