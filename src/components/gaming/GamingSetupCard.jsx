import React from 'react';
import { Cpu, Monitor, Keyboard, Mouse, Headphones, Camera, HardDrive, Gamepad, Sparkles } from 'lucide-react';
import Card from '../ui/Card';

const ICONS_MAP = {
  Cpu,
  Monitor,
  Keyboard,
  Mouse,
  Headphones,
  Camera,
  HardDrive,
  Gamepad,
  Sparkles,
};

const GamingSetupCard = ({ item }) => {
  const IconComponent = ICONS_MAP[item.icon] || Cpu;

  return (
    <Card className="h-full flex flex-col justify-between group hover:border-primary transition-all duration-300 bg-surface-card p-0 overflow-hidden">
      {/* Visual Header / Spec illustration */}
      {item.image && (
        <div className="relative aspect-[16/10] w-full bg-surface overflow-hidden border-b border-app-border">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-60" />

          {/* Highlight Badge */}
          {item.highlight && (
            <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded text-[10px] font-orbitron font-bold uppercase cyber-tag bg-secondary/20 text-secondary border border-secondary/40 backdrop-blur">
              {item.highlight}
            </div>
          )}
        </div>
      )}

      {/* Spec details */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-md bg-primary/10 border border-primary/30 text-primary">
              <IconComponent className="w-4 h-4" />
            </div>
            <span className="text-xs font-orbitron font-semibold uppercase text-primary tracking-wider">
              {item.category}
            </span>
          </div>

          <h3 className="text-lg font-orbitron font-bold text-app-text group-hover:text-primary transition-colors">
            {item.name}
          </h3>
        </div>

        <div className="pt-3 border-t border-app-border">
          <p className="text-xs font-mono text-app-muted leading-relaxed">
            {item.specs}
          </p>
        </div>

        {/* Cyber Hardware Status Indicator */}
        <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-app-muted/60">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            BATTLE_STATION_SYNCED
          </span>
          <span>100% OPERATIONAL</span>
        </div>
      </div>
    </Card>
  );
};

export default GamingSetupCard;
