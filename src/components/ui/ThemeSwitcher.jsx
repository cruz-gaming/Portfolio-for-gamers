import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Sparkles, Eye, MousePointer, X } from 'lucide-react';
import useTheme from '../../hooks/useTheme';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    theme,
    setTheme,
    accent,
    setAccent,
    backgroundEffects,
    toggleBackgroundEffects,
    reducedMotion,
    toggleReducedMotion,
    customCursor,
    toggleCustomCursor,
    availableThemes,
    availableAccents,
  } = useTheme();

  return (
    <>
      {/* Floating or Nav Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2.5 rounded-full glass-panel hover:border-primary text-app-text hover:text-primary transition-all duration-300 shadow-md group cursor-pointer"
        aria-label="Customize Theme & Visuals"
        title="Customize Theme & Visuals"
      >
        <Palette className="w-5 h-5 transition-transform group-hover:rotate-45" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full" />
      </button>

      {/* Slide-over Customization Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            />

            <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="w-screen max-w-md bg-surface border-l border-app-border shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
              >
                <div>
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-app-border">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/20 rounded-md border border-primary/40 text-primary">
                        <Palette className="w-5 h-5" />
                      </div>
                      <div>
                        <h2 className="text-lg font-orbitron font-bold text-app-text uppercase tracking-wider">
                          Visual Customizer
                        </h2>
                        <p className="text-xs text-app-muted">Configure your personal battle HUD</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-1.5 text-app-muted hover:text-primary transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Themes List */}
                  <div className="mt-6">
                    <label className="text-xs font-orbitron font-bold tracking-widest text-primary uppercase block mb-3">
                      Select Cyber Theme
                    </label>
                    <div className="grid grid-cols-1 gap-2.5">
                      {availableThemes.map((item) => {
                        const isCurrent = theme === item.id;
                        return (
                          <div
                            key={item.id}
                            onClick={() => setTheme(item.id)}
                            className={`flex items-center justify-between p-3.5 rounded-lg border transition-all cursor-pointer ${
                              isCurrent
                                ? 'bg-surface-hover border-primary shadow-neon-primary/30'
                                : 'bg-surface-card border-app-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {/* Swatch */}
                              <div className="flex items-center -space-x-1">
                                <div
                                  className="w-5 h-5 rounded-full border border-white/20 shadow"
                                  style={{ backgroundColor: item.primary }}
                                />
                                <div
                                  className="w-5 h-5 rounded-full border border-white/20 shadow"
                                  style={{ backgroundColor: item.secondary }}
                                />
                              </div>
                              <div>
                                <div className="text-sm font-rajdhani font-bold text-app-text">
                                  {item.name}
                                </div>
                                <div className="text-[10px] font-mono text-app-muted uppercase">
                                  {item.badge}
                                </div>
                              </div>
                            </div>
                            {isCurrent && <Check className="w-4 h-4 text-primary" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Accent Swatches */}
                  <div className="mt-6">
                    <label className="text-xs font-orbitron font-bold tracking-widest text-primary uppercase block mb-3">
                      Color Accent Override
                    </label>
                    <div className="flex items-center gap-2.5">
                      {availableAccents.map((acc) => {
                        const isSelected = accent === acc.id;
                        return (
                          <button
                            key={acc.id}
                            onClick={() => setAccent(acc.id)}
                            title={acc.name}
                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                              isSelected ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-surface' : 'opacity-80 hover:opacity-100 hover:scale-105'
                            }`}
                            style={{ backgroundColor: acc.color }}
                          >
                            {isSelected && <Check className="w-4 h-4 text-white drop-shadow" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Visual Preferences */}
                  <div className="mt-8 pt-6 border-t border-app-border space-y-4">
                    <label className="text-xs font-orbitron font-bold tracking-widest text-primary uppercase block">
                      Performance & FX
                    </label>

                    {/* Background Particles FX */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-4 h-4 text-secondary" />
                        <div>
                          <div className="text-sm font-semibold text-app-text">Background Particles</div>
                          <div className="text-xs text-app-muted">Canvas particle field & lighting</div>
                        </div>
                      </div>
                      <button
                        onClick={toggleBackgroundEffects}
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                          backgroundEffects ? 'bg-primary' : 'bg-surface-card border border-app-border'
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                            backgroundEffects ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Custom Cursor */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <MousePointer className="w-4 h-4 text-secondary" />
                        <div>
                          <div className="text-sm font-semibold text-app-text">Gaming Crosshair Cursor</div>
                          <div className="text-xs text-app-muted">Interactive HUD mouse follower</div>
                        </div>
                      </div>
                      <button
                        onClick={toggleCustomCursor}
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                          customCursor ? 'bg-primary' : 'bg-surface-card border border-app-border'
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                            customCursor ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>

                    {/* Reduced Motion */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Eye className="w-4 h-4 text-secondary" />
                        <div>
                          <div className="text-sm font-semibold text-app-text">Reduced Motion</div>
                          <div className="text-xs text-app-muted">Disables high-velocity animations</div>
                        </div>
                      </div>
                      <button
                        onClick={toggleReducedMotion}
                        className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                          reducedMotion ? 'bg-primary' : 'bg-surface-card border border-app-border'
                        }`}
                      >
                        <div
                          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                            reducedMotion ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-app-border text-center text-xs text-app-muted font-mono">
                  Preferences automatically saved to local storage
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitcher;
