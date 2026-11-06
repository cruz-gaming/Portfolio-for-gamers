import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import useTheme from '../../hooks/useTheme';

const AnimatedCounter = ({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { reducedMotion } = useTheme();

  // Handle number or formatted string like "285K" or 285400
  const numericValue = typeof value === 'number' ? value : parseInt(String(value).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (reducedMotion) {
      setDisplayValue(numericValue);
      return;
    }

    if (!isInView) return;

    let startTime = null;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * numericValue);
      setDisplayValue(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(numericValue);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, numericValue, duration, reducedMotion]);

  // Format large numbers cleanly
  const formatDisplay = (val) => {
    return val.toLocaleString();
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatDisplay(displayValue)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
