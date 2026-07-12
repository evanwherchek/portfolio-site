import { motion } from 'motion/react';
import MobileHeader from '../src/widgets/mobile-header';
import Ripple from '../src/widgets/custom/ripple';

function Inspirations() {
  return (
    <div className="relative overflow-hidden h-screen w-full flex items-center justify-center flex-col bg-navy pt-16">
      <Ripple mainCircleSize={500}/>
      <MobileHeader />
      <h2 className="relative z-10 font-poly text-white font-thin text-3xl text-center underline mb-2 mt-2">
        Things that inspire me
      </h2>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <div className="flex items-center justify-center gap-4 mt-2 mb-2">
            <p className="font-poly text-white font-thin text-xl lg:text-2xl">
              Software engineering
            </p>
            <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
              Cooking
            </p>
            <p className="font-poly text-white font-thin text-xl lg:text-2xl">
              Learning
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.75,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <div className="flex items-center justify-center gap-4 mt-2 mb-2">
            <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
              Gaming
            </p>
            <p className="font-poly text-white font-thin text-xl lg:text-2xl">
              Travel
            </p>
            <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
              DevOps
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <div className="flex items-center justify-center gap-4 mt-2 mb-2">
            <p className="font-poly text-white font-thin text-xl lg:text-2xl">
              Business strategy
            </p>
            <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
              Gardening
            </p>
            <p className="font-poly text-white font-thin text-xl lg:text-2xl">
              Fencing
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 1.25,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <div className="flex items-center justify-center gap-4 mt-2 mb-2">
            <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
              Data science
            </p>
            <p className="font-poly text-white font-thin text-xl lg:text-2xl">
              Capital management
            </p>
            <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
              Skiing
            </p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
        >
          <div className="flex items-center justify-center gap-4 mt-2 mb-2">
            <p className="font-poly text-white font-thin text-xl lg:text-2xl">
              History
            </p>
            <p className="font-poly text-comfort-blue font-thin text-xl lg:text-2xl">
              Design
            </p>
            <p className="font-poly text-white font-thin text-xl lg:text-2xl">
              Hiking
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Inspirations;
