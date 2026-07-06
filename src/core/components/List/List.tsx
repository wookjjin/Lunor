import type { ListItemProps, ListProps } from '@/core/components/List/List.types'
import { useId } from 'react'

/* =============================================================================
   List — Styled List Container + Items
   ul/li 기반 리스트 컴포넌트, variant/size/density 조합
   ============================================================================= */

export function List({
  variant = 'default',
  size = 'md',
  density = 'comfortable',
  ordered = false,
  marker = true,
  className,
  children,
  ...props
}: ListProps) {
  const Tag = ordered ? 'ol' : 'ul'

  return (
    <Tag
      className={[
        'list',
        `list--${variant}`,
        `list--${size}`,
        `list--${density}`,
        !marker && 'list--no-marker',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Tag>
  )
}

/* ── ListItem ── */
export function ListItem({
  icon,
  trailing,
  selected = false,
  disabled = false,
  onClick,
  className,
  children,
  ...props
}: ListItemProps) {
  const generatedId = useId()
  const isInteractive = onClick !== undefined

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (disabled)
      return
    onClick?.(e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (disabled)
      return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick?.(e as unknown as React.MouseEvent<HTMLLIElement>)
    }
  }

  return (
    <li
      id={generatedId}
      className={[
        'list__item',
        selected && 'list__item--selected',
        disabled && 'list__item--disabled',
        isInteractive && 'list__item--interactive',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role={isInteractive ? 'option' : undefined}
      aria-selected={isInteractive ? selected : undefined}
      aria-disabled={disabled || undefined}
      tabIndex={isInteractive && !disabled ? 0 : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {icon && (
        <span className="list__item-icon material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="list__item-content">{children}</span>
      {trailing && (
        <span className="list__item-trailing">{trailing}</span>
      )}
    </li>
  )
}
