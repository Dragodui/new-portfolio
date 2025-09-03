import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import React, { FC } from 'react';

interface SocialMediasProps {
  className?: string;
  iconSize?: number;
}

const SocialMedias: FC<SocialMediasProps> = ({ className, iconSize = 40 }) => {
  const mySocial = [
    {
      name: 'Github',
      link: 'https://github.com/dragodui',
      icon: <Github size={iconSize} />,
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/aksandr-al-ghazali/',
      icon: <Linkedin size={iconSize} />,
    },
    {
      name: 'Gmail',
      link: 'alghazaliaks123@gmail.com',
      icon: <Mail size={iconSize} />,
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/dragodui',
      icon: <Instagram size={iconSize} />,
    },
  ];
  return (
    <div className="flex items-center gap-3 ">
      {mySocial.map((social, index) => {
        return (
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.4 }}
            key={index}
            href={
              social.name === 'Gmail' ? `mailto:${social.link}` : social.link
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
  );
};

export default SocialMedias;
