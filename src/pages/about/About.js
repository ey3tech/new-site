import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import tbjr from 'assets/about-header.webp';
import sliceBackgroundBarLarge from 'assets/about-bar.webp';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceBackgroundBar from 'assets/about-bar.webp';
import sliceBackgroundLarge from 'assets/about-background.webp';
import sliceBackgroundPlaceholder from 'assets/slice-background.jpg';
import sliceBackground from 'assets/about-background.webp';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/slice-irl.jpg';
import office from 'assets/about-office.jpg';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSlidesLarge from 'assets/about-modem.webp';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceSlides from 'assets/about-modem.webp';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { List, ListItem } from 'components/List';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './About.module.css';

const title = 'About Us';
const description =
  "We are Ey3 (pronounced “Eye” 3), a cybersecurity and systems engineering consulting group in Prince George's County, Maryland.";
const roles = ['Cybersecurity', 'Systems Engineering', 'Mentorship'];

export const About = () => {
  return (
    <Fragment>
      <Meta title={title} description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[tbjr, tbjr]}
              placeholder={sliceAppPlaceholder}
              alt="A picture of a girl working."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Who We Are</ProjectSectionHeading>
              <ProjectSectionText>
                We are Ey3 (<em>eye-three</em>), a cybersecurity and systems engineering
                consulting group in Prince George&apos;s County, Maryland, providing
                intelligent and innovative solutions to our customers&apos; challenges.
                With over 25 years of experience supporting 5 separate DoD/IC agencies, 3
                different Federal agencies, and companies from big to small, we have the
                knowledge and talent to help our customers achieve their goals.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[office, office]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>What We Do</ProjectSectionHeading>
              <ProjectSectionText>
                Problem-centric solutions are what define the status quo offerings of the
                IT consulting industry. Need-centric solutions are what define the
                disruptors and innovators that will lead tomorrow. We believe that the IT
                industry deserves better than the typical offerings of consulting we see
                today. We believe in innovative and intelligent solutions delivered with
                integrity. Talent is what gets us in the door, but character is what
                sustains us.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              {/* <div className={styles.gridForeground}>
                <Image
                  srcSet={[sliceAnnotation, sliceAnnotationLarge]}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div> */}
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Our Services</ProjectSectionHeading>
              <ProjectSectionText>
                <List>
                  <ListItem>Systems Engineering & Technical Assistance</ListItem>
                  <List>
                    <ListItem>
                      Planning, Supporting and Managing successful programs and projects
                    </ListItem>
                    <ListItem>
                      Identifying and applying need-based solutions to technical
                      challenges
                    </ListItem>
                  </List>
                  <ListItem>Cyber Security & Information Assurance</ListItem>
                  <List>
                    <ListItem>
                      Security engineering and management, vulnerability assessments, and
                      compliance
                    </ListItem>
                    <ListItem>Deployment and Continuous Monitoring</ListItem>
                  </List>
                  <ListItem>Research, Development, & Community Service</ListItem>
                  <List>
                    <ListItem>
                      Providing research involving web3 technologies and Machine Learning.
                      We are constantly evaluating modern applications and
                      technologies to provide to our clients.
                    </ListItem>
                    <ListItem>
                      Performing research and development to provide expertise and knowledge
                      within the PGCPS system for our next generation of engineers.
                    </ListItem>
                  </List>
                </List>
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Giving Back 💖</ProjectSectionHeading>
              <ProjectSectionText>
                We perform research and development to provide expertise and knowledge
                within the PGCPS system for our next generation of engineers. We&apos;ve
                worked with the PGC Keys program and have our own mentorship and
                internship programs to help the next generation get jobs in cyber and
                engineering.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Students at the University of New South Wales using the new collaborative annotation features"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
