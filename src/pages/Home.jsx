import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Youtube,
  Tv,
  Radio,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Disc as Discord,
  Mail,
  Send,
  Gamepad2,
  Cpu,
  Trophy,
  Users,
  Search,
} from 'lucide-react';
import toast from 'react-hot-toast';

import siteConfig from '../config/siteConfig';
import SectionWrapper from '../components/layout/SectionWrapper';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import AnimatedCounter from '../components/animations/AnimatedCounter';
import Reveal from '../components/animations/Reveal';
import TiltCard from '../components/animations/TiltCard';
import { fadeUp, staggerContainer, scaleUp } from '../animations/variants';

import LiveBadge from '../components/streaming/LiveBadge';
import StreamCard from '../components/streaming/StreamCard';
import PlatformCard from '../components/streaming/PlatformCard';

import YouTubeStats from '../components/youtube/YouTubeStats';
import VideoGrid from '../components/youtube/VideoGrid';
import VideoModal from '../components/youtube/VideoModal';

import ProfileCard from '../components/gaming/ProfileCard';
import GameCard from '../components/gaming/GameCard';
import GamingSetupCard from '../components/gaming/GamingSetupCard';
import AchievementCard from '../components/gaming/AchievementCard';

import useLiveStatus from '../hooks/useLiveStatus';

const Home = () => {
  const { isAnyLive, liveData } = useLiveStatus();
  const [selectedGameCategory, setSelectedGameCategory] = useState('All');
  const [gameSearch, setGameSearch] = useState('');
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    inquiryType: siteConfig.contact.inquiryTypes[0],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter games
  const gameCategories = ['All', ...new Set(siteConfig.games.map((g) => g.category))];
  const filteredGames = siteConfig.games.filter((game) => {
    const matchesSearch =
      game.name.toLowerCase().includes(gameSearch.toLowerCase()) ||
      game.category.toLowerCase().includes(gameSearch.toLowerCase());
    const matchesCat =
      selectedGameCategory === 'All' || game.category.toLowerCase() === selectedGameCategory.toLowerCase();
    return matchesSearch && matchesCat;
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error('Please complete all required fields before sending.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Message transmitted to ${siteConfig.branding.channelName} HQ!`);
      setContactForm({
        name: '',
        email: '',
        inquiryType: siteConfig.contact.inquiryTypes[0],
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="space-y-12">
      {/* ============================================================ */}
      {/* A. ADVANCED GAMING HERO SECTION                              */}
      {/* ============================================================ */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Futuristic Floating HUD Telemetry Elements */}
        <div className="absolute top-28 left-8 hidden xl:block text-left font-mono text-[11px] text-app-muted/50 space-y-1 select-none pointer-events-none">
          <div className="text-secondary font-bold">SYSTEM // ONLINE</div>
          <div>CORE_CLOCK: 5.80 GHz</div>
          <div>FRAME_LATENCY: 0.12 ms</div>
          <div>REFRESH: 360 Hz QD-OLED</div>
          <div>ENCRYPTION: 256-BIT SECURE</div>
        </div>

        <div className="absolute top-28 right-8 hidden xl:block text-right font-mono text-[11px] text-app-muted/50 space-y-1 select-none pointer-events-none">
          <div className="text-primary font-bold">RADAR // ACTIVE</div>
          <div>LOCATION: GLOBAL STREAM FEED</div>
          <div>COMMUNITY: 320,000+ PILOTS</div>
          <div>MATCH: RADIANT LOBBY #01</div>
        </div>

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Live Status Pill & Established Tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <LiveBadge isLive={isAnyLive} />
            <span className="px-3 py-1 rounded-full bg-surface-card border border-app-border text-app-muted text-xs font-orbitron font-semibold uppercase">
              EST. {siteConfig.branding.establishedYear} // CREATOR COMMAND
            </span>
          </motion.div>

          {/* Avatar / Logo with Pulsing Energy Aura */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, type: 'spring' }}
            className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse-glow" />
            <div className="relative w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-primary via-surface to-secondary shadow-neon-primary">
              <img
                src={siteConfig.branding.avatar}
                alt={siteConfig.branding.channelName}
                className="w-full h-full rounded-full object-cover bg-surface"
              />
            </div>
            {/* Corner Tech Crosshairs */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-secondary" />
          </motion.div>

          {/* Glowing Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-orbitron font-black text-app-text tracking-wider uppercase text-glow">
              {siteConfig.branding.channelName}
            </h1>
            <p className="text-lg sm:text-2xl md:text-3xl font-orbitron font-bold text-secondary tracking-widest uppercase">
              {siteConfig.branding.tagline}
            </p>
            <p className="text-sm sm:text-lg font-rajdhani text-app-muted font-medium tracking-wide max-w-2xl mx-auto">
              {siteConfig.branding.subTagline} • Led by{' '}
              <span className="text-app-text font-bold">{siteConfig.branding.authorName}</span>
            </p>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <Button
              href={siteConfig.social.youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              icon={Youtube}
            >
              Watch YouTube
            </Button>

            {siteConfig.social.kick.enabled && (
              <Button
                href={siteConfig.social.kick.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="cyber"
                size="lg"
                icon={Radio}
              >
                Follow on Kick
              </Button>
            )}

            <Button
              href="#about"
              variant="secondary"
              size="lg"
              icon={Gamepad2}
            >
              Explore Portfolio
            </Button>
          </motion.div>

          {/* Animated Statistics Counters in Hero */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="glass-panel cyber-corner p-4 text-center">
              <div className="text-2xl sm:text-3xl font-orbitron font-black text-primary">
                <AnimatedCounter value={siteConfig.statsFallback.subscribers} suffix="+" />
              </div>
              <div className="text-[11px] font-orbitron uppercase text-app-muted mt-1">Subscribers</div>
            </div>

            <div className="glass-panel cyber-corner p-4 text-center">
              <div className="text-2xl sm:text-3xl font-orbitron font-black text-secondary">
                <AnimatedCounter value={38} suffix="M+" />
              </div>
              <div className="text-[11px] font-orbitron uppercase text-app-muted mt-1">Lifetime Views</div>
            </div>

            <div className="glass-panel cyber-corner p-4 text-center">
              <div className="text-2xl sm:text-3xl font-orbitron font-black text-app-text">
                {siteConfig.statsFallback.streamHours}
              </div>
              <div className="text-[11px] font-orbitron uppercase text-app-muted mt-1">Broadcast Hours</div>
            </div>

            <div className="glass-panel cyber-corner p-4 text-center">
              <div className="text-2xl sm:text-3xl font-orbitron font-black text-amber-400">
                {siteConfig.statsFallback.winRate}
              </div>
              <div className="text-[11px] font-orbitron uppercase text-app-muted mt-1">Win Rate</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#live"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-app-muted hover:text-primary transition-colors cursor-pointer group"
          aria-label="Scroll to live section"
        >
          <span className="text-[10px] font-orbitron tracking-widest uppercase group-hover:text-primary">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-primary" />
        </a>
      </section>

      {/* ============================================================ */}
      {/* B. LIVE STREAMING STATUS SECTION                             */}
      {/* ============================================================ */}
      {siteConfig.features.liveStatus && (
        <SectionWrapper
          id="live"
          badge="BROADCAST CENTER"
          title="Live Streaming Telemetry"
          subtitle="Real-time multi-platform status across YouTube and Kick. Catch daily competitive matches and custom viewer lobbies."
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Live Stream Showcase Main Card */}
            <div className="lg:col-span-7">
              <StreamCard
                platform={siteConfig.liveConfig.platform}
                isLive={isAnyLive}
                title={siteConfig.liveConfig.streamTitle}
                game={siteConfig.liveConfig.streamGame}
                viewers={siteConfig.liveConfig.viewerCount}
                watchUrl={siteConfig.social.youtube.channelUrl}
                thumbnail="/images/banner.svg"
                onPlayModal={() =>
                  setActiveModalVideo({
                    youtubeId: siteConfig.social.youtube.featuredVideoId,
                    title: siteConfig.liveConfig.streamTitle,
                    category: 'Live Broadcast',
                    views: `${siteConfig.liveConfig.viewerCount} Live`,
                    date: 'Now Streaming',
                  })
                }
              />
            </div>

            {/* Platform Profiles Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-6">
              <PlatformCard
                name="YouTube Gaming"
                handle={siteConfig.social.youtube.handle}
                status={isAnyLive ? 'Live Stream Active' : 'Daily Evening Uploads'}
                isLive={isAnyLive}
                followers={siteConfig.statsFallback.subscribersFormatted}
                category="Valorant & AAA Gaming"
                url={siteConfig.social.youtube.channelUrl}
                icon={Youtube}
                accentColor="#ff1744"
              />

              {siteConfig.social.kick.enabled && (
                <PlatformCard
                  name="Kick Creator"
                  handle={`kick.com/${siteConfig.social.kick.username}`}
                  status="Live Interactive Sessions"
                  isLive={false}
                  followers="15.4K"
                  category={siteConfig.social.kick.category}
                  url={siteConfig.social.kick.channelUrl}
                  icon={Radio}
                  accentColor="#10b981"
                />
              )}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ============================================================ */}
      {/* C. YOUTUBE CHANNEL STATISTICS SECTION                        */}
      {/* ============================================================ */}
      {siteConfig.features.youtubeStats && (
        <SectionWrapper
          id="stats"
          badge="METRICS & TELEMETRY"
          title="Channel Statistics & Reach"
          subtitle="Official audience metrics and lifetime analytics powered by YouTube Data API v3 and real-time creator telemetry."
        >
          <YouTubeStats />
        </SectionWrapper>
      )}

      {/* ============================================================ */}
      {/* D. GAMING ABOUT SECTION                                      */}
      {/* ============================================================ */}
      {siteConfig.features.about && (
        <SectionWrapper
          id="about"
          badge="CREATOR PROFILE"
          title={`Behind ${siteConfig.branding.channelName}`}
          subtitle="Meet the streamer, competitive tactician, and hardware enthusiast driving the channel's evolution."
        >
          <ProfileCard />
        </SectionWrapper>
      )}

      {/* ============================================================ */}
      {/* E. GAMING LIBRARY SECTION                                    */}
      {/* ============================================================ */}
      {siteConfig.features.games && (
        <SectionWrapper
          id="games"
          badge="GAME VAULT"
          title="Battle Arsenal & Library"
          subtitle="The titles dominating the stream lineup. Filter by competitive genre or search for specific tactical games."
        >
          <div className="space-y-8">
            {/* Filter and Search controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel cyber-corner p-4">
              <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
                {gameCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedGameCategory(category)}
                    className={`px-3 py-1.5 rounded text-xs font-orbitron font-semibold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                      selectedGameCategory === category
                        ? 'bg-primary text-white shadow-neon-primary'
                        : 'bg-surface hover:bg-surface-hover text-app-muted border border-app-border'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-app-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={gameSearch}
                  onChange={(e) => setGameSearch(e.target.value)}
                  placeholder="Filter games..."
                  className="w-full pl-9 pr-3 py-2 bg-surface text-app-text placeholder-app-muted/60 text-xs font-rajdhani font-semibold border border-app-border focus:border-primary focus:outline-none rounded cyber-tag"
                />
              </div>
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ============================================================ */}
      {/* F. YOUTUBE VIDEOS SECTION                                    */}
      {/* ============================================================ */}
      {siteConfig.features.featuredVideos && (
        <SectionWrapper
          id="videos"
          badge="VIDEO REPERTOIRE"
          title="YouTube Video Vault"
          subtitle="Explore the latest uploads, high-FPS clutches, hardware build guides, and full tournament breakdowns."
        >
          <VideoGrid showFeatured={true} />
        </SectionWrapper>
      )}

      {/* ============================================================ */}
      {/* G. GAMING SETUP & BATTLESTATION                              */}
      {/* ============================================================ */}
      {siteConfig.features.gamingSetup && (
        <SectionWrapper
          id="setup"
          badge="BATTLE RIG SPECS"
          title="Hardware & Studio Setup"
          subtitle="Precision tuned esports gear, custom liquid cooling loops, 360Hz QD-OLED displays, and broadcast audio equipment."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.setup.map((item, idx) => (
              <GamingSetupCard key={idx} item={item} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ============================================================ */}
      {/* H. ACHIEVEMENTS & MILESTONES TIMELINE                        */}
      {/* ============================================================ */}
      {siteConfig.features.achievements && (
        <SectionWrapper
          id="achievements"
          badge="TROPHY ROOM"
          title="Milestones & Achievements"
          subtitle="Key career milestones from grassroots tournaments to Creator Play Buttons and Radiant leaderboards."
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.achievements.map((achievement, idx) => (
              <AchievementCard key={achievement.title} achievement={achievement} index={idx} />
            ))}
          </div>
        </SectionWrapper>
      )}

      {/* ============================================================ */}
      {/* I. COMMUNITY SECTION                                         */}
      {/* ============================================================ */}
      {siteConfig.features.community && (
        <SectionWrapper
          id="community"
          badge="PILOT SQUAD"
          title="Join the Cruz Gaming Community"
          subtitle="Over 12,000+ gamers hanging out on Discord, sharing crosshairs, squading up for ranked grinds, and testing custom maps."
        >
          <Card className="p-8 sm:p-12 relative overflow-hidden bg-gradient-to-r from-surface-card via-surface to-surface-card border-2 border-indigo-500/40 shadow-2xl">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 text-xs font-orbitron font-bold">
                  <Discord className="w-4 h-4" />
                  OFFICIAL DISCORD GUILD
                </div>

                <h3 className="text-3xl sm:text-4xl font-orbitron font-black text-app-text uppercase">
                  {siteConfig.social.discord.serverName}
                </h3>

                <p className="text-base font-rajdhani text-app-muted leading-relaxed max-w-xl">
                  Get instant stream alerts, participate in weekly community tournaments, download exclusive game configs, and chat directly with {siteConfig.branding.authorName}.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-app-text font-bold">{siteConfig.social.discord.onlineCount}</span>
                    <span className="text-app-muted">Online Now</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-indigo-400" />
                    <span className="text-app-text font-bold">{siteConfig.social.discord.memberCount}</span>
                    <span className="text-app-muted">Total Members</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Button
                  href={siteConfig.social.discord.inviteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  icon={Discord}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 shadow-lg text-white"
                >
                  Join Discord Server
                </Button>
                <Button
                  href={siteConfig.social.youtube.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  icon={Youtube}
                  className="w-full"
                >
                  Subscribe to Channel
                </Button>
              </div>
            </div>
          </Card>
        </SectionWrapper>
      )}

      {/* ============================================================ */}
      {/* J. FUTURISTIC CONTACT SECTION                                */}
      {/* ============================================================ */}
      {siteConfig.features.contact && (
        <SectionWrapper
          id="contact"
          badge="TRANSMISSION"
          title="Direct Comms & Inquiries"
          subtitle="Looking to sponsor a tournament, collaborate on high-profile content, or request brand integration? Send a direct transmission."
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 bg-surface-card space-y-4">
                <h4 className="text-lg font-orbitron font-bold text-app-text uppercase">
                  Verified Inquiries
                </h4>
                <p className="text-sm font-rajdhani text-app-muted leading-relaxed">
                  {siteConfig.contact.responseExpectation}
                </p>

                <div className="pt-4 space-y-3">
                  <div className="p-3.5 rounded-lg bg-surface border border-app-border">
                    <span className="text-[10px] font-orbitron uppercase text-app-muted block">Business Email</span>
                    <a
                      href={`mailto:${siteConfig.contact.businessEmail}`}
                      className="text-base font-orbitron font-bold text-primary hover:underline"
                    >
                      {siteConfig.contact.businessEmail}
                    </a>
                  </div>

                  <div className="p-3.5 rounded-lg bg-surface border border-app-border">
                    <span className="text-[10px] font-orbitron uppercase text-app-muted block">Community Comms</span>
                    <span className="text-base font-orbitron font-bold text-secondary">
                      {siteConfig.contact.discordServer}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Status card */}
              <Card className="p-6 bg-surface-card text-xs font-mono text-app-muted space-y-2 border-l-4 border-primary">
                <div className="text-app-text font-bold uppercase font-orbitron">
                  BROADCAST_STATUS // OPERATIONAL
                </div>
                <div>All transmissions are routed through secure creator mailboxes.</div>
              </Card>
            </div>

            {/* Direct Form */}
            <Card className="lg:col-span-7 p-8 bg-surface-card">
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-orbitron font-bold uppercase text-app-muted">
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Alex Mercer / Red Bull Esports"
                      className="w-full px-4 py-2.5 bg-surface text-app-text text-sm font-rajdhani rounded border border-app-border focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-orbitron font-bold uppercase text-app-muted">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="contact@brand.com"
                      className="w-full px-4 py-2.5 bg-surface text-app-text text-sm font-rajdhani rounded border border-app-border focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-orbitron font-bold uppercase text-app-muted">
                    Inquiry Objective
                  </label>
                  <select
                    value={contactForm.inquiryType}
                    onChange={(e) => setContactForm({ ...contactForm, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 bg-surface text-app-text text-sm font-rajdhani rounded border border-app-border focus:border-primary focus:outline-none cursor-pointer"
                  >
                    {siteConfig.contact.inquiryTypes.map((type) => (
                      <option key={type} value={type} className="bg-surface text-app-text">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-orbitron font-bold uppercase text-app-muted">
                    Message Transmission *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Provide details about campaign timeline, deliverables, or collaboration proposals..."
                    className="w-full px-4 py-3 bg-surface text-app-text text-sm font-rajdhani rounded border border-app-border focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  size="lg"
                  icon={Send}
                  className="w-full"
                >
                  {isSubmitting ? 'Transmitting Data...' : 'Transmit Message'}
                </Button>
              </form>
            </Card>
          </div>
        </SectionWrapper>
      )}

      {/* Global Video Modal */}
      <VideoModal
        video={activeModalVideo}
        isOpen={Boolean(activeModalVideo)}
        onClose={() => setActiveModalVideo(null)}
      />
    </div>
  );
};

export default Home;
