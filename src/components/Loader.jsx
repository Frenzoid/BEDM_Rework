// components/Loader/Loader.jsx
import React from 'react';
import { motion } from "motion/react"
import '../styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-content">
        <motion.div
          className="swiss-cross-loader"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="swiss-cross"></div>
        </motion.div>

        <motion.div
          className="loader-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2>Bernese Distance March</h2>
          <div className="paw-prints-container">
            <div className="paw paw-1"></div>
            <div className="paw paw-2"></div>
            <div className="paw paw-3"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;