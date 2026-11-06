import { useState, useEffect, useCallback } from 'react';
import { fetchYouTubeStats } from '../services/youtubeService';

export const useYouTubeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadStats = useCallback(async (force = false) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchYouTubeStats(force);
      setStats(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch YouTube statistics');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStats(false);
  }, [loadStats]);

  return {
    stats,
    loading,
    error,
    refresh: () => loadStats(true),
  };
};

export default useYouTubeStats;
