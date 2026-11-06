import React from 'react';
import { Play, Sparkles, Eye, Clock, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const FeaturedVideo = ({ video, onPlay }) => {
  if (!video) return null;

  return (
    <Card className="p-0 overflow-hidden border-2 border-primary/40 bg-surface-card shadow-neon-primary/20 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        {/* Big Preview Side */}
        <div
          onClick={() => onPlay(video)}
          className="lg:col-span-7 relative aspect-video w-full bg-surface overflow-hidden cursor-pointer"
        >
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-surface via-transparent to-transparent opacity-80" />

          {/* Featured Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-white text-xs font-orbitron font-bold uppercase shadow-neon-primary">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Video
            </span>
          </div>

          {/* Big Center Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-neon-primary transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </div>
        </div>

        {/* Video Description Side */}
        <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3 text-xs font-mono text-secondary">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {video.views} Views
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {video.duration}
            </span>
          </div>

          <h3
            onClick={() => onPlay(video)}
            className="text-xl sm:text-2xl font-orbitron font-black text-app-text group-hover:text-primary transition-colors cursor-pointer leading-tight"
          >
            {video.title}
          </h3>

          <p className="text-sm font-rajdhani text-app-muted leading-relaxed">
            High precision gameplay, tactical callouts, and frame-by-frame analysis. Dive into competitive tactics and mechanical mastery.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => onPlay(video)}
              variant="primary"
              size="md"
              icon={Play}
            >
              Watch Video
            </Button>
            <Button
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="md"
              icon={ExternalLink}
              iconPosition="right"
            >
              YouTube
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FeaturedVideo;
