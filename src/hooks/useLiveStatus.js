import { useState, useEffect } from 'react';
import { fetchYouTubeLiveStatus } from '../services/youtubeService';
import { fetchKickStatus } from '../services/streamingService';

export const useLiveStatus = () => {
  const [liveData, setLiveData] = useState({
    youtube: { isLive: false },
    kick: { isLive: false },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const checkLive = async () => {
      try {
        const [yt, kick] = await Promise.all([
          fetchYouTubeLiveStatus(),
          fetchKickStatus(),
        ]);
        if (isMounted) {
          setLiveData({
            youtube: yt,
            kick: kick,
          });
        }
      } catch (err) {
        console.error('Error checking live statuses', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    checkLive();
    const interval = setInterval(checkLive, 60000); // Check every minute
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const isAnyLive = Boolean(liveData.youtube?.isLive || liveData.kick?.isLive);

  return {
    liveData,
    isAnyLive,
    loading,
  };
};

export default useLiveStatus;
