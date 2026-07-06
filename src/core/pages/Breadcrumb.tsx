import { Breadcrumb, BreadcrumbItem } from '@/core/components/Breadcrumb/Breadcrumb'
import { Showcase } from '@/core/components/Showcase/Showcase'
import { ShowcaseItem } from '@/core/components/ShowcaseItem/ShowcaseItem'
import { usePlaygroundContext } from '@/core/layout/ComponentPlaygroundContext'

/* =============================================================================
   BreadcrumbPage — Glacier UI 스타일 Breadcrumb 쇼케이스
   ============================================================================= */

export default function BreadcrumbPage() {
  const { props } = usePlaygroundContext()
  const size = (props.size ?? 'md') as 'sm' | 'md' | 'lg'

  return (
    <Showcase
      title="Breadcrumb"
      description="The breadcrumb component shows the navigation path to the current page, helping users understand their location in the hierarchy."
      cols={3}
    >
      {/* Basic */}
      <ShowcaseItem label="Basic" variant="primary" badge="Active" className="glacier-glass">
        <Breadcrumb size={size}>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Settings</BreadcrumbItem>
          <BreadcrumbItem current>Profile</BreadcrumbItem>
        </Breadcrumb>
      </ShowcaseItem>

      {/* With Icons */}
      <ShowcaseItem label="With Icons" variant="secondary" className="glacier-glass">
        <Breadcrumb size={size}>
          <BreadcrumbItem href="#" icon="home">Home</BreadcrumbItem>
          <BreadcrumbItem href="#" icon="folder">Projects</BreadcrumbItem>
          <BreadcrumbItem href="#" icon="description">Design.md</BreadcrumbItem>
        </Breadcrumb>
      </ShowcaseItem>

      {/* Custom Separator */}
      <ShowcaseItem label="Separator" variant="primary" className="glacier-glass">
        <Breadcrumb size={size} separator="›">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Library</BreadcrumbItem>
          <BreadcrumbItem current>Articles</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb size={size} separator="→">
          <BreadcrumbItem href="#">Start</BreadcrumbItem>
          <BreadcrumbItem href="#">Middle</BreadcrumbItem>
          <BreadcrumbItem current>End</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb size={size} separator="•">
          <BreadcrumbItem href="#">A</BreadcrumbItem>
          <BreadcrumbItem href="#">B</BreadcrumbItem>
          <BreadcrumbItem current>C</BreadcrumbItem>
        </Breadcrumb>
      </ShowcaseItem>

      {/* Sizes */}
      <ShowcaseItem label="Sizes" variant="secondary" className="glacier-glass">
        <Breadcrumb size="sm">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem current>Small</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb size="md">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem current>Medium</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb size="lg">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem current>Large</BreadcrumbItem>
        </Breadcrumb>
      </ShowcaseItem>

      {/* Long Path */}
      <ShowcaseItem label="Long Path" variant="ghost" className="glacier-glass">
        <Breadcrumb size={size}>
          <BreadcrumbItem href="#" icon="home">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Dashboard</BreadcrumbItem>
          <BreadcrumbItem href="#">Projects</BreadcrumbItem>
          <BreadcrumbItem href="#">Frontend</BreadcrumbItem>
          <BreadcrumbItem href="#">Components</BreadcrumbItem>
          <BreadcrumbItem current>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      </ShowcaseItem>

      {/* Playground */}
      <ShowcaseItem label="Playground" variant="ghost" className="glacier-glass">
        <Breadcrumb size={size}>
          <BreadcrumbItem href="#" icon="home">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Category</BreadcrumbItem>
          <BreadcrumbItem current>Current Page</BreadcrumbItem>
        </Breadcrumb>
      </ShowcaseItem>
    </Showcase>
  )
}
