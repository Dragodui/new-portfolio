import type React from 'react';
import { motion } from 'framer-motion';
import SplitText from './ui/SplitText';
import { Calendar, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Seomood',
      position: 'Software Developer | NodeJS & Go',
      period: 'Sep 2022 - Present',
      location: 'Szczecin, Poland',
      achievements: [
        'Engineered scalable web applications using TypeScript, NestJS, Express, and Go, reducing load times by 40% and improving user engagement by 25%',
        'Optimized backend services through code refactoring and best practices, achieving 30% improvement in system reliability and 20% reduction in bug reports',
        'Designed and optimized RESTful APIs with SQL/NoSQL databases, improving data retrieval efficiency by 30%',
        'Implemented performance monitoring protocols that decreased system downtime by 25%'
      ],
      website: '#'
    }
  ];

  return (
    <section className="pt-10 md:py-20" id="experience">
      <h2 className="text-[50px] md:text-[80px] mb-6 flex items-center">
        <SplitText
          text="Work Experience"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin="-50px"
          textAlign='left'
        />
      </h2>
      <div className="flex flex-col">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="py-6 rounded-lg group"
            initial={{ opacity: 0, scale: 1, x: -1000 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-[32px] md:text-[60px] leading-[44px] flex items-center gap-4">
                {experience.company}
              
              </h3>
              <div className="flex items-center gap-2 text-text text-[14px] md:text-[16px] mt-2 md:mt-0">
                <Calendar size={18} />
                <span>{experience.period}</span>
              </div>
            </div>
            
            <p className="text-primary text-[18px] md:text-[24px] mb-4">{experience.position}</p>
            <p className="text-text text-[14px] md:text-[16px] mb-4">{experience.location}</p>
            
            <ul className="text-text text-[14px] md:text-[18px] mb-5 space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
            
            {/* <div className="w-full h-[3px] bg-primary transition-colors duration-300 group-hover:bg-text" /> */}
          </motion.div>
        ))}
        
        <motion.a
                href='#contact'
                className={`group relative mt-6 justify-center overflow-hidden bg-transparent border-[2px] border-primary px-7 py-3 text-2xl rounded-full`}
                style={{
                  backdropFilter: 'blur(20px)',
                }}
              >
                {/* Background overlay */}
                <span className="absolute bottom-0 left-0 w-full h-0 bg-primary transition-all duration-500 ease-in-out group-hover:h-full z-0"></span>

                <span className="relative justify-center text-center w-full z-10 hover:text-bg duration-50 flex items-center gap-2">
                  <p>Get in touch</p> <ExternalLink/>
                </span>
              </motion.a>
      </div>
    </section>
  );
};

export default Experience;
