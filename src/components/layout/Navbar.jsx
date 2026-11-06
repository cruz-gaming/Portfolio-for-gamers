import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Youtube, Disc as Discord, Tv, Radio } from 'lucide-react';
import siteConfig from '../../config/siteConfig';
import ThemeSwitcher from '../ui/ThemeSwitcher';
import LiveBadge from '../streaming/LiveBadge';
import useScrollProgress from '../../hooks/useScrollProgress';
import useLiveStatus from '../../hooks/useLiveStatus';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection } = useScrollProgress();
  const { isAnyLive } = useLiveStatus();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-app-border shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Channel Branding */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-lg blur-md group-hover:bg-primary/50 transition-all" />
              <img
                src={siteConfig.branding.logo}
                alt={siteConfig.branding.channelName}
                className="w-10 h-10 relative z-10 drop-shadow-[0_0_10px_var(--color-primary-glow)] transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-xl font-orbitron font-black text-app-text tracking-wider uppercase group-hover:text-primary transition-colors flex items-center gap-2">
                {siteConfig.branding.channelName}
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-primary uppercase">
                {siteConfig.branding.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navigation.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-orbitron font-semibold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-primary'
                      : 'text-app-muted hover:text-app-text hover:bg-surface/50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary shadow-neon-primary"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Live Indicator Badge */}
            {siteConfig.features.liveStatus && (
              <a href="#live" className="hidden sm:block">
                <LiveBadge isLive={isAnyLive} />
              </a>
            )}

            {/* Quick YouTube CTA */}
            {siteConfig.social.youtube.enabled && (
              <a
                href={siteConfig.social.youtube.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Watch on YouTube"
                className="hidden md:flex items-center justify-center p-2 rounded-full glass-panel hover:border-red-500 hover:text-red-500 text-app-muted transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            )}

            {/* Theme Customizer Switcher */}
            {siteConfig.appearance.allowThemeSwitching && <ThemeSwitcher />}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-app-muted hover:text-app-text glass-panel cyber-tag transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-surface border-b border-app-border overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2.5 text-sm font-orbitron font-semibold uppercase tracking-wider text-app-muted hover:text-primary hover:bg-surface-card rounded transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 border-t border-app-border flex items-center justify-between px-2">
                <LiveBadge isLive={isAnyLive} />
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.social.youtube.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-red-500 hover:bg-surface-card rounded"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  {siteConfig.social.discord.enabled && (
                    <a
                      href={siteConfig.social.discord.inviteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-indigo-400 hover:bg-surface-card rounded"
                    >
                      <Discord className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
