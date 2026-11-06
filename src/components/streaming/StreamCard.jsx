import React from 'react';
import { Play, Users, Clock, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import LiveBadge from './LiveBadge';
import siteConfig from '../../config/siteConfig';

const StreamCard = ({
  platform = 'youtube', // 'youtube' | 'kick'
  isLive = false,
  title,
  game,
  viewers,
  watchUrl,
  thumbnail,
  onPlayModal,
}) => {
  const isYouTube = platform === 'youtube';
  const platformColor = isYouTube ? 'text-red-500' : 'text-emerald-400';
  const platformBg = isYouTube ? 'bg-red-500/10 border-red-500/30' : 'bg-emerald-500/10 border-emerald-500/30';
  const platformName = isYouTube ? 'YouTube Live' : 'Kick Stream';

  return (
    <Card className="overflow-hidden p-0 border border-app-border group">
      {/* Stream Preview Header */}
      <div className="relative aspect-video w-full bg-surface-card overflow-hidden">
        <img
          src={thumbnail || (isYouTube ? '/images/banner.svg' : '/images/games/valorant.svg')}
          alt={title || platformName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

        {/* Live Badge Overlay */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <LiveBadge isLive={isLive} />
          <span className={`px-2.5 py-0.5 rounded text-[10px] font-orbitron font-bold uppercase border ${platformBg} ${platformColor}`}>
            {platformName}
          </span>
        </div>

        {/* Viewer counter if live */}
        {isLive && viewers && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur text-xs font-mono text-white">
            <Users className="w-3.5 h-3.5 text-primary" />
            <span>{viewers.toLocaleString()} watching</span>
          </div>
        )}

        {/* Quick Play Trigger Button */}
        {onPlayModal && (
          <button
            onClick={onPlayModal}
            className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-neon-primary transform group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
          </button>
        )}
      </div>

      {/* Stream Details Body */}
      <div className="p-6 space-y-4">
        <div>
          {game && (
            <span className="text-xs font-orbitron font-semibold text-secondary tracking-wider uppercase block mb-1">
              Category: {game}
            </span>
          )}
          <h3 className="text-lg font-orbitron font-bold text-app-text group-hover:text-primary transition-colors line-clamp-2">
            {title || `${siteConfig.branding.channelName} Live Broadcast`}
          </h3>
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-app-border">
          <div className="text-xs font-rajdhani text-app-muted flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Daily 6:00 PM EST</span>
          </div>

          <Button
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="cyber"
            size="sm"
            icon={ExternalLink}
            iconPosition="right"
          >
            {isLive ? 'Watch Live' : 'Open Channel'}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default StreamCard;
