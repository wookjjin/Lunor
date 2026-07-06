import type { SkeletonProps } from '@/core/components/Skeleton/Skeleton.types'

export function Skeleton({
  variant = 'text',
  width,
  height,
  radius,
  rounded = false,
  circle = false,
  lines = 3,
  className,
  style,
  ...props
}: SkeletonProps) {
  /* ── Circle: 원형 스켈레톤 ── */
  if (circle) {
    return (
      <div
        className={['skeleton', 'skeleton--circle', className].filter(Boolean).join(' ')}
        style={{ width: width ?? '2.5rem', height: height ?? width ?? '2.5rem', ...style }}
        aria-hidden="true"
        {...props}
      />
    )
  }

  /* ── Text: 여러 줄 텍스트 스켈레톤 ── */
  if (variant === 'text' && lines > 1) {
    return (
      <div className={['skeleton-group', className].filter(Boolean).join(' ')} aria-hidden="true" {...props}>
        {Array.from({ length: lines }, (_, i) => `line-${i}`).map(key => (
          <div
            key={key}
            className={[
              'skeleton',
              'skeleton--text',
              rounded && 'skeleton--rounded',
              i === lines - 1 && 'skeleton--text-last',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{ width: i === lines - 1 ? '60%' : undefined, ...style }}
          />
        ))}
      </div>
    )
  }

  /* ── Default: 단일 블록 ── */
  return (
    <div
      className={[
        'skeleton',
        `skeleton--${variant}`,
        rounded && 'skeleton--rounded',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ width, height, borderRadius: radius, ...style }}
      aria-hidden="true"
      {...props}
    />
  )
}
