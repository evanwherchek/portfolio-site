import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import { motion } from 'motion/react';

import StatText from './custom/stat-text';
import Image from 'next/image';

function Qualifications() {
  const handleFileDownload = () => {
    const link = document.createElement('a');

    link.href = '/resume.pdf';
    link.download = 'Resume - Evan Herchek';

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
          <StatText number={1} smallText={'year of full time software engineering experience'} />
          <StatText number={6} smallText={'cloud provider certifications'} />
          <StatText number={8} smallText={'years of building software projects'} />
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
                src="/images/tamu-logo.png"
                width={60}
                height={60}
                className="object-contain flex-shrink-0"
                alt="Texas A&M Logo"
              />
              <div>
                <p className="font-poly text-white text-xl">Texas A&M University</p>
                <p className="font-poly text-white/60 text-lg">BA in Computing</p>
                <p className="font-poly text-white/60 text-lg">2021 – 2024 · GPA 3.3</p>
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
                src="/images/nisc-logo.png"
                width={60}
                height={60}
                className="object-contain flex-shrink-0"
                alt="NISC Logo"
              />
              <div>
                <p className="font-poly text-white text-xl">NISC</p>
                <p className="font-poly text-white/60 text-lg">Software Developer</p>
                <p className="font-poly text-white/60 text-lg">2024 – Present</p>
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
              <Image src="https://img.shields.io/badge/-Java-000?style=flat&logo=openjdk&logoColor=007396" alt="Java badge" width={0} height={0} className="h-7 w-auto" unoptimized />
              <Image src="https://img.shields.io/badge/-Python-000?style=flat&logo=Python" alt="Python badge" width={0} height={0} className="h-7 w-auto" unoptimized />
              <Image src="https://img.shields.io/badge/-Javascript-000?style=flat&logo=JavaScript" alt="Javascript badge" width={0} height={0} className="h-7 w-auto" unoptimized />
              <Image src="https://img.shields.io/badge/-SQL-000?style=flat&logo=MySQL" alt="SQL badge" width={0} height={0} className="h-7 w-auto" unoptimized />
              <Image src="https://custom-icon-badges.demolab.com/badge/-AWS-000?style=flat&logo=aws&logoColor=FF9900" alt="AWS badge" width={0} height={0} className="h-7 w-auto" unoptimized />
              <Image src="https://img.shields.io/badge/-Google%20Cloud-000?style=flat&logo=Google-Cloud&logoColor=4285F4" alt="GCP badge" width={0} height={0} className="h-7 w-auto" unoptimized />
              <Image src="https://img.shields.io/badge/-Flutter-000?style=flat&logo=Flutter&logoColor=02569B" alt="Flutter badge" width={0} height={0} className="h-7 w-auto" unoptimized />
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
