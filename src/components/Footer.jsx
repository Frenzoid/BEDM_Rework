// components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare, FaMapMarkerAlt, FaEnvelope, FaPhone, FaWalking, FaMedal, FaCompass } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2024/12/image-1-1024x680.png"
                  alt="Bernese Distance March Logo"
                />
                <h3>Bernese Distance March</h3>
              </div>
              <p className="footer-description">
                {t('footerDescription')}
              </p>
              <div className="social-links">
                <a href="https://facebook.com/bernerdm" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookSquare />
                </a>
                <a href="https://twitter.com/bernerdm" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitterSquare />
                </a>
                <a href="https://instagram.com/bernerdm" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagramSquare />
                </a>
                <a href="https://youtube.com/bernerdm" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutubeSquare />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>{t('quickLinks')}</h4>
              <ul className="footer-links">
                <li>
                  <Link to="/">
                    <FaCompass className="footer-icon" /> {t('home')}
                  </Link>
                </li>
                <li>
                  <Link to="/registration">
                    <FaWalking className="footer-icon" /> {t('registration')}
                  </Link>
                </li>
                <li>
                  <Link to="/current-march">
                    <FaMapMarkerAlt className="footer-icon" /> {t('currentMarch')}
                  </Link>
                </li>
                <li>
                  <Link to="/leaderboards">
                    <FaMedal className="footer-icon" /> {t('leaderboards')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <FaEnvelope className="footer-icon" /> {t('contact')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t('contactUs')}</h4>
              <ul className="contact-list">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <p>
                    Hptadj Adrian Venner<br />
                    Rütigässli 3<br />
                    CH - 3115 Gerzensee
                  </p>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <p>+41 (0) 79 153 28 87</p>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:kommando@bernerdm.ch">kommando@bernerdm.ch</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t('nextEvent')}</h4>
              <div className="event-countdown">
                <div className="event-date">
                  <strong>6th December 2025</strong>
                </div>
                <div className="countdown-timer">
                  <div className="countdown-item">
                    <span className="count">365</span>
                    <span className="label">{t('days')}</span>
                  </div>
                  <div className="countdown-item">
                    <span className="count">24</span>
                    <span className="label">{t('hours')}</span>
                  </div>
                  <div className="countdown-item">
                    <span className="count">00</span>
                    <span className="label">{t('minutes')}</span>
                  </div>
                </div>
                <Link to="/registration" className="register-btn">
                  {t('registerNow')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Bernese Distance March. {t('allRightsReserved')}
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy">{t('privacyPolicy')}</Link>
              <Link to="/terms">{t('termsOfService')}</Link>
              <Link to="/imprint">{t('imprint')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;