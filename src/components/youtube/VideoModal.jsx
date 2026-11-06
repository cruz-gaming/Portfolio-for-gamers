import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { ExternalLink } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';

const VideoModal = ({ video, isOpen, onClose }) => {
  if (!video) return null;

  const videoUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={video.title} maxWidth="max-w-5xl">
      <div className="space-y-4">
        {/* Player Container */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-black border border-app-border shadow-2xl">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            controls={true}
            playing={isOpen}
            config={{
              youtube: {
                playerVars: { autoplay: 1, modestbranding: 1, rel: 0 },
              },
            }}
          />
        </div>

        {/* Video Metadata & Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-orbitron font-bold uppercase bg-primary/20 text-primary border border-primary/40">
                {video.category || 'Featured'}
              </span>
              <span className="text-xs font-mono text-app-muted">
                {video.views} Views • {video.date}
              </span>
            </div>
            <h4 className="font-orbitron font-bold text-base text-app-text">
              {video.title}
            </h4>
          </div>

          <Button
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="cyber"
            size="sm"
            icon={ExternalLink}
            iconPosition="right"
          >
            Watch on YouTube
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
