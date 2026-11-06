import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import VideoCard from './VideoCard';
import VideoModal from './VideoModal';
import FeaturedVideo from './FeaturedVideo';
import Skeleton from '../ui/Skeleton';
import useYouTubeVideos from '../../hooks/useYouTubeVideos';

const VideoGrid = ({ showFeatured = true, limit }) => {
  const {
    videos,
    filteredVideos,
    categories,
    loading,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
  } = useYouTubeVideos();

  const [activeModalVideo, setActiveModalVideo] = useState(null);

  const featured = videos.find((v) => v.featured) || videos[0];
  const displayList = limit ? filteredVideos.slice(0, limit) : filteredVideos;

  return (
    <div className="space-y-10">
      {/* Featured Video Spotlight */}
      {showFeatured && featured && !searchQuery && selectedCategory === 'All' && (
        <FeaturedVideo video={featured} onPlay={(v) => setActiveModalVideo(v)} />
      )}

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel cyber-corner p-4">
        {/* Categories Chips */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          <Filter className="w-4 h-4 text-app-muted shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs font-orbitron font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-neon-primary'
                  : 'bg-surface hover:bg-surface-hover text-app-muted border border-app-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-app-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search video titles..."
            className="w-full pl-9 pr-8 py-2 bg-surface text-app-text placeholder-app-muted/60 text-xs font-rajdhani font-semibold border border-app-border focus:border-primary focus:outline-none rounded cyber-tag transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-app-muted hover:text-primary"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} variant="video" />
          ))}
        </div>
      ) : displayList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayList.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onSelect={(v) => setActiveModalVideo(v)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass-panel cyber-corner">
          <p className="text-lg font-orbitron text-app-text">NO VIDEOS FOUND</p>
          <p className="text-sm font-rajdhani text-app-muted mt-2">
            No video matches "{searchQuery}". Try a different keyword or reset filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="mt-4 px-4 py-2 bg-primary text-white font-orbitron text-xs cyber-tag cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Video Modal Popup */}
      <VideoModal
        video={activeModalVideo}
        isOpen={Boolean(activeModalVideo)}
        onClose={() => setActiveModalVideo(null)}
      />
    </div>
  );
};

export default VideoGrid;
