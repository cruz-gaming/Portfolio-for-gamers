import React from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Video, Trophy, Flame, RefreshCw, CheckCircle2, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import AnimatedCounter from '../animations/AnimatedCounter';
import Skeleton from '../ui/Skeleton';
import useYouTubeStats from '../../hooks/useYouTubeStats';
import siteConfig from '../../config/siteConfig';

const YouTubeStats = () => {
  const { stats, loading, refresh } = useYouTubeStats();

  if (loading && !stats) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} variant="stat" />
        ))}
      </div>
    );
  }

  const statItems = [
    {
      label: 'Subscribers',
      value: stats?.subscribers || siteConfig.statsFallback.subscribers,
      formatted: stats?.subscribersFormatted || siteConfig.statsFallback.subscribersFormatted,
      icon: Users,
      color: 'text-red-500',
      glow: 'shadow-neon-primary',
      change: '+14.2% this month',
    },
    {
      label: 'Total Views',
      value: stats?.totalViews || siteConfig.statsFallback.totalViews,
      formatted: stats?.totalViewsFormatted || siteConfig.statsFallback.totalViewsFormatted,
      icon: Eye,
      color: 'text-cyan-400',
      glow: 'shadow-neon-secondary',
      change: 'Lifetime across 400+ videos',
    },
    {
      label: 'Uploaded Videos',
      value: stats?.videoCount || siteConfig.statsFallback.videoCount,
      formatted: String(stats?.videoCount || siteConfig.statsFallback.videoCount),
      icon: Video,
      color: 'text-purple-400',
      glow: 'shadow-md',
      change: 'Guides, walkthroughs & clips',
    },
    {
      label: 'Ranked Win Rate',
      value: 74,
      suffix: '%',
      formatted: siteConfig.statsFallback.winRate,
      icon: Trophy,
      color: 'text-amber-400',
      glow: 'shadow-md',
      change: 'Competitive Radiant stats',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Channel Meta Banner Bar */}
      <Card className="flex flex-col md:flex-row items-center justify-between gap-6 bg-surface-card border-app-border">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="relative">
            <img
              src={stats?.avatarUrl || siteConfig.branding.avatar}
              alt={siteConfig.branding.channelName}
              className="w-20 h-20 rounded-full border-2 border-primary shadow-neon-primary object-cover"
            />
            <span className="absolute bottom-0 right-0 p-1 bg-primary text-white rounded-full">
              <CheckCircle2 className="w-4 h-4 fill-primary text-black" />
            </span>
          </div>

          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h3 className="text-xl sm:text-2xl font-orbitron font-black text-app-text tracking-wide">
                {stats?.channelTitle || siteConfig.branding.channelName}
              </h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-orbitron font-bold uppercase bg-red-600/20 text-red-400 border border-red-500/30">
                Official Creator
              </span>
            </div>
            <p className="text-sm font-mono text-app-muted mt-1">
              {stats?.customUrl || siteConfig.social.youtube.handle} • {siteConfig.branding.shortBio}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => refresh()}
            disabled={loading}
            className="p-2.5 rounded-full glass-panel hover:border-primary text-app-muted hover:text-primary transition-colors cursor-pointer"
            title="Refresh Live Telemetry"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-primary' : ''}`} />
          </button>

          <Button
            href={siteConfig.social.youtube.channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
            icon={ExternalLink}
            iconPosition="right"
          >
            Subscribe on YouTube
          </Button>
        </div>
      </Card>

      {/* Grid of Dynamic Counter Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between group hover:border-primary transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-orbitron font-semibold uppercase tracking-wider text-app-muted">
                    {item.label}
                  </span>
                  <div className={`p-2 rounded-lg glass-panel ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="my-2">
                  <div className="text-3xl sm:text-4xl font-orbitron font-black text-app-text tracking-tight group-hover:text-primary transition-colors">
                    {typeof item.value === 'number' ? (
                      <AnimatedCounter value={item.value} suffix={item.suffix || ''} />
                    ) : (
                      item.formatted
                    )}
                  </div>
                  <div className="text-xs font-rajdhani text-app-muted mt-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span>{item.change}</span>
                  </div>
                </div>

                {/* Cyber baseline */}
                <div className="mt-4 pt-3 border-t border-app-border flex justify-between items-center text-[10px] font-mono text-app-muted/60">
                  <span>TELEMETRY_OK</span>
                  <span>SYNC_ACTIVE</span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default YouTubeStats;
