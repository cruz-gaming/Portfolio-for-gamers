import React from 'react';
import { Play, Eye, Calendar, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';

const VideoCard = ({ video, onSelect }) => {
  return (
    <Card
      corner={true}
      className="p-0 overflow-hidden flex flex-col justify-between group hover:border-primary transition-all duration-300"
    >
      {/* Thumbnail Container */}
      <div
        onClick={() => onSelect(video)}
        className="relative aspect-video w-full bg-surface-card overflow-hidden cursor-pointer"
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Cyber overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

        {/* Duration badge */}
        {video.duration && (
          <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/80 backdrop-blur text-[11px] font-mono text-white font-semibold">
            {video.duration}
          </span>
        )}

        {/* Category tag */}
        {video.category && (
          <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[10px] font-orbitron font-bold uppercase cyber-tag bg-primary/80 text-white">
            {video.category}
          </span>
        )}

        {/* Play Icon Overlay on Hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-neon-primary transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>
      </div>

      {/* Video Info Details */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <h4
          onClick={() => onSelect(video)}
          className="font-orbitron font-bold text-sm sm:text-base text-app-text group-hover:text-primary transition-colors line-clamp-2 cursor-pointer leading-snug"
        >
          {video.title}
        </h4>

        <div className="mt-4 pt-3 border-t border-app-border flex items-center justify-between text-xs font-rajdhani text-app-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-mono">
              <Eye className="w-3.5 h-3.5 text-secondary" />
              {video.views}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-app-muted" />
              {video.date}
            </span>
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title="Watch directly on YouTube"
            className="p-1 hover:text-red-500 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
