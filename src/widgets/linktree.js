import Threads from './external/threads';
import { motion } from 'motion/react';
import { Button, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Image from 'next/image';

function Linktree({ scrollToSection }) {
  return (
    <div className="relative min-h-screen w-full bg-navy flex flex-col items-center justify-center">
      <Threads amplitude={1} distance={0} enableMouseInteraction={false} />
      <div className="absolute inset-0 flex flex-col items-center justify-between py-12">
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3 }}
            >
              <Image
                width={300}
                height={300}
                className="w-10/12 mx-auto mb-4"
                src="/images/logo-1.png"
                alt="logo"
              />
            </motion.p>
          </motion.div>
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Button
              variant="contained"
              startIcon={<LinkedInIcon />}
              sx={{
                background: 'linear-gradient(to right, #2045FF, #20a6ff)',
                textTransform: 'none',
                borderRadius: '10px',
                margin: '0.5rem',
              }}
              onClick={() => {
                window.open(
                  'https://www.linkedin.com/in/evan-herchek/',
                  '_blank'
                );
              }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              sx={{
                background: 'linear-gradient(to right, #2045FF, #20a6ff)',
                textTransform: 'none',
                borderRadius: '10px',
                margin: '0.5rem',
              }}
              onClick={() => {
                window.open('https://github.com/evanwherchek', '_blank');
              }}
            >
              GitHub
            </Button>
          </motion.div>
        </div>
        <IconButton
          size="small"
          aria-label="Scroll down"
          onClick={() => scrollToSection('about')}
        >
          <KeyboardArrowDownIcon className="text-white" />
        </IconButton>
      </div>
    </div>
  );
}

export default Linktree;
