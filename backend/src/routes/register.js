/**
 * Registration route
 */

const express = require('express');
const router = express.Router();
const csvService = require('../services/csv-service');
const emailService = require('../services/email-service');
const logger = require('../utils/logger');

/**
 * POST /api/register
 * Handles user registration and stores data in CSV
 */
router.post('/', async (req, res, next) => {
  try {
    const registrationData = req.body;

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email'];
    const missingFields = requiredFields.filter(field => !registrationData[field]);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        missingFields
      });
    }

    // Add registration date
    registrationData.registrationDate = new Date().toISOString();

    // Log the received data
    logger.debug('Received registration data', {
      email: registrationData.email,
      name: `${registrationData.firstName} ${registrationData.lastName}`
    });

    // Save to CSV
    await csvService.appendToCSV(registrationData);

    // Send confirmation email
    try {
      await emailService.sendConfirmationEmail(registrationData);
    } catch (emailError) {
      // Log error but don't fail registration
      logger.error('Failed to send confirmation email', emailError);
    }

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Registration successful'
    });
  } catch (error) {
    // Pass to error handler
    next(error);
  }
});

module.exports = router;