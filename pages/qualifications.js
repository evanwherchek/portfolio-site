import { motion } from 'motion/react';
import StatText from '../src/widgets/custom/stat-text';
import Image from 'next/image';
import { Button } from '@mui/material';
import { Download } from '@mui/icons-material';
import ProjectWindow from '../src/widgets/custom/project-window';
import MobileHeader from '../src/widgets/mobile-header';
import config from '../src/data/content-config.yaml';

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
    <div>
      <div className="w-full bg-navy flex flex-col items-center justify-center pt-16 pb-12">
        <MobileHeader />
        <h1 className="font-poly text-comfort-blue font-thin text-4xl mt-8 mb-4">
          Qualifications
        </h1>
        <div className="w-16 h-px bg-comfort-blue opacity-60 mb-8" />
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
            {config.stats.map((stat) => (
              <StatText key={stat.text} number={stat.number} smallText={stat.text} />
            ))}
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
            <div className="bg-panel-blue rounded-2xl p-4 border border-white/10 w-full">
              <h2 className="font-poly text-comfort-blue font-thin text-2xl text-center mb-4">
                Education
              </h2>
              {config.education.map((edu) => (
                <div key={edu.school} className="flex flex-row items-center justify-center mt-1">
                  <Image src={edu.logo} width={40} height={40} className="mr-4" alt={edu.alt} />
                  <div>
                    <p className="font-poly text-white text-xl">{edu.school}</p>
                    <p className="font-poly text-white text-xl">{edu.degree}</p>
                    <p className="font-poly text-white text-xl">{edu.years}, GPA: {edu.gpa}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-panel-blue rounded-2xl p-4 border border-white/10 w-full">
              <h2 className="font-poly text-comfort-blue font-thin text-2xl text-center mb-4">
                Experience
              </h2>
              {config.experience.map((exp) => (
                <div key={exp.company} className="flex flex-row items-center justify-center mt-1">
                  <Image src={exp.logo} width={40} height={40} className="mr-4" alt={exp.alt} />
                  <div>
                    <p className="font-poly text-white text-xl">{exp.company}</p>
                    <p className="font-poly text-white text-xl">{exp.role}</p>
                    <p className="font-poly text-white text-xl">{exp.period}</p>
                  </div>
                </div>
              ))}
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
          <div className="bg-panel-blue rounded-2xl p-4 border border-white/10 flex flex-col items-center gap-4 w-full">
            <h2 className="font-poly text-comfort-blue font-thin text-2xl text-center mb-4">
              Top languages and technologies
            </h2>
            <div className="flex flex-wrap w-2/3 items-center justify-center gap-2">
              {config.technologies.map((tech) => (
                <Image
                  key={tech.alt}
                  src={tech.url}
                  alt={tech.alt}
                  width={0}
                  height={0}
                  className="h-7 w-auto"
                  unoptimized
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <div className="w-full bg-navy flex flex-col items-center justify-center pb-16">
        <h2 className="font-poly font-thin text-4xl mt-16 mb-4">
          <span className="text-comfort-blue">Featured</span>{' '}
          <span className="text-white">Projects</span>
        </h2>
        <div className="w-16 h-px bg-comfort-blue opacity-60 mb-12" />
        <div className="flex flex-row flex-wrap items-center justify-center gap-[50px]">
          {config.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 + index * 0.5 }}
            >
              <ProjectWindow
                sourceImage={project.image}
                projectTitle={project.title}
                description={project.description}
                year={project.year}
                link={project.link}
                categories={project.categories}
              />
            </motion.div>
          ))}
        </div>
        <Button
          variant="outlined"
          sx={{
            color: '#ffffff',
            borderColor: '#ffffff',
            fontWeight: 'bold',
            textTransform: 'none',
            borderRadius: '10px',
            fontSize: '1rem',
            marginTop: '3rem',
            paddingX: '1.5rem',
            paddingY: '0.5rem',
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
