import React, { createContext, useContext, useState, useEffect } from 'react';
import siteConfig from '../config/siteConfig';

export const THEMES = [
  {
    id: 'cyber-red',
    name: 'Cyber Red',
    primary: '#ff1744',
    secondary: '#00e5ff',
    badge: 'DEFAULT',
    bg: '#060709',
  },
  {
    id: 'neon-blue',
    name: 'Neon Blue',
    primary: '#00e5ff',
    secondary: '#3b82f6',
    badge: 'CYBER',
    bg: '#040810',
  },
  {
    id: 'purple-galaxy',
    name: 'Purple Galaxy',
    primary: '#a855f7',
    secondary: '#ec4899',
    badge: 'NEBULA',
    bg: '#080410',
  },
  {
    id: 'toxic-green',
    name: 'Toxic Green',
    primary: '#10b981',
    secondary: '#84cc16',
    badge: 'BIOHAZARD',
    bg: '#030a06',
  },
  {
    id: 'orange-inferno',
    name: 'Orange Inferno',
    primary: '#ff5722',
    secondary: '#ffb300',
    badge: 'FLAME',
    bg: '#0a0604',
  },
  {
    id: 'pure-black',
    name: 'Pure Black',
    primary: '#ffffff',
    secondary: '#71717a',
    badge: 'STEALTH',
    bg: '#000000',
  },
  {
    id: 'gaming-rgb',
    name: 'Gaming RGB',
    primary: '#f43f5e',
    secondary: '#06b6d4',
    badge: 'RGB CHROMA',
    bg: '#07070d',
  },
];

export const ACCENTS = [
  { id: 'red', name: 'Cyber Red', color: '#ff1744' },
  { id: 'cyan', name: 'Hyper Cyan', color: '#00e5ff' },
  { id: 'purple', name: 'Ultra Purple', color: '#a855f7' },
  { id: 'emerald', name: 'Matrix Emerald', color: '#10b981' },
  { id: 'amber', name: 'Solar Amber', color: '#f59e0b' },
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('cruz_theme') || siteConfig.appearance.defaultTheme || 'cyber-red';
  });

  const [accent, setAccentState] = useState(() => {
    return localStorage.getItem('cruz_accent') || siteConfig.appearance.defaultAccent || 'red';
  });

  const [backgroundEffects, setBackgroundEffectsState] = useState(() => {
    const saved = localStorage.getItem('cruz_bg_effects');
    return saved !== null ? JSON.parse(saved) : siteConfig.appearance.allowBackgroundEffects;
  });

  const [reducedMotion, setReducedMotionState] = useState(() => {
    const saved = localStorage.getItem('cruz_reduced_motion');
    if (saved !== null) return JSON.parse(saved);
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const [customCursor, setCustomCursorState] = useState(() => {
    const saved = localStorage.getItem('cruz_custom_cursor');
    return saved !== null ? JSON.parse(saved) : siteConfig.appearance.allowCustomCursor;
  });

  // Apply theme & accent to DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cruz_theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem('cruz_accent', accent);
  }, [accent]);

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
    localStorage.setItem('cruz_reduced_motion', JSON.stringify(reducedMotion));
  }, [reducedMotion]);

  useEffect(() => {
    localStorage.setItem('cruz_bg_effects', JSON.stringify(backgroundEffects));
  }, [backgroundEffects]);

  useEffect(() => {
    localStorage.setItem('cruz_custom_cursor', JSON.stringify(customCursor));
  }, [customCursor]);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
  };

  const setAccent = (newAccent) => {
    setAccentState(newAccent);
  };

  const toggleBackgroundEffects = () => {
    setBackgroundEffectsState((prev) => !prev);
  };

  const toggleReducedMotion = () => {
    setReducedMotionState((prev) => !prev);
  };

  const toggleCustomCursor = () => {
    setCustomCursorState((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
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
        availableThemes: THEMES,
        availableAccents: ACCENTS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
