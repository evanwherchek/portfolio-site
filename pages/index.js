import { useEffect, useRef, useState } from 'react';
import SiteHeader from '../src/widgets/site-header';
import Title from '../src/widgets/title';
import About from '../src/widgets/about';
import Inspirations from '../src/widgets/inspirations';
import DeepDive from '../src/widgets/deep-dive';
import Contact from '../src/widgets/contact';
import Linktree from '../src/widgets/linktree';
import Head from "next/head";

function Index() {
  const [showHeader, setShowHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1023px)');

    setIsMobile(mediaQuery.matches);

    const handleChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show header when hero is NOT intersecting (not in view)
        setShowHeader(!entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 10% of the element enters/leaves viewport
        rootMargin: '-50px 0px 0px 0px', // Add some margin to trigger earlier
      }
    );

    const currentHeroRef = heroRef.current;
    if (currentHeroRef) {
      observer.observe(currentHeroRef);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      if (currentHeroRef) {
        observer.unobserve(currentHeroRef);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Evan Herchek</title>
        <meta name="description" content="Evan Herchek - Software Developer" />

        <meta property="og:title" content="Evan Herchek" />
        <meta property="og:description" content="Evan Herchek - Software Developer" />
        <meta property="og:url" content="https://evanherchek.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://evanherchek.dev/images/opengraph-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Site preview image" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Evan Herchek" />
        <meta name="twitter:description" content="Evan Herchek - Software Developer" />
        <meta name="twitter:image" content="https://evanherchek.dev/images/opengraph-preview.jpg" />
      </Head>
      <div>
        <SiteHeader
          scrollToSection={scrollToSection}
          isVisible={showHeader}
        />
        <main>
          <section id="home" ref={heroRef}>
            {isMobile ? (
              <Linktree scrollToSection={scrollToSection} />
            ) : (
              <Title scrollToSection={scrollToSection} />
            )}
          </section>
          <section id="about">
            <About />
          </section>
          <section id="inspirations">
            <Inspirations />
          </section>
          <DeepDive />
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Index;
