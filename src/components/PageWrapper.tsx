'use client';

import type React from 'react';
import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeContext';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const { theme, themeAnimating } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        '--theme-from',
        theme === 'light' ? '#f1f5f9' : '#101010'
      );
      containerRef.current.style.setProperty(
        '--theme-to',
        theme === 'light' ? '#101010' : '#f1f5f9'
      );
    }
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className={`relative min-h-screen overflow-hidden bg-bg text-text transition-colors duration-300`}
    >
      <AnimatePresence>
        {themeAnimating && (
          <motion.div
            key="theme-animation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `radial-gradient(circle at top right, var(--theme-from), transparent 50%)`,
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
