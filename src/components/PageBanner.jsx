// components/PageBanner/PageBanner.jsx
import React from 'react';
import { motion } from "motion/react"
import '../styles/PageBanner.css';

const PageBanner = ({ title, subtitle, background }) => {
  return (
    <div
      className="page-banner"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <div className="page-banner-overlay"></div>
      <div className="container">
        <motion.div
          className="page-banner-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      <div className="bear-paw bear-paw-1"></div>
      <div className="bear-paw bear-paw-2"></div>
      <div className="bear-paw bear-paw-3"></div>
      <div className="bear-paw bear-paw-4"></div>
    </div>
  );
};

export default PageBanner;