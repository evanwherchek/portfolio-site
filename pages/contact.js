import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MobileHeader from '../src/widgets/mobile-header';
import { motion } from 'motion/react';

function Contact() {
  return (
    <div className="w-full h-screen flex flex-col bg-navy items-center justify-center pt-16">
      <MobileHeader />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        className="flex flex-col items-center px-8"
      >
        <h1 className="font-poly text-white font-thin text-4xl mt-0 mb-6 text-center">
          Building something <span className="text-comfort-blue">cool</span>? Let&#39;s talk about it!
        </h1>
        <div className="flex flex-col items-center gap-4 m-1">
          <Button
            variant="contained"
            startIcon={<LinkedInIcon />}
            sx={{
              background: 'linear-gradient(to right, #2045FF, #20a6ff)',
              textTransform: 'none',
              borderRadius: '10px',
              width: '250px',
            }}
            onClick={() => {
              window.open('https://www.linkedin.com/in/evan-herchek/', '_blank');
            }}
          >
            Message me on LinkedIn
          </Button>
          <Button
            variant="contained"
            startIcon={<GitHubIcon />}
            sx={{
              background: 'linear-gradient(to right, #2045FF, #20a6ff)',
              textTransform: 'none',
              borderRadius: '10px',
              width: '250px',
            }}
            onClick={() => {
              window.open('https://github.com/evanwherchek', '_blank');
            }}
          >
            See my GitHub
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
