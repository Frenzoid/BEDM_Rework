import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/NotFound.css';

const NotFound = () => {
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
            404 - Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="not-found-message"
          >
            It seems you've gone off the designated route!
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
                  <span>You are here</span>
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
            Don't worry! Unlike in the real march, we can help you find your way back.
          </motion.p>

          <motion.div
            className="not-found-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link to="/" className="btn btn-primary">
              <i className="fas fa-home"></i> Return to Home
            </Link>
            <Link to="/current-march" className="btn btn-secondary">
              <i className="fas fa-map-signs"></i> View Current March
            </Link>
          </motion.div>

          <motion.div
            className="not-found-help"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h3>Looking for something specific?</h3>
            <ul className="quick-links">
              <li><Link to="/registration">Registration</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/leaderboards">Leaderboards</Link></li>
              <li><Link to="/gallery">Photo Gallery</Link></li>
            </ul>
            <p>
              If you need assistance, please <a href="mailto:kommando@bernerdm.ch">contact us</a>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;