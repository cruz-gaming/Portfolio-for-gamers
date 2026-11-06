import React from 'react';

const Badge = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'live' | 'outline' | 'success' | 'warning'
  size = 'md',
  className = '',
  icon: Icon,
}) => {
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider',
    md: 'text-xs px-2.5 py-1 tracking-wider',
    lg: 'text-sm px-3.5 py-1.5 tracking-widest',
  };

  const variantClasses = {
    primary: 'bg-primary/20 text-primary border border-primary/40 shadow-sm',
    secondary: 'bg-secondary/20 text-secondary border border-secondary/40',
    live: 'bg-red-600/25 text-red-400 border border-red-500/60 animate-pulse',
    outline: 'bg-transparent text-app-muted border border-app-border',
    success: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40',
    warning: 'bg-amber-500/20 text-amber-400 border border-amber-500/40',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-orbitron font-semibold uppercase cyber-tag select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {variant === 'live' && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
      )}
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
};

export default Badge;
