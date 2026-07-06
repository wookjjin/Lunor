import type { AvatarProps } from '@/core/components/Avatar/Avatar.types'
import { useState } from 'react'

export function Avatar({
  size = 'md',
  variant = 'default',
  src,
  alt = '',
  fallback,
  icon = 'person',
  ring = false,
  square = false,
  className,
  ...props
}: AvatarProps) {
  const [error, setError] = useState(false)
  const showImage = src && !error

  return (
    <div
      className={[
        'avatar',
        `avatar--${size}`,
        `avatar--${variant}`,
        ring && 'avatar--ring',
        square && 'avatar--square',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {showImage
        ? (
            <img
              className="avatar__image"
              src={src}
              alt={alt}
              onError={() => setError(true)}
            />
          )
        : fallback
          ? (
              <span className="avatar__fallback">{fallback}</span>
            )
          : (
              <span className="avatar__icon material-symbols-outlined" aria-hidden="true">
                {icon}
              </span>
            )}
    </div>
  )
}
