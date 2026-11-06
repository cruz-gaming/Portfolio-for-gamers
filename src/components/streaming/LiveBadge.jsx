import React from 'react';
import { Radio } from 'lucide-react';

const LiveBadge = ({ isLive = false, size = 'sm', className = '' }) => {
  if (!isLive) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-card border border-app-border text-app-muted text-xs font-orbitron font-semibold uppercase ${className}`}
      >
        <span className="w-2 h-2 rounded-full bg-zinc-500" />
        Offline
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/25 border border-red-500/60 text-red-400 text-xs font-orbitron font-bold uppercase shadow-neon-primary animate-pulse ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
      </span>
      <Radio className="w-3.5 h-3.5" />
      LIVE NOW
    </span>
  );
};

export default LiveBadge;
