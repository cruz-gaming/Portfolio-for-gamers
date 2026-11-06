/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-glow": "var(--color-primary-glow)",
        secondary: "var(--color-secondary)",
        "secondary-glow": "var(--color-secondary-glow)",
        accent: "var(--color-accent)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-card": "var(--color-surface-card)",
        "surface-hover": "var(--color-surface-hover)",
        "app-text": "var(--color-text)",
        "app-muted": "var(--color-muted)",
        "app-border": "var(--color-border)",
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-primary': '0 0 20px var(--color-primary-glow), 0 0 40px var(--color-primary-glow)',
        'neon-secondary': '0 0 20px var(--color-secondary-glow), 0 0 40px var(--color-secondary-glow)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.6), inset 0 0 0 1px var(--color-border)',
        'cyber-card-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.8), 0 0 25px var(--color-primary-glow), inset 0 0 0 1px var(--color-primary)',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(255,23,68,0.15) 0%, rgba(0,229,255,0.08) 50%, rgba(138,43,226,0.12) 100%)',
        'grid-pattern': 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
        'cyber-scanline': 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'border-flow': 'borderFlow 4s linear infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px var(--color-primary-glow))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 30px var(--color-primary))' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
    },
  },
  plugins: [],
};
