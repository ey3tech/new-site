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

const title = 'Ey3 Workforce Development';
const description =
  "At Ey3, we've shifted from Federal Government contracting to impactful Workforce Development Training in Prince George's County, MD.";
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
                <DecoderText delay={0} text={'Empowering Communities'} />
              </ProjectSectionHeading>
              <ProjectSectionText>
                At Ey3 Technologies, our heart lies in community service, demonstrated by our addition of workforce development training to our arsenal. Within a year, we&apos;ve
                trained over 40 individuals from diverse backgrounds, ages 18 to 63, in
                Scrum, with a 100% PSM 1 certification success rate. Our commitment
                extends beyond local impacts; we&apos;re recognized on the State of
                Maryland&apos;s Training Provider list and have expanded our courses to
                include Customer Service, FAA Part 107 Drone/UAS Certification, and CMMC
                Cybersecurity. Through partnerships with local organizations and law
                enforcement, we&apos;re dedicated to empowering every demographic with
                career opportunities, emphasizing reskilling and upskilling to uplift the
                entire community.
                <br />
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
          <ProjectSectionText style={{ paddingLeft: '5rem', paddingRight: '5rem' }}>
            This initiative reflects our core values: serving and uplifting the community.
            In just one year, we&apos;ve proudly trained over 40 individuals across
            various states in Scrum methodologies, achieving a remarkable 100% pass rate
            for the PSM 1 certification. Our participants&apos; age range, spanning from
            18 to 63 years, exemplifies our commitment to inclusivity and diversity in
            education.
          </ProjectSectionText>
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
                George&apos;s. We&apos;ve expanded our training portfolio to include
                Customer Service, FAA Part 107 Drone/UAS Certification, and CMMC
                (Cybersecurity). These additions underscore our dedication to providing
                comprehensive, cutting-edge training.
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
                <DecoderText delay={0} text={'Fostering Connections'} />
              </ProjectSectionHeading>
              <ProjectSectionText>
                Building bridges within the community, we&apos;ve fostered new
                partnerships with local fraternities and the PG County Police Department.
                Our goal is clear: to open doors to potential career opportunities through
                reskilling and upskilling. We aim to touch every demographic - from the
                youth to seniors, career changers to returning citizens - ensuring
                everyone has access to the tools they need for success in the modern
                workforce.
                <br />
                <br />
                As we continue our journey of community engagement, the bridges we&apos;ve
                built have paved the way for promising collaborations. With a steadfast
                commitment to our goal of creating diverse career opportunities through
                reskilling and upskilling initiatives, we aspire to impact individuals
                across all walks of life, spanning from the younger generation to
                seniors,career transitioners to returning citizens. Our ongoing efforts
                aim to ensure that every member of our community possesses the necessary
                tools for success in today&apos;s dynamic workforce landscape.
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
