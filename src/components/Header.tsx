import type React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { Cog, House, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="z-30 max-w-7xl px-4 sm:px-6 lg:px-8 md:justify-start flex md:block fixed md:w-full justify-start bottom-[-10px] rounded-full md:top-[10px] md:bottom-[auto] right-1/2 translate-x-1/2">
      <nav
        style={{
          backdropFilter: 'blur(20px)',
        }}
        className="inline-block border-[2px] bg-[rgba(0,0,0,0.1)] md:bg-transparent border-[#0F8AD2] px-10 rounded-xl md:rounded-full py-3"
      >
        <motion.ul
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-5 items-center w-full"
        >
          <li>
            <a href="#home" className="text-lg md:text-2xl text-center">
              <span className="flex justify-center md:hidden">
                <House />
              </span>
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="#projects" className="text-lg md:text-2xl text-center">
              <span className="flex justify-center md:hidden">
                <Cog />
              </span>
              <p>Projects</p>
            </a>
          </li>
          <li>
            <a href="#contact" className="text-lg md:text-2xl text-center">
              <span className="flex justify-center md:hidden">
                <Mail />
              </span>
              <p>Contact</p>
            </a>
          </li>
          <li className="md:ml-10">
            <ThemeToggle />
          </li>
        </motion.ul>
      </nav>
    </header>
  );
};

export default Header;
