import React from 'react';

export const Skeleton = ({ className = '', variant = 'card' }) => {
  if (variant === 'video') {
    return (
      <div className={`glass-panel cyber-corner p-3 overflow-hidden ${className}`}>
        <div className="w-full aspect-video bg-white/5 rounded animate-pulse" />
        <div className="mt-4 space-y-2">
          <div className="h-4 bg-white/10 rounded w-3/4 animate-pulse" />
          <div className="h-3 bg-white/5 rounded w-1/2 animate-pulse" />
        </div>
      </div>
    );
  }

  if (variant === 'stat') {
    return (
      <div className={`glass-panel cyber-corner p-6 flex flex-col gap-2 ${className}`}>
        <div className="h-3 bg-white/10 w-24 rounded animate-pulse" />
        <div className="h-8 bg-white/15 w-32 rounded animate-pulse" />
        <div className="h-2 bg-white/5 w-16 rounded animate-pulse" />
      </div>
    );
  }

  return (
    <div
      className={`glass-panel cyber-corner bg-white/5 animate-pulse ${className}`}
    />
  );
};

export default Skeleton;
