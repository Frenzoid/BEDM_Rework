/**
 * Health check route
 */

const express = require('express');
const router = express.Router();

/**
 * GET /api/health
 * Health check endpoint to verify API is running
 */
router.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
