import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-logo">
            {/* Replaced image with text logo */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Canton_of_Bern.svg/250px-Flag_of_Canton_of_Bern.svg.png"
              alt="Berner DM Logo"
              className="logo"
            />
            <h2 className="mt-2 text-center">Bernese Distance March</h2>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/registration">Registration</Link></li>
              <li><Link to="/current-march">Current March</Link></li>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/leaderboards">Leaderboards</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact</h3>
            <address>
              <p>Hptadj Adrian Venner</p>
              <p>Rütigässli 3</p>
              <p>CH - 3115 Gerzensee</p>
              <p>+41 (0) 79 153 28 87</p>
              <p><a href="mailto:kommando@bernerdm.ch">kommando@bernerdm.ch</a></p>
            </address>
          </div>

          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <motion.a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-facebook-f"></i>
              </motion.a>
              <motion.a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
              >
                <i className="fab fa-twitter"></i>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Bernese Distance March. All Rights Reserved.</p>
          </div>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;