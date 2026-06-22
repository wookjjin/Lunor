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
  button: {
    variant: 'solid',
    size: 'md',
    fullWidth: false,
    disabled: false,
    children: 'Button',
  },
  input: {
    variant: 'outline',
    size: 'md',
    invalid: false,
    disabled: false,
    placeholder: 'Enter text...',
  },
  dialog: {
    size: 'md',
    closeOnOverlayClick: true,
    closeOnEscape: true,
  },
  dropdown: {
    defaultOpen: false,
    placement: 'bottom-start',
  },
  table: {
    hoverable: true,
    compact: false,
  },
  datatable: {
    bordered: false,
    compact: false,
  },
  card: {
    variant: 'default',
    padding: 'md',
    children: 'Card content',
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
  button: {
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
  input: {
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
  dialog: {
    toggles: [
      { key: 'size', label: 'size', options: ['sm', 'md', 'lg'] },
    ],
    booleans: [
      { key: 'closeOnOverlayClick', label: 'closeOnOverlayClick' },
      { key: 'closeOnEscape', label: 'closeOnEscape' },
    ],
    texts: [],
  },
  dropdown: {
    toggles: [
      { key: 'placement', label: 'placement', options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'] },
    ],
    booleans: [
      { key: 'defaultOpen', label: 'defaultOpen' },
    ],
    texts: [],
  },
  table: {
    toggles: [],
    booleans: [
      { key: 'hoverable', label: 'hoverable' },
      { key: 'compact', label: 'compact' },
    ],
    texts: [],
  },
  datatable: {
    toggles: [],
    booleans: [
      { key: 'bordered', label: 'bordered' },
      { key: 'compact', label: 'compact' },
    ],
    texts: [],
  },
  card: {
    toggles: [
      { key: 'variant', label: 'variant', options: ['default', 'outlined', 'elevated'] },
      { key: 'padding', label: 'padding', options: ['none', 'sm', 'md', 'lg'] },
    ],
    booleans: [],
    texts: [
      { key: 'children', label: 'content' },
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
