import { Avatar } from '@/core/components/Avatar/Avatar'
import { Stack } from '@/core/components/Stack/Stack'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   AvatarPage — Glacier UI 스타일 Avatar 쇼케이스
   ============================================================================= */

export default function AvatarPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg' | 'xl'
  const variant = (props.variant ?? 'default') as 'default' | 'primary' | 'danger' | 'success' | 'warning'
  const ring = Boolean(props.ring)
  const square = Boolean(props.square)

  return (
    <Showcase
      title="Avatar"
      description="The avatar component displays user profile images with fallback support for initials or icons."
      cols={3}
    >
      {/* Image */}
      <ShowcaseItem label="Image" variant="primary" badge="Active" className="glacier-glass">
        <Stack direction="row" gap="lg" align="center">
          <Avatar size="sm" src="https://i.pravatar.cc/150?img=1" alt="User" />
          <Avatar size="md" src="https://i.pravatar.cc/150?img=2" alt="User" />
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=3" alt="User" />
          <Avatar size="xl" src="https://i.pravatar.cc/150?img=4" alt="User" />
        </Stack>
      </ShowcaseItem>

      {/* Fallback */}
      <ShowcaseItem label="Fallback" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="lg" align="center">
          <Avatar size="sm" fallback="JD" variant="primary" />
          <Avatar size="md" fallback="AB" variant="danger" />
          <Avatar size="lg" fallback="MK" variant="success" />
          <Avatar size="xl" fallback="LW" variant="warning" />
        </Stack>
      </ShowcaseItem>

      {/* Icon */}
      <ShowcaseItem label="Icon" variant="primary" className="glacier-glass">
        <Stack direction="row" gap="lg" align="center">
          <Avatar size="sm" icon="person" variant={variant} />
          <Avatar size="md" icon="account_circle" variant={variant} />
          <Avatar size="lg" icon="group" variant={variant} />
          <Avatar size="xl" icon="smart_toy" variant={variant} />
        </Stack>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="secondary" className="glacier-glass">
        <Stack direction="row" gap="md" align="center">
          <Avatar size="sm" fallback="S" variant="primary" />
          <Avatar size="md" fallback="M" variant="primary" />
          <Avatar size="lg" fallback="L" variant="primary" />
          <Avatar size="xl" fallback="XL" variant="primary" />
        </Stack>
      </ShowcaseItem>

      {/* Ring & Square */}
      <ShowcaseItem label="Ring & Square" variant="ghost" className="glacier-glass">
        <Stack direction="row" gap="lg" align="center">
          <Avatar size="lg" ring fallback="R" variant="primary" />
          <Avatar size="lg" ring fallback="R" variant="success" />
          <Avatar size="lg" square fallback="SQ" variant="primary" />
          <Avatar size="lg" square ring fallback="SQ" variant="danger" />
        </Stack>
      </ShowcaseItem>

      {/* Playground */}
      <ShowcaseItem label="Playground" variant="ghost" className="glacier-glass">
        <Stack direction="row" gap="lg" align="center" justify="center">
          <Avatar size={size} variant={variant} ring={ring} square={square} fallback="PG" />
          <Avatar size={size} variant={variant} ring={ring} square={square} icon="person" />
        </Stack>
      </ShowcaseItem>
    </Showcase>
  )
}