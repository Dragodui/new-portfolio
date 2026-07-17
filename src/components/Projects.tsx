import type React from 'react';
import { motion } from 'framer-motion';
import SplitText from './ui/SplitText';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'My Deploy',
      description: 'Deployment tooling and CI/CD scripts for personal projects.',
      github: 'https://github.com/Dragodui/my-deploy',
      demo: '',
    },
    {
      name: 'Home App',
      description: 'Home automation frontend and backend for device control and monitoring.',
      github: 'https://github.com/Dragodui/home-app',
      demo: '',
    },
    {
      name: 'PC Controll',
      description: 'Remote PC control utilities and automation scripts.',
      github: 'https://github.com/Dragodui/pc-controll',
      demo: '',
    },
    {
      name: 'DB Schemas Generator',
      description: 'Visualize MySQL/PostgreSQL database schemas using interactive diagrams.',
      github: 'https://github.com/Dragodui/db-schemas-generator',
      demo: '',
    },
  ];

  return (
    <section className=" pt-10 md:py-20" id="projects">
      <h2 className="text-[50px] md:text-[60px] mb-6 flex items-center">
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
            key={project.demo}
            target="_blank"
            href={project.github}
            className="bg-bg py-6 rounded-lg group"
            initial={{ opacity: 0, scale: 1, x: -1000 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <h3 className="text-[32px] md:text-[45px] leading-[44px] flex items-center gap-4">
              <p>{project.name}</p>
              {/* <MoveRight
             size={70}
             className="transition-transform text-text duration-300 group-hover:translate-x-4 group-hover:text-text"
           /> */}
            </h3>
            <p className="text-text text-[14px] md:text-[20px] mb-5">{project.description}</p>
            <div className="w-full h-[3px] bg-text transition-colors duration-300 group-hover:bg-text" />
          </motion.a>
        ))}
         <motion.a
                href='https://github.com/Dragodui'
                className={`group relative mt-6 justify-center overflow-hidden bg-transparent border-[2px] border-text px-7 py-3 text-2xl rounded-lg`}
                style={{
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Background overlay */}
                <span className="absolute bottom-0 left-0 w-full h-0 bg-text transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>

                <span className="relative justify-center text-center w-full z-10 hover:text-bg duration-50 flex items-center gap-2">
                  <p>More on my GitHub</p> <Github size={28}/>
                </span>
              </motion.a>
      </div>
    </section>
  );
};

export default Projects;
