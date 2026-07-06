import type { ProgressBarProps } from '@/core/components/ProgressBar/ProgressBar.types'

export function ProgressBar({
  variant = 'default',
  size = 'md',
  value = 0,
  max = 100,
  showValue = false,
  striped = false,
  animated = false,
  label,
  className,
  ...props
}: ProgressBarProps) {
  const clampedMax = Math.max(max, 1)
  const percent = Math.min(100, Math.max(0, (value / clampedMax) * 100))

  return (
    <div
      className={[
        'progress-bar',
        `progress-bar--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={clampedMax}
      {...props}
    >
      {(label || showValue) && (
        <div className="progress-bar__header">
          {label && <span className="progress-bar__label">{label}</span>}
          {showValue && (
            <span className="progress-bar__value">
              {Math.round(percent)}
              %
            </span>
          )}
        </div>
      )}
      <div className="progress-bar__track">
        <div
          className={[
            'progress-bar__fill',
            `progress-bar__fill--${variant}`,
            striped && 'progress-bar__fill--striped',
            animated && 'progress-bar__fill--animated',
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  )
}
