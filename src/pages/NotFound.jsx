// pages/NotFound/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaHome, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa';
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
            <div className="compass-image"></div>
          </div>

          <h1>404</h1>
          <h2>{t('pageNotFound')}</h2>
          <p>{t('pageNotFoundDesc')}</p>

          <div className="not-found-actions">
            <Link to="/" className="btn">
              <FaHome className="btn-icon" /> {t('backToHome')}
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <FaQuestionCircle className="btn-icon" /> {t('contactUs')}
            </Link>
          </div>

          <div className="suggested-routes">
            <h3>{t('suggestedRoutes')}</h3>
            <div className="route-links">
              <Link to="/" className="route-link">
                <FaHome /> {t('home')}
              </Link>
              <Link to="/current-march" className="route-link">
                <FaMapMarkerAlt /> {t('currentMarch')}
              </Link>
              <Link to="/registration" className="route-link">
                <FaMapMarkerAlt /> {t('registration')}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bear-tracks">
        <div className="track track-1"></div>
        <div className="track track-2"></div>
        <div className="track track-3"></div>
        <div className="track track-4"></div>
        <div className="track track-5"></div>
        <div className="track track-6"></div>
      </div>
    </div>
  );
};

export default NotFound;