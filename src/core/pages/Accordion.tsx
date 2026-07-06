import { Accordion, AccordionItem } from '@/core/components/Accordion/Accordion'
import { Badge } from '@/core/components/Badge/Badge'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'

/* =============================================================================
   AccordionPage — Glacier UI 스타일 Accordion 쇼케이스
   ============================================================================= */

export default function AccordionPage() {
  return (
    <Showcase
      title="Accordion"
      description="The accordion component displays collapsible sections that expand and collapse to organize content efficiently."
      cols={3}
    >
      {/* Single Expand */}
      <ShowcaseItem label="Single Expand" variant="primary" badge="Active" className="glacier-glass">
        <Accordion>
          <AccordionItem id="a1" title="What is Glacier UI?" icon="help">
            Glacier UI is a component library built on the Glacier Design System, featuring accessible, responsive components with dark mode support.
          </AccordionItem>
          <AccordionItem id="a2" title="Getting Started" icon="rocket_launch">
            Install the package, import components, and start building. No additional configuration required.
          </AccordionItem>
          <AccordionItem id="a3" title="Customization" icon="palette">
            All components use CSS custom properties (design tokens) for colors, spacing, and typography, enabling full theming.
          </AccordionItem>
        </Accordion>
      </ShowcaseItem>

      {/* Multiple Expand */}
      <ShowcaseItem label="Multiple" variant="secondary" className="glacier-glass">
        <Accordion multiple defaultOpen={['b1', 'b3']}>
          <AccordionItem id="b1" title="Section One">
            This section starts open. With multiple mode, you can open several sections at once.
          </AccordionItem>
          <AccordionItem id="b2" title="Section Two">
            Click any header to expand or collapse. Multiple sections can remain open simultaneously.
          </AccordionItem>
          <AccordionItem id="b3" title="Section Three">
            This section also starts open, demonstrating the multiple expand behavior.
          </AccordionItem>
        </Accordion>
      </ShowcaseItem>

      {/* With Icons */}
      <ShowcaseItem label="With Icons" variant="primary" className="glacier-glass">
        <Accordion>
          <AccordionItem id="c1" title="Profile Settings" icon="person">
            Configure your profile information, avatar, and display preferences.
          </AccordionItem>
          <AccordionItem id="c2" title="Security" icon="lock">
            Manage password, two-factor authentication, and active sessions.
          </AccordionItem>
          <AccordionItem id="c3" title="Notifications" icon="notifications">
            Control email, push, and in-app notification preferences.
          </AccordionItem>
          <AccordionItem id="c4" title="Billing" icon="payments">
            View subscription, payment methods, and invoice history.
          </AccordionItem>
        </Accordion>
      </ShowcaseItem>

      {/* With Trailing Badge */}
      <ShowcaseItem label="With Badge" variant="secondary" className="glacier-glass">
        <Accordion>
          <AccordionItem id="d1" title="Inbox" icon="inbox">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Unread messages</span>
                <Badge variant="primary" size="sm">12</Badge>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Starred</span>
                <Badge variant="warning" size="sm">3</Badge>
              </div>
            </div>
          </AccordionItem>
          <AccordionItem id="d2" title="Sent" icon="send">
            View your sent email history and delivery status.
          </AccordionItem>
        </Accordion>
      </ShowcaseItem>

      {/* Disabled */}
      <ShowcaseItem label="Disabled" variant="ghost" className="glacier-glass">
        <Accordion>
          <AccordionItem id="e1" title="Available Section">
            This section can be opened normally.
          </AccordionItem>
          <AccordionItem id="e2" title="Disabled Section" disabled>
            This section is disabled and cannot be expanded.
          </AccordionItem>
          <AccordionItem id="e3" title="Another Section">
            This section is available again.
          </AccordionItem>
        </Accordion>
      </ShowcaseItem>

      {/* Default Open */}
      <ShowcaseItem label="Default Open" variant="ghost" className="glacier-glass">
        <Accordion defaultOpen={['f2']}>
          <AccordionItem id="f1" title="First (closed)">
            Content for the first item.
          </AccordionItem>
          <AccordionItem id="f2" title="Second (open by default)">
            This item is open when the accordion first renders.
          </AccordionItem>
          <AccordionItem id="f3" title="Third (closed)">
            Content for the third item.
          </AccordionItem>
        </Accordion>
      </ShowcaseItem>
    </Showcase>
  )
}
