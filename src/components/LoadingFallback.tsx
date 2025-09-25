const LoadingFallback = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="glass-card p-8 text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-muted/20 rounded w-32 mx-auto"></div>
          <div className="h-8 bg-muted/20 rounded w-48 mx-auto"></div>
          <div className="h-4 bg-muted/20 rounded w-24 mx-auto"></div>
        </div>
        <p className="text-muted mt-4">Carregando...</p>
      </div>
    </div>
  );
};

export default LoadingFallback;