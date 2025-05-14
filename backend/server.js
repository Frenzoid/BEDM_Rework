// Import the server startup function
const { startServer } = require('./src/app');

startServer()
  .catch(error => {
    console.error('[FATAL] Failed to start server:', error);
    process.exit(1);
  });