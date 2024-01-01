import dod2 from 'assets/dod1.webp';
import dod from 'assets/dod2.webp';
import cnf from 'assets/cnf.webp';
import epg1 from 'assets/epg1.webp';
import epg2 from 'assets/epg2.webp';
import fearless from 'assets/fearless.webp';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Innovation', 'Imagination', 'Insight', 'Initiative'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const community = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      community,
    ];

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
        description="Ey3 provides reliable sub-contract services to include systems engineering and technical assistance."
        model={{
          type: 'laptop',
          alt: 'Fearless Homepage',
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
        description="Ey3 performed a variety of systems engineering tasks from testing and deployment management to outage deconfliction and implementation management."
        model={{
          type: 'phone',
          alt: 'DoD Homepage',
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
        description="Ey3 provided sub-contracting services to include Cyber Network Operations (CNO) Testing and Evaluation, as well as Security Engineering and DevSecOps support for DoD customers."
        model={{
          type: 'laptop',
          alt: 'Cyber Net Force Homepage',
          textures: [
            {
              srcSet: [cnf],
              placeholder: cnf,
            },
          ],
        }}
        color="#c02b30"
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Employ Prince George's"
        description="Ey3 provides Workforce Development IT Training for populations within Prince George's County to include youth, returning citizens, and senior citizens for the purpose of upskilling, reskilling, and career transitioning."
        model={{
          type: 'phone',
          alt: 'EPG Homepage',
          textures: [
            {
              srcSet: [epg1],
              placeholder: epg1,
            },
            {
              srcSet: [epg2],
              placeholder: epg2,
            },
          ],
        }}
        color="#f26132"
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
