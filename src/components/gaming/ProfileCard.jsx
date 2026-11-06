import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Trophy, Calendar, Sparkles, Crosshair, Award } from 'lucide-react';
import Card from '../ui/Card';
import siteConfig from '../../config/siteConfig';

const ProfileCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Profile Avatar & Identity Card */}
      <Card className="lg:col-span-5 p-8 flex flex-col items-center text-center space-y-6 relative overflow-hidden bg-surface-card">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/15 to-transparent pointer-events-none" />

        {/* Avatar with Animated Visor Ring */}
        <div className="relative">
          <div className="w-36 h-36 rounded-full p-1 border-2 border-primary shadow-neon-primary relative">
            <img
              src={siteConfig.branding.avatar}
              alt={siteConfig.branding.authorName}
              className="w-full h-full rounded-full object-cover bg-surface"
            />
          </div>
          <span className="absolute bottom-1 right-2 px-2.5 py-0.5 rounded-full text-[10px] font-orbitron font-bold uppercase bg-emerald-500 text-black border border-emerald-300">
            ONLINE
          </span>
        </div>

        {/* Identity */}
        <div>
          <h3 className="text-2xl font-orbitron font-black text-app-text tracking-wide uppercase">
            {siteConfig.branding.channelName}
          </h3>
          <p className="text-sm font-orbitron font-semibold text-primary mt-1">
            {siteConfig.branding.authorName}
          </p>
          <p className="text-xs font-mono text-app-muted mt-1">
            {siteConfig.about.primaryRole}
          </p>
        </div>

        {/* Key Quick Badges */}
        <div className="grid grid-cols-2 gap-3 w-full pt-2">
          <div className="p-3 rounded-lg bg-surface border border-app-border">
            <span className="text-[10px] font-orbitron uppercase text-app-muted block">Experience</span>
            <span className="text-lg font-orbitron font-bold text-secondary">
              {siteConfig.about.experienceYears}
            </span>
          </div>
          <div className="p-3 rounded-lg bg-surface border border-app-border">
            <span className="text-[10px] font-orbitron uppercase text-app-muted block">Peak Rank</span>
            <span className="text-lg font-orbitron font-bold text-amber-400">
              Radiant
            </span>
          </div>
        </div>

        {/* Bio summary */}
        <p className="text-xs font-rajdhani text-app-muted leading-relaxed">
          {siteConfig.branding.description}
        </p>

        {/* Schedule Preview */}
        <div className="w-full pt-4 border-t border-app-border text-left space-y-3">
          <div className="flex items-center gap-2 text-xs font-orbitron font-bold text-primary uppercase">
            <Calendar className="w-4 h-4" />
            <span>Weekly Streaming Schedule</span>
          </div>
          <div className="space-y-2">
            {siteConfig.about.streamingSchedule.map((sched, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded bg-surface/60 border border-app-border flex flex-col gap-0.5 text-xs font-rajdhani"
              >
                <div className="flex justify-between font-bold text-app-text">
                  <span>{sched.days}</span>
                  <span className="font-mono text-secondary">{sched.time}</span>
                </div>
                <span className="text-[11px] text-app-muted">{sched.topic}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Right Skills & Gamer Journey Breakdown */}
      <div className="lg:col-span-7 space-y-6">
        {/* Gamer Journey Card */}
        <Card className="p-8 space-y-4 bg-surface-card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded border border-primary/40 text-primary">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xl font-orbitron font-bold text-app-text uppercase">
                The Gamer's Journey
              </h4>
              <span className="text-xs font-mono text-app-muted">Evolution from enthusiast to esports creator</span>
            </div>
          </div>

          <p className="text-sm font-rajdhani text-app-muted leading-relaxed">
            Founded in {siteConfig.branding.establishedYear}, {siteConfig.branding.channelName} began as an ambitious passion project by {siteConfig.branding.authorName}. Through relentless tournament grinds, innovative content production, and an unwavering commitment to high-refresh gaming, the platform has grown into an international hub for competitive gamers and tech enthusiasts.
          </p>

          <p className="text-sm font-rajdhani text-app-muted leading-relaxed">
            {siteConfig.about.milestonesSummary}
          </p>

          <div className="pt-2 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded bg-surface border border-primary/30 text-xs font-orbitron font-semibold text-primary">
              ✓ Verified Partner
            </span>
            <span className="px-3 py-1 rounded bg-surface border border-secondary/30 text-xs font-orbitron font-semibold text-secondary">
              ✓ 360Hz Esports Calibrated
            </span>
            <span className="px-3 py-1 rounded bg-surface border border-amber-400/30 text-xs font-orbitron font-semibold text-amber-400">
              ✓ Tournament Host
            </span>
          </div>
        </Card>

        {/* Skills & Attributes Radar/Bars */}
        <Card className="p-8 space-y-5 bg-surface-card">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/20 rounded border border-secondary/40 text-secondary">
              <Crosshair className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xl font-orbitron font-bold text-app-text uppercase">
                Combat & Production Attributes
              </h4>
              <span className="text-xs font-mono text-app-muted">Player mastery rating out of 100</span>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            {siteConfig.about.skills.map((skill, idx) => (
              <div key={skill.name} className="space-y-1.5">
                <div className="flex justify-between text-xs font-orbitron">
                  <span className="text-app-text font-semibold">{skill.name}</span>
                  <span className="text-primary font-mono font-bold">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-surface border border-app-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary to-secondary shadow-neon-primary"
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileCard;
