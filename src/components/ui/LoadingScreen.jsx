import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import siteConfig from '../../config/siteConfig';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    'CONNECTING TO SATELLITE FEED...',
    'SYNCING YOUTUBE & KICK CHANNELS...',
    'CALIBRATING 360HZ HUD TELEMETRY...',
    'INITIALIZING CRUZ GAMING PROTOCOLS...',
    'SYSTEM ONLINE // READY TO PLAY',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 8;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const idx = Math.min(Math.floor((progress / 100) * statuses.length), statuses.length - 1);
    setStatusIndex(idx);
  }, [progress, statuses.length]);

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background cyber-grid-bg text-app-text select-none"
      >
        {/* Center Logo with Pulse */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse" />
          <img
            src={siteConfig.branding.logo}
            alt={siteConfig.branding.channelName}
            className="w-24 h-24 sm:w-28 sm:h-28 relative z-10 drop-shadow-[0_0_20px_var(--color-primary-glow)]"
          />
        </motion.div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-orbitron font-black tracking-widest text-center uppercase mb-2">
          {siteConfig.branding.channelName}
        </h1>
        <p className="text-xs font-rajdhani text-app-muted tracking-widest uppercase mb-8">
          {siteConfig.branding.tagline}
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 sm:w-80">
          <div className="flex justify-between text-xs font-mono mb-2 text-app-muted">
            <span className="text-primary font-bold">{progress}%</span>
            <span>INITIALIZING</span>
          </div>

          <div className="w-full h-1.5 bg-surface-card rounded-full overflow-hidden border border-app-border">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </div>

          {/* Status Message */}
          <div className="mt-4 text-center">
            <span className="text-[11px] font-mono text-secondary tracking-widest uppercase animate-pulse">
              {statuses[statusIndex]}
            </span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
