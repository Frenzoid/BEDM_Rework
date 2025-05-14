/**
 * CSV Service for handling registration data storage
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const logger = require('../utils/logger');
const WriteQueue = require('../utils/write-queue');
const CONFIG = require('../config');

// Promisify fs functions for cleaner async/await usage
const fsAccess = promisify(fs.access);
const fsWriteFile = promisify(fs.writeFile);
const fsAppendFile = promisify(fs.appendFile);
const fsReaddir = promisify(fs.readdir);
const fsMkdir = promisify(fs.mkdir);

// Create a global write queue instance
const writeQueue = new WriteQueue();

/**
 * Escapes a value for CSV format
 * @param {any} value - The value to escape
 * @returns {string} The escaped value
 */
function escapeCSV(value) {
  if (value === null || value === undefined) {
    return '';
  }
  
  const stringValue = String(value);
  
  // If the value contains a comma, newline, or double-quote, wrap it in quotes
  if (stringValue.includes(',') || stringValue.includes('\n') || stringValue.includes('"')) {
    // Double up any double-quotes to escape them
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  
  return stringValue;
}

/**
 * Ensure the data directory exists
 * @returns {Promise<void>}
 */
async function ensureDataDirectory() {
  const dataDir = path.dirname(CONFIG.CSV_FILE);
  
  try {
    await fsAccess(dataDir);
  } catch (error) {
    // Directory doesn't exist, create it
    logger.info(`Creating data directory: ${dataDir}`);
    await fsMkdir(dataDir, { recursive: true });
  }
}

/**
 * Initialize the CSV file if it doesn't exist
 * @returns {Promise<void>}
 */
async function initCSVFile() {
  try {
    // Ensure the data directory exists
    await ensureDataDirectory();
    
    // Check if file exists
    try {
      await fsAccess(CONFIG.CSV_FILE, fs.constants.F_OK);
      logger.info('CSV file already exists');
    } catch {
      // Create file with headers if it doesn't exist
      await fsWriteFile(CONFIG.CSV_FILE, CONFIG.CSV_HEADERS.join(',') + '\n');
      logger.info('CSV file created successfully');
    }
  } catch (error) {
    logger.error('Failed to initialize CSV file', error);
    throw new Error(`CSV initialization failed: ${error.message}`);
  }
}

/**
 * Append a new record to the CSV file
 * @param {Object} data - The data to append
 * @returns {Promise<void>}
 */
async function appendToCSV(data) {
  // Use the queue to ensure only one write happens at a time
  return writeQueue.add(async () => {
    try {
      // Format the data as a CSV row
      const values = CONFIG.CSV_HEADERS.map(header => escapeCSV(data[header]));
      
      // Append the new row to the CSV file
      await fsAppendFile(CONFIG.CSV_FILE, values.join(',') + '\n');
      logger.info('Added registration to CSV for', data.email);
      return true;
    } catch (error) {
      logger.error('Failed to append to CSV file', error);
      throw new Error(`CSV write operation failed: ${error.message}`);
    }
  });
}

module.exports = {
  initCSVFile,
  appendToCSV
};
