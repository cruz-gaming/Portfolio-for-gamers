import React from 'react';
import { Star, Clock, Trophy } from 'lucide-react';
import Card from '../ui/Card';
import TiltCard from '../animations/TiltCard';

const GameCard = ({ game }) => {
  return (
    <TiltCard maxTilt={8} glare={true} className="h-full">
      <Card
        corner={true}
        className="p-0 overflow-hidden h-full flex flex-col justify-between group hover:border-primary transition-all duration-300 bg-surface-card"
      >
        {/* Game Poster Art */}
        <div className="relative aspect-[4/5] w-full bg-surface overflow-hidden">
          <img
            src={game.image}
            alt={game.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent opacity-90" />

          {/* Favorite Badge */}
          {game.isFavorite && (
            <div className="absolute top-3 right-3 p-1.5 rounded-full bg-primary/90 text-white shadow-neon-primary">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
          )}

          {/* Current Status Pill */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-orbitron font-bold uppercase cyber-tag bg-surface/90 text-primary border border-primary/40 backdrop-blur">
              {game.status}
            </span>
          </div>

          {/* Bottom Overlay Info on Poster */}
          <div className="absolute bottom-3 left-3 right-3 space-y-1">
            <span className="text-[11px] font-orbitron font-semibold text-secondary uppercase tracking-wider block">
              {game.category}
            </span>
            <h3 className="text-xl font-orbitron font-black text-app-text group-hover:text-primary transition-colors tracking-wide">
              {game.name}
            </h3>
          </div>
        </div>

        {/* Card Body Info */}
        <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
          <p className="text-xs font-rajdhani text-app-muted leading-relaxed line-clamp-2">
            {game.description}
          </p>

          <div className="pt-3 border-t border-app-border space-y-2 text-xs font-rajdhani">
            {game.rank && (
              <div className="flex items-center justify-between">
                <span className="text-app-muted flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" /> Competitive Rank
                </span>
                <span className="font-orbitron font-bold text-app-text">{game.rank}</span>
              </div>
            )}
            {game.hours && (
              <div className="flex items-center justify-between">
                <span className="text-app-muted flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> Playtime
                </span>
                <span className="font-mono text-app-text">{game.hours}</span>
              </div>
            )}
          </div>

          {/* Tags */}
          {game.tags && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-surface text-app-muted border border-app-border"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Card>
    </TiltCard>
  );
};

export default GameCard;
