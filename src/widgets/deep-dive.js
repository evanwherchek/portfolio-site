import { motion } from 'motion/react';
import Image from 'next/image';
import config from '../data/content-config.yaml';

const pillClasses =
  'inline-block text-center font-inter font-semibold text-[13px] lg:text-sm uppercase tracking-widest text-comfort-blue border border-comfort-blue rounded-full py-3 px-5 lg:py-2 hover:bg-comfort-blue/10 transition-colors';

function DeepDive() {
  const [featured, ...otherProjects] = config.projects;
  const credentials = [...config.education, ...config.experience];
  const ticker = [
    { text: `${config.stats[0].number} YRS EXPERIENCE`, accent: true },
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
    <div id="projects" className="w-full bg-navy py-16 lg:py-32">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col gap-3 mb-8 lg:flex-row lg:items-baseline lg:justify-between lg:mb-11">
          <h2 className="font-poly font-thin text-[32px] lg:text-5xl text-white">Featured Projects</h2>
          <a
            className={pillClasses}
            href="https://github.com/evanwherchek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse all &rarr;
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="flex flex-col lg:flex-row lg:gap-14"
        >
          <div className="flex gap-3.5 py-[18px] border-b border-white/10 lg:flex-[1.3] lg:flex-col lg:gap-0 lg:border-b-0 lg:py-0">
            <Image
              src={featured.image}
              width={480}
              height={280}
              className="w-[72px] h-[60px] object-contain bg-background-white rounded-[10px] p-1.5 flex-shrink-0 lg:w-full lg:h-[280px] lg:rounded-2xl lg:p-5 lg:mb-6"
              alt={featured.title}
            />
            <div className="lg:contents">
              <h4 className="font-poly text-white text-[17px] mb-1 lg:text-3xl lg:mb-3">{featured.title}</h4>
              <p className="font-inter text-white/60 text-[13px] leading-snug mb-1.5 lg:font-sans lg:text-white/70 lg:text-lg lg:leading-relaxed lg:mb-4 lg:max-w-md">
                {featured.description}
              </p>
              <span className="font-inter text-xs text-comfort-blue lg:text-sm">
                {featured.categories.join(' · ')} &middot; {featured.year}
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-1">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`flex gap-3.5 py-[18px] lg:gap-5 lg:py-6 ${index < otherProjects.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <Image
                  src={project.image}
                  width={96}
                  height={72}
                  className="w-[72px] h-[60px] object-contain bg-background-white rounded-[10px] p-1.5 flex-shrink-0 lg:w-24 lg:h-[72px] lg:rounded-lg lg:p-2"
                  alt={project.title}
                />
                <div>
                  <h4 className="font-poly text-white text-[17px] mb-1 lg:text-xl lg:mb-1.5">{project.title}</h4>
                  <p className="font-inter text-white/60 text-[13px] leading-snug mb-1.5 lg:text-sm lg:mb-2">
                    {project.description}
                  </p>
                  <span className="font-inter text-xs text-comfort-blue lg:text-sm">
                    {project.categories.join(' · ')} &middot; {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 pt-2 lg:mt-20">
          <div className="flex flex-wrap items-center justify-center gap-2 border-y border-white/15 py-[14px] mb-7 lg:justify-start lg:gap-3 lg:py-3 lg:mb-11">
            {ticker.map((item, index) => (
              <span key={item.text} className="flex items-center gap-2 lg:gap-3">
                <span
                  className={`font-inter font-semibold text-xs lg:text-sm uppercase tracking-widest whitespace-nowrap ${item.accent ? 'text-comfort-blue' : 'text-white/60'}`}
                >
                  {item.text}
                </span>
                {index < ticker.length - 1 && <span className="text-white/20">&middot;</span>}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 mb-4 lg:flex-row lg:items-baseline lg:justify-between lg:mb-6">
            <h2 id="qualifications" className="font-poly font-thin text-[26px] lg:text-4xl text-white">
              Qualifications
            </h2>
            <button className={pillClasses} onClick={handleFileDownload}>
              Full resume
            </button>
          </div>

          {credentials.map((credential, index) => {
            const name = credential.school ?? credential.company;
            const subtitle = credential.degree ?? credential.role;
            const range = credential.years ?? credential.period;

            return (
              <div
                key={name}
                className={`flex items-start gap-3.5 py-4 lg:items-center lg:gap-6 lg:py-5 ${index < credentials.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <Image
                  src={credential.logo}
                  width={44}
                  height={44}
                  className="object-contain flex-shrink-0 w-9 h-9 lg:w-11 lg:h-11"
                  alt={credential.alt}
                />
                <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="font-poly text-white text-base lg:text-lg">{name}</p>
                    <p className="font-inter text-white/55 text-[13px] mt-[3px] lg:mt-1 lg:text-sm">{subtitle}</p>
                  </div>
                  <span className="font-inter text-xs text-white/45 lg:text-sm lg:ml-4">{range}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DeepDive;
