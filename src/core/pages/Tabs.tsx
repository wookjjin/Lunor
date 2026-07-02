import { Tab, TabList, TabPanel, Tabs } from '@/core/components/Tabs/Tabs'
import { Badge } from '@/core/components/Badge/Badge'
import { Card } from '@/core/components/Card/Card'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   TabsPage — Glacier UI 스타일 Tabs 쇼케이스
   ============================================================================= */

export default function TabsPage() {
  const { props } = usePlaygroundContext()
  const variant = (props.variant ?? 'default') as 'default' | 'pills' | 'underline'

  return (
    <Showcase
      title="Tabs"
      description="The tabs component organizes content into switchable panels, with default, pills, and underline visual variants."
      cols={3}
    >
      {/* Default Variant */}
      <ShowcaseItem label="Default" variant="primary" badge="Active" className="glacier-glass">
        <Tabs defaultValue="overview" variant="default">
          <TabList>
            <Tab value="overview" label="Overview" />
            <Tab value="analytics" label="Analytics" />
            <Tab value="settings" label="Settings" />
          </TabList>
          <TabPanel value="overview">
            <Card variant="outlined" padding="md">Overview content — a summary of your dashboard metrics and recent activity.</Card>
          </TabPanel>
          <TabPanel value="analytics">
            <Card variant="outlined" padding="md">Analytics content — charts, graphs, and detailed performance data.</Card>
          </TabPanel>
          <TabPanel value="settings">
            <Card variant="outlined" padding="md">Settings content — configure your preferences and account options.</Card>
          </TabPanel>
        </Tabs>
      </ShowcaseItem>

      {/* Pills Variant */}
      <ShowcaseItem label="Pills" variant="secondary" className="glacier-glass">
        <Tabs defaultValue="all" variant="pills">
          <TabList>
            <Tab value="all" label="All" icon="apps" />
            <Tab value="active" label="Active" />
            <Tab value="archived" label="Archived" />
          </TabList>
          <TabPanel value="all">All items shown here.</TabPanel>
          <TabPanel value="active">Only active items.</TabPanel>
          <TabPanel value="archived">Archived items only.</TabPanel>
        </Tabs>
      </ShowcaseItem>

      {/* Underline Variant */}
      <ShowcaseItem label="Underline" variant="primary" className="glacier-glass">
        <Tabs defaultValue="profile" variant="underline">
          <TabList>
            <Tab value="profile" label="Profile" icon="person" />
            <Tab value="activity" label="Activity" icon="timeline" />
            <Tab value="security" label="Security" icon="lock" disabled />
          </TabList>
          <TabPanel value="profile">Profile information and preferences.</TabPanel>
          <TabPanel value="activity">Recent activity timeline.</TabPanel>
        </Tabs>
      </ShowcaseItem>

      {/* With Icons */}
      <ShowcaseItem label="With Icons" variant="secondary" className="glacier-glass">
        <Tabs defaultValue="home" variant={variant}>
          <TabList>
            <Tab value="home" label="Home" icon="home" />
            <Tab value="search" label="Search" icon="search" />
            <Tab value="notifications" label="Alerts" icon="notifications" />
            <Tab value="profile" label="Profile" icon="account_circle" />
          </TabList>
          <TabPanel value="home">Home dashboard content.</TabPanel>
          <TabPanel value="search">Search interface.</TabPanel>
          <TabPanel value="notifications">Notification center.</TabPanel>
          <TabPanel value="profile">User profile page.</TabPanel>
        </Tabs>
      </ShowcaseItem>

      {/* Playground */}
      <ShowcaseItem label="Playground" variant="ghost" className="glacier-glass">
        <Tabs defaultValue="tab1" variant={variant}>
          <TabList>
            <Tab value="tab1" label="Tab 1" />
            <Tab value="tab2" label="Tab 2" />
            <Tab value="tab3" label="Tab 3" disabled />
          </TabList>
          <TabPanel value="tab1">First tab content — switch variant in the Properties panel.</TabPanel>
          <TabPanel value="tab2">Second tab content — try different variants.</TabPanel>
        </Tabs>
      </ShowcaseItem>

      {/* With Badge Trailing */}
      <ShowcaseItem label="With Badge" variant="ghost" className="glacier-glass">
        <Tabs defaultValue="inbox" variant={variant}>
          <TabList>
            <Tab value="inbox" label="Inbox" />
            <Tab value="starred" label="Starred" />
            <Tab value="sent" label="Sent" />
          </TabList>
          <TabPanel value="inbox">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>
              <span>12 unread messages</span>
              <Badge variant="primary" size="sm">12</Badge>
            </div>
          </TabPanel>
          <TabPanel value="starred">3 starred items.</TabPanel>
          <TabPanel value="sent">No sent items.</TabPanel>
        </Tabs>
      </ShowcaseItem>
    </Showcase>
  )
}