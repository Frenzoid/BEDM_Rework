import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/NotFound.css';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found-page">
      <div className="container">
        <motion.div
          className="not-found-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="not-found-image">
            <img
              src="https://img.freepik.com/premium-vector/minimal-modern-clean-bear-logo-simple-logo-template-icon_746614-161.jpg"
              alt="Berner DM Logo"
            />
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('pages.notFound.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="not-found-message"
          >
            {t('pages.notFound.message')}
          </motion.p>

          <motion.div
            className="not-found-map"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="map-container">
              <div className="map-markers">
                <div className="marker start">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Start</span>
                </div>
                <div className="marker lost pulse">
                  <i className="fas fa-question"></i>
                  <span>{t('pages.notFound.youAreHere')}</span>
                </div>
                <div className="marker finish">
                  <i className="fas fa-flag-checkered"></i>
                  <span>Finish</span>
                </div>
              </div>
              <div className="map-routes">
                <div className="route-line"></div>
                <div className="route-dotted"></div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {t('pages.notFound.help')}
          </motion.p>

          <motion.div
            className="not-found-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link to="/" className="btn btn-primary">
              <i className="fas fa-home"></i> {t('pages.notFound.returnHome')}
            </Link>
            <Link to="/current-march" className="btn btn-secondary">
              <i className="fas fa-map-signs"></i> {t('pages.notFound.viewCurrentMarch')}
            </Link>
          </motion.div>

          <motion.div
            className="not-found-help"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h3>{t('pages.notFound.lookingFor.title')}</h3>
            <ul className="quick-links">
              <li><Link to="/registration">{t('common.navigation.registration')}</Link></li>
              <li><Link to="/history">{t('common.navigation.history')}</Link></li>
              <li><Link to="/leaderboards">{t('common.navigation.leaderboards')}</Link></li>
              <li><Link to="/gallery">{t('common.navigation.gallery')}</Link></li>
            </ul>
            <p>
              {t('pages.notFound.lookingFor.contact')} <a href="mailto:kommando@bernerdm.ch">kommando@bernerdm.ch</a>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;