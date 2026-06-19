import type { ShowcaseItemProps } from '@/core/components/ShowcaseItem/ShowcaseItem.types'

/**
 * ShowcaseItem — Showcase 카드 단위 아이템
 *
 * Showcase 하위에서 반복되는 카드 구조(header + body)를 캡슐화한다.
 * `glacier-glass` 등 글래스 효과는 `className` prop으로 외부에서 주입한다.
 */
export function ShowcaseItem({
  label,
  variant,
  badge,
  children,
  className,
}: ShowcaseItemProps) {
  return (
    <section
      className={[
        'showcase__item',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="showcase__item-header">
        <h3 className={`showcase__item-label showcase__item-label--${variant}`}>
          {label}
        </h3>
        {badge
          ? (
              <span className={`showcase__badge showcase__badge--${variant}`}>
                {badge}
              </span>
            )
          : null}
      </div>
      <div className="showcase__item-body">{children}</div>
    </section>
  )
}
