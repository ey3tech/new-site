import profileImgLarge from 'assets/index-community.webp';
import profileImgPlaceholder from 'assets/index-community.webp';
import profileImg from 'assets/index-community.webp';
import { Button } from 'components/Button';
import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading
      className={styles.title}
      data-visible={visible}
      level={3}
      id={titleId}
      style={{ letterSpacing: '0.3em', textTransform: 'uppercase' }}
    >
      <DecoderText text="Community" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Community Service is not something we do, it is who we are. Ey3 Technologies is a
      Civic Tech company just as much as it is a systems engineering and cyber security
      company. This is proven through our involvement with organizations in Baltimore,
      Prince George&apos;s County, and the District of Columbia, providing mentorship,
      internship, and experience to assist with building the next generation of engineers
      and professionals. Ey3 is proud of our partnerships and relationships with the PGC
      KEYS program, SANS Cyber Immersion Academy, and OnRamps to Careers, just to name a
      few. We are always looking for new organizations to partner with that are impacting
      the local community.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <div className={styles.button} data-visible={visible}>
                <Button iconHoverShift href="community" iconEnd="arrowRight">
                  Community Outreach
                </Button>
              </div>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  <DecoderText text="///" start={visible} delay={500} />
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={[profileImg, profileImgLarge]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="People putting their hands together in teamwork"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
