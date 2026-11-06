<div align="center">

# 🎮 CRUZ GAMING — Next-Gen Gamer Portfolio & Streamer Hub

<p align="center">
  <strong>An ultra-modern, esports-grade gaming creator portfolio and livestreaming command center.</strong>
</p>

[![Live Demo](https://img.shields.io/badge/Live%20Demo-portfolio--for--gamers.vercel.app-ff1744?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-for-gamers.vercel.app/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.18.2-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ESM%20%2F%20JSX-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

[⚡ Live Preview](https://portfolio-for-gamers.vercel.app/) • [✨ Features](#-key-features) • [🚀 Quick Start](#-quick-start) • [⚙️ Customization](#️-configuration-driven-architecture) • [📡 API Setup](#-secure-youtube-api-proxy) • [📦 Deployment](#-deployment)

<br />

</div>

---

## 🌟 Overview

**CRUZ GAMING** is a cutting-edge gaming creator portfolio engineered for competitive streamers, esports athletes, and content creators. Inspired by AAA game launchers, NVIDIA GeForce HUD interfaces, and cybernetic digital environments, it gives content creators a battle-ready digital presence.

The entire website is **100% configuration-driven**: change creator name, channel branding, streaming channels, games, hardware specs, and colors inside a single configuration file without touching code.

---

## ⚡ Key Features

- 🎮 **Single-File Rebranding**: Everything is controlled via `src/config/siteConfig.js`. Swap out channel names, avatar, bio, links, and games in seconds.
- 🎨 **7 Cyberpunk Themes & Accents**:
  - `Cyber Red` (Default)
  - `Neon Blue`
  - `Purple Galaxy`
  - `Toxic Green`
  - `Orange Inferno`
  - `Pure Black`
  - `Gaming RGB`
  - 5 Accent Overrides: Red, Hyper Cyan, Ultra Purple, Matrix Emerald, Solar Amber.
  - Persistent user preferences saved automatically in `localStorage`.
- 📡 **Real-time YouTube & Kick Telemetry**:
  - Dynamic subscriber count, channel views, and video counts via custom React hooks (`useYouTubeStats`).
  - Automatic quota management, caching, and graceful offline fallback.
  - Multi-platform live status detection (YouTube Live & Kick).
- 🔒 **Secure Express API Proxy**: Backend server (`server/index.js`) keeps private Google API keys safe from client-side exposure.
- 🎬 **YouTube Video Vault & Modal Player**:
  - Embedded `ReactPlayer` lazy-loaded modal.
  - Real-time search and genre filtering.
  - Dedicated full video vault page (`/videos`).
- 🕹️ **Gaming Library & Battlestation**:
  - 3D interactive tilt cards (`TiltCard`) with specular glare reflection.
  - Playtime tracker, competitive rank badges, and favorite indicators.
  - Detailed hardware specs showcase (Rig, OLED display, Hall-effect keyboard, optical 8000Hz mouse, studio audio).
- 🏆 **Interactive Trophy Room**:
  - Career milestones timeline with interactive celebratory particle confetti (`canvas-confetti`).
- 🌐 **Discord Guild & Direct Comms**:
  - Live community member stats and instant invite button.
  - Transmission contact form with `react-hot-toast` notifications.
- ♿ **Performance & Accessibility**:
  - Respects `prefers-reduced-motion`.
  - Custom gaming crosshair cursor (auto-disabled on mobile touchscreens).
  - Code-split vendor chunks for ultra-fast loads.

---

## 🛠️ Tech Stack

| Layer | Tools & Libraries |
|---|---|
| **Frontend Framework** | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Language** | Modern JavaScript (ES Modules, JSX — No TypeScript) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + CSS Variables |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) |
| **Video Player** | [React Player](https://github.com/cookpete/react-player) |
| **Notifications** | [React Hot Toast](https://react-hot-toast.com/) |
| **Celebrations** | [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Backend API Proxy** | Node.js Express + Cors + Dotenv |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) / [pnpm](https://pnpm.io/)

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/Portfolio-for-gamers.git
cd Portfolio-for-gamers
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy the template file:
```bash
cp .env.example .env
```

Edit `.env` (optional for local mock/demo telemetry mode):
```env
# Frontend API URL
VITE_API_BASE_URL=http://localhost:3000/api

# Express Backend (Only needed if querying live YouTube Data API v3)
PORT=3000
YOUTUBE_API_KEY=YOUR_YOUTUBE_API_KEY_HERE
YOUTUBE_CHANNEL_ID=UC_x5XG1OV2P6uZZ5FSM9Ttw
KICK_USERNAME=cruzgaming
```

> 💡 **Demo Telemetry Mode**: If no API keys are provided, the application runs automatically with verified high-fidelity demo statistics. No broken UI or crashes!

### 4. Run Development Server
```bash
# Run both Vite and Express proxy together:
npm run dev:all

# Or run Vite frontend standalone:
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

---

## ⚙️ Configuration-Driven Architecture

To personalize the entire website for your own brand, edit **`src/config/siteConfig.js`**:

```javascript
const siteConfig = {
  branding: {
    channelName: "Cruz Gaming",
    handle: "@CruzGamingLive",
    authorName: "Sreevisakh V S",
    tagline: "LEVEL UP YOUR GAMING EXPERIENCE",
    subTagline: "Gaming | Streaming | Creating",
    description: "Welcome to the official command center of Cruz Gaming...",
    logo: "/images/logo.svg",
    avatar: "/images/avatar.svg",
    banner: "/images/banner.svg",
    establishedYear: 2021,
  },

  social: {
    youtube: {
      enabled: true,
      channelId: "UC_x5XG1OV2P6uZZ5FSM9Ttw",
      channelUrl: "https://www.youtube.com/@CruzGamingLive",
      featuredVideoId: "dQw4w9WgXcQ",
    },
    kick: {
      enabled: true,
      username: "cruzgaming",
      channelUrl: "https://kick.com/cruzgaming",
    },
    discord: {
      enabled: true,
      serverName: "Cruz Gaming HQ",
      inviteUrl: "https://discord.gg/cruzgaming",
      memberCount: "12,450+",
      onlineCount: "3,120",
    },
  },

  appearance: {
    defaultTheme: "cyber-red", // 'cyber-red' | 'neon-blue' | 'purple-galaxy' | 'toxic-green' | 'orange-inferno' | 'pure-black' | 'gaming-rgb'
    defaultAccent: "red",
    allowThemeSwitching: true,
    allowBackgroundEffects: true,
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
    community: true,
    contact: true,
  },

  // Add your custom game library
  games: [ ... ],

  // Add your gaming PC and peripherals specs
  setup: [ ... ],

  // Timeline milestones
  achievements: [ ... ],
};

export default siteConfig;
```

---

## 📡 Secure YouTube API Proxy

Google YouTube Data API keys should **never** be exposed in client-side code. This repository includes an Express proxy in `server/index.js` that:

1. Keeps `YOUTUBE_API_KEY` safe on the backend.
2. Caches requests in memory for 10 minutes to protect your daily quota limits.
3. Exposes clean endpoints:
   - `GET /api/youtube/stats`
   - `GET /api/youtube/videos`
   - `GET /api/youtube/live`
   - `GET /api/kick/status`

Run the server:
```bash
npm run server
```

---

## 📂 Project Structure

```text
src/
├── animations/
│   └── variants.js              # Framer Motion animation presets
├── components/
│   ├── animations/              # AnimatedCounter, MagneticButton, Reveal, TiltCard
│   ├── gaming/                  # GameCard, GamingSetupCard, AchievementCard, ProfileCard
│   ├── layout/                  # Navbar, Footer, PageLayout, SectionWrapper
│   ├── streaming/               # LiveBadge, StreamCard, PlatformCard
│   ├── ui/                      # Button, Card, Badge, Tooltip, Modal, Skeleton, ThemeSwitcher, LoadingScreen, AnimatedBackground, CustomCursor
│   └── youtube/                 # YouTubeStats, VideoCard, VideoGrid, VideoModal, FeaturedVideo
├── config/
│   └── siteConfig.js            # Single source of truth configuration
├── context/
│   └── ThemeContext.jsx         # Global theme & visual FX context
├── hooks/
│   ├── useLiveStatus.js         # Livestream status poll
│   ├── useScrollProgress.js     # Top scroll telemetry & active nav spy
│   ├── useTheme.js              # Theme switcher hook
│   ├── useYouTubeStats.js       # Channel subscriber & view analytics
│   └── useYouTubeVideos.js      # Video gallery with search & filter
├── pages/
│   ├── Home.jsx                 # Single page battle station
│   ├── NotFound.jsx             # 404 Radar anomaly glitch screen
│   └── Videos.jsx               # Dedicated Video Vault
├── services/
│   ├── streamingService.js      # Kick status service
│   └── youtubeService.js        # YouTube proxy & caching service
├── styles/
│   ├── animations.css           # Scanlines, cyber corner cuts, keyframes
│   ├── globals.css              # Custom cursor & base typography
│   └── themes.css               # CSS variables for 7 themes & accents
server/
└── index.js                     # Express API proxy
public/
├── images/                      # Vector SVGs (logos, avatars, games, setup, thumbs)
└── logo.svg
```

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework Preset: **Vite**.
4. Set Build Command: `npm run build`.
5. Set Output Directory: `dist`.
6. Add Environment Variables (if using backend proxy URL or standalone mode):
   ```env
   VITE_API_BASE_URL=/api
   ```
7. Click **Deploy**.

### Production Build Locally
```bash
npm run build
npm run preview
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/YOUR_USERNAME/Portfolio-for-gamers/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/EpicFeature`)
3. Commit your Changes (`git commit -m 'Add some EpicFeature'`)
4. Push to the Branch (`git push origin feature/EpicFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👤 Author & Credits

- **Creator**: Cruz Gaming ([@CruzGamingLive](https://www.youtube.com/@CruzGamingLive))
- **Lead Developer**: **Sreevisakh V S**
- **Live Preview**: [https://portfolio-for-gamers.vercel.app/](https://portfolio-for-gamers.vercel.app/)

<div align="center">
  <sub>Engineered with ❤️ for the global gaming community.</sub>
</div>
