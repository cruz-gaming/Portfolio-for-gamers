import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'cyber'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'left',
  className = '',
  onClick,
  disabled = false,
  href,
  target,
  rel,
  type = 'button',
  ...props
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-semibold tracking-wider gap-1.5',
    md: 'px-5 py-2.5 text-sm font-bold tracking-wider gap-2',
    lg: 'px-7 py-3.5 text-base font-bold tracking-widest gap-2.5',
  };

  const variantClasses = {
    primary:
      'bg-primary text-white hover:bg-opacity-90 shadow-neon-primary border border-transparent',
    secondary:
      'bg-surface-card hover:bg-surface-hover text-app-text border border-app-border hover:border-primary shadow-lg',
    outline:
      'bg-transparent text-app-text border border-primary hover:bg-primary hover:text-white hover:shadow-neon-primary',
    ghost:
      'bg-transparent text-app-muted hover:text-app-text hover:bg-surface-hover border border-transparent',
    cyber:
      'relative bg-surface text-primary border border-primary cyber-tag hover:bg-primary hover:text-black hover:shadow-neon-primary font-orbitron transition-all duration-300',
  };

  const baseClasses = `inline-flex items-center justify-center font-rajdhani uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />}
      <span className="relative z-10">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={`group ${baseClasses}`}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`group ${baseClasses}`}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
