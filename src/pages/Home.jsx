// pages/Home/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from "motion/react"
import { useInView } from 'react-intersection-observer';
import { FaMapSigns, FaUsers, FaCalendarAlt, FaWalking, FaMedal, FaInfoCircle, FaMapMarkedAlt } from 'react-icons/fa';
import '../styles/Home.css';
import HeroBanner from '../components/HeroBanner';
import Testimonial from '../components/Testimonial';

const Home = () => {
  const { t } = useTranslation();

  // Animations
  const controlsFeatures = useAnimation();
  const controlsEvent = useAnimation();
  const controlsHistory = useAnimation();
  const controlsTestimonials = useAnimation();
  const controlsCountdown = useAnimation();

  const [refFeatures, inViewFeatures] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refEvent, inViewEvent] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refHistory, inViewHistory] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refTestimonials, inViewTestimonials] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refCountdown, inViewCountdown] = useInView({ threshold: 0.2, triggerOnce: true });

  // Start animations when sections come into view
  useEffect(() => {
    if (inViewFeatures) {
      controlsFeatures.start('visible');
    }
    if (inViewEvent) {
      controlsEvent.start('visible');
    }
    if (inViewHistory) {
      controlsHistory.start('visible');
    }
    if (inViewTestimonials) {
      controlsTestimonials.start('visible');
    }
    if (inViewCountdown) {
      controlsCountdown.start('visible');
    }
  }, [
    inViewFeatures,
    inViewEvent,
    inViewHistory,
    inViewTestimonials,
    inViewCountdown,
    controlsFeatures,
    controlsEvent,
    controlsHistory,
    controlsTestimonials,
    controlsCountdown
  ]);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroBanner />

      {/* Features Section */}
      <section className="features-section" ref={refFeatures}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsFeatures}
            variants={itemVariants}
          >
            {t('uniqueExperience')}
          </motion.h2>

          <motion.div
            className="features-grid"
            initial="hidden"
            animate={controlsFeatures}
            variants={containerVariants}
          >
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FaMapSigns />
              </div>
              <h3>{t('chooseYourRoute')}</h3>
              <p>{t('chooseYourRouteDesc')}</p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FaUsers />
              </div>
              <h3>{t('individualOrGroup')}</h3>
              <p>{t('individualOrGroupDesc')}</p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">
                <FaCalendarAlt />
              </div>
              <h3>{t('annualEvent')}</h3>
              <p>{t('annualEventDesc')}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Information Section */}
      <section className="event-section" ref={refEvent}>
        <div className="container">
          <motion.div
            className="event-content"
            initial="hidden"
            animate={controlsEvent}
            variants={containerVariants}
          >
            <motion.div className="event-info" variants={itemVariants}>
              <motion.h2>{t('nextEvent')}</motion.h2>
              <motion.p>{t('nextEventIntro')}</motion.p>

              <motion.div className="event-details">
                <div className="event-detail">
                  <FaCalendarAlt className="event-icon" />
                  <div>
                    <h4>{t('date')}</h4>
                    <p>6th December 2025</p>
                  </div>
                </div>

                <div className="event-detail">
                  <FaMapMarkedAlt className="event-icon" />
                  <div>
                    <h4>{t('location')}</h4>
                    <p>{t('cantonOfBern')}</p>
                  </div>
                </div>

                <div className="event-detail">
                  <FaWalking className="event-icon" />
                  <div>
                    <h4>{t('participants')}</h4>
                    <p>{t('openToEveryone')}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="event-actions">
                <Link to="/registration" className="btn">{t('registerNow')}</Link>
                <Link to="/current-march" className="btn btn-secondary">{t('learnMore')}</Link>
              </motion.div>
            </motion.div>

            <motion.div className="event-image" variants={itemVariants}>
              <div className="swiss-map-container">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2025/02/Muster_Distanzschema.png"
                  alt="Map of Switzerland highlighting Bern"
                  className="swiss-map"
                />
                <div className="pulsating-dot"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section" ref={refHistory}>
        <div className="container">
          <motion.div
            className="history-content"
            initial="hidden"
            animate={controlsHistory}
            variants={containerVariants}
          >
            <motion.div className="history-image" variants={itemVariants}>
              <img
                src="https://www.bernerdm.ch/wp-content/uploads/2024/12/history-image.jpg"
                alt="Historic image of Bernese Distance March"
              />
            </motion.div>

            <motion.div className="history-info" variants={itemVariants}>
              <motion.h2>{t('richHistory')}</motion.h2>
              <motion.p>{t('historyIntro')}</motion.p>
              <motion.p>{t('historyDetail')}</motion.p>

              <motion.div className="history-stats">
                <div className="stat">
                  <span className="stat-number">67</span>
                  <span className="stat-label">{t('years')}</span>
                </div>

                <div className="stat">
                  <span className="stat-number">6000+</span>
                  <span className="stat-label">{t('participants')}</span>
                </div>

                <div className="stat">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">{t('countries')}</span>
                </div>
              </motion.div>

              <Link to="/history" className="btn btn-tertiary">
                <FaInfoCircle className="btn-icon" />
                {t('exploreHistory')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" ref={refTestimonials}>
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsTestimonials}
            variants={itemVariants}
          >
            {t('participantExperiences')}
          </motion.h2>

          <motion.div
            className="testimonials-grid"
            initial="hidden"
            animate={controlsTestimonials}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Testimonial
                quote={t('testimonial1')}
                name="Marco Schneider"
                location="Zürich, Switzerland"
                image="https://www.bernerdm.ch/wp-content/uploads/2024/12/testimonial-1.jpg"
                year="2023"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Testimonial
                quote={t('testimonial2')}
                name="Anna Keller"
                location="Munich, Germany"
                image="https://www.bernerdm.ch/wp-content/uploads/2024/12/testimonial-2.jpg"
                year="2024"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Testimonial
                quote={t('testimonial3')}
                name="Jean Dupont"
                location="Lyon, France"
                image="https://www.bernerdm.ch/wp-content/uploads/2024/12/testimonial-3.jpg"
                year="2024"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="countdown-section" ref={refCountdown}>
        <div className="container">
          <motion.div
            className="countdown-content"
            initial="hidden"
            animate={controlsCountdown}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants}>{t('joinUs')} 2025</motion.h2>
            <motion.p variants={itemVariants}>{t('joinUsDesc')}</motion.p>

            <motion.div className="countdown-timer-large" variants={itemVariants}>
              <div className="countdown-item-large">
                <span className="count-large">365</span>
                <span className="label-large">{t('days')}</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item-large">
                <span className="count-large">24</span>
                <span className="label-large">{t('hours')}</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item-large">
                <span className="count-large">00</span>
                <span className="label-large">{t('minutes')}</span>
              </div>
              <div className="countdown-separator">:</div>
              <div className="countdown-item-large">
                <span className="count-large">00</span>
                <span className="label-large">{t('seconds')}</span>
              </div>
            </motion.div>

            <motion.div className="countdown-actions" variants={itemVariants}>
              <Link to="/registration" className="btn btn-lg">{t('registerNow')}</Link>
              <Link to="/contact" className="btn btn-tertiary btn-lg">{t('contactUs')}</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <div className="container">
          <div className="quick-links-grid">
            <Link to="/registration" className="quick-link-card">
              <FaWalking className="quick-link-icon" />
              <h3>{t('registration')}</h3>
              <p>{t('registrationQuickDesc')}</p>
            </Link>

            <Link to="/leaderboards" className="quick-link-card">
              <FaMedal className="quick-link-icon" />
              <h3>{t('leaderboards')}</h3>
              <p>{t('leaderboardsQuickDesc')}</p>
            </Link>

            <Link to="/current-march" className="quick-link-card">
              <FaMapMarkedAlt className="quick-link-icon" />
              <h3>{t('currentMarch')}</h3>
              <p>{t('currentMarchQuickDesc')}</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;