/**
 * API routes index
 */

const express = require('express');
const router = express.Router();

// Import route modules
const healthRoutes = require('./health');
const registerRoutes = require('./register');

// Set up routes
router.use('/health', healthRoutes);
router.use('/register', registerRoutes);

module.exports = router;
