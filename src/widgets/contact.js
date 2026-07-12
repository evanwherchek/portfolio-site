import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'motion/react';
import Threads from './external/threads';

function Contact() {
  return (
    <div className="relative min-h-screen w-full bg-navy flex flex-col items-center justify-center">
      <div className="absolute flex flex-col items-center justify-center inset-0 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-poly text-white font-thin text-4xl lg:text-5xl text-center mb-6">
            Building something <span className="text-comfort-blue">cool</span>? Let&#39;s talk about it!
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
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
    </div>
  );
}

export default Contact;
