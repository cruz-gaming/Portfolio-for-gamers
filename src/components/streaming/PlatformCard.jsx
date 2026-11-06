import React from 'react';
import { Youtube, ExternalLink, Radio } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const PlatformCard = ({
  name,
  handle,
  status,
  isLive,
  followers,
  category,
  url,
  icon: Icon,
  accentColor = '#ff1744',
}) => {
  return (
    <Card className="flex flex-col justify-between h-full group hover:border-primary transition-all">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center glass-panel border"
              style={{ borderColor: accentColor }}
            >
              {Icon ? <Icon className="w-6 h-6" style={{ color: accentColor }} /> : <Radio className="w-6 h-6 text-primary" />}
            </div>
            <div>
              <h4 className="font-orbitron font-bold text-lg text-app-text">{name}</h4>
              <span className="text-xs font-mono text-app-muted">{handle}</span>
            </div>
          </div>

          {isLive ? (
            <span className="px-2.5 py-1 rounded bg-red-600/20 text-red-400 border border-red-500/40 text-[10px] font-orbitron font-bold uppercase animate-pulse">
              LIVE NOW
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded bg-surface text-app-muted border border-app-border text-[10px] font-orbitron font-semibold uppercase">
              STANDBY
            </span>
          )}
        </div>

        <div className="space-y-2 py-3 border-y border-app-border text-sm font-rajdhani">
          <div className="flex justify-between">
            <span className="text-app-muted">Followers / Audience</span>
            <span className="font-bold text-app-text">{followers}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-app-muted">Category Focus</span>
            <span className="font-semibold text-secondary">{category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-app-muted">Broadcast Status</span>
            <span className={isLive ? 'text-red-400 font-bold' : 'text-app-muted'}>
              {status}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <Button
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="sm"
          className="w-full"
          icon={ExternalLink}
          iconPosition="right"
        >
          Visit {name}
        </Button>
      </div>
    </Card>
  );
};

export default PlatformCard;
