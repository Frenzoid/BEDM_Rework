/**
 * WriteQueue - Ensures sequential file operations to prevent concurrent write issues
 * A simple implementation of the Command pattern for queuing operations
 */

/**
 * WriteQueue class to handle sequential async operations
 */
class WriteQueue {
  /**
   * Create a new WriteQueue
   */
  constructor() {
    this.queue = [];
    this.processing = false;
  }

  /**
   * Add a task to the write queue
   * @param {Function} task - Async function to execute
   * @returns {Promise} Resolves when the task completes
   */
  async add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        task,
        resolve,
        reject
      });
      
      // Start processing if not already in progress
      if (!this.processing) {
        this.process();
      }
    });
  }

  /**
   * Process the next item in the queue
   */
  async process() {
    if (this.processing || this.queue.length === 0) return;
    
    this.processing = true;
    const { task, resolve, reject } = this.queue.shift();
    
    try {
      const result = await task();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.processing = false;
      // Process next item in queue if any
      if (this.queue.length > 0) {
        this.process();
      }
    }
  }
}

module.exports = WriteQueue;
