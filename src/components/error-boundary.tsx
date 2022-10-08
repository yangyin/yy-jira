import React from "react"

type FullbackRender = (props: { error: Error | null }) => React.ReactElement

// export class ErrorBoundary extends React.Component<{children: React.ReactNode, fullbackRender: FullbackRender}, {error: Error | null}>{
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fullbackRender: FullbackRender }>,
  { error: Error | null }
> {
  state = {
    error: null,
  }

  // 当子组件抛出异常，这里会接收到并调用
  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  render() {
    const { error } = this.state
    const { fullbackRender, children } = this.props

    if (error) {
      return fullbackRender({ error })
    }
    return children
  }
}
