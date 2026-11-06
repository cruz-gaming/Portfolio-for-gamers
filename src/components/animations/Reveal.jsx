import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp } from '../../animations/variants';
import useTheme from '../../hooks/useTheme';

const Reveal = ({
  children,
  variants = fadeUp,
  className = '',
  delay = 0,
  threshold = 0.15,
  once = true,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: threshold, once });
  const { reducedMotion } = useTheme();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
