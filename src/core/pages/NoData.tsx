import { Button } from '@/core/components/Button/Button'
import { NoData } from '@/core/components/NoData/NoData'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'

/* =============================================================================
   NoDataPage — Glacier UI 스타일 NoData 쇼케이스
   ============================================================================= */

export default function NoDataPage() {
  return (
    <Showcase
      title="NoData"
      description="The no-data component displays empty states for tables, lists, or any container when no content is available."
      cols={3}
    >
      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="primary" badge="3 sizes" className="glacier-glass">
        <div style={{ border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: 'var(--space-2)', background: 'var(--color-bg-subtle)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>sm</div>
          <NoData size="sm" title="No results" description="Try adjusting your search." />
        </div>
        <div style={{ border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: 'var(--space-2)', background: 'var(--color-bg-subtle)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>md</div>
          <NoData size="md" title="No results" description="Try adjusting your search." />
        </div>
        <div style={{ border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: 'var(--space-2)', background: 'var(--color-bg-subtle)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)' }}>lg</div>
          <NoData size="lg" title="No results" description="Try adjusting your search." />
        </div>
      </ShowcaseItem>

      {/* Variants */}
      <ShowcaseItem label="Variants" variant="secondary" className="glacier-glass">
        <NoData size="md" title="No data found" icon="inbox" />
        <NoData size="md" title="No search results" description="We couldn't find anything matching your query." icon="search_off" />
        <NoData size="md" title="Empty cart" description="Add items to get started." icon="shopping_cart" />
        <NoData size="md" title="No notifications" description="You're all caught up!" icon="notifications_off" />
      </ShowcaseItem>

      {/* With Action */}
      <ShowcaseItem label="With Action" variant="primary" className="glacier-glass">
        <NoData
          size="md"
          title="No projects yet"
          description="Create your first project to get started."
          icon="folder_off"
          action={<Button variant="solid" size="sm" icon="add">New Project</Button>}
        />
        <NoData
          size="md"
          title="No team members"
          description="Invite people to join your team."
          icon="group_off"
          action={<Button variant="outline" size="sm">Invite</Button>}
        />
      </ShowcaseItem>

      {/* Custom Icons */}
      <ShowcaseItem label="Custom Icons" variant="secondary" className="glacier-glass">
        <NoData size="sm" title="No files" icon="folder_off" />
        <NoData size="sm" title="No messages" icon="chat_bubble" />
        <NoData size="sm" title="No tasks" icon="task_alt" />
        <NoData size="sm" title="No images" icon="image_not_supported" />
      </ShowcaseItem>

      {/* In Table Context */}
      <ShowcaseItem label="Table Context" variant="ghost" className="glacier-glass">
        <div style={{ border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--color-bg-subtle)', borderBottom: '1px solid var(--color-border-default)', display: 'flex', gap: 'var(--space-8)', fontSize: 'var(--font-size-2xs)', color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: 'var(--letter-spacing-wider)' }}>
            <span style={{ flex: 1 }}>Name</span>
            <span style={{ flex: 1 }}>Status</span>
            <span style={{ flex: 1 }}>Date</span>
          </div>
          <NoData
            size="md"
            title="No records"
            description="Data will appear here once available."
            icon="table_rows"
          />
        </div>
      </ShowcaseItem>

      {/* No Icon */}
      <ShowcaseItem label="No Icon" variant="ghost" className="glacier-glass">
        <NoData size="md" title="No description" description="Text-only empty state without icon." icon="" />
        <NoData size="sm" title="Compact" description="Minimal text-only state." icon="" />
      </ShowcaseItem>
    </Showcase>
  )
}
