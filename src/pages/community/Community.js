import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import communityInternship from 'assets/community-internship.webp';
import sliceBackgroundLarge from 'assets/community-outreach.webp';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceBackground from 'assets/community-outreach.webp';
import sliceIrlPlaceholder from 'assets/community-teamwork-poster.webp';
import sliceIrl from 'assets/community-teamwork.webp';
import communityInternPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import communityIntern from 'assets/community-intern.webp';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import communityMentorship from 'assets/community-mentorship.webp';
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
import { DecoderText } from 'components/DecoderText';
import { List, ListItem } from 'components/List';
import { Link } from 'components/Link';

const title = 'Community Outreach';
const description =
  'We are a community-focused company - so much so, that we ensured that it was included in our core values and tenets of Ey3.  We believe it our duty to utilize our knowledge and expertise in technology to impact the communities in which we work, we live, and we care.';
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
          // url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading style={{ textTransform: 'uppercase' }}>
                <DecoderText delay={0} text={'Why we care'} />
              </ProjectSectionHeading>
              <ProjectSectionText>
                At Ey3 we work hard to impact the communities where we work, where we
                live, and where we care. This is why we work closely with several programs
                covering communities in Baltimore, Prince George&apos;s County, and the
                District of Columbia. Some of the amazing organizations we work with and
                support are:
                <br />
                <List>
                  <ListItem>
                    <Link href="https://www.employpg.org/youth/keys/">KEYS</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.onrampstocareers.org/">OnRamps</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="https://2ndchanceuniversity.org/">
                      2nd Chance University
                    </Link>
                  </ListItem>
                </List>
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[communityIntern]}
                placeholder={communityInternPlaceholder}
                alt="happy employee"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading style={{ textTransform: 'uppercase' }}>
                <DecoderText delay={0} text={'Mentorship'} />
              </ProjectSectionHeading>
              <ProjectSectionText>
                Providing career and life guidance to individuals starting and navigating
                new careers in Tech, as well as helping to provide easier pathways to
                knowledge and networks of individuals that can help them.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[communityMentorship]}
              placeholder={sliceSlidesPlaceholder}
              alt="two businesswomen talking to each other"
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
              <ProjectSectionHeading style={{ textTransform: 'uppercase' }}>
                <DecoderText delay={0} text={'Internship'} />
              </ProjectSectionHeading>
              <ProjectSectionText>
                Providing opportunities for individuals within our communities to
                springboard into a career of their choice, ranging in topics from Cyber
                Threat Intelligence and Cyber Policy, to Social Media and Graphic Design.
                We work closely with the{' '}
                <Link href="https://www.employpg.org/youth/keys/">PGC Keys</Link> program
                to provide internships to young people in Prince George&apos;s County.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading style={{ textTransform: 'uppercase' }}>
                <DecoderText delay={0} text={'Partnership'} />
              </ProjectSectionHeading>
              <ProjectSectionText>
                It takes a village - which is why we partner with other organizations that
                are doing work in the areas of workforce development, re-entry, and career
                up & re-skilling.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Happy adult students sitting outside"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
