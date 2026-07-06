import type { MenuItemProps } from '@/core/components/MenuItem/MenuItem.types'

export function MenuItem({
  icon,
  trailing,
  selected = false,
  disabled = false,
  danger = false,
  onClick,
  className,
  children,
  ...props
}: MenuItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled)
      return
    onClick?.(e)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (disabled)
      return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>)
    }
  }

  return (
    <button
      type="button"
      className={[
        'menu-item',
        selected && 'menu-item--selected',
        disabled && 'menu-item--disabled',
        danger && 'menu-item--danger',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role="menuitem"
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {icon && (
        <span className="menu-item__icon material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="menu-item__label">{children}</span>
      {trailing && (
        <span className="menu-item__trailing">{trailing}</span>
      )}
    </button>
  )
}
