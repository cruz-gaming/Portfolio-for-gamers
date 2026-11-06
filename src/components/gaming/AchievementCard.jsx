import React from 'react';
import { Trophy, Award, Zap, Medal, Flame, Star, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import Card from '../ui/Card';

const ICONS_MAP = {
  Trophy,
  Award,
  Zap,
  Medal,
  Flame,
  Star,
  Sparkles,
  ShieldCheck,
};

const AchievementCard = ({ achievement, index }) => {
  const IconComponent = ICONS_MAP[achievement.icon] || Trophy;

  const handleCelebrate = () => {
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ff1744', '#00e5ff', '#facc15', '#a855f7'],
    });
  };

  return (
    <Card
      corner={true}
      onClick={handleCelebrate}
      className="group hover:border-primary transition-all duration-300 cursor-pointer relative overflow-hidden bg-surface-card"
    >
      {/* Background Year Watermark */}
      <div className="absolute right-3 bottom-0 text-6xl font-orbitron font-black text-white/[0.03] select-none pointer-events-none group-hover:text-primary/[0.06] transition-colors">
        {achievement.year}
      </div>

      <div className="flex items-start gap-4">
        {/* Icon Emblem */}
        <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary/10 border border-primary/30 text-primary shadow-neon-primary/30 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Content */}
        <div className="space-y-2 flex-grow">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-orbitron font-bold uppercase cyber-tag bg-secondary/20 text-secondary border border-secondary/40">
              {achievement.category}
            </span>
            <span className="text-xs font-mono font-bold text-amber-400">
              {achievement.year}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-orbitron font-bold text-app-text group-hover:text-primary transition-colors">
            {achievement.title}
          </h3>

          <p className="text-xs font-rajdhani text-app-muted leading-relaxed">
            {achievement.description}
          </p>

          <div className="pt-2 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-orbitron font-bold text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              {achievement.badge}
            </span>

            <span className="text-[10px] font-mono text-app-muted/60 uppercase">
              Click to celebrate
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AchievementCard;
