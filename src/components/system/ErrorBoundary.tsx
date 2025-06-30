// src/components/system/ErrorBoundary.tsx
import React from 'react';
import type { ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error('[ERROR]', error, {
      time: new Date().toISOString(),
      info: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>Eroare neașteptată. Încearcă mai târziu.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
