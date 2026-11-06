/**
 * CRUZ GAMING — Central Site Configuration
 * 
 * Every component on the website consumes this single source of truth.
 * Modifying channelName, authorName, platform URLs, branding, or feature toggles
 * immediately reconfigures the entire application.
 */

const siteConfig = {
  branding: {
    channelName: "Cruzs Gaming",
    handle: "@CruzGamingLive",
    authorName: "Sreevisakh V S",
    tagline: "LEVEL UP YOUR GAMING EXPERIENCE",
    subTagline: "Gaming | Streaming | Creating",
    description: "Welcome to the official command center of Cruz Gaming. Dedicated to high-octane FPS tournaments, tactical open-world explorations, walkthroughs, hardware benchmarks, and building a thriving community of gamers worldwide.",
    shortBio: "Competitive FPS enthusiast, content creator, and tech geek delivering daily livestreams, esports gameplay, and in-depth gaming hardware breakdowns.",
    logo: "/images/logo.svg",
    avatar: "/images/avatar.svg",
    banner: "/images/banner.svg",
    favicon: "/favicon.ico",
    establishedYear: 2021,
    location: "Global / Streaming Orbit",
    statusText: "Ready for Next Match",
  },

  seo: {
    title: "Cruz Gaming | Advanced Gamer Portfolio & Streamer Hub",
    description: "Official gaming portfolio, livestream hub, and video vault of Cruz Gaming (Sreevisakh V S). Watch live streams, track YouTube stats, check gaming rig specs, and join the community.",
    keywords: [
      "Cruz Gaming",
      "Sreevisakh V S",
      "Gaming Streamer",
      "Valorant Gameplay",
      "GTA V Roleplay",
      "Gaming Setup 2026",
      "Cyberpunk Gaming UI",
      "Esports Content Creator",
      "Kick Streamer",
      "YouTube Gaming"
    ],
    author: "Sreevisakh V S",
    ogImage: "/images/banner.svg",
  },

  social: {
    youtube: {
      enabled: true,
      channelName: "Cruz Gaming",
      handle: "@CruzGamingLive",
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw", // Configurable YouTube Channel ID
      channelUrl: "https://www.youtube.com/@CruzGamingLive",
      // Live video / fallback video ID for instant preview modal
      featuredVideoId: "dQw4w9WgXcQ",
    },

    kick: {
      enabled: true,
      username: "cruzgaming",
      channelUrl: "https://kick.com/cruzgaming",
      category: "Just Chatting & Valorant",
    },

    discord: {
      enabled: true,
      serverName: "Cruz Gaming HQ",
      inviteUrl: "https://discord.gg/cruzgaming",
      memberCount: "12,450+",
      onlineCount: "3,120",
    },

    instagram: {
      enabled: true,
      username: "@cruzgaming_official",
      url: "https://instagram.com/cruzgaming_official",
    },

    twitter: {
      enabled: true,
      handle: "@CruzGamingReal",
      url: "https://twitter.com/CruzGamingReal",
    },

    twitch: {
      enabled: false,
      username: "cruzgaming",
      url: "https://twitch.tv/cruzgaming",
    },

    steam: {
      enabled: true,
      profileUrl: "https://steamcommunity.com/id/cruzgaming",
      level: 88,
    },
  },

  appearance: {
    defaultTheme: "cyber-red", // 'cyber-red' | 'neon-blue' | 'purple-galaxy' | 'toxic-green' | 'orange-inferno' | 'pure-black' | 'gaming-rgb'
    defaultAccent: "red",
    allowThemeSwitching: true,
    allowAccentSwitching: true,
    allowBackgroundEffects: true,
    allowReducedMotion: true,
    allowCustomCursor: true,
  },

  features: {
    hero: true,
    liveStatus: true,
    youtubeStats: true,
    kickStatus: true,
    featuredVideos: true,
    gamingSetup: true,
    about: true,
    achievements: true,
    games: true,
    clips: true,
    community: true,
    socialLinks: true,
    contact: true,
    customCursor: true,
    particleEffects: true,
    musicPlayer: false, // Optional ambient sound toggle
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "Live", href: "#live" },
    { label: "Stats", href: "#stats" },
    { label: "About", href: "#about" },
    { label: "Games", href: "#games" },
    { label: "Videos", href: "#videos" },
    { label: "Setup", href: "#setup" },
    { label: "Achievements", href: "#achievements" },
    { label: "Community", href: "#community" },
    { label: "Contact", href: "#contact" },
  ],

  // Default Stats when real-time backend API is in demo mode or loading
  statsFallback: {
    subscribers: 285400,
    subscribersFormatted: "285K+",
    totalViews: 38920150,
    totalViewsFormatted: "38.9M+",
    videoCount: 428,
    streamHours: "3,200+ hrs",
    winRate: "74.2%",
    communitySize: "320K+",
  },

  // Livestream configuration & fallback status
  liveConfig: {
    isLiveOverride: false, // Set to true to simulate live stream or let API detect
    platform: "youtube", // 'youtube' | 'kick'
    streamTitle: "🔥 RADIANT RANK PUSH | Cyber Weekend Invitational & Viewer Matches!",
    streamGame: "Valorant",
    viewerCount: 1420,
    startedAt: "2 hours ago",
    embedUrl: "https://www.youtube.com/embed/live_stream?channel=UC_x5XG1OV2P6uZZ5FSM9Ttw",
    kickEmbedUrl: "https://player.kick.com/cruzgaming",
  },

  // About profile details
  about: {
    experienceYears: "5+ Years",
    primaryRole: "FPS Specialist & Variety Streamer",
    competitiveRank: "Radiant (Valorant) / Predator (Apex)",
    streamingSchedule: [
      { days: "Mon, Wed, Fri", time: "6:00 PM - 11:00 PM EST", topic: "Ranked Grind & Tournaments" },
      { days: "Saturday", time: "4:00 PM - Midnight EST", topic: "Community Custom Games & Viewer Matches" },
      { days: "Sunday", time: "3:00 PM - 8:00 PM EST", topic: "AAA Story Campaigns & Tech Reviews" },
    ],
    milestonesSummary: "Over 500+ livestreams broadcasted, partnered with premier esports gear brands, and hosted community LAN tourneys with thousands of participants.",
    skills: [
      { name: "First-Person Shooters (FPS)", level: 98 },
      { name: "Live Broadcasting & Production", level: 94 },
      { name: "Video Editing & Content Direction", level: 90 },
      { name: "Community Management", level: 95 },
      { name: "Hardware Benchmarking & Overclocking", level: 88 },
    ],
  },

  // Gaming Library
  games: [
    {
      id: "valorant",
      name: "Valorant",
      category: "Tactical FPS",
      image: "/images/games/valorant.svg",
      status: "Currently Playing",
      rank: "Radiant Top 500",
      hours: "2,450 hrs",
      isFavorite: true,
      description: "Main competitive focus. Fast precision gunplay and utility-heavy tactical coordination.",
      tags: ["Esports", "Competitive", "Tactical"],
    },
    {
      id: "gta-v",
      name: "GTA V",
      category: "Open World / RP",
      image: "/images/games/gta.svg",
      status: "Favorite",
      rank: "NoPixel Veteran",
      hours: "1,820 hrs",
      isFavorite: true,
      description: "High-stakes heists, custom roleplay storylines, and chaotic open-world multiplayer escapades.",
      tags: ["Roleplay", "Action", "Multiplayer"],
    },
    {
      id: "cyberpunk",
      name: "Cyberpunk 2077",
      category: "Sci-Fi RPG",
      image: "/images/games/cyberpunk.svg",
      status: "100% Completed",
      rank: "Night City Legend",
      hours: "420 hrs",
      isFavorite: true,
      description: "Full ray-tracing benchmark showcase and deep narrative immersion in Night City.",
      tags: ["Ray Tracing", "RPG", "Sci-Fi"],
    },
    {
      id: "apex-legends",
      name: "Apex Legends",
      category: "Battle Royale",
      image: "/images/games/apex.svg",
      status: "Season Veteran",
      rank: "Apex Predator",
      hours: "960 hrs",
      isFavorite: false,
      description: "High-velocity movement, squad-based clutches, and intense final ring rotations.",
      tags: ["Battle Royale", "Fast Paced", "FPS"],
    },
    {
      id: "minecraft",
      name: "Minecraft",
      category: "Sandbox / Survival",
      image: "/images/games/minecraft.svg",
      status: "Occasionally",
      rank: "Hardcore Master",
      hours: "680 hrs",
      isFavorite: false,
      description: "Chill survival streams, mega base architectural builds, and Redstone automation.",
      tags: ["Sandbox", "Chill", "Survival"],
    },
    {
      id: "elden-ring",
      name: "Elden Ring: Shadow of the Erdtree",
      category: "Action RPG",
      image: "/images/games/eldenring.svg",
      status: "Completed",
      rank: "Elden Lord",
      hours: "310 hrs",
      isFavorite: true,
      description: "No-hit boss attempts, build experimentation, and lore-hunting walkthroughs.",
      tags: ["Souls-like", "Dark Fantasy", "Hardcore"],
    },
  ],

  // Gaming Setup & Battle Station Specs
  setup: [
    {
      category: "Gaming Rig",
      name: "Cyber Rig Apex 2026",
      icon: "Cpu",
      specs: "Intel Core i9-14900KS | RTX 4090 24GB OC | 64GB DDR5 6400MHz | 4TB NVMe Gen4 SSD",
      highlight: "Custom Liquid Loop & UV Fluid",
      image: "/images/setup/rig.svg",
    },
    {
      category: "Display Station",
      name: "ASUS ROG Swift OLED 360Hz",
      icon: "Monitor",
      specs: "27\" 1440p QD-OLED 360Hz 0.03ms | Secondary: 27\" 4K IPS Vertical Chat Monitor",
      highlight: "G-Sync Ultimate & HDR True Black",
      image: "/images/setup/monitor.svg",
    },
    {
      category: "Mechanical Keyboard",
      name: "Wooting 60HE+ Custom Mod",
      icon: "Keyboard",
      specs: "Lekker Hall Effect Linear Switches | Rapid Trigger 0.1mm | PBT Doubleshot Caps",
      highlight: "Analog Rapid Trigger Technology",
      image: "/images/setup/keyboard.svg",
    },
    {
      category: "Gaming Mouse",
      name: "Razer Viper V3 Pro",
      icon: "Mouse",
      specs: "Focus Pro 35K Optical Sensor | 8000Hz HyperPolling Wireless | 54g Ultra-Lightweight",
      highlight: "Glass Skates & Artisan Hayate Otsu",
      image: "/images/setup/mouse.svg",
    },
    {
      category: "Audio & Comms",
      name: "Sennheiser HD 660S2 + GoXLR",
      icon: "Headphones",
      specs: "Open-Back Reference Headphones | Shure SM7B Mic | Cloudlifter CL-1 | TC-Helicon GoXLR",
      highlight: "Broadcast Studio Grade Acoustics",
      image: "/images/setup/audio.svg",
    },
    {
      category: "Streaming Gear",
      name: "Elgato Stream Deck XL + 4K Cam",
      icon: "Camera",
      specs: "Sony A6700 Mirrorless + Sigma 16mm f/1.4 | Elgato Cam Link 4K | Key Light Air Dual Setup",
      highlight: "4K 60FPS Crisp Clean Video Feed",
      image: "/images/setup/stream.svg",
    },
  ],

  // Achievements & Milestones Timeline
  achievements: [
    {
      year: "2026",
      title: "Quarter Million Milestone",
      badge: "250K+ Subs",
      category: "YouTube",
      description: "Surpassed 250,000 subscribers and 38 million lifetime views on the main YouTube channel.",
      icon: "Trophy",
      unlocked: true,
    },
    {
      year: "2025",
      title: "Radiant Ranked Season Champion",
      badge: "Top 500",
      category: "Gaming",
      description: "Finished Episode 8 in the Top 500 Radiant leaderboard with an 81% win rate in solo queue.",
      icon: "Award",
      unlocked: true,
    },
    {
      year: "2024",
      title: "Official Kick & YouTube Partnership",
      badge: "Verified Partner",
      category: "Streaming",
      description: "Signed dual streaming verification and featured on Kick homepage spotlight event.",
      icon: "Zap",
      unlocked: true,
    },
    {
      year: "2023",
      title: "Silver Creator Award",
      badge: "100K YouTube",
      category: "Milestone",
      description: "Received the official YouTube Silver Play Button from Google Creator Headquarters.",
      icon: "Medal",
      unlocked: true,
    },
    {
      year: "2022",
      title: "Cruz Community LAN Invitational",
      badge: "Organizer",
      category: "Esports",
      description: "Organized and hosted an open grassroots FPS tournament with a $10,000 community prize pool.",
      icon: "Flame",
      unlocked: true,
    },
  ],

  // Featured and Recent Videos
  videos: [
    {
      id: "v1",
      youtubeId: "dQw4w9WgXcQ", // Replaceable with real IDs
      title: "HOW I HIT RADIANT WITH 360HZ OLED (Full Gameplay Breakdown)",
      views: "184,200",
      date: "3 days ago",
      duration: "18:42",
      category: "Gameplay",
      featured: true,
      thumbnail: "/images/videos/thumb-1.svg",
    },
    {
      id: "v2",
      youtubeId: "L_LUpnjgPso",
      title: "$10,000 EXTREME CYBERPUNK GAMING RIG BUILD (RTX 4090 + Liquid Loop)",
      views: "342,800",
      date: "1 week ago",
      duration: "24:15",
      category: "Setup",
      featured: true,
      thumbnail: "/images/videos/thumb-2.svg",
    },
    {
      id: "v3",
      youtubeId: "jNQXAC9IVRw",
      title: "GTA V NOPIXEL 4.0: The Most Insane Bank Vault Heist Ever Planned",
      views: "215,900",
      date: "2 weeks ago",
      duration: "32:10",
      category: "Roleplay",
      featured: false,
      thumbnail: "/images/videos/thumb-3.svg",
    },
    {
      id: "v4",
      youtubeId: "9bZkp7q19f0",
      title: "Top 10 Aim Secrets That Pros DON'T Want You To Know in 2026",
      views: "512,000",
      date: "1 month ago",
      duration: "14:30",
      category: "Guides",
      featured: false,
      thumbnail: "/images/videos/thumb-4.svg",
    },
    {
      id: "v5",
      youtubeId: "fJ9rUzIMcZQ",
      title: "24-HOUR NON-STOP STREAM HIGHLIGHTS! (Clutches, Rages & Funny Moments)",
      views: "167,400",
      date: "1 month ago",
      duration: "21:05",
      category: "Highlights",
      featured: false,
      thumbnail: "/images/videos/thumb-5.svg",
    },
    {
      id: "v6",
      youtubeId: "kJQP7kiw5Fk",
      title: "IS THIS THE FASTEST WIRELESS MOUSE EVER MADE? (Razer Viper V3 Pro Review)",
      views: "98,300",
      date: "2 months ago",
      duration: "11:58",
      category: "Hardware",
      featured: false,
      thumbnail: "/images/videos/thumb-6.svg",
    },
  ],

  // Contact & Inquiries
  contact: {
    businessEmail: "business@cruzgaming.com",
    fanEmail: "fans@cruzgaming.com",
    discordServer: "discord.gg/cruzgaming",
    responseExpectation: "Responses within 24 to 48 business hours for verified inquiries.",
    inquiryTypes: [
      "Brand Sponsorship & Endorsement",
      "Esports / Tournament Invitation",
      "Game Key / PR Preview Request",
      "Community Collab & Content",
      "General Question",
    ],
  },

  // Footer Information
  footer: {
    copyright: "© {year} Cruz Gaming. All rights reserved.",
    developer: "Engineered for Gamers by Sreevisakh V S",
    disclaimer: "All game titles, logos, and registered trademarks belong to their respective publishers and copyright owners.",
  },
};

export default siteConfig;
