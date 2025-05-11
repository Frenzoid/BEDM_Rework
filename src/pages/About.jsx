// pages/About/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaInfoCircle, FaUsers, FaCheckCircle, FaTrophy, FaHandshake } from 'react-icons/fa';
import '../styles/About.css';
import PageBanner from '../components/PageBanner';

const About = () => {
  const { t } = useTranslation();

  // Create refs for sections
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Team members (in a real application, this would come from an API or CMS)
  const teamMembers = [
    {
      name: 'Adrian Venner',
      title: t('commander'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/team-1.jpg',
      email: 'kommando@bernerdm.ch'
    },
    {
      name: 'Thomas Fischer',
      title: t('deputyCommander'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/team-2.jpg',
      email: 'stv@bernerdm.ch'
    },
    {
      name: 'Sarah Keller',
      title: t('registrationOfficer'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/team-3.jpg',
      email: 'anmeldung@bernerdm.ch'
    },
    {
      name: 'Michael Weber',
      title: t('routeCoordinator'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/team-4.jpg',
      email: 'route@bernerdm.ch'
    },
    {
      name: 'Laura Brunner',
      title: t('financeOfficer'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/team-5.jpg',
      email: 'finanzen@bernerdm.ch'
    },
    {
      name: 'Markus Schmid',
      title: t('mediaRelations'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/team-6.jpg',
      email: 'medien@bernerdm.ch'
    }
  ];

  // Partners
  const partners = [
    {
      name: 'Swiss Army',
      logo: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/partner-1.png',
      url: 'https://www.vtg.admin.ch/'
    },
    {
      name: 'Canton of Bern',
      logo: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/partner-2.png',
      url: 'https://www.be.ch/'
    },
    {
      name: 'City of Bern',
      logo: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/partner-3.png',
      url: 'https://www.bern.ch/'
    },
    {
      name: 'Swiss Sport',
      logo: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/partner-4.png',
      url: 'https://www.swissolympic.ch/'
    }
  ];

  return (
    <div className="about-page">
      <PageBanner
        title={t('about')}
        subtitle={t('aboutSubtitle')}
        background="https://www.bernerdm.ch/wp-content/uploads/2024/12/about-bg.jpg"
      />

      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Mission Section */}
          <motion.section
            className="about-section mission-section"
            ref={missionRef}
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-header">
              <h2><FaInfoCircle className="section-icon" /> {t('ourMission')}</h2>
            </div>

            <div className="mission-content">
              <div className="mission-text">
                <p className="mission-statement">{t('missionStatement')}</p>
                <p>{t('missionDesc1')}</p>
                <p>{t('missionDesc2')}</p>
              </div>

              <div className="mission-image">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2024/12/mission-image.jpg"
                  alt="Bernese Distance March Participants"
                />
              </div>
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            className="about-section values-section"
            ref={valuesRef}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-header">
              <h2><FaCheckCircle className="section-icon" /> {t('ourValues')}</h2>
              <p className="section-intro">{t('valuesIntro')}</p>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <h3>{t('tradition')}</h3>
                <p>{t('traditionDesc')}</p>
              </div>

              <div className="value-card">
                <h3>{t('community')}</h3>
                <p>{t('communityDesc')}</p>
              </div>

              <div className="value-card">
                <h3>{t('challenge')}</h3>
                <p>{t('challengeDesc')}</p>
              </div>

              <div className="value-card">
                <h3>{t('inclusivity')}</h3>
                <p>{t('inclusivityDesc')}</p>
              </div>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="about-section team-section"
            ref={teamRef}
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-header">
              <h2><FaUsers className="section-icon" /> {t('ourTeam')}</h2>
              <p className="section-intro">{t('teamIntro')}</p>
            </div>

            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div className="team-card" key={index}>
                  <div className="team-member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-member-info">
                    <h3>{member.name}</h3>
                    <p className="team-member-title">{member.title}</p>
                    <a href={`mailto:${member.email}`} className="team-member-email">
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Partners Section */}
          <motion.section
            className="about-section partners-section"
            ref={partnersRef}
            initial={{ opacity: 0, y: 30 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-header">
              <h2><FaHandshake className="section-icon" /> {t('ourPartners')}</h2>
              <p className="section-intro">{t('partnersIntro')}</p>
            </div>

            <div className="partners-grid">
              {partners.map((partner, index) => (
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card"
                  key={index}
                >
                  <img src={partner.logo} alt={partner.name} />
                  <h3>{partner.name}</h3>
                </a>
              ))}
            </div>
          </motion.section>

          {/* Awards Section */}
          <section className="about-section awards-section">
            <div className="section-header">
              <h2><FaTrophy className="section-icon" /> {t('awardsRecognition')}</h2>
            </div>

            <div className="awards-content">
              <div className="awards-text">
                <p>{t('awardsDesc')}</p>
                <ul className="awards-list">
                  <li>{t('award1')}</li>
                  <li>{t('award2')}</li>
                  <li>{t('award3')}</li>
                </ul>
              </div>

              <div className="cta-box">
                <h3>{t('joinUs')}</h3>
                <p>{t('joinUsDesc')}</p>
                <Link to="/registration" className="btn">
                  {t('registerNow')}
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;