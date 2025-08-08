import React from 'react';  
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 py-6 mt-10 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* على الموبايل نص مركز (text-center)، وعلى الديسكتوب يمين */}
        <p className="text-lg text-center md:text-left">
          © {new Date().getFullYear()} Mahmoud Nagi. All Rights Reserved.
        </p>
        {/* أيقونات التواصل تبقى وسط العرض على الموبايل */}
        <div className="flex gap-6 text-lg justify-center md:justify-start">
          <a 
            href="https://github.com/MohamedNagy465" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/mahmoud-saleh-74bb43220/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-purple-600 dark:hover:text-purple-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:0xmahmoudnagy@gmail.com"
            className="hover:text-purple-400 dark:hover:text-purple-500 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
