# 🎮 CRUZ GAMING — Advanced Gamer Portfolio Website

An ultra-modern, premium gaming portfolio and creator platform built for **Cruz Gaming** (Sreevisakh V S). Designed with a next-generation esports aesthetic inspired by AAA game launchers, NVIDIA GeForce aesthetics, and futuristic HUD interfaces.

---

## ⚡ Key Highlights

- **Config-Driven Architecture**: The entire website (branding, author name, links, games, battle rig specs, themes, features) is controlled via a single file: `src/config/siteConfig.js`. Rebrand the entire site in seconds.
- **Advanced Dynamic Themes**: 7 built-in cyber themes (Cyber Red, Neon Blue, Purple Galaxy, Toxic Green, Orange Inferno, Pure Black, Gaming RGB) with 5 accent color overrides and persistent `localStorage` preferences.
- **YouTube Data API v3 & Kick Streaming Telemetry**: Real-time channel analytics, live stream status, view counts, and video repertoire with automatic caching and graceful offline fallback.
- **Secure Express API Proxy**: Backend proxy in `server/index.js` protects private API keys from frontend exposure.
- **Framer Motion & Micro-Interactions**: Cinematic hero animations, 3D tilt cards, magnetic buttons, interactive canvas particle fields, and particle confetti celebrations.
- **Accessibility & Reduced Motion**: Full support for `prefers-reduced-motion` and custom gaming cursor toggle.
- **100% Pure JavaScript**: Built strictly with modern ES Modules and JSX (no TypeScript).

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Core Framework** | React 18+ (Vite) |
| **Language** | JavaScript (ESM / JSX) |
| **Styling** | Tailwind CSS + Custom CSS Variables & Animations |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Routing** | React Router DOM |
| **Video Playback** | React Player |
| **Notifications** | React Hot Toast |
| **Effects** | Canvas Confetti, HTML5 Canvas Particle Engine |
| **Backend Proxy** | Node.js Express + Cors + Dotenv |

---

## 📁 Project Architecture

```text
src/
├── animations/
│   └── variants.js              # Framer motion presets (fadeUp, scaleUp, glowPulse, etc.)
│
├── components/
│   ├── animations/
│   │   ├── AnimatedCounter.jsx  # Smooth number ticker with formatters
│   │   ├── MagneticButton.jsx   # Cursor-tracking spring button
│   │   ├── Reveal.jsx           # InView scroll trigger wrapper
│   │   └── TiltCard.jsx         # 3D interactive tilt with specular glare
│   │
│   ├── gaming/
│   │   ├── AchievementCard.jsx  # Milestone card with confetti on click
│   │   ├── GameCard.jsx         # Game library card with rank & hours
│   │   ├── GamingSetupCard.jsx  # Hardware rig & peripherals specs
│   │   └── ProfileCard.jsx      # Gamer biography & combat attributes
│   │
│   ├── layout/
│   │   ├── Footer.jsx           # Channel branding, links, back to top
│   │   ├── Navbar.jsx           # Sticky nav, live status pill, theme toggle
│   │   ├── PageLayout.jsx       # Layout shell, scroll indicator, canvas
│   │   └── SectionWrapper.jsx   # Section shell with sci-fi telemetry coordinates
│   │
│   ├── streaming/
│   │   ├── LiveBadge.jsx        # Animated LIVE pulse indicator
│   │   ├── PlatformCard.jsx     # YouTube & Kick channel cards
│   │   └── StreamCard.jsx       # Broadcast preview & quick player
│   │
│   ├── ui/
│   │   ├── AnimatedBackground.jsx # HTML5 canvas particle & grid engine
│   │   ├── Badge.jsx            # Cyber tag badges
│   │   ├── Button.jsx           # Cyber, primary, outline, and ghost variants
│   │   ├── Card.jsx             # Glassmorphic cyber panel with corner cuts
│   │   ├── CustomCursor.jsx     # Gaming crosshair follower
│   │   ├── LoadingScreen.jsx    # Bootup diagnostic telemetry screen
│   │   ├── Modal.jsx            # Cyber popup modal with blur overlay
│   │   ├── Skeleton.jsx         # Shimmering loading placeholder
│   │   ├── ThemeSwitcher.jsx    # Visual drawer customizer
│   │   └── Tooltip.jsx          # Futuristic hover tooltip
│   │
│   └── youtube/
│       ├── FeaturedVideo.jsx    # Cinematic wide spotlight player
│       ├── VideoCard.jsx        # Video card with duration & views
│       ├── VideoGrid.jsx        # Searchable, filterable video grid
│       ├── VideoModal.jsx       # ReactPlayer embedded modal
│       └── YouTubeStats.jsx     # Real-time telemetry counters
│
├── config/
│   └── siteConfig.js            # CENTRAL CONFIGURATION FILE (Source of Truth)
│
├── context/
│   └── ThemeContext.jsx         # Theme, accent, FX, and motion state
│
├── hooks/
│   ├── useLiveStatus.js         # Polls YouTube & Kick live feeds
│   ├── useScrollProgress.js     # Scroll telemetry & active section spy
│   ├── useTheme.js              # Theme accessor
│   ├── useYouTubeStats.js       # Channel subscriber & view analytics
│   └── useYouTubeVideos.js      # Video fetch, category filter & search
│
├── pages/
│   ├── Home.jsx                 # Complete single-page command center
│   ├── NotFound.jsx             # 404 Cyber radar anomaly screen
│   └── Videos.jsx               # Dedicated full video vault
│
├── services/
│   ├── streamingService.js      # Kick status service
│   └── youtubeService.js        # YouTube proxy & caching service
│
├── styles/
│   ├── animations.css           # Scanlines, corner cuts, glow keyframes
│   ├── globals.css              # Base layer, selection, custom cursor
│   └── themes.css               # Dynamic CSS variables for 7 themes
│
├── App.jsx                      # App root with routes & loading sequence
├── main.jsx                     # Vite DOM entry
└── index.html                   # HTML5 template with Orbitron & Rajdhani fonts
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Set your configuration:
```env
# Frontend API URL
VITE_API_BASE_URL=http://localhost:3000/api

# Express Backend (Optional for live YouTube Data API v3)
PORT=3000
YOUTUBE_API_KEY=YOUR_GOOGLE_YOUTUBE_API_KEY
YOUTUBE_CHANNEL_ID=UC_x5XG1OV2P6uZZ5FSM9Ttw
KICK_USERNAME=cruzgaming
```

> **Note**: Even if you do not have a YouTube API key yet, the application will automatically run in demo telemetry mode with full high-fidelity sample data and zero broken UI!

### 3. Run Development Server

To run the frontend:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

To run both Vite and the Express API proxy simultaneously:
```bash
npm run dev:all
```

Or run the Express server individually:
```bash
npm run server
```

### 4. Build for Production

```bash
npm run build
```
The optimized, tree-shaken static assets are generated in `dist/`.

To preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ Configuration & Customization (`siteConfig.js`)

You can customize the entire website without touching any components. Open `src/config/siteConfig.js`:

```javascript
const siteConfig = {
  branding: {
    channelName: "Cruz Gaming",
    authorName: "Sreevisakh V S",
    tagline: "LEVEL UP YOUR GAMING EXPERIENCE",
    subTagline: "Gaming | Streaming | Creating",
    description: "Welcome to the official command center of Cruz Gaming...",
    logo: "/images/logo.svg",
    avatar: "/images/avatar.svg",
    banner: "/images/banner.svg",
  },
  social: {
    youtube: {
      enabled: true,
      channelId: "YOUR_YOUTUBE_CHANNEL_ID",
      channelUrl: "https://www.youtube.com/@YOUR_CHANNEL",
    },
    kick: {
      enabled: true,
      username: "YOUR_KICK_USERNAME",
      channelUrl: "https://kick.com/YOUR_USERNAME",
    },
    discord: {
      enabled: true,
      inviteUrl: "https://discord.gg/YOUR_INVITE",
    },
  },
  appearance: {
    defaultTheme: "cyber-red", // Options: cyber-red, neon-blue, purple-galaxy, toxic-green, orange-inferno, pure-black, gaming-rgb
    defaultAccent: "red",
  },
  // Toggle sections on or off effortlessly
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
  // Add or edit games in your showcase
  games: [ ... ],
  // Add or edit your PC & streaming setup
  setup: [ ... ],
  // Career milestones
  achievements: [ ... ],
};
```

---

## 🔒 Secure YouTube API Integration

In compliance with security best practices:
- The secret `YOUTUBE_API_KEY` is **never exposed** in client-side code.
- Client requests query `/api/youtube/stats`, `/api/youtube/videos`, and `/api/youtube/live`.
- The Express server (`server/index.js`) securely communicates with `https://www.googleapis.com/youtube/v3/channels` using the environment key.
- Includes a 10-minute in-memory cache to prevent exceeding Google API quota limits.

---

## 🎨 Themes System

Users can toggle themes on the fly from the floating **Visual Customizer** drawer:
1. **Cyber Red** — Neon crimson with cyan HUD accents.
2. **Neon Blue** — Deep sci-fi electric blue and cobalt.
3. **Purple Galaxy** — Deep cosmos violet and magenta neon.
4. **Toxic Green** — Biohazard matrix green and chartreuse.
5. **Orange Inferno** — Volcanic ember and solar amber.
6. **Pure Black** — Monochromatic stealth dark mode.
7. **Gaming RGB** — Dynamic animated RGB Chroma spectrum.

---

## 📱 Responsive & Accessibility Features

- Fully responsive across mobile smartphones, tablets, laptops, desktops, and ultrawide monitors.
- Mobile drawer navigation with backdrop blur.
- Respects `prefers-reduced-motion` settings.
- Interactive crosshair cursor auto-hides on touch screens.
- Keyboard accessible modal dialogs with `Escape` key listeners and focus trapping.

---

## 📜 License & Credits

- Engineered for gamers by **Sreevisakh V S** (**Cruz Gaming**).
- Open for creator customization and esports portfolio deployment.
