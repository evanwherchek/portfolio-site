import { motion } from 'motion/react';
import StatText from '../src/widgets/custom/stat-text';
import Image from 'next/image';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import ProjectWindow from '../src/widgets/custom/project-window';
import MobileHeader from '../src/widgets/mobile-header';

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
    <div>
      <div className="w-full bg-showcase-grey flex flex-col items-center justify-center pt-16 pb-12">
        <MobileHeader />
        <h1 className="font-poly text-white font-thin text-4xl mt-8 mb-8 underline">
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
          <div className="flex flex-col align-top justify-center gap-12">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 3,
            delay: 1.5,
          }}
        >
          <div className="flex flex-col items-center justify-between mt-12 gap-12 px-4">
            <div>
              <h2 className="font-poly text-white underline font-thin text-2xl text-center mb-4">
                Education
              </h2>
              <div className="flex flex-row items-center justify-center mt-1">
                <Image
                  src="/images/tamu-logo.png"
                  width={40}
                  height={40}
                  className="mr-4"
                  alt="Texas A&M Logo"
                />
                <div>
                  <p className="font-poly text-white text-xl">
                    Texas A&M University
                  </p>
                  <p className="font-poly text-white text-xl">
                    BA in Computing
                  </p>
                  <p className="font-poly text-white text-xl">
                    2021 - 2024, GPA: 3.3
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-poly text-white underline font-thin text-2xl text-center mb-4">
                Experience
              </h2>
              <div className="flex flex-row items-center justify-center mt-1">
                <Image
                  src="/images/nisc-logo.png"
                  width={40}
                  height={40}
                  className="mr-4"
                  alt="NISC Logo"
                />
                <div>
                  <p className="font-poly text-white text-xl">NISC</p>
                  <p className="font-poly text-white text-xl">
                    Software Developer
                  </p>
                  <p className="font-poly text-white text-xl">2024 - Present</p>
                </div>
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
          className="flex flex-col items-center justify-center gap-4 mt-12 px-4"
        >
          <h2 className="font-poly text-white font-thin text-2xl underline text-center mb-4">
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
      <div className="w-full bg-showcase-grey flex flex-col items-center justify-center pb-16">
        <h2 className="font-poly text-white font-thin text-4xl mt-16 mb-12 underline">
          Featured Projects
        </h2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-[50px]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: 0.5,
            }}
          >
            <ProjectWindow
              sourceImage="/images/resutailor.png"
              projectTitle={'Resutailor'}
              description={'Generate a fine-tuned resume for any application.'}
              year="2024"
              link="https://github.com/evanwherchek/resutailor"
              categories={['Web', 'AI']}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: 1,
            }}
          >
            <ProjectWindow
              sourceImage="/images/coatails.png"
              projectTitle={'Coatails'}
              description={'Make strong professional connections IRL.'}
              year="2021 - 2024"
              link="https://github.com/evanwherchek/resutailor"
              categories={['Mobile', 'Full Stack']}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
              delay: 1.5,
            }}
          >
            <ProjectWindow
                sourceImage="/images/portfolio-site.png"
                projectTitle={'Portfolio Site'}
                description={'A complete developer website.'}
                year="2025"
                link="https://github.com/evanwherchek/portfolio-site"
                categories={['Web']}
            />
          </motion.div>
        </div>
        <Button
          variant="text"
          sx={{
            color: '#ffffff',
            textDecoration: 'underline',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '10px',
            fontSize: '1rem',
            marginTop: '3rem',
          }}
          onClick={() => {
            window.open('https://github.com/evanwherchek', '_blank');
          }}
        >
          See all projects on my GitHub
        </Button>
        <Button
          variant="contained"
          startIcon={<Download />}
          sx={{
            background: 'linear-gradient(to right, #2045FF, #20a6ff)',
            textTransform: 'none',
            borderRadius: '10px',
            marginTop: '2rem',
            width: '150px',
          }}
          onClick={() => {
            handleFileDownload();
          }}
        >
          Full resume
        </Button>
      </div>
    </div>
  );
}

export default Qualifications;
