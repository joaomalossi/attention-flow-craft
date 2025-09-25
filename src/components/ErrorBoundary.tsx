import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
          <div className="glass-card p-8 max-w-md text-center">
            <h2 className="text-2xl font-bold mb-4 text-accent">
              Ops! Algo deu errado
            </h2>
            <p className="text-muted-foreground mb-6">
              Parece que encontramos um erro inesperado. Por favor, recarregue a página.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="glass-button-primary"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;