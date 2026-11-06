import React from 'react';
import { motion } from 'framer-motion';
import { Home as HomeIcon, AlertTriangle } from 'lucide-react';
import Button from '../components/ui/Button';
import siteConfig from '../config/siteConfig';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative select-none">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-lg"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/40 text-xs font-orbitron font-bold uppercase animate-pulse">
          <AlertTriangle className="w-4 h-4" />
          RADAR ANOMALY // 404
        </div>

        <h1 className="text-8xl sm:text-9xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-widest text-glow">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-orbitron font-bold text-app-text uppercase">
          SECTOR NOT FOUND
        </h2>

        <p className="text-sm font-rajdhani text-app-muted leading-relaxed">
          The coordinates you entered do not exist in the {siteConfig.branding.channelName} space sector. The signal may have been jammed by opposing squads.
        </p>

        <div className="pt-4">
          <Button href="/" variant="primary" size="lg" icon={HomeIcon}>
            Return to Command Center
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
