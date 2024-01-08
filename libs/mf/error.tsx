// @ts-ignore
import React, { ReactNode } from "react";

type ErrorBoundaryProps = {
  fallback: ReactNode;
  children: ReactNode | ReactNode[];
}

type ErrorBoundaryState = {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState, {}> {
  state = { hasError: false };
  context: any;
  refs: any;

  setState<K extends keyof ErrorBoundaryState>(state: ((prevState: Readonly<ErrorBoundaryState>, props: Readonly<ErrorBoundaryProps>) => (Pick<ErrorBoundaryState, K> | ErrorBoundaryState | null)) | Pick<ErrorBoundaryState, K> | ErrorBoundaryState | null, callback?: () => void) {
    super.setState(state, callback);
  }

  forceUpdate(callback?: () => void) {
    super.forceUpdate(callback);
  }


  constructor(public props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(_error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, null, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
