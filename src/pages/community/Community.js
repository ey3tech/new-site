import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import communityInternship from 'assets/community-internship.webp';
import sliceBackgroundLarge from 'assets/community-outreach.webp';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/community-outreach.webp';
import sliceIrlPlaceholder from 'assets/slice-irl-placeholder.jpg';
import sliceIrl from 'assets/community-partnership.webp';
import communityInternPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import communityIntern from 'assets/community-intern.webp';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import communityMentorship from 'assets/community-mentorship.webp';
import Link from 'components/Link';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Community.module.css';

const title = 'Community Outreach';
const description = "At Ey3 we work hard to impact the communities where we work, where we live, and where we care.  This is why we work closely with several programs covering communities in Baltimore, Prince George's County, and the District of Columbia.";
const roles = ['Mentorship', 'Internship', 'Partnership'];

export const Community = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
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
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>Why we care</ProjectSectionHeading>
              <ProjectSectionText>
              At Ey3 we work hard to impact the communities where we work, where we live, and where we care.  This is why we work closely with several programs covering communities in Baltimore, Prince George&apos;s County, and the District of Columbia.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[communityIntern]}
                placeholder={communityInternPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Mentorship</ProjectSectionHeading>
              <ProjectSectionText>
              Providing career and life guidance to individuals starting and navigating new careers in Tech, as well as helping to provide easier pathways to knowledge and networks of individuals that can help them.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[communityMentorship]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div>
                <Image
                  srcSet={[communityInternship]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Internship</ProjectSectionHeading>
              <ProjectSectionText>
                Providing opportunities for individuals within our communities to springboard into a career of their choice, ranging in topics from Cyber Threat Intelligence and Cyber Policy, to Social Media and Graphic Design. 
                We work closely with the <a href="https://www.employpg.org/youth/keys/">PGC Keys</a> program to provide internships to young people in Prince George&apos;s County.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Partnership</ProjectSectionHeading>
              <ProjectSectionText>
              It takes a village - which is why we partner with other organizations that are doing work in the areas of workforce development, re-entry, and career up & re-skilling.
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
