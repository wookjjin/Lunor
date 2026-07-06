import type { BreadcrumbItemProps, BreadcrumbProps } from '@/core/components/Breadcrumb/Breadcrumb.types'
import { useId } from 'react'

/* =============================================================================
   Breadcrumb — Navigation Path Indicator
   현재 페이지 경로를 표시, 마지막 아이템은 current로 강조
   ============================================================================= */

export function Breadcrumb({
  separator = '/',
  size = 'md',
  className,
  children,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      className={[
        'breadcrumb',
        `breadcrumb--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label="Breadcrumb"
      style={{ '--breadcrumb-separator': `"${separator}"` } as React.CSSProperties}
      {...props}
    >
      <ol className="breadcrumb__list">
        {children}
      </ol>
    </nav>
  )
}

export function BreadcrumbItem({
  href,
  icon,
  current = false,
  onClick,
  className,
  children,
  ...props
}: BreadcrumbItemProps) {
  const _itemId = useId()
  const content = (
    <>
      {icon && (
        <span className="breadcrumb__item-icon material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="breadcrumb__item-label">{children}</span>
    </>
  )

  return (
    <li
      className={[
        'breadcrumb__item',
        current && 'breadcrumb__item--current',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {current
        ? (
            <span className="breadcrumb__link" aria-current="page" {...props}>
              {content}
            </span>
          )
        : href
          ? (
              <a href={href} className="breadcrumb__link" onClick={onClick} {...props}>
                {content}
              </a>
            )
          : (
              <button type="button" className="breadcrumb__link" onClick={onClick} {...props}>
                {content}
              </button>
            )}
    </li>
  )
}
