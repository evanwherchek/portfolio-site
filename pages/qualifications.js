import { motion } from 'motion/react';
import Image from 'next/image';
import MobileHeader from '../src/widgets/mobile-header';
import config from '../src/data/content-config.yaml';

const pillClasses =
  'block text-center font-inter font-semibold text-[13px] uppercase tracking-widest text-comfort-blue border border-comfort-blue rounded-full py-3 hover:bg-comfort-blue/10 transition-colors';

function Qualifications() {
  const credentials = [...config.education, ...config.experience];
  const ticker = [
    { text: `${config.stats[0].number} YR EXPERIENCE`, accent: true },
    { text: `${config.stats[1].number} CLOUD CERTS`, accent: false },
    { text: `${config.stats[2].number} YRS BUILDING`, accent: true },
  ];

  const handleFileDownload = () => {
    const link = document.createElement('a');

    link.href = config.resume.path;
    link.download = config.resume.filename;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full min-h-screen bg-navy pt-16">
      <MobileHeader />

      <div className="px-5 pt-8 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="font-poly font-thin text-[32px] text-white mb-5">Featured Projects</h2>

          <div className="flex flex-col mb-8">
            {config.projects.map((project, index) => (
              <div
                key={project.title}
                className={`flex gap-3.5 py-[18px] ${
                  index < config.projects.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <Image
                  src={project.image}
                  width={72}
                  height={60}
                  className="w-[72px] h-[60px] object-contain bg-background-white rounded-[10px] p-1.5 flex-shrink-0"
                  alt={project.title}
                />
                <div>
                  <h4 className="font-poly text-white text-[17px] mb-1">{project.title}</h4>
                  <p className="font-inter text-white/60 text-[13px] leading-snug mb-1.5">
                    {project.description}
                  </p>
                  <span className="font-inter text-xs text-comfort-blue">
                    {project.categories.join(' · ')} &middot; {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <a
            className={`${pillClasses} mb-8`}
            href="https://github.com/evanwherchek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse all
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 border-y border-white/15 py-[14px] mb-7">
            {ticker.map((item, index) => (
              <span key={item.text} className="flex items-center gap-2">
                <span
                  className={`font-inter font-semibold text-xs uppercase tracking-widest whitespace-nowrap ${
                    item.accent ? 'text-comfort-blue' : 'text-white/60'
                  }`}
                >
                  {item.text}
                </span>
                {index < ticker.length - 1 && <span className="text-white/20">&middot;</span>}
              </span>
            ))}
          </div>

          <h2 id="qualifications" className="font-poly font-thin text-[26px] text-white mb-4">
            Qualifications
          </h2>

          <div className="flex flex-col">
            {credentials.map((credential, index) => {
              const name = credential.school ?? credential.company;
              const subtitle = credential.degree ?? credential.role;
              const range = credential.years ?? credential.period;

              return (
                <div
                  key={name}
                  className={`flex items-center gap-3.5 py-4 ${
                    index < credentials.length - 1 ? 'border-b border-white/10' : ''
                  }`}
                >
                  <Image
                    src={credential.logo}
                    width={36}
                    height={36}
                    className="object-contain flex-shrink-0"
                    alt={credential.alt}
                  />
                  <div className="flex-1">
                    <p className="font-poly text-white text-base">{name}</p>
                    <p className="font-inter text-white/55 text-[13px] mt-[3px]">{subtitle}</p>
                    <span className="font-inter text-xs text-white/45">{range}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <button className={`${pillClasses} w-full`} onClick={handleFileDownload}>
            Full resume
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Qualifications;
