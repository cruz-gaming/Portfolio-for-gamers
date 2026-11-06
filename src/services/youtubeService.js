import siteConfig from '../config/siteConfig';

const API_BASE = import.meta.env.VITE_API_BASE_URL || '/api';
const STATS_CACHE_KEY = 'cruz_yt_stats_cache';
const VIDEOS_CACHE_KEY = 'cruz_yt_videos_cache';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes cache

/**
 * Format raw subscriber numbers into human-readable strings (e.g. 285400 -> 285K)
 */
export const formatNumber = (num) => {
  if (num === null || num === undefined) return '0';
  const n = Number(num);
  if (isNaN(n)) return String(num);

  if (n >= 1_000_000_000) {
    return (n / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (n >= 1_000_000) {
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (n >= 1_000) {
    return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return n.toLocaleString();
};

/**
 * Fetch YouTube Channel Statistics
 */
export const fetchYouTubeStats = async (forceRefresh = false) => {
  // Check client cache first
  if (!forceRefresh) {
    const cached = sessionStorage.getItem(STATS_CACHE_KEY);
    if (cached) {
      try {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL_MS) {
          return { ...data, source: 'cache' };
        }
      } catch (err) {
        sessionStorage.removeItem(STATS_CACHE_KEY);
      }
    }
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout

    const res = await fetch(`${API_BASE}/youtube/stats?channelId=${siteConfig.social.youtube.channelId}`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data && !data.error) {
        const payload = {
          subscribers: data.subscribers || siteConfig.statsFallback.subscribers,
          subscribersFormatted: formatNumber(data.subscribers || siteConfig.statsFallback.subscribers),
          totalViews: data.views || siteConfig.statsFallback.totalViews,
          totalViewsFormatted: formatNumber(data.views || siteConfig.statsFallback.totalViews),
          videoCount: data.videoCount || siteConfig.statsFallback.videoCount,
          channelTitle: data.title || siteConfig.branding.channelName,
          customUrl: data.customUrl || siteConfig.social.youtube.handle,
          avatarUrl: data.avatar || siteConfig.branding.avatar,
          bannerUrl: data.banner || siteConfig.branding.banner,
          isLiveApi: true,
          demoMode: Boolean(data.demoMode),
          lastUpdated: new Date().toISOString(),
          source: 'api',
        };

        sessionStorage.setItem(STATS_CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: payload }));
        return payload;
      }
    }
  } catch (err) {
    // Network error or backend offline - graceful fallback
    console.warn('[YouTubeService] Backend unreachable or API quota exceeded. Using verified configured stats.', err.message);
  }

  // Graceful verified fallback data from siteConfig
  const fallbackPayload = {
    subscribers: siteConfig.statsFallback.subscribers,
    subscribersFormatted: siteConfig.statsFallback.subscribersFormatted,
    totalViews: siteConfig.statsFallback.totalViews,
    totalViewsFormatted: siteConfig.statsFallback.totalViewsFormatted,
    videoCount: siteConfig.statsFallback.videoCount,
    channelTitle: siteConfig.branding.channelName,
    customUrl: siteConfig.social.youtube.handle,
    avatarUrl: siteConfig.branding.avatar,
    bannerUrl: siteConfig.branding.banner,
    isLiveApi: false,
    demoMode: true,
    lastUpdated: new Date().toISOString(),
    source: 'fallback',
  };

  return fallbackPayload;
};

/**
 * Fetch YouTube Videos (Latest & Featured)
 */
export const fetchYouTubeVideos = async (forceRefresh = false) => {
  if (!forceRefresh) {
    const cached = sessionStorage.getItem(VIDEOS_CACHE_KEY);
    if (cached) {
      try {
        const { timestamp, data } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_TTL_MS) {
          return { videos: data, source: 'cache' };
        }
      } catch (err) {
        sessionStorage.removeItem(VIDEOS_CACHE_KEY);
      }
    }
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(`${API_BASE}/youtube/videos?channelId=${siteConfig.social.youtube.channelId}&maxResults=12`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.videos) && data.videos.length > 0) {
        sessionStorage.setItem(VIDEOS_CACHE_KEY, JSON.stringify({ timestamp: Date.now(), data: data.videos }));
        return { videos: data.videos, source: 'api' };
      }
    }
  } catch (err) {
    console.warn('[YouTubeService] Unable to reach videos endpoint, loading configured portfolio vault.', err.message);
  }

  // Fallback to configured high-definition videos list from siteConfig
  return { videos: siteConfig.videos, source: 'fallback' };
};

/**
 * Check YouTube Live Stream Status
 */
export const fetchYouTubeLiveStatus = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const res = await fetch(`${API_BASE}/youtube/live?channelId=${siteConfig.social.youtube.channelId}`, {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (err) {
    // Backend offline or error
  }

  return {
    isLive: siteConfig.liveConfig.isLiveOverride || false,
    platform: 'youtube',
    title: siteConfig.liveConfig.streamTitle,
    game: siteConfig.liveConfig.streamGame,
    viewers: siteConfig.liveConfig.viewerCount,
    startedAt: siteConfig.liveConfig.startedAt,
    embedUrl: siteConfig.liveConfig.embedUrl,
  };
};
