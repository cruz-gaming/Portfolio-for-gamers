import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// In-memory cache to prevent hitting YouTube API quotas unnecessarily
const cache = {
  stats: { timestamp: 0, data: null },
  videos: { timestamp: 0, data: null },
  live: { timestamp: 0, data: null },
};
const CACHE_DURATION_MS = 10 * 60 * 1000; // 10 minutes cache

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    apiKeyConfigured: Boolean(process.env.YOUTUBE_API_KEY && process.env.YOUTUBE_API_KEY !== 'YOUR_SECRET_API_KEY'),
  });
});

// GET /api/youtube/stats
app.get('/api/youtube/stats', async (req, res) => {
  const channelId = req.query.channelId || process.env.YOUTUBE_CHANNEL_ID || 'UC_x5XG1OV2P6uZZ5FSM9Ttw';
  const apiKey = process.env.YOUTUBE_API_KEY;

  // Check cache
  const now = Date.now();
  if (cache.stats.data && now - cache.stats.timestamp < CACHE_DURATION_MS) {
    return res.json({ ...cache.stats.data, cached: true });
  }

  // If real API key is configured
  if (apiKey && apiKey !== 'YOUR_SECRET_API_KEY' && apiKey !== 'YOUR_YOUTUBE_API_KEY_HERE') {
    try {
      const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings&id=${channelId}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const item = data.items[0];
        const statsPayload = {
          subscribers: Number(item.statistics.subscriberCount),
          views: Number(item.statistics.viewCount),
          videoCount: Number(item.statistics.videoCount),
          title: item.snippet.title,
          customUrl: item.snippet.customUrl,
          avatar: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.default?.url,
          banner: item.brandingSettings?.image?.bannerExternalUrl || null,
          demoMode: false,
        };

        cache.stats = { timestamp: now, data: statsPayload };
        return res.json(statsPayload);
      } else if (data.error) {
        console.error('[Backend YouTube Error]', data.error.message);
      }
    } catch (err) {
      console.error('[Backend YouTube Fetch Exception]', err.message);
    }
  }

  // Fallback demo response with notice
  const fallback = {
    subscribers: 285400,
    views: 38920150,
    videoCount: 428,
    title: 'Cruz Gaming',
    customUrl: '@CruzGamingLive',
    avatar: '/images/avatar.svg',
    banner: '/images/banner.svg',
    demoMode: true,
    message: 'Set YOUTUBE_API_KEY in .env for live Google API integration.',
  };

  return res.json(fallback);
});

// GET /api/youtube/videos
app.get('/api/youtube/videos', async (req, res) => {
  const channelId = req.query.channelId || process.env.YOUTUBE_CHANNEL_ID || 'UC_x5XG1OV2P6uZZ5FSM9Ttw';
  const maxResults = parseInt(req.query.maxResults) || 8;
  const apiKey = process.env.YOUTUBE_API_KEY;

  const now = Date.now();
  if (cache.videos.data && now - cache.videos.timestamp < CACHE_DURATION_MS) {
    return res.json({ videos: cache.videos.data, cached: true });
  }

  if (apiKey && apiKey !== 'YOUR_SECRET_API_KEY' && apiKey !== 'YOUR_YOUTUBE_API_KEY_HERE') {
    try {
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxResults}&order=date&type=video&key=${apiKey}`;
      const searchRes = await fetch(searchUrl);
      const searchData = await searchRes.json();

      if (searchData.items && searchData.items.length > 0) {
        const videoIds = searchData.items.map((i) => i.id.videoId).join(',');
        const detailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${apiKey}`;
        const detailsRes = await fetch(detailsUrl);
        const detailsData = await detailsRes.json();

        const videos = (detailsData.items || []).map((item, idx) => ({
          id: `yt-${item.id}`,
          youtubeId: item.id,
          title: item.snippet.title,
          views: Number(item.statistics?.viewCount || 0).toLocaleString(),
          date: new Date(item.snippet.publishedAt).toLocaleDateString(),
          duration: parseISO8601Duration(item.contentDetails?.duration),
          category: 'YouTube',
          featured: idx < 2,
          thumbnail: item.snippet.thumbnails?.maxres?.url || item.snippet.thumbnails?.high?.url,
        }));

        cache.videos = { timestamp: now, data: videos };
        return res.json({ videos, demoMode: false });
      }
    } catch (err) {
      console.error('[Backend YouTube Videos Exception]', err.message);
    }
  }

  // High quality curated video items fallback
  const sampleVideos = [
    {
      id: 'v1',
      youtubeId: 'dQw4w9WgXcQ',
      title: 'HOW I HIT RADIANT WITH 360HZ OLED (Full Gameplay Breakdown)',
      views: '184,200',
      date: '3 days ago',
      duration: '18:42',
      category: 'Gameplay',
      featured: true,
      thumbnail: '/images/videos/thumb-1.svg',
    },
    {
      id: 'v2',
      youtubeId: 'L_LUpnjgPso',
      title: '$10,000 EXTREME CYBERPUNK GAMING RIG BUILD (RTX 4090 + Liquid Loop)',
      views: '342,800',
      date: '1 week ago',
      duration: '24:15',
      category: 'Setup',
      featured: true,
      thumbnail: '/images/videos/thumb-2.svg',
    },
    {
      id: 'v3',
      youtubeId: 'jNQXAC9IVRw',
      title: 'GTA V NOPIXEL 4.0: The Most Insane Bank Vault Heist Ever Planned',
      views: '215,900',
      date: '2 weeks ago',
      duration: '32:10',
      category: 'Roleplay',
      featured: false,
      thumbnail: '/images/videos/thumb-3.svg',
    },
    {
      id: 'v4',
      youtubeId: '9bZkp7q19f0',
      title: "Top 10 Aim Secrets That Pros DON'T Want You To Know in 2026",
      views: '512,000',
      date: '1 month ago',
      duration: '14:30',
      category: 'Guides',
      featured: false,
      thumbnail: '/images/videos/thumb-4.svg',
    },
    {
      id: 'v5',
      youtubeId: 'fJ9rUzIMcZQ',
      title: '24-HOUR NON-STOP STREAM HIGHLIGHTS! (Clutches, Rages & Funny Moments)',
      views: '167,400',
      date: '1 month ago',
      duration: '21:05',
      category: 'Highlights',
      featured: false,
      thumbnail: '/images/videos/thumb-5.svg',
    },
    {
      id: 'v6',
      youtubeId: 'kJQP7kiw5Fk',
      title: 'IS THIS THE FASTEST WIRELESS MOUSE EVER MADE? (Razer Viper V3 Pro Review)',
      views: '98,300',
      date: '2 months ago',
      duration: '11:58',
      category: 'Hardware',
      featured: false,
      thumbnail: '/images/videos/thumb-6.svg',
    },
  ];

  return res.json({ videos: sampleVideos, demoMode: true });
});

// GET /api/youtube/live
app.get('/api/youtube/live', async (req, res) => {
  const channelId = req.query.channelId || process.env.YOUTUBE_CHANNEL_ID;
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (apiKey && apiKey !== 'YOUR_SECRET_API_KEY' && apiKey !== 'YOUR_YOUTUBE_API_KEY_HERE') {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const liveVideo = data.items[0];
        return res.json({
          isLive: true,
          platform: 'youtube',
          videoId: liveVideo.id.videoId,
          title: liveVideo.snippet.title,
          thumbnail: liveVideo.snippet.thumbnails?.high?.url,
          startedAt: liveVideo.snippet.publishedAt,
          watchUrl: `https://www.youtube.com/watch?v=${liveVideo.id.videoId}`,
        });
      }
    } catch (err) {
      console.error('[Backend Live Check Error]', err.message);
    }
  }

  // Return offline / standard status
  res.json({
    isLive: false,
    platform: 'youtube',
    title: 'Offline - Next Stream Scheduled',
    watchUrl: `https://www.youtube.com/@CruzGamingLive`,
  });
});

// GET /api/kick/status
app.get('/api/kick/status', (req, res) => {
  const username = req.query.username || process.env.KICK_USERNAME || 'cruzgaming';
  res.json({
    username,
    isLive: false,
    title: 'Daily Evening Valorant Ranked Grind',
    category: 'Valorant',
    followers: '15.4K',
  });
});

// Helper: Convert ISO 8601 duration (PT18M42S) to 18:42
function parseISO8601Duration(duration) {
  if (!duration) return '10:00';
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return duration;
  const hours = parseInt(match[1] || 0, 10);
  const minutes = parseInt(match[2] || 0, 10);
  const seconds = parseInt(match[3] || 0, 10);

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  if (hours > 0) {
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  }
  return `${minutes}:${formattedSeconds}`;
}

app.listen(PORT, () => {
  console.log(`🎮 [Cruz Gaming API Proxy] running on http://localhost:${PORT}`);
});
