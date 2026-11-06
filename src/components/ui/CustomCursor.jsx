import React, { useEffect, useState } from 'react';
import useTheme from '../../hooks/useTheme';

const CustomCursor = () => {
  const { customCursor } = useTheme();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!customCursor) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer');

      setIsPointer(Boolean(isInteractive));
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [customCursor, isVisible]);

  if (!customCursor || !isVisible) return null;

  return (
    <>
      {/* Central Aim Dot */}
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isClicked ? 0.7 : 1})`,
        }}
      />

      {/* Outer Tactical Crosshair Ring */}
      <div
        className="custom-cursor-ring"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${isPointer ? 1.4 : isClicked ? 0.9 : 1})`,
          borderColor: isPointer ? 'var(--color-secondary)' : 'var(--color-primary-glow)',
        }}
      />
    </>
  );
};

export default CustomCursor;
