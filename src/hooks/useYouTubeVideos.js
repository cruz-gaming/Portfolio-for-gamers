import { useState, useEffect, useCallback, useMemo } from 'react';
import { fetchYouTubeVideos } from '../services/youtubeService';

export const useYouTubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const loadVideos = useCallback(async (force = false) => {
    setLoading(true);
    setError(null);
    try {
      const { videos: fetchedVideos } = await fetchYouTubeVideos(force);
      setVideos(fetchedVideos);
    } catch (err) {
      setError(err.message || 'Failed to load videos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadVideos(false);
  }, [loadVideos]);

  const categories = useMemo(() => {
    const set = new Set(videos.map((v) => v.category));
    return ['All', ...Array.from(set)];
  }, [videos]);

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesSearch =
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || video.category.toLowerCase() === selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [videos, searchQuery, selectedCategory]);

  return {
    videos,
    filteredVideos,
    categories,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    refresh: () => loadVideos(true),
  };
};

export default useYouTubeVideos;
