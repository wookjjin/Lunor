import type { NoDataProps } from '@/core/components/NoData/NoData.types'

export function NoData({
  icon = 'inbox',
  title = 'No data found',
  description,
  action,
  size = 'md',
  className,
  ...props
}: NoDataProps) {
  return (
    <div
      className={[
        'no-data',
        `no-data--${size}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {icon && (
        <span className="no-data__icon material-symbols-outlined" aria-hidden="true">
          {icon}
        </span>
      )}
      <p className="no-data__title">{title}</p>
      {description && <p className="no-data__description">{description}</p>}
      {action && <div className="no-data__action">{action}</div>}
    </div>
  )
}