import config from '../data/content-config.yaml';
import ProjectWindow from './custom/project-window';
import { motion } from 'motion/react';
import { Button } from '@mui/material';

function Projects() {
  return (
    <div className="w-full bg-showcase-grey flex flex-col items-center justify-center py-32">
      <h2 className="font-poly text-white font-thin text-5xl mb-12 underline">
        Featured Projects
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-[50px]">
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
    </div>
  );
}

export default Projects;
