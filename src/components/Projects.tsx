'use client';

import type React from 'react';
import { motion } from 'framer-motion';
import SplitText from './ui/SplitText';
import { GitBranch, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'Music Player',
      description:
        'Music player built with React and Electron using TypeScript and TailwindCSS.',
      github: 'https://github.com/Dragodui/electron-player',
      demo: '',
    },
    {
      name: 'Delivery App',
      description:
        'Delivery app built with React and Express using JavaScript and TailwindCSS.',
      github: 'https://github.com/Dragodui/delivery-app',
      demo: '',
    },
    {
      name: 'Weather App',
      description:
        'Weather app build with React using TypeScript, TailwindCSS and open weather API.',
      github: 'https://github.com/Dragodui/weather-app',
      demo: 'https://dragodui-weather-app.netlify.app/',
    },
    {
      name: 'Currency Converter',
      description:
        'Currency converter app build with React using JavaScript, SCSS and floatrates API.',
      github: 'https://github.com/Dragodui/currency-converter-on-React',
      demo: '',
    },
  ];

  return (
    <section className=" pt-10 md:py-20" id="projects">
      <h2 className="text-[50px] md:text-[80px] mb-6 flex items-center">
        <SplitText
          text="My Projects"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin="-50px"
        />
        {/* <motion.div
          transition={{ duration: 1.15, delay: 0.5 }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0, 0, 0, 1],
            y: [100, 0],
          }}
        >
          <Cog size={70} />
        </motion.div> */}
      </h2>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            target="_blank"
            href={project.github}
            className="bg-bg py-6 rounded-lg group"
            initial={{ opacity: 0, scale: 1, x: -1000 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h3 className="text-[32px] md:text-[60px] leading-[44px] flex items-center gap-4">
              <p>{project.name}</p>
              {/* <MoveRight
             size={70}
             className="transition-transform text-text duration-300 group-hover:translate-x-4 group-hover:text-primary"
           /> */}
            </h3>
            <p className="text-text text-[14px] md:text-[20px] mb-5">{project.description}</p>
            <div className="w-full h-[3px] bg-primary transition-colors duration-300 group-hover:bg-text" />
          </motion.a>
        ))}
         <motion.a
                href='https://github.com/Dragodui'
                className={`group relative mt-6 justify-center overflow-hidden bg-transparent border-[2px] border-primary px-7 py-3 text-2xl rounded-full`}
                style={{
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Background overlay */}
                <span className="absolute bottom-0 left-0 w-full h-0 bg-primary transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>

                <span className="relative justify-center text-center w-full z-10 hover:text-bg duration-50 flex items-center gap-2">
                  <p>More on my GitHub</p> <Github size={28}/>
                </span>
              </motion.a>
      </div>
    </section>
  );
};

export default Projects;
