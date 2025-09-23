'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import BlurText from './ui/BlurText';
import SkillIcons from './SkillIcons';
import cv from '../assets/cv-aksandr-al-ghazali.pdf';
import SocialMedias from './ui/SocialMedias';

const Hero: React.FC = () => {
  return (
    <section className="pt-10  md:pt-[180px]" id="home">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className=""
      >
        <div className="flex justify-between flex-col md:flex-row mb-[20px] md:mb-0">
          <div className="md:mb-0 mb-[25px]">
            <h1 className="text-[44px] md:text-[50px] mb-10">
              Hi
              <motion.span
                className="inline-block"
                animate={{
                  scale: [1, 2, 2, 2, 2, 2, 1],
                  rotate: [0, 20, -20, 20, -20, 20, 0],
                }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                👋
              </motion.span>{' '}
              I`m Aksandr Al-Ghazali <br />
              <BlurText
                text="Software Engineer"
                className="font-bold text-[64px] md:text-[80px] text-primary"
              ></BlurText>
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <motion.a
                download
                href={cv}
                className={`group relative overflow-hidden bg-transparent border-[2px] border-primary px-7 py-3 text-2xl rounded-full`}
                style={{
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Background overlay */}
                <span className="absolute bottom-0 left-0 w-full h-0 bg-primary transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>

                {/* Text content */}
                <span className="relative z-10 hover:text-bg duration-500">
                  Download my CV
                </span>
              </motion.a>
              <SocialMedias />
            </div>
          </div>
          <SkillIcons />
        </div>
      </motion.div>
    </section>
  );
};
{
  /* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full"
        >
        </motion.button> */
}
export default Hero;
