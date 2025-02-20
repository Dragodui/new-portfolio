'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      className="w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center cursor-pointer"
      onClick={toggleTheme}
      animate={{ backgroundColor: theme === 'light' ? '#D1D5DB' : '#4B5563' }}
    >
      <motion.div
        className="w-6 h-6 rounded-full flex items-center justify-center"
        animate={{
          x: theme === 'light' ? '0%' : '100%',
          backgroundColor: theme === 'light' ? '#ffffff' : '#1a202c',
        }}
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      >
        {theme === 'light' ? (
          <Sun size={16} className="text-[#0F8AD2]" />
        ) : (
          <Moon size={16} className="text-[#0F8AD2]" />
        )}
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;
