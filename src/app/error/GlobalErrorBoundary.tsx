import type { ErrorInfo, ReactNode } from 'react'
import { Component } from 'react'
import { handleGlobalError } from '@/app/error/handleGlobalError'
import { Button } from '@/core/components/Button/Button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    handleGlobalError(error)
    console.error('[ErrorBoundary]', errorInfo.componentStack)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>오류가 발생했습니다</h2>
            <p>{this.state.error?.message}</p>
            <Button
              variant="solid"
              size="md"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              다시 시도
            </Button>
          </div>
        )
      )
    }

    return this.props.children
  }
}
