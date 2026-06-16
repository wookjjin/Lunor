import type { ReactNode } from 'react'

/* =============================================================================
   PropertiesPanel — 확장 가능한 속성 패널 컴포넌트
   - children을 통해 외부에서 콘텐츠 주입 가능
   - 기본 상태: 플레이스홀더 메시지 표시
   - 추후: Context API 또는 URL 파라미터로 선택된 컴포넌트의 props 문서 렌더링
   ============================================================================= */

export interface PropertiesPanelProps {
  children?: ReactNode
}

function DefaultPlaceholder() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      opacity: 0.4,
      textAlign: 'center',
      padding: '2rem',
    }}
    >
      <span className="material-symbols-outlined" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
        tune
      </span>
      <p style={{ fontSize: '0.875rem', lineHeight: 1.5 }}>
        컴포넌트를 선택하면
        <br />
        속성이 여기에 표시됩니다
      </p>
    </div>
  )
}

export default function PropertiesPanel({ children }: PropertiesPanelProps) {
  return (
    <aside className="layout-properties-panel glacier-glass scrollbar-hide">
      {children ?? <DefaultPlaceholder />}
    </aside>
  )
}
