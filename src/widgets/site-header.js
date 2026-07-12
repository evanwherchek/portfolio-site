import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileMenu from './mobile-menu';

const SiteHeader = ({ scrollToSection, isVisible = true }) => {
  const [shouldRender, setShouldRender] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      // Delay unmounting to allow fade-out animation
      const timer = setTimeout(() => setShouldRender(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
  };

  if (!shouldRender) return null;

  return (
    <header
      className={`sticky top-0 left-0 h-16 p-2 bg-navy grid grid-cols-[1fr_auto_1fr] items-center w-screen z-50 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}
    >
      <div className="flex items-center justify-center">
        <MobileMenu scrollToSection={scrollToSection} />
        <div className="hidden lg:flex items-center">
          <button
            className="bg-none border-none cursor-pointer px-2 py-2 text-sm font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button
            className="bg-none border-none cursor-pointer px-2 py-2 text-sm font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
            onClick={() => handleNavClick('inspirations')}
          >
            Inspirations
          </button>
          <button
            className="bg-none border-none cursor-pointer px-2 py-2 text-sm font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </button>
          <button
            className="bg-none border-none cursor-pointer px-2 py-2 text-sm font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
            onClick={() => handleNavClick('qualifications')}
          >
            Qualifications
          </button>
          <button
            className="bg-none border-none cursor-pointer px-2 py-2 text-sm font-inter text-white no-underline rounded transition-colors duration-300 hover:bg-gray-200 hover:bg-opacity-20"
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Image width={192} height={192} src="/images/logo-2.png" alt="logo" />
      </div>

      <div className="flex items-center justify-center">
        <Stack direction="row" spacing={1}>
          <a
            href="https://www.linkedin.com/in/evan-herchek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small" aria-label="LinkedIn">
              <LinkedInIcon className="text-white text-xl" />
            </IconButton>
          </a>
          <a
            href="https://github.com/evanwherchek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small" aria-label="GitHub">
              <GitHubIcon className="text-white text-xl" />
            </IconButton>
          </a>
        </Stack>
      </div>
    </header>
  );
};

export default SiteHeader;
