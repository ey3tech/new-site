import trainingBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import trainingConnections from 'assets/training-connections.webp';
import trainingBackgroundLarge from 'assets/training-background.webp';
import trainingBackgroundPlaceholder from 'assets/training-background-placeholder.webp';
import trainingBackground from 'assets/training-background.webp';
import trainingFinal from 'assets/training-final.webp';
import trainingEmpowering from 'assets/training-empowering.webp';
import trainingAccomplishmentsPlaceholder from 'assets/training-accomplishments-placeholder.webp';
import trainingAccomplishments from 'assets/training-accomplishments.webp';
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
import styles from './Training.module.css';
import { DecoderText } from 'components/DecoderText';
import { List, ListItem } from 'components/List';

const title = 'Ey3 Workforce Development';
const description =
  "At Ey3, we've expanded our focus to include impactful workforce development training in Prince George's County, MD, in addition to our Federal Government contracting work.";
const roles = ['Certification', 'Workforce Development', 'Community Empowerment'];

export const Training = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Training" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={trainingBackground}
          srcSet={`${trainingBackground.src} 1280w, ${trainingBackgroundLarge.src} 2560w`}
          placeholder={trainingBackgroundPlaceholder}
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
                <DecoderText delay={0} text={'Empowering PG County'} />
              </ProjectSectionHeading>
              <ProjectSectionText>
                At Ey3 Technologies, we&apos;re more than a systems engineering and
                cybersecurity firm; we&apos;re a beacon of empowerment in Prince
                George&apos;s County, MD. Initially carving our niche in Federal
                Government contracting, our passion for community service has guided us to
                a significant milestone - a year of transformative Workforce Development
                Training.
                <br />
                <br />
                This initiative reflects our core values: serving and uplifting the
                community. In just one year, we&apos;ve proudly trained a diverse group of
                individuals across various states in Scrum methodologies, achieving a
                remarkable success rate in the PSM 1 certification. Our participants come
                from a wide spectrum of life stages and experiences, exemplifying our
                commitment to inclusivity and diversity in education.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[trainingEmpowering]}
                placeholder={trainingEmpowering}
                alt="woman holding a certificate"
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              {
                <ProjectSectionHeading style={{ textTransform: 'uppercase' }}>
                  <DecoderText delay={0} text={'Accomplishments'} />
                </ProjectSectionHeading>
              }
              <ProjectSectionText>
                Our efforts have not only earned us a place on the State of
                Maryland&apos;s Training Provider list but also enabled us to enrich
                Prince George&apos;s County through our partnership with Employ Prince
                George&apos;s. We&apos;ve expanded our training portfolio to include:
                <br />
                <List>
                  <ListItem>Customer Service</ListItem>
                  <ListItem>FAA Part 107 Drone/UAS Certification</ListItem>
                  <ListItem>CMMC Cybersecurity</ListItem>
                </List>
                These additions underscore our dedication to providing comprehensive,
                cutting-edge training.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[trainingAccomplishments]}
              placeholder={trainingAccomplishmentsPlaceholder}
              alt="a woman looking through a microscope"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div>
              <Image
                srcSet={[trainingConnections]}
                placeholder={trainingBackgroundBarPlaceholder}
                alt=""
                role="presentation"
                sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
              />
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading style={{ textTransform: 'uppercase' }}>
                <DecoderText delay={0} text={'Collaboration'} />
              </ProjectSectionHeading>
              <ProjectSectionText>
                Collaborating closely with local Workforce Development Groups, we&apos;re
                committed to building strong community networks. Our goal is clear: to
                open doors to potential career opportunities through reskilling and
                upskilling. We aim to touch every demographic - embracing everyone from
                the youth to seniors, career changers to returning citizens - ensuring
                everyone has access to the tools they need for success in the modern
                workforce.
                <br />
                <br />
                In continuation of our dedication to fostering robust community networks,
                we are actively engaged in collaborative efforts with local Workforce
                Development Groups. From empowering the youth to providing support for
                seniors, facilitating career transitions for individuals, and extending
                opportunities to returning citizens, our mission is to ensure equitable
                access to reskilling and upskilling resources. Together, we believe in
                building a future where everyone has the opportunity to pursue and achieve
                their career aspirations.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection style={{ marginTop: '-5rem' }}>
          <ProjectSectionContent>
            <ProjectTextRow>
              {/* <ProjectSectionHeading style={{ textTransform: "uppercase" }}><DecoderText delay={0} text={"Partnership"} /></ProjectSectionHeading> */}
              <ProjectSectionText>
                Join us in this journey of learning, growth, and community empowerment at
                Ey3 Technologies, where every individual&apos;s potential is our priority.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={trainingFinal}
              placeholder={trainingFinal}
              alt="Happy adult students sitting outside"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
