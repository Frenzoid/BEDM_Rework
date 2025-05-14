/**
 * Logger - Unified logging format
 */

/**
 * Simple logger with standardized formatting
 */
const logger = {
  /**
   * Log an info message
   * @param {string} message - Log message
   * @param {*} data - Optional data to log
   */
  info: (message, data) => {
    console.log(`[INFO] ${message}`, data ? data : '');
  },
  
  /**
   * Log an error message
   * @param {string} message - Error message
   * @param {Error|*} error - Error object or additional data
   */
  error: (message, error) => {
    console.error(`[ERROR] ${message}`, error || '');
  },
  
  /**
   * Log a warning message
   * @param {string} message - Warning message
   * @param {*} data - Optional data to log
   */
  warn: (message, data) => {
    console.warn(`[WARN] ${message}`, data ? data : '');
  },
  
  /**
   * Log a debug message (only in non-production)
   * @param {string} message - Debug message
   * @param {*} data - Optional data to log
   */
  debug: (message, data) => {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(`[DEBUG] ${message}`, data ? data : '');
    }
  }
};

module.exports = logger;
