/**
 * Application middleware
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('../utils/logger');
const CONFIG = require('../config');

/**
 * Configure core middleware for Express application
 * @param {express.Application} app - Express application
 */
function setupMiddleware(app) {
  // Security middleware
  app.use(helmet());
  
  // CORS middleware
  app.use(cors());
  
  // Request body parsing
  app.use(express.json());
  
  // Request logging middleware
  app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
  });
}

/**
 * Configure error handling middleware
 * @param {express.Application} app - Express application
 */
function setupErrorHandlers(app) {
  // 404 handler
  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: 'Endpoint not found'
    });
  });
  
  // Global error handler (must be last)
  app.use((err, req, res, next) => {
    logger.error('Express error', err);
    res.status(500).json({
      success: false,
      message: 'Server error occurred',
      error: CONFIG.NODE_ENV === 'production' ? 'Internal server error' : err.message
    });
  });
}

module.exports = {
  setupMiddleware,
  setupErrorHandlers
};
