import { motion } from 'motion/react';
import Image from 'next/image';
import config from '../data/content-config.yaml';

const pillClasses =
  'font-inter font-semibold text-sm uppercase tracking-widest text-comfort-blue border border-comfort-blue rounded-full px-5 py-2 hover:bg-comfort-blue/10 transition-colors';

function DeepDive() {
  const [featured, ...otherProjects] = config.projects;
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
    <div id="projects" className="w-full bg-navy py-32">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-baseline justify-between mb-11">
          <h2 className="font-poly font-thin text-5xl text-white">Featured Projects</h2>
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
          className="flex gap-14"
        >
          <div className="flex-[1.3]">
            <Image
              src={featured.image}
              width={480}
              height={280}
              className="w-full h-[280px] object-contain bg-background-white rounded-2xl p-5 mb-6"
              alt={featured.title}
            />
            <h3 className="font-poly text-white text-3xl mb-3">{featured.title}</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-4 max-w-md">
              {featured.description}
            </p>
            <div className="text-sm text-comfort-blue">
              {featured.categories.join(' · ')} &middot; {featured.year}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            {otherProjects.map((project, index) => (
              <div
                key={project.title}
                className={`flex gap-5 py-6 ${index < otherProjects.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <Image
                  src={project.image}
                  width={96}
                  height={72}
                  className="w-24 h-[72px] object-contain bg-background-white rounded-lg p-2 flex-shrink-0"
                  alt={project.title}
                />
                <div>
                  <h4 className="font-poly text-white text-xl mb-1.5">{project.title}</h4>
                  <p className="text-white/60 text-sm mb-2">{project.description}</p>
                  <span className="text-sm text-comfort-blue">
                    {project.categories.join(' · ')} &middot; {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 pt-2">
          <div className="flex flex-wrap items-center gap-3 mb-11 border-y border-white/15 py-3">
            {ticker.map((item, index) => (
              <span key={item.text} className="flex items-center gap-3">
                <span
                  className={`font-inter font-semibold text-sm uppercase tracking-widest whitespace-nowrap ${item.accent ? 'text-comfort-blue' : 'text-white/60'}`}
                >
                  {item.text}
                </span>
                {index < ticker.length - 1 && <span className="text-white/20">&middot;</span>}
              </span>
            ))}
          </div>

          <div className="flex items-baseline justify-between mb-6">
            <h2 id="qualifications" className="font-poly font-thin text-4xl text-white">
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
                className={`flex items-center gap-6 py-5 ${index < credentials.length - 1 ? 'border-b border-white/10' : ''}`}
              >
                <Image
                  src={credential.logo}
                  width={44}
                  height={44}
                  className="object-contain"
                  alt={credential.alt}
                />
                <div className="flex-1">
                  <p className="font-poly text-white text-lg">{name}</p>
                  <p className="text-white/55 text-sm mt-1">{subtitle}</p>
                </div>
                <span className="text-sm text-white/45">{range}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DeepDive;
