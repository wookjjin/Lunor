import { useOutletContext } from 'react-router'

/* =============================================================================
   ComponentPlaygroundContext — Storybook Controls 스타일 상태 공유
   Outlet Context를 통해 Canvas 페이지와 PropertiesPanel 간 Props 전파
   ============================================================================= */

// ---- 컴포넌트별 Playground Props 타입 ----

export interface ButtonPlaygroundProps {
  variant: 'solid' | 'secondary' | 'ghost' | 'danger'
  size: 'sm' | 'md' | 'lg'
  fullWidth: boolean
  disabled: boolean
  children: string
}

export interface InputPlaygroundProps {
  variant: 'outline' | 'filled'
  size: 'sm' | 'md' | 'lg'
  invalid: boolean
  disabled: boolean
  placeholder: string
}

export interface DialogPlaygroundProps {
  size: 'sm' | 'md' | 'lg'
  closeOnOverlayClick: boolean
  closeOnEscape: boolean
}

export interface DropdownPlaygroundProps {
  defaultOpen: boolean
  placement: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'
}

export interface TablePlaygroundProps {
  hoverable: boolean
  compact: boolean
}

export interface DataTablePlaygroundProps {
  bordered: boolean
  compact: boolean
}

export interface CardPlaygroundProps {
  variant: 'default' | 'outlined' | 'elevated'
  padding: 'none' | 'sm' | 'md' | 'lg'
  children: string
}

export interface BadgePlaygroundProps {
  size: 'sm' | 'md' | 'lg'
  dot: boolean
  label: string
}

export interface CheckboxPlaygroundProps {
  variant: 'default' | 'card'
  size: 'sm' | 'md' | 'lg'
  label: string
  description: string
}

export interface RadioPlaygroundProps {
  variant: 'default' | 'card'
  size: 'sm' | 'md' | 'lg'
  orientation: 'vertical' | 'horizontal'
}

export interface SwitchPlaygroundProps {
  variant: 'default' | 'card'
  size: 'sm' | 'md' | 'lg'
  label: string
  description: string
}

export interface SelectPlaygroundProps {
  variant: 'outline' | 'filled'
  size: 'sm' | 'md' | 'lg'
  fullWidth: boolean
  invalid: boolean
  disabled: boolean
}

export interface TextareaPlaygroundProps {
  variant: 'outline' | 'filled'
  size: 'sm' | 'md' | 'lg'
  resize: 'none' | 'vertical' | 'horizontal' | 'both'
  fullWidth: boolean
  invalid: boolean
  disabled: boolean
}

export interface SliderPlaygroundProps {
  variant: 'default' | 'filled'
  size: 'sm' | 'md' | 'lg'
  showValue: boolean
  disabled: boolean
}

export interface FileInputPlaygroundProps {
  variant: 'default' | 'filled'
  size: 'sm' | 'md' | 'lg'
  fullWidth: boolean
  disabled: boolean
}

export interface InputGroupPlaygroundProps {
  variant: 'outline' | 'filled'
  size: 'sm' | 'md' | 'lg'
  fullWidth: boolean
  disabled: boolean
}

export interface SpinnerPlaygroundProps {
  variant: 'default' | 'primary' | 'danger' | 'success' | 'warning'
  size: 'sm' | 'md' | 'lg'
  showLabel: boolean
}

export interface AlertPlaygroundProps {
  variant: 'info' | 'success' | 'warning' | 'danger'
  closable: boolean
  title: string
  description: string
}

export interface ProgressBarPlaygroundProps {
  variant: 'default' | 'primary' | 'success' | 'warning' | 'danger'
  size: 'sm' | 'md' | 'lg'
  showValue: boolean
  striped: boolean
  animated: boolean
}

export interface StackPlaygroundProps {
  direction: 'column' | 'row'
  gap: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  align: 'start' | 'center' | 'end' | 'stretch'
  justify: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
}

export interface DividerPlaygroundProps {
  variant: 'default' | 'subtle' | 'strong'
  labelPosition: 'start' | 'center' | 'end'
}

export interface AvatarPlaygroundProps {
  size: 'sm' | 'md' | 'lg' | 'xl'
  variant: 'default' | 'primary' | 'danger' | 'success' | 'warning'
  ring: boolean
  square: boolean
}

export interface ChipPlaygroundProps {
  variant: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  size: 'sm' | 'md' | 'lg'
  removable: boolean
}

export interface ListPlaygroundProps {
  variant: 'default' | 'nav' | 'plain'
  size: 'sm' | 'md' | 'lg'
  density: 'comfortable' | 'compact'
}

export interface TabsPlaygroundProps {
  variant: 'default' | 'pills' | 'underline'
}

export interface BreadcrumbPlaygroundProps {
  size: 'sm' | 'md' | 'lg'
}

export interface DrawerPlaygroundProps {
  side: 'left' | 'right' | 'top' | 'bottom'
  size: 'sm' | 'md' | 'lg'
}

export interface ConfirmDialogPlaygroundProps {
  variant: 'default' | 'warning' | 'danger'
  size: 'sm' | 'md' | 'lg'
}

export interface PaginationPlaygroundProps {
  variant: 'full' | 'simple'
  size: 'sm' | 'md' | 'lg'
  showFirstLast: boolean
  disabled: boolean
  currentPage: number
  totalPages: number
}

// ---- Outlet Context 타입 ----

export interface PlaygroundOutletContext {
  props: Record<string, unknown>
  setProp: (key: string, value: unknown) => void
  componentType: string
}

export function usePlaygroundContext(): PlaygroundOutletContext {
  return useOutletContext<PlaygroundOutletContext>()
}

// ---- 컴포넌트별 기본 Props ----

export const defaultPropsMap: Record<string, Record<string, unknown>> = {
  'button': {
    variant: 'solid',
    size: 'md',
    fullWidth: false,
    disabled: false,
    children: 'Button',
  },
  'input': {
    variant: 'outline',
    size: 'md',
    invalid: false,
    disabled: false,
    placeholder: 'Enter text...',
  },
  'dialog': {
    size: 'md',
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
  'dropdown': {
    defaultOpen: false,
    placement: 'bottom-start',
  },
  'table': {
    hoverable: true,
    compact: false,
  },
  'datatable': {
    bordered: false,
    compact: false,
  },
  'card': {
    variant: 'default',
    padding: 'md',
    children: 'Card content',
  },
  'badge': {
    size: 'md',
    dot: false,
    label: 'Badge',
  },
  'checkbox': {
    variant: 'default',
    size: 'md',
    label: 'Accept terms',
    description: 'You agree to our Terms of Service',
  },
  'radio': {
    variant: 'default',
    size: 'md',
    orientation: 'vertical',
  },
  'switch': {
    variant: 'default',
    size: 'md',
    label: 'Notifications',
    description: 'Receive push notifications',
  },
  'select': {
    variant: 'outline',
    size: 'md',
    fullWidth: false,
    invalid: false,
    disabled: false,
  },
  'textarea': {
    variant: 'outline',
    size: 'md',
    resize: 'vertical',
    fullWidth: false,
    invalid: false,
    disabled: false,
  },
  'slider': {
    variant: 'default',
    size: 'md',
    showValue: false,
    disabled: false,
  },
  'file-input': {
    variant: 'default',
    size: 'md',
    fullWidth: false,
    disabled: false,
  },
  'input-group': {
    variant: 'outline',
    size: 'md',
    fullWidth: false,
    disabled: false,
  },
  'spinner': {
    variant: 'default',
    size: 'md',
    showLabel: false,
  },
  'alert': {
    variant: 'info',
    closable: false,
    title: 'Alert title',
    description: 'Alert description text',
  },
  'progress-bar': {
    variant: 'default',
    size: 'md',
    showValue: false,
    striped: false,
    animated: false,
  },
  'stack': {
    direction: 'column',
    gap: 'md',
    align: 'start',
    justify: 'start',
  },
  'divider': {
    variant: 'default',
    labelPosition: 'center',
  },
  'avatar': {
    size: 'md',
    variant: 'default',
    ring: false,
    square: false,
  },
  'chip': {
    variant: 'default',
    size: 'md',
    removable: false,
  },
  'list': {
    variant: 'nav',
    size: 'md',
    density: 'comfortable',
  },
  'tabs': {
    variant: 'default',
  },
  'breadcrumb': {
    size: 'md',
  },
  'drawer': {
    side: 'right',
    size: 'md',
  },
  'confirm-dialog': {
    variant: 'default',
    size: 'sm',
  },
  'pagination': {
    variant: 'full',
    size: 'md',
    showFirstLast: false,
    disabled: false,
    currentPage: 5,
    totalPages: 10,
  },
}

// ---- Props 컨트롤 정의 ----

export interface PropToggleDef {
  key: string
  label: string
  options: string[]
}

export interface PropBooleanDef {
  key: string
  label: string
}

export interface PropTextDef {
  key: string
  label: string
}

export interface PropDefs {
  toggles: PropToggleDef[]
  booleans: PropBooleanDef[]
  texts: PropTextDef[]
}

export const propDefsMap: Record<string, PropDefs> = {
  'button': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['solid', 'secondary', 'ghost', 'danger'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'fullWidth', label: 'fullWidth' },
      { key: 'disabled', label: 'disabled' },
    ],
    texts: [
      { key: 'children', label: 'label' },
    ],
  },
  'input': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['outline', 'filled'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'invalid', label: 'invalid' },
      { key: 'disabled', label: 'disabled' },
    ],
    texts: [
      { key: 'placeholder', label: 'placeholder' },
    ],
  },
  'dialog': {
    toggles: [
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'closeOnOverlayClick', label: 'closeOnOverlayClick' },
      { key: 'closeOnEscape', label: 'closeOnEscape' },
    ],
    texts: [],
  },
  'dropdown': {
    toggles: [
      { key: 'placement', label: 'placement', options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'] },
    ],
    booleans: [
      { key: 'defaultOpen', label: 'defaultOpen' },
    ],
    texts: [],
  },
  'table': {
    toggles: [],
    booleans: [
      { key: 'hoverable', label: 'hoverable' },
      { key: 'compact', label: 'compact' },
    ],
    texts: [],
  },
  'datatable': {
    toggles: [],
    booleans: [
      { key: 'bordered', label: 'bordered' },
      { key: 'compact', label: 'compact' },
    ],
    texts: [],
  },
  'card': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'outlined', 'elevated'] },
      { key: 'padding', label: 'padding', options: ['none', 'sm', 'md', 'lg'] },
    ],
    booleans: [],
    texts: [
      { key: 'children', label: 'content' },
    ],
  },
  'badge': {
    toggles: [
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'dot', label: 'dot' },
    ],
    texts: [
      { key: 'label', label: 'label' },
    ],
  },
  'checkbox': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'card'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [],
    texts: [
      { key: 'label', label: 'label' },
      { key: 'description', label: 'description' },
    ],
  },
  'radio': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'card'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
      { key: 'orientation', label: 'orientation', options: ['vertical', 'horizontal'] },
    ],
    booleans: [],
    texts: [],
  },
  'switch': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'card'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [],
    texts: [
      { key: 'label', label: 'label' },
      { key: 'description', label: 'description' },
    ],
  },
  'select': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['outline', 'filled'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'fullWidth', label: 'fullWidth' },
      { key: 'invalid', label: 'invalid' },
      { key: 'disabled', label: 'disabled' },
    ],
    texts: [],
  },
  'textarea': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['outline', 'filled'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
      { key: 'resize', label: 'resize', options: ['none', 'vertical', 'horizontal', 'both'] },
    ],
    booleans: [
      { key: 'fullWidth', label: 'fullWidth' },
      { key: 'invalid', label: 'invalid' },
      { key: 'disabled', label: 'disabled' },
    ],
    texts: [],
  },
  'slider': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'filled'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'showValue', label: 'showValue' },
      { key: 'disabled', label: 'disabled' },
    ],
    texts: [],
  },
  'file-input': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'filled'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'fullWidth', label: 'fullWidth' },
      { key: 'disabled', label: 'disabled' },
    ],
    texts: [],
  },
  'input-group': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['outline', 'filled'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'fullWidth', label: 'fullWidth' },
      { key: 'disabled', label: 'disabled' },
    ],
    texts: [],
  },
  'spinner': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'primary', 'danger', 'success', 'warning'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'showLabel', label: 'showLabel' },
    ],
    texts: [],
  },
  'alert': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['info', 'success', 'warning', 'danger'] },
    ],
    booleans: [
      { key: 'closable', label: 'closable' },
    ],
    texts: [
      { key: 'title', label: 'title' },
      { key: 'description', label: 'description' },
    ],
  },
  'progress-bar': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'primary', 'success', 'warning', 'danger'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'showValue', label: 'showValue' },
      { key: 'striped', label: 'striped' },
      { key: 'animated', label: 'animated' },
    ],
    texts: [],
  },
  'stack': {
    toggles: [
      { key: 'direction', label: 'direction', options: ['column', 'row'] },
      { key: 'gap', label: 'gap', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
      { key: 'align', label: 'align', options: ['start', 'center', 'end', 'stretch'] },
      { key: 'justify', label: 'justify', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] },
    ],
    booleans: [],
    texts: [],
  },
  'divider': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'subtle', 'strong'] },
      { key: 'labelPosition', label: 'labelPosition', options: ['start', 'center', 'end'] },
    ],
    booleans: [],
    texts: [],
  },
  'avatar': {
    toggles: [
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg', 'xl'] },
      { key: 'variant', label: 'variant', options: ['default', 'primary', 'danger', 'success', 'warning'] },
    ],
    booleans: [
      { key: 'ring', label: 'ring' },
      { key: 'square', label: 'square' },
    ],
    texts: [],
  },
  'chip': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'primary', 'secondary', 'danger', 'success', 'warning'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'removable', label: 'removable' },
    ],
    texts: [],
  },
  'list': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'nav', 'plain'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
      { key: 'density', label: 'density', options: ['comfortable', 'compact'] },
    ],
    booleans: [],
    texts: [],
  },
  'tabs': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'pills', 'underline'] },
    ],
    booleans: [],
    texts: [],
  },
  'breadcrumb': {
    toggles: [
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [],
    texts: [],
  },
  'drawer': {
    toggles: [
      { key: 'side', label: 'side', options: ['left', 'right', 'top', 'bottom'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [],
    texts: [],
  },
  'confirm-dialog': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'warning', 'danger'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [],
    texts: [],
  },
  'pagination': {
    toggles: [
      { key: 'variant', label: 'variant', options: ['full', 'simple'] },
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'showFirstLast', label: 'showFirstLast' },
      { key: 'disabled', label: 'disabled' },
    ],
    texts: [
      { key: 'currentPage', label: 'currentPage' },
      { key: 'totalPages', label: 'totalPages' },
    ],
  },
}

// ---- 경로 → 컴포넌트 타입 추출 ----

export function getComponentType(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  if (segments.length >= 2 && segments[0] === 'components') {
    return segments[1]
  }
  return ''
}
