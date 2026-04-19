import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import { motion } from 'motion/react';

import StatText from './custom/stat-text';
import Image from 'next/image';
import config from '../data/content-config.yaml';

function Qualifications() {
  const handleFileDownload = () => {
    const link = document.createElement('a');

    link.href = config.resume.path;
    link.download = config.resume.filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full bg-navy flex flex-col items-center justify-center py-32">
      <h1 className="font-poly font-thin text-5xl mb-4">
        <span className="text-comfort-blue">Qualifications</span>
      </h1>
      <div className="w-16 h-px bg-comfort-blue opacity-60 mb-12" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 3, delay: 1 }}
      >
        <div className="flex flex-row justify-center gap-16 mb-16">
          {config.stats.map((stat, index) => (
            <StatText key={index} number={stat.number} smallText={stat.text} />
          ))}
        </div>
      </motion.div>

      <div className="flex flex-row gap-8 w-full max-w-5xl px-8">

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.25 }}
          className="flex-1"
        >
          <div className="bg-panel-blue rounded-2xl p-6 border border-white/10 h-full flex flex-col">
            <h2 className="font-poly text-comfort-blue font-thin text-2xl mb-6">Education</h2>
            <div className="flex flex-row items-center gap-5">
              <Image
                src={config.education[0].logo}
                width={60}
                height={60}
                className="object-contain flex-shrink-0"
                alt={config.education[0].alt}
              />
              <div>
                <p className="font-poly text-white text-xl">{config.education[0].school}</p>
                <p className="font-poly text-white/60 text-lg">{config.education[0].degree}</p>
                <p className="font-poly text-white/60 text-lg">{config.education[0].years} · GPA {config.education[0].gpa}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.5 }}
          className="flex-1"
        >
          <div className="bg-panel-blue rounded-2xl p-6 border border-white/10 h-full flex flex-col">
            <h2 className="font-poly text-comfort-blue font-thin text-2xl mb-6">Experience</h2>
            <div className="flex flex-row items-center gap-5">
              <Image
                src={config.experience[0].logo}
                width={60}
                height={60}
                className="object-contain flex-shrink-0"
                alt={config.experience[0].alt}
              />
              <div>
                <p className="font-poly text-white text-xl">{config.experience[0].company}</p>
                <p className="font-poly text-white/60 text-lg">{config.experience[0].role}</p>
                <p className="font-poly text-white/60 text-lg">{config.experience[0].period}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 1.75 }}
          className="flex-1"
        >
          <div className="bg-panel-blue rounded-2xl p-6 border border-white/10 h-full flex flex-col">
            <h2 className="font-poly text-comfort-blue font-thin text-2xl mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {config.technologies.map((tech, index) => (
                <Image key={index} src={tech.url} alt={tech.alt} width={0} height={0} className="h-7 w-auto" unoptimized />
              ))}
            </div>
          </div>
        </motion.div>

      </div>

      <Button
        variant="contained"
        startIcon={<Download />}
        sx={{
          background: 'linear-gradient(to right, #2045FF, #20a6ff)',
          textTransform: 'none',
          borderRadius: '10px',
          marginTop: '3rem',
          width: '150px',
        }}
        onClick={handleFileDownload}
      >
        Full resume
      </Button>
    </div>
  );
}

export default Qualifications;
