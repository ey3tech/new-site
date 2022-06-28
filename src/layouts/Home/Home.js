import dod2 from 'assets/dod1.webp';
import dod from 'assets/dod2.webp';
import cnf from 'assets/cnf.webp';
import fearless from 'assets/fearless.webp';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ["Innovation", 'Imagination', 'Ingenuity'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const community = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, community];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Intelligence. Integrity. Innovation."
        description="We're Ey3. And we're going to break cyber."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Fearless"
        description="We provided reliable sub-contract services to organizations within the DoD, including Fearless."
        model={{
          type: 'laptop',
          alt: 'abstract waves image',
          textures: [
            {
              srcSet: [fearless, fearless],
              placeholder: fearless,
            },
          ],
        }}
        color="#987db5"
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Department of Defense"
        description="We performed a variety of systems engineering tasks from testing and deployment management to outage deconfliction and implementation management."
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [dod],
              placeholder: dod,
            },
            {
              srcSet: [dod2],
              placeholder: dod2,
            },
          ],
        }}
        color="#739cb7"
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Cyber Net Force"
        description="We provided testing and documentation services to CNF."
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [cnf],
              placeholder: cnf,
            },
          ],
        }}
        color="#c02b30"
      />
      <Profile
        sectionRef={community}
        visible={visibleSections.includes(community.current)}
        id="community"
      />
      <Footer />
    </div>
  );
};
