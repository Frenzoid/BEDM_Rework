// components/HeroBanner/HeroBanner.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react"
import { FaMountain, FaMapMarkedAlt, FaCalendarAlt } from 'react-icons/fa';
import '../styles/HeroBanner.css';

const HeroBanner = () => {
  const { t } = useTranslation();

  // Bear footprint animation
  useEffect(() => {
    const createFootprint = (e) => {
      // Only create footprints with 5% chance on mousemove to avoid too many elements
      if (Math.random() > 0.05) return;

      const footprint = document.createElement('div');
      footprint.className = 'bear-track';
      footprint.style.left = `${e.clientX - 15}px`;
      footprint.style.top = `${e.clientY - 20}px`;

      // Random rotation for more natural look
      footprint.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

      document.body.appendChild(footprint);

      // Remove footprint after animation completes
      setTimeout(() => {
        footprint.remove();
      }, 2000);
    };

    window.addEventListener('mousemove', createFootprint);

    return () => {
      window.removeEventListener('mousemove', createFootprint);
    };
  }, []);

  return (
    <section className="hero-banner">
      <div className="overlay"></div>
      <div className="hero-content">
        <motion.div
          className="container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>
              {t('heroBannerTitle')} <span className="highlight">67th</span>
            </h1>
            <p>{t('heroBannerSubtitle')}</p>

            <div className="hero-features">
              <div className="hero-feature">
                <FaMountain className="hero-feature-icon" />
                <span>{t('scenicRoutes')}</span>
              </div>
              <div className="hero-feature">
                <FaMapMarkedAlt className="hero-feature-icon" />
                <span>{t('customizeYourJourney')}</span>
              </div>
              <div className="hero-feature">
                <FaCalendarAlt className="hero-feature-icon" />
                <span>6th December 2025</span>
              </div>
            </div>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/registration" className="btn btn-hero">
                {t('registerNow')}
              </Link>
              <Link to="/current-march" className="btn btn-hero-outline">
                {t('currentMarch')}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated elements */}
      <div className="animated-elements">
        <div className="bear-silhouette bear-1"></div>
        <div className="bear-silhouette bear-2"></div>
        <div className="mountain-range"></div>
      </div>

      {/* Swiss cross decorations */}
      <div className="swiss-cross-decoration cross-1"></div>
      <div className="swiss-cross-decoration cross-2"></div>
      <div className="swiss-cross-decoration cross-3"></div>
    </section>
  );
};

export default HeroBanner;