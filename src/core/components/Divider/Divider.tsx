import type { DividerProps } from '@/core/components/Divider/Divider.types'

export function Divider({
  orientation = 'horizontal',
  variant = 'default',
  label,
  labelPosition = 'center',
  className,
  ...props
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={[
          'divider',
          'divider--vertical',
          `divider--${variant}`,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    )
  }

  if (label) {
    return (
      <div
        className={[
          'divider',
          'divider--with-label',
          `divider--${variant}`,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        role="separator"
        {...props}
      >
        <span className="divider__line" />
        <span className={`divider__label divider__label--${labelPosition}`}>{label}</span>
        <span className="divider__line" />
      </div>
    )
  }

  return (
    <hr
      className={[
        'divider',
        `divider--${variant}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}