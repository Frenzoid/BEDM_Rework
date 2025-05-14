import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-logo">
            <img
              src="https://www.bernerdm.ch/wp-content/uploads/2022/10/Logo-2.png"
              alt="Berner DM Logo"
              className="logo"
            />
            <h2 className="mt-2 text-center">{t('common.siteTitle')}</h2>
          </div>

          <div className="footer-section">
            <h3>{t('common.footer.quickLinks')}</h3>
            <ul>
              <li><Link to="/">{t('common.navigation.home')}</Link></li>
              <li><Link to="/registration">{t('common.navigation.registration')}</Link></li>
              <li><Link to="/current-march">{t('common.navigation.currentMarch')}</Link></li>
              <li><Link to="/history">{t('common.navigation.history')}</Link></li>
              <li><Link to="/leaderboards">{t('common.navigation.leaderboards')}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t('common.footer.contact')}</h3>
            <address>
              <p>{t('common.contactInfo.commander')}</p>
              <p>{t('common.contactInfo.address')}</p>
              <p>{t('common.contactInfo.city')}</p>
              <p>{t('common.contactInfo.phone')}</p>
              <p><a href={`mailto:${t('common.contactInfo.email')}`}>{t('common.contactInfo.email')}</a></p>
            </address>
          </div>

          <div className="footer-section">
            <h3>{t('common.footer.followUs')}</h3>
            <div className="social-icons">
              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
              <motion.a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>{t('common.footer.copyright', { year: currentYear })} <a href="https://frenzoid.dev/">Frenzoid</a> with ❤️.</p>
          </div>
          <div className="footer-links">
            <Link to="/privacy-policy">{t('common.footer.privacyPolicy')}</Link>
            <Link to="/terms-of-service">{t('common.footer.termsOfService')}</Link>
            <Link to="/sitemap">{t('common.footer.sitemap')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;