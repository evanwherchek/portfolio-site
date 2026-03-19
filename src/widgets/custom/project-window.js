import { Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import CategoryChip from './category-chip';
import Image from 'next/image';
import { motion } from 'motion/react';

function ProjectWindow({
  sourceImage,
  projectTitle,
  description,
  year,
  categories,
  link,
}) {
  const chipItems = categories.map((item, index) => (
    <CategoryChip key={index} text={item} />
  ));

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <div className="w-96 h-96 bg-panel-blue rounded-2xl flex flex-col border border-white/10">
        <h2 className="font-poly text-3xl text-white ml-6 mt-8">
          {projectTitle}
        </h2>
        <p className="font-poly text-white font-thin text-xl text-left w-3/4 ml-6 mt-2">
          {description}
        </p>
        <div className="flex mt-auto">
          <Image
            src={sourceImage}
            width={192}
            height={192}
            className="bg-background-white rounded-tr-2xl rounded-bl-2xl p-5 object-contain"
            alt={projectTitle}
          />
          <div className="m-2" />
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-sm text-comfort-blue opacity-80 mb-3">{year}</h3>
              <ul>{chipItems}</ul>
            </div>
            <Button
              variant="contained"
              startIcon={<GitHubIcon />}
              sx={{
                background: 'linear-gradient(to right, #2045FF, #20a6ff)',
                textTransform: 'none',
                borderRadius: '10px',
                width: '150px',
                marginBottom: '30px',
              }}
              onClick={() => {
                window.open(link, '_blank');
              }}
            >
              See the code
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectWindow;
