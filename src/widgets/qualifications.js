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
    <div className="w-full bg-showcase-grey flex flex-col items-center justify-center py-32">
      <h1 className="font-poly text-white font-thin text-5xl mb-12 underline">
        Qualifications
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          delay: 1,
        }}
      >
        <div className="flex flex-row align-top justify-center gap-12">
          <StatText
            number={1}
            smallText={'year of full time software engineering experience'}
          />
          <StatText
            number={6}
            smallText={'cloud provider certifications'}
          />
          <StatText
            number={8}
            smallText={'years of building software projects'}
          />
        </div>
      </motion.div>
      <div className="flex flex-row mt-16 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 3,
            delay: 1.5,
          }}
          className="flex flex-col w-1/2 gap-12"
        >
          <div>
            <h2 className="font-poly text-white underline font-thin text-3xl text-left mb-4">
              Education
            </h2>
            <div className="flex flex-row items-center justify-start gap-8">
              <Image
                src="/images/tamu-logo.png"
                width={0}
                height={0}
                className="h-20 w-auto"
                alt="Texas A&M Logo"
              />
              <div>
                <p className="font-poly text-white text-3xl">
                  Texas A&M University
                </p>
                <p className="font-poly text-white text-2xl">BA in Computing</p>
                <p className="font-poly text-white text-2xl">
                  2021 - 2024, GPA: 3.3
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-poly text-white underline font-thin text-3xl text-left mb-4">
              Experience
            </h2>
            <div className="flex flex-row items-center justify-start gap-8">
              <Image
                src="/images/nisc-logo.png"
                width={0}
                height={0}
                className="h-22 w-auto"
                alt="NISC Logo"
              />
              <div>
                <p className="font-poly text-white text-3xl">NISC</p>
                <p className="font-poly text-white text-2xl">
                  Software Developer
                </p>
                <p className="font-poly text-white text-2xl">2024 - Present</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 3,
            delay: 1.75,
          }}
          className="flex flex-col w-1/2 items-center justify-center gap-4"
        >
          <h2 className="font-poly text-white font-thin text-3xl underline mb-4">
            Top languages and technologies
          </h2>
          <div className="flex flex-wrap w-2/3 items-center justify-center gap-2">
            <Image
              src="https://img.shields.io/badge/-Java-000?style=flat&logo=openjdk&logoColor=007396"
              alt="Java badge"
              width={0}
              height={0}
              className="h-7 w-auto"
              unoptimized
            />
            <Image
              src="https://img.shields.io/badge/-Python-000?style=flat&logo=Python"
              alt="Python badge"
              width={0}
              height={0}
              className="h-7 w-auto"
              unoptimized
            />
            <Image
              src="https://img.shields.io/badge/-Javascript-000?style=flat&logo=JavaScript"
              alt="Javascript badge"
              width={0}
              height={0}
              className="h-7 w-auto"
              unoptimized
            />
            <Image
              src="https://img.shields.io/badge/-SQL-000?style=flat&logo=MySQL"
              alt="SQL badge"
              width={0}
              height={0}
              className="h-7 w-auto"
              unoptimized
            />
            <Image
              src="https://custom-icon-badges.demolab.com/badge/-AWS-000?style=flat&logo=aws&logoColor=FF9900"
              alt="AWS badge"
              width={0}
              height={0}
              className="h-7 w-auto"
              unoptimized
            />
            <Image
              src="https://img.shields.io/badge/-Google%20Cloud-000?style=flat&logo=Google-Cloud&logoColor=4285F4"
              alt="GCP badge"
              width={0}
              height={0}
              className="h-7 w-auto"
              unoptimized
            />
            <Image
              src="https://img.shields.io/badge/-Flutter-000?style=flat&logo=Flutter&logoColor=02569B"
              alt="Flutter badge"
              width={0}
              height={0}
              className="h-7 w-auto"
              unoptimized
            />
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
        onClick={() => {
          handleFileDownload();
        }}
      >
        Full resume
      </Button>
    </div>
  );
}

export default Qualifications;
