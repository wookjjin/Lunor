import type { StackProps } from '@/core/components/Stack/Stack.types'

export function Stack({
  direction = 'column',
  gap = 'md',
  align,
  justify,
  wrap = false,
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={[
        'stack',
        `stack--${direction}`,
        `stack--gap-${gap}`,
        align && `stack--align-${align}`,
        justify && `stack--justify-${justify}`,
        wrap && 'stack--wrap',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
