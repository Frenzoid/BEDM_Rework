
/*
* Main application setup and server initialization
*/

const express = require('express');
const { setupMiddleware, setupErrorHandlers } = require('./middleware');
const routes = require('./routes');
const csvService = require('./services/csv-service');
const emailService = require('./services/email-service');
const logger = require('./utils/logger');
const CONFIG = require('./config');

/**
 * Create and configure the Express application
 * @returns {express.Application} Configured Express app
 */
function createApp() {
  const app = express();

  // Set up middleware
  setupMiddleware(app);

  // Mount API routes
  app.use('/api', routes);

  // Set up error handlers (must be last)
  setupErrorHandlers(app);

  return app;
}

/**
 * Start the server
 * @returns {Promise<void>}
 */
async function startServer() {
  try {
    // Initialize CSV file before starting the server
    await csvService.initCSVFile();

    // Check email configuration
    if (CONFIG.EMAIL.ENABLED) {
      if (emailService.isEmailConfigured()) {
        logger.info('Email service is configured and enabled');
      } else {
        logger.warn('Email service is enabled but not fully configured. Emails will not be sent.');
      }
    } else {
      logger.info('Email service is disabled');
    }

    // Create and configure Express app
    const app = createApp();

    // Start listening for requests
    const server = app.listen(CONFIG.PORT, () => {
      logger.info(`Server running in ${CONFIG.NODE_ENV} mode on port ${CONFIG.PORT}`);
      logger.info(`Bernese Distance March registration system is online`);
    });

    // Handle graceful shutdown
    process.on('SIGTERM', () => {
      logger.info('SIGTERM received, shutting down gracefully');
      server.close(() => {
        logger.info('Server closed');
      });
    });

    return server;
  } catch (error) {
    logger.error('Failed to start server', error);
    throw error;
  }
}

module.exports = {
  createApp,
  startServer
};