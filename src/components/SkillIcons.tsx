'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

interface SkillGalleryProps {
  icons?: string[];
  className?: string;
  containerSize?: number;
}

const getNonOverlappingPosition = (
  existingPositions: number[][],
  size: number,
  iconSize: number,
  minSpacing = 20,
  maxAttempts = 800
) => {
  let attempts = 0;
  while (attempts < maxAttempts) {
    const x = Math.random() * (size - iconSize);
    const y = Math.random() * (size - iconSize);

    const overlapping = existingPositions.some(([ex, ey, es]) => {
      const distance = Math.sqrt((x - ex) ** 2 + (y - ey) ** 2);
      return distance < (iconSize + es) / 2 + minSpacing;
    });

    if (!overlapping) return [x, y];
    attempts++;
  }

  return [Math.random() * (size - iconSize), Math.random() * (size - iconSize)];
};

const getRandomSize = () => {
  return Math.random() * 20 + 50;
};

const SkillGallery: React.FC<SkillGalleryProps> = ({
  icons = [
    'typescript',
    'javascript',
    'python',
    'redux',
    'vite',
    'react',
    'tailwindcss',
    'expressjs',
    'mongodb',
    'mysql',
    'postgresql',
    'redis',
    'electron',
    'git',
    'docker',
    'github',
    'nodejs',
  ],
  className = '',
  containerSize = 400,
}) => {
  const positions: number[][] = [];
  if (window.innerWidth < 768) {
    containerSize = 350;
  }

  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-lg ${className}`}
      style={{ height: containerSize, width: containerSize }}
    >
      {icons.map((icon, index) => {
        const size = getRandomSize();
        const [x, y] = getNonOverlappingPosition(
          positions,
          containerSize,
          size,
          20
        );
        positions.push([x, y, size]);

        return (
          <motion.img
            key={index}
            src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
            alt={icon}
            className="absolute rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              width: size,
              height: size,
              top: y,
              left: x,
            }}
          />
        );
      })}
    </div>
  );
};

export default SkillGallery;
