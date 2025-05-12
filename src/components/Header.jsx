import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
  }, [location]);

  const navVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
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
              src="https://www.bernerdm.ch/wp-content/uploads/2022/07/DMB_Logo_Stempel_gelb-1.png"
              alt="Berner DM Logo"
              className="logo"
            />
            <div className="site-title">
              <h1>Bernese Distance March</h1>
              <span className="subtitle">A Swiss Army Tradition</span>
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
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/registration' ? 'active' : ''}>
              <Link to="/registration">Registration</Link>
            </li>
            <li className={location.pathname === '/current-march' ? 'active' : ''}>
              <Link to="/current-march">Current March</Link>
            </li>
            <li className={location.pathname.includes('/history') ? 'active' : ''}>
              <Link to="/history">History</Link>
            </li>
            <li className={location.pathname === '/leaderboards' ? 'active' : ''}>
              <Link to="/leaderboards">Leaderboards</Link>
            </li>
            <li className={location.pathname === '/statistics' ? 'active' : ''}>
              <Link to="/statistics">Statistics</Link>
            </li>
            <li className={location.pathname === '/gallery' ? 'active' : ''}>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>

        <motion.nav
          className="mobile-nav"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={navVariants}
        >
          <motion.ul className="mobile-nav-list">
            <motion.li variants={linkVariants} className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname === '/registration' ? 'active' : ''}>
              <Link to="/registration">Registration</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname === '/current-march' ? 'active' : ''}>
              <Link to="/current-march">Current March</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname.includes('/history') ? 'active' : ''}>
              <Link to="/history">History</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname === '/leaderboards' ? 'active' : ''}>
              <Link to="/leaderboards">Leaderboards</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname === '/statistics' ? 'active' : ''}>
              <Link to="/statistics">Statistics</Link>
            </motion.li>
            <motion.li variants={linkVariants} className={location.pathname === '/gallery' ? 'active' : ''}>
              <Link to="/gallery">Gallery</Link>
            </motion.li>
          </motion.ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;