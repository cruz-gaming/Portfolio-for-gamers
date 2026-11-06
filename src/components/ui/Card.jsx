import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  corner = true,
  hoverGlow = true,
  interactive = false,
  onClick,
  ...props
}) => {
  const cornerClass = corner ? 'cyber-corner' : 'rounded-lg';
  const hoverClass = hoverGlow ? 'glass-panel-hover' : '';

  return (
    <motion.div
      onClick={onClick}
      className={`relative glass-panel ${cornerClass} ${hoverClass} p-6 transition-all duration-300 ${interactive ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {/* Sci-Fi Decorative Corner Accents */}
      {corner && (
        <>
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-primary opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-primary opacity-60 pointer-events-none" />
        </>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
