// pages/Contact/Contact.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react"
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserAlt, FaComment, FaPaperPlane, FaCheck } from 'react-icons/fa';
import '../styles/Contact.css';
import PageBanner from '../components/PageBanner';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

    // In a real application, you would send the form data to a server here
  };

  return (
    <div className="contact-page">
      <PageBanner
        title={t('contact')}
        subtitle={t('contactSubtitle')}
        background="https://www.bernerdm.ch/wp-content/uploads/2024/12/contact-bg.jpg"
      />

      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-grid">
            <div className="contact-info">
              <h2>{t('getInTouch')}</h2>
              <p className="contact-intro">{t('contactIntro')}</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h3>{t('email')}</h3>
                    <p>
                      <a href="mailto:kommando@bernerdm.ch">kommando@bernerdm.ch</a>
                    </p>
                    <p>
                      <a href="mailto:anmeldung@bernerdm.ch">anmeldung@bernerdm.ch</a>
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <FaPhone />
                  </div>
                  <div className="contact-details">
                    <h3>{t('phone')}</h3>
                    <p>
                      <a href="tel:+41791532887">+41 (0) 79 153 28 87</a>
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-details">
                    <h3>{t('address')}</h3>
                    <p>
                      Hptadj Adrian Venner<br />
                      Rütigässli 3<br />
                      CH - 3115 Gerzensee<br />
                      Switzerland
                    </p>
                  </div>
                </div>
              </div>

              <div className="quick-contacts">
                <h3>{t('specificInquiries')}</h3>
                <ul className="quick-contacts-list">
                  <li>
                    <span>{t('registration')}:</span>
                    <a href="mailto:anmeldung@bernerdm.ch">anmeldung@bernerdm.ch</a>
                  </li>
                  <li>
                    <span>{t('commandHQ')}:</span>
                    <a href="mailto:kommando@bernerdm.ch">kommando@bernerdm.ch</a>
                  </li>
                  <li>
                    <span>{t('finances')}:</span>
                    <a href="mailto:finanzen@bernerdm.ch">finanzen@bernerdm.ch</a>
                  </li>
                  <li>
                    <span>{t('media')}:</span>
                    <a href="mailto:medien@bernerdm.ch">medien@bernerdm.ch</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="contact-form-container">
              {formSubmitted ? (
                <div className="form-success">
                  <div className="success-icon">
                    <FaCheck />
                  </div>
                  <h2>{t('messageSent')}</h2>
                  <p>{t('messageSentDesc')}</p>
                </div>
              ) : (
                <div className="contact-form-wrapper">
                  <h2>{t('sendMessage')}</h2>
                  <p className="form-intro">{t('formIntro')}</p>

                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">
                        <FaUserAlt className="form-icon" />
                        {t('yourName')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        <FaEnvelope className="form-icon" />
                        {t('yourEmail')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">
                        <FaPhone className="form-icon" />
                        {t('yourPhone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">
                        <FaComment className="form-icon" />
                        {t('subject')} *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="message">
                        <FaComment className="form-icon" />
                        {t('yourMessage')} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        required
                      ></textarea>
                    </div>

                    <div className="privacy-note">
                      <p>{t('privacyNote')}</p>
                    </div>

                    <button type="submit" className="btn submit-btn">
                      <FaPaperPlane className="btn-icon" /> {t('sendMessage')}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          <div className="map-container">
            <h2>{t('findUs')}</h2>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86955.95257965453!2d7.397302399999999!3d46.94796435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39c0d43a1b77%3A0xcb555ffe0457659a!2sBern%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bernese Distance March Location"
              ></iframe>
            </div>
          </div>

          <div className="faq-section">
            <h2>{t('faq')}</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>{t('faqQuestion1')}</h3>
                <p>{t('faqAnswer1')}</p>
              </div>

              <div className="faq-item">
                <h3>{t('faqQuestion2')}</h3>
                <p>{t('faqAnswer2')}</p>
              </div>

              <div className="faq-item">
                <h3>{t('faqQuestion3')}</h3>
                <p>{t('faqAnswer3')}</p>
              </div>

              <div className="faq-item">
                <h3>{t('faqQuestion4')}</h3>
                <p>{t('faqAnswer4')}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;