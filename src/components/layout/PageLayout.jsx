import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from '../ui/AnimatedBackground';
import CustomCursor from '../ui/CustomCursor';
import useScrollProgress from '../../hooks/useScrollProgress';
import { Toaster } from 'react-hot-toast';

const PageLayout = ({ children }) => {
  const { scrollProgress } = useScrollProgress();

  return (
    <div className="min-h-screen flex flex-col bg-background text-app-text selection:bg-primary selection:text-white relative">
      {/* Toast Notification Container with Cyber styling */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            border: '1px solid var(--color-border)',
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: '14px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
          },
        }}
      />

      {/* Top HUD Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-surface">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent shadow-neon-primary transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Interactive Background & Cursor */}
      <AnimatedBackground />
      <CustomCursor />

      {/* Main Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PageLayout;
