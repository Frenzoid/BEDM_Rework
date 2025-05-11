// components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWalking, FaBars, FaTimes, FaGlobe, FaCompass } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  // Change language handler
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMobileNavOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile nav when location changes
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location]);

  // Navigation links
  const navLinks = [
    { path: '/', text: t('home') },
    { path: '/about', text: t('about') },
    { path: '/registration', text: t('registration') },
    { path: '/current-march', text: t('currentMarch') },
    { path: '/leaderboards', text: t('leaderboards') },
    { path: '/statistics', text: t('statistics') },
    { path: '/history', text: t('history') },
    { path: '/gallery', text: t('gallery') },
    { path: '/contact', text: t('contact') }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <Link to="/" className="logo-link">
              <motion.div
                initial={{ rotate: -5 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="logo-container"
              >
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2024/12/image-1-1024x680.png"
                  alt="Bernese Distance March Logo"
                  className="logo-img"
                />
                <div className="logo-text">
                  <h1>Bern<FaWalking className="walking-icon" />DM</h1>
                  <p className="tagline">{t('tagline')}</p>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    {link.text}
                    {link.path === '/current-march' && (
                      <span className="highlight-badge">2025</span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Language Selector */}
          <div className="language-selector">
            <button
              className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${i18n.language === 'de' ? 'active' : ''}`}
              onClick={() => changeLanguage('de')}
            >
              DE
            </button>
            <button
              className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
              onClick={() => changeLanguage('fr')}
            >
              FR
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          >
            {mobileNavOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              className="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="mobile-nav-list">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="mobile-nav-item"
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive ? "mobile-nav-link active" : "mobile-nav-link"
                      }
                      onClick={() => setMobileNavOpen(false)}
                    >
                      {link.path === '/' && <FaCompass className="nav-icon" />}
                      {link.text}
                      {link.path === '/current-march' && (
                        <span className="highlight-badge mobile">2025</span>
                      )}
                    </NavLink>
                  </motion.li>
                ))}

                {/* Mobile Language Selector */}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mobile-nav-item language-item"
                >
                  <div className="mobile-lang-selector">
                    <FaGlobe className="globe-icon" />
                    <span>{t('language')}</span>
                    <div className="mobile-lang-buttons">
                      <button
                        className={`mobile-lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                        onClick={() => changeLanguage('en')}
                      >
                        EN
                      </button>
                      <button
                        className={`mobile-lang-btn ${i18n.language === 'de' ? 'active' : ''}`}
                        onClick={() => changeLanguage('de')}
                      >
                        DE
                      </button>
                      <button
                        className={`mobile-lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
                        onClick={() => changeLanguage('fr')}
                      >
                        FR
                      </button>
                    </div>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;