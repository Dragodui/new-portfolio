'use client';

import React, { useEffect, useState } from 'react';
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

  const [containerSize, setContainerSize] = useState(
    window.innerWidth < 450 ? 350 : 400
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setContainerSize(350);
      } else {
        setContainerSize(400);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className="flex flex-wrap content-start items-start gap-2 rounded-lg"
      style={{ height: containerSize, width: containerSize }}
    >
      {icons.map((icon, index) => {
        return (
    
          <motion.img
            key={index}
            src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
            alt={icon}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="block aspect-square w-[80px]"
          />
        );
      })}
    </div>
  );
};

export default SkillGallery;
