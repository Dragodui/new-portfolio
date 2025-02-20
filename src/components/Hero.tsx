'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import BlurText from './ui/BlurText';
import SkillIcons from './SkillIcons';
import Button from './ui/Button';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const mySocial = [
    {
      name: 'Github',
      link: 'https://github.com/dragodui',
      icon: <Linkedin size={40} />,
    },
    {
      name: 'Linkedin',
      link: 'https://linkedin.com/in/dragodui',
      icon: <Github size={40} />,
    },
    {
      name: 'Gmail',
      link: 'alghazaliaks123@gmail.com',
      icon: <Mail size={40} />,
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/dragodui',
      icon: <Instagram size={40} />,
    },
  ];

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
                text="Full Stack Developer"
                className="font-bold text-[64px] md:text-[80px] text-primary"
              ></BlurText>
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <Button>Download my CV</Button>
              <div className="flex items-center gap-3 ">
                {mySocial.map((social, index) => {
                  return (
                    <motion.a
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.4 }}
                      key={index}
                      href={
                        social.name === 'Gmail'
                          ? `mailto:${social.link}`
                          : social.link
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="text-2xl text-primary hover:text-primary-dark bg-secondary p-3 rounded-xl hover:scale-110 transition-transform duration-300"
                    >
                      {social.icon}
                    </motion.a>
                  );
                })}
              </div>
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
