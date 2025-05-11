import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from "motion/react"
import { HiMenu, HiX } from 'react-icons/hi';
import { FaMapMarkedAlt, FaHistory, FaUsers, FaTrophy, FaCamera, FaEnvelope } from 'react-icons/fa';
import { GiHiking, GiMountainClimbing } from 'react-icons/gi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { path: '/', name: 'Home', icon: <GiHiking /> },
    { path: '/current-march', name: 'Current March', icon: <FaMapMarkedAlt /> },
    { path: '/registration', name: 'Registration', icon: <GiMountainClimbing /> },
    { path: '/history', name: 'History', icon: <FaHistory /> },
    { path: '/statistics', name: 'Statistics', icon: <FaUsers /> },
    { path: '/leaderboards', name: 'Leaderboards', icon: <FaTrophy /> },
    { path: '/gallery', name: 'Gallery', icon: <FaCamera /> },
    { path: '/contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Desktop Navigation */}
        <motion.ul
          className="nav-links"
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.li key={item.path} variants={itemVariants}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                end
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Navigation Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mobile-menu-header">
                <button onClick={closeMenu} aria-label="Close menu">
                  <HiX />
                </button>
              </div>
              <ul className="mobile-nav-links">
                {navItems.map((item) => (
                  <motion.li
                    key={item.path}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                      onClick={closeMenu}
                      end
                    >
                      <span className="mobile-nav-icon">{item.icon}</span>
                      <span className="mobile-nav-text">{item.name}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;