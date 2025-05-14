/**
 * Application configuration settings
 */

const path = require('path');

// Configuration object for the application
const CONFIG = {
  // Server settings
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',

  // CSV settings
  CSV_FILE: path.join(__dirname, '../../data/registrations.csv'),
  CSV_HEADERS: [
    'firstName',
    'lastName',
    'email',
    'phone',
    'birthDate',
    'category',
    'groupName',
    'isGroup',
    'registrationDate'
  ],

  // Email settings
  EMAIL: {
    ENABLED: process.env.EMAIL_ENABLED === 'true',
    HOST: process.env.EMAIL_HOST,
    PORT: process.env.EMAIL_PORT || 587,
    USER: process.env.EMAIL_USER,
    PASSWORD: process.env.EMAIL_PASSWORD,
    FROM: process.env.EMAIL_FROM || 'noreply@bernesemarch.example.com',
    FROM_NAME: process.env.EMAIL_FROM_NAME || 'Bernese Distance March',
    EVENT_NAME: 'Bernese Distance March',
    EVENT_DATE: process.env.EVENT_DATE || 'June 15-16, 2025'
  }
};

module.exports = CONFIG;