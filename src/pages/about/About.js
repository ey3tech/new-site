import aboutHeader from "assets/about-header.webp";
import aboutHeaderPlaceholder from "assets/about-header-placeholder.avif";
import aboutBar from "assets/about-bar.webp";
import aboutBackground from "assets/about-background.webp";
import sliceIrl from "assets/slice-irl.jpg";
import sliceIrlPlaceholder from "assets/slice-irl-placeholder.jpg";
import aboutOffice from "assets/about-office.jpg";
import aboutOfficePlaceholder from "assets/about-office-placeholder.avif";
import aboutModem from "assets/about-modem.webp";
import aboutModemPlaceholder from "assets/about-modem-placeholder.avif";
import { Footer } from "components/Footer";
import { Image } from "components/Image";
import { Meta } from "components/Meta";
import { List, ListItem } from "components/List";
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
} from "layouts/Project";
import { Fragment } from "react";
import { media } from "utils/style";
import styles from "./About.module.css";

const title = "About Us";
const description =
	"We are Ey3 (pronounced “Eye” 3), an EDWOSB and 8a Certified cybersecurity and systems engineering consulting group, headquartered in Prince George's County, Maryland, proudly serving the DoD/IC and our local community.";
const roles = ["Cybersecurity", "Systems Engineering", "Community Partnership"];

export const About = () => {
	return (
		<Fragment>
			<Meta title={title} description={description} />
			<ProjectContainer className={styles.slice}>
				<ProjectBackground
					src={aboutBackground}
					placeholder={aboutBackground}
					opacity={0.8}
				/>
				<ProjectHeader
					title={title}
					description={description}
					// url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
					roles={roles}
				/>
				<ProjectSection padding="top">
					<ProjectSectionContent>
						<ProjectImage
							srcSet={[aboutHeader]}
							placeholder={aboutHeaderPlaceholder}
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
								Simply put, we are a talent-driven and character-rich
								organization that loves helping and serving people. Evident in
								our individual service spanning 5 separate DoD/IC agencies, 4
								different Federal agencies, companies ranging from Fortune
								500&apos;s to local small businesses, and supporting numerous
								community-based programs from DC to Prince George&apos;s County
								to Baltimore - we live and breathe support and service.
							</ProjectSectionText>
						</div>
						<div className={styles.sidebarImages}>
							<Image
								className={styles.sidebarImage}
								srcSet={[aboutOffice, aboutOffice]}
								placeholder={aboutOfficePlaceholder}
								alt="An office building interior."
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
								We solve issues at the root instead of the surface, by focusing
								on the need versus the problem. The Ey3 Process is simple - We{" "}
								<b>listen</b> to our customers like they&apos;re our favorite song. We{" "}
								<b>identify</b> the things that keep our customers up at night
								and/or prevent them from going to happy hours, kid&apos;s
								games/recitals, and taking the time off. We <b>solve</b> the
								issues based on the needs, to prevent repeat problems. Rinse and repeat.
							</ProjectSectionText>
						</ProjectTextRow>
						<Image
							srcSet={[aboutModem]}
							placeholder={aboutModemPlaceholder}
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
									srcSet={[aboutBar]}
									placeholder={aboutBar}
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
									<ListItem>
										Systems Engineering & Technical Assistance
									</ListItem>
									<List>
										<ListItem>
											Planning, Supporting and Managing successful programs and
											projects
										</ListItem>
										<ListItem>
											Identifying and applying need-based solutions to technical
											challenges
										</ListItem>
									</List>
									<ListItem>Cyber Security & Information Assurance</ListItem>
									<List>
										<ListItem>
											Security engineering and management, vulnerability
											assessments, and compliance
										</ListItem>
										<ListItem>Deployment and Continuous Monitoring</ListItem>
									</List>
									<ListItem>Workforce Development</ListItem>
									<List>
										<ListItem>
											<b>Bridging the Gap in Tech Education</b><br/>
											Ey3 Technologies is at the forefront of workforce development
											in Prince George's County, offering specialized training
											programs that equip local youth and adults with critical
											tech skills. Our programs include Scrum (PSM1)
											certifications and FAA Part 107 drone training, enabling
											participants to thrive in today’s tech-driven economy.
										</ListItem>
										<ListItem>
											<b>Empowering Communities Through Innovative Training</b><br/>
											At Ey3 Technologies, we believe in the power of education
											to transform lives. We partner with local schools and
											organizations to provide tailored training sessions in
											cybersecurity, systems engineering, and other career-based
											fields. These initiatives not only prepare participants
											for high-demand careers but also strengthen community ties
											and foster local economic growth.
										</ListItem>
										<ListItem>
											<b>Creating Pathways to Tech Careers</b><br/> Through
											strategic partnerships and dedicated training initiatives,
											Ey3 Technologies is committed to unlocking potential in
											underserved communities. Our training courses are designed
											to be accessible and adaptable, meeting the diverse needs
											of participants and ensuring they are well-prepared for
											certification and beyond. This approach has positioned Ey3
											as a key player in workforce development within Maryland.
										</ListItem>
									</List>
								</List>
							</ProjectSectionText>
						</div>
					</ProjectSectionContent>
				</ProjectSection>
				<ProjectSection light="true">
					<ProjectSectionContent>
						<ProjectTextRow>
							<ProjectSectionHeading>Giving Back 💖</ProjectSectionHeading>
							<ProjectSectionText>
								We perform research and development to provide expertise and
								knowledge within the PGCPS system for our next generation of
								engineers. We&apos;ve worked with the PGC Keys program and have
								our own mentorship and internship programs to help the next
								generation get jobs in cyber and engineering. We also provide
								Mentoring and Internships to multiple programs spanning DC,
								Prince George&apos;s County, and Baltimore City assisting
								populations with growing and advancing their careers in IT and
								cybersecurity specifically. We strive to provide Mentoring and
								Internships to multiple programs spanning DC, Prince
								George&apos;s County, and Baltimore City assisting populations
								(youth, underserved, returning citizens, senior citizens) with
								growing and advancing their careers in IT and cybersecurity
								specifically.
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
