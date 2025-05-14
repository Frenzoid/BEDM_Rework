import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const location = useLocation();

  // Languages available in the app with their flag emojis
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ge', name: 'Schwiizerdütsch', flag: '🇨🇭' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  // Get current language
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Track scroll position for header styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setLanguageDropdownOpen(false);
  }, [location]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownOpen && !event.target.closest('.language-selector')) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [languageDropdownOpen]);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setLanguageDropdownOpen(false);
    // Save language preference to localStorage
    localStorage.setItem('preferredLanguage', languageCode);
  };

  const toggleLanguageDropdown = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const navVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      visibility: 'visible',
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      visibility: 'hidden',
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.3,
      },
    },
  };

  const linkVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPL3mXo4fYYoIGtLs8CjWTEuCHKXFYX41YekzljWwOP1PVTjeBVSr2YYy9ZdV2JzRbGk&usqp=CAU"
              alt="Berner DM Logo"
              className="logo"
            />
            <div className="site-title">
              <h1>{t('common.siteTitle')}</h1>
              <span className="subtitle">{t('common.subtitle')}</span>
            </div>
          </Link>
        </div>

        <button
          className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">{t('common.navigation.home')}</Link>
            </li>
            <li className={location.pathname === '/current-march' ? 'active' : ''}>
              <Link to="/current-march">{t('common.navigation.currentMarch')}</Link>
            </li>
            <li className={location.pathname === '/registration' ? 'active' : ''}>
              <Link to="/registration">{t('common.navigation.registration')}</Link>
            </li>
            <li className={location.pathname.includes('/history') ? 'active' : ''}>
              <Link to="/history">{t('common.navigation.history')}</Link>
            </li>
            <li className={location.pathname === '/leaderboards' ? 'active' : ''}>
              <Link to="/leaderboards">{t('common.navigation.leaderboards')}</Link>
            </li>
            <li className={location.pathname === '/statistics' ? 'active' : ''}>
              <Link to="/statistics">{t('common.navigation.statistics')}</Link>
            </li>
            <li className={location.pathname === '/gallery' ? 'active' : ''}>
              <Link to="/gallery">{t('common.navigation.gallery')}</Link>
            </li>
          </ul>

          <div className="language-selector">
            <button
              className="language-toggle"
              onClick={toggleLanguageDropdown}
              aria-expanded={languageDropdownOpen}
              aria-label="Select language"
            >
              <span className="language-flag">{currentLanguage.flag}</span>
              <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
            </button>

            <AnimatePresence>
              {languageDropdownOpen && (
                <motion.div
                  className="language-dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`language-option ${language.code === i18n.language ? 'active' : ''}`}
                      onClick={() => changeLanguage(language.code)}
                    >
                      <span className="language-flag">{language.flag}</span>
                      <span className="language-name">{language.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <motion.nav
          className="mobile-nav"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={navVariants}
        >
          <motion.ul className="mobile-nav-list">
            <motion.li variants={linkVariants} className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">{t('common.navigation.home')}</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname === '/current-march' ? 'active' : ''}>
              <Link to="/current-march">{t('common.navigation.currentMarch')}</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname === '/registration' ? 'active' : ''}>
              <Link to="/registration">{t('common.navigation.registration')}</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname.includes('/history') ? 'active' : ''}>
              <Link to="/history">{t('common.navigation.history')}</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname === '/leaderboards' ? 'active' : ''}>
              <Link to="/leaderboards">{t('common.navigation.leaderboards')}</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname === '/statistics' ? 'active' : ''}>
              <Link to="/statistics">{t('common.navigation.statistics')}</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname === '/gallery' ? 'active' : ''}>
              <Link to="/gallery">{t('common.navigation.gallery')}</Link>
            </motion.li>

            <motion.li variants={linkVariants} className="mobile-language-selector">
              <p>Language / Sprache</p>
              <div className="mobile-language-options">
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`mobile-language-option ${language.code === i18n.language ? 'active' : ''}`}
                    onClick={() => changeLanguage(language.code)}
                  >
                    <span className="language-flag">{language.flag}</span>
                  </button>
                ))}
              </div>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;