import siteConfig from '../config/siteConfig';

/**
 * Streaming service to manage Kick & YouTube platform statuses
 */
export const fetchKickStatus = async () => {
  const kickUser = siteConfig.social.kick?.username;
  if (!kickUser) {
    return { enabled: false };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);

    // If backend proxy provides /api/kick/status or directly check kick
    const res = await fetch(`/api/kick/status?username=${kickUser}`, { signal: controller.signal });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      return {
        enabled: true,
        username: kickUser,
        isLive: Boolean(data.isLive),
        title: data.title || `${kickUser}'s Live Channel`,
        followers: data.followers || '15.4K',
        category: data.category || 'Valorant / Just Chatting',
        channelUrl: siteConfig.social.kick.channelUrl,
      };
    }
  } catch (err) {
    // Graceful fallback
  }

  return {
    enabled: true,
    username: kickUser,
    isLive: false,
    title: `${siteConfig.branding.channelName} on Kick`,
    followers: '15.4K',
    category: siteConfig.social.kick.category || 'Just Chatting & Valorant',
    channelUrl: siteConfig.social.kick.channelUrl,
  };
};
