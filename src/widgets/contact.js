import { Button, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'motion/react';
import Image from 'next/image';

function SubstackIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className={className} fill="currentColor">
      <path d="M22.539 8.242H1.46V10.94H22.54zM1.46 12.7v9.13L12 16.616l10.539 5.213V12.7zM22.539 1.66H1.46v2.7h21.08z" />
    </svg>
  );
}

function Contact() {
  return (
    <div className="relative min-h-screen w-full bg-navy overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[900px] h-[900px] top-0 -left-64 bg-[radial-gradient(circle,rgba(32,179,255,0.16),transparent_70%)] animate-glow-drift-1" />
        <div className="absolute w-[800px] h-[800px] -bottom-56 -right-52 bg-[radial-gradient(circle,rgba(32,69,255,0.14),transparent_70%)] animate-glow-drift-2" />
      </div>

      <div className="relative flex flex-col items-center justify-center inset-0 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-poly text-white font-thin text-4xl lg:text-5xl text-center mb-6">
            Building something <span className="text-comfort-blue">cool</span>? Let&#39;s talk about it.
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
              variant="outlined"
              startIcon={<GitHubIcon />}
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                textTransform: 'none',
                borderRadius: '10px',
                width: '250px',
                '&:hover': {
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                },
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

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 px-8 py-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div className="text-sm text-white/40">© 2026 Evan Herchek</div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/evan-herchek/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small" aria-label="LinkedIn">
              <LinkedInIcon className="text-white/70 text-xl" />
            </IconButton>
          </a>
          <a
            href="https://github.com/evanwherchek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small" aria-label="GitHub">
              <GitHubIcon className="text-white/70 text-xl" />
            </IconButton>
          </a>
          <a
            href="https://substack.com/@evanherchek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small" aria-label="Substack">
              <SubstackIcon className="fill-white/70 w-5 h-5" />
            </IconButton>
          </a>
        </div>
        <Image width={164} height={164} src="/images/logo-2.png" alt="Evan Herchek logo" />
      </div>
    </div>
  );
}

export default Contact;
