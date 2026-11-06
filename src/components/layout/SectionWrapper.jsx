import React from 'react';
import Reveal from '../animations/Reveal';
import { fadeUp } from '../../animations/variants';

const SectionWrapper = ({
  id,
  badge,
  title,
  subtitle,
  children,
  className = '',
  containerClassName = 'max-w-7xl',
}) => {
  return (
    <section id={id} className={`relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Decorative Sci-Fi HUD Coordinates */}
      <div className="absolute top-8 left-8 hidden lg:flex items-center gap-2 text-[10px] font-mono text-app-muted/40 uppercase">
        <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
        <span>SEC // {id.toUpperCase()}</span>
      </div>

      <div className={`mx-auto ${containerClassName}`}>
        {/* Header */}
        {(badge || title || subtitle) && (
          <Reveal variants={fadeUp} className="mb-14 text-center max-w-3xl mx-auto">
            {badge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-orbitron font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                {badge}
              </div>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-black text-app-text tracking-wide uppercase">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 text-base sm:text-lg text-app-muted font-rajdhani font-medium leading-relaxed">
                {subtitle}
              </p>
            )}
            {/* Cyber Divider Line */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary" />
              <span className="w-2 h-2 rotate-45 border border-primary bg-primary/40" />
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
          </Reveal>
        )}

        {/* Content */}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
