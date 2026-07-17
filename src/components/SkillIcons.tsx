'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillGalleryProps {
  icons?: string[];
  className?: string;
}

const SkillGallery: React.FC<SkillGalleryProps> = ({
  icons = [
    'typescript',
    'javascript',
    'go',
    'python',
    'expressjs',
    'nestjs',
    'react',
    'nextjs',
    'postgresql',
    'mysql',
    'mongodb',
    'redis',
    'aws',
    'gcp',
    'git',
    'docker',
  ],
}) => {
  return (
    <div className="flex w-full flex-wrap items-start gap-2 rounded-lg md:flex-nowrap">
      {icons.map((icon, index) => {
        return (
    
          <motion.img
            key={index}
            src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
            alt={icon}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="block aspect-square w-[40px] shrink-0 md:w-[50px]"
          />
        );
      })}
    </div>
  );
};

export default SkillGallery;
