/**
 * Email service for sending registration confirmations
*/

const nodemailer = require('nodemailer');
const logger = require('../utils/logger');
const CONFIG = require('../config');

/**
 * Check if email service is properly configured
 * @returns {boolean} Whether email is properly configured
 */
function isEmailConfigured() {
  const { EMAIL } = CONFIG;

  if (!EMAIL.ENABLED) {
    return false;
  }

  if (!EMAIL.HOST || !EMAIL.USER || !EMAIL.PASSWORD) {
    logger.warn('Email sending is enabled but configuration is incomplete. Missing:', {
      host: !EMAIL.HOST,
      user: !EMAIL.USER,
      password: !EMAIL.PASSWORD ? 'Yes (password not set)' : 'No'
    });
    return false;
  }

  return true;
}

/**
 * Create a mail transport
 * @returns {nodemailer.Transporter|null} Configured mail transporter or null if not configured
 */
function createTransport() {
  if (!isEmailConfigured()) {
    return null;
  }

  const { EMAIL } = CONFIG;

  return nodemailer.createTransport({
    host: EMAIL.HOST,
    port: EMAIL.PORT,
    secure: EMAIL.PORT === 465,
    auth: {
      user: EMAIL.USER,
      pass: EMAIL.PASSWORD
    }
  });
}

/**
 * Generate HTML email content
 * @param {Object} data - Registration data
 * @returns {string} HTML content for email
 */
function generateEmailHTML(data) {
  const { EMAIL } = CONFIG;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Registration Confirmation - ${EMAIL.EVENT_NAME}</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #005A9C; color: white; padding: 10px 20px; border-radius: 5px; }
    .content { padding: 20px 0; }
    .footer { font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px; }
    .details { margin: 20px 0; }
    .details th { text-align: left; padding-right: 15px; }
    .details td { padding: 5px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${EMAIL.EVENT_NAME}</h1>
    </div>
    
    <div class="content">
      <p>Dear ${data.firstName} ${data.lastName},</p>
      
      <p>Thank you for registering for the ${EMAIL.EVENT_NAME}! Your registration has been confirmed.</p>
      
      <div class="details">
        <h3>Registration Details:</h3>
        <table>
          <tr>
            <th>Name:</th>
            <td>${data.firstName} ${data.lastName}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>${data.email}</td>
          </tr>
          <tr>
            <th>Category:</th>
            <td>${data.category || 'Standard'}</td>
          </tr>
          ${data.isGroup ? `
          <tr>
            <th>Group Name:</th>
            <td>${data.groupName || 'Not specified'}</td>
          </tr>` : ''}
          <tr>
            <th>Event Date:</th>
            <td>${EMAIL.EVENT_DATE}</td>
          </tr>
        </table>
      </div>
      
      <p>Please keep this email for your records. We look forward to seeing you at the event!</p>
      
      <p>
        Best regards,<br>
        The ${EMAIL.EVENT_NAME} Team
      </p>
    </div>
    
    <div class="footer">
      <p>This is an automated message. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
  `;
}

/**
 * Generate plain text email content
 * @param {Object} data - Registration data
 * @returns {string} Plain text content for email
 */
function generateEmailText(data) {
  const { EMAIL } = CONFIG;

  return `
Registration Confirmation - ${EMAIL.EVENT_NAME}

Dear ${data.firstName} ${data.lastName},

Thank you for registering for the ${EMAIL.EVENT_NAME}! Your registration has been confirmed.

Registration Details:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Category: ${data.category || 'Standard'}
${data.isGroup ? `- Group Name: ${data.groupName || 'Not specified'}\n` : ''}- Event Date: ${EMAIL.EVENT_DATE}

Please keep this email for your records. We look forward to seeing you at the event!

Best regards,
The ${EMAIL.EVENT_NAME} Team

---
This is an automated message. Please do not reply to this email.
  `;
}

/**
 * Send a confirmation email to a registered participant
 * @param {Object} registrationData - Registration data
 * @returns {Promise<boolean>} Whether the email was sent successfully
 */
async function sendConfirmationEmail(registrationData) {
  try {
    // Check if email is configured
    if (!isEmailConfigured()) {
      logger.warn('Email sending is disabled or not configured. Skipping confirmation email.');
      return false;
    }

    const { EMAIL } = CONFIG;
    const transporter = createTransport();

    if (!transporter) {
      return false;
    }

    // Prepare email content
    const mailOptions = {
      from: `"${EMAIL.FROM_NAME}" <${EMAIL.FROM}>`,
      to: registrationData.email,
      subject: `Registration Confirmation - ${EMAIL.EVENT_NAME}`,
      text: generateEmailText(registrationData),
      html: generateEmailHTML(registrationData)
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    logger.info(`Confirmation email sent to ${registrationData.email}`, {
      messageId: info.messageId
    });

    return true;
  } catch (error) {
    logger.error('Failed to send confirmation email', error);
    return false;
  }
}

module.exports = {
  sendConfirmationEmail,
  isEmailConfigured
};