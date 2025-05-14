import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/Registration.css';

const Registration = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    category: '',
    groupName: '',
    isGroup: false,
    agreeTerms: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // If category is group-related, set isGroup to true
    if (name === 'category' && (value === 'category-a-group' || value === 'category-c-group')) {
      setFormData(prevData => ({
        ...prevData,
        isGroup: true
      }));
    } else if (name === 'category') {
      setFormData(prevData => ({
        ...prevData,
        isGroup: false,
        groupName: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Call API to submit form data
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Form submitted successfully:', formData);
        setFormSubmitted(true);

        // Scroll to top
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      } else {
        console.error('Registration failed:', data.message);
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Server error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      birthDate: '',
      category: '',
      groupName: '',
      isGroup: false,
      agreeTerms: false
    });
    setError(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  if (formSubmitted) {
    return (
      <div className="registration-page success-page">
        <motion.div
          className="success-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="success-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2>{t('pages.registration.success.title')}</h2>
          <p>{t('pages.registration.success.thankYou')}</p>
          <p>{t('pages.registration.success.emailSent', { email: formData.email })}</p>
          <p>{t('pages.registration.success.details')}</p>
          <ul className="registration-details">
            <li><strong>{t('pages.registration.success.name')}</strong> {formData.firstName} {formData.lastName}</li>
            <li><strong>{t('pages.registration.success.category')}</strong> {formData.category.replace('-', ' ').toUpperCase()}</li>
            {formData.isGroup && (
              <li><strong>{t('pages.registration.success.groupName')}</strong> {formData.groupName}</li>
            )}
          </ul>
          <p>{t('pages.registration.success.questions')} <a href="mailto:kommando@bernerdm.ch">kommando@bernerdm.ch</a>.</p>
          <button className="btn btn-primary" onClick={handleReset}>{t('pages.registration.success.registerAnother')}</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <div className="page-header">
        <div className="container">
          <h1>{t('pages.registration.header.title')}</h1>
          <p>{t('pages.registration.header.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="registration-content">
          <div className="registration-info">
            <h2>{t('pages.registration.info.title')}</h2>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="info-content">
                <h3>{t('pages.registration.info.importantNotes.title')}</h3>
                <ul>
                  <li>{t('pages.registration.info.importantNotes.deadline')}</li>
                  <li>{t('pages.registration.info.importantNotes.fee')}</li>
                  <li>{t('pages.registration.info.importantNotes.childrenFree')}</li>
                  <li>{t('pages.registration.info.importantNotes.payment')}</li>
                  <li>{t('pages.registration.info.importantNotes.noCards')}</li>
                </ul>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-tags"></i>
              </div>
              <div className="info-content">
                <h3>{t('pages.registration.info.categories.title')}</h3>
                <ul>
                  <li>{t('pages.registration.info.categories.catA')}</li>
                  <li>{t('pages.registration.info.categories.catB')}</li>
                  <li>{t('pages.registration.info.categories.catC')}</li>
                  <li>{t('pages.registration.info.categories.groups')}</li>
                </ul>
              </div>
            </div>

            <div className="registration-image">
              <img src="https://www.bernerdm.ch/wp-content/uploads/2024/12/image-1-1024x680.png" alt={t('pages.registration.imageAlt')} />
            </div>
          </div>

          <motion.div
            className="registration-form-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <h2>{t('pages.registration.form.title')}</h2>

            {error && (
              <div className="error-message" style={{ color: 'red', marginBottom: '15px', padding: '10px', backgroundColor: '#ffebee', borderRadius: '4px' }}>
                {error}
              </div>
            )}

            <form className="registration-form" onSubmit={handleSubmit}>
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="firstName">{t('pages.registration.form.fields.firstName')} *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">{t('pages.registration.form.fields.lastName')} *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>

              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="email">{t('pages.registration.form.fields.email')} *</label>
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
                  <label htmlFor="phone">{t('pages.registration.form.fields.phone')} *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="birthDate">{t('pages.registration.form.fields.birthDate')} *</label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="category">{t('pages.registration.form.fields.category')} *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t('pages.registration.form.categories.select')}</option>
                  <option value="category-a-men">{t('pages.registration.form.categories.catAMen')}</option>
                  <option value="category-a-women">{t('pages.registration.form.categories.catAWomen')}</option>
                  <option value="category-a-group">{t('pages.registration.form.categories.catAGroup')}</option>
                  <option value="category-b">{t('pages.registration.form.categories.catB')}</option>
                  <option value="category-c-men">{t('pages.registration.form.categories.catCMen')}</option>
                  <option value="category-c-women">{t('pages.registration.form.categories.catCWomen')}</option>
                  <option value="category-c-group">{t('pages.registration.form.categories.catCGroup')}</option>
                </select>
              </motion.div>

              {formData.isGroup && (
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="groupName">{t('pages.registration.form.fields.groupName')} *</label>
                  <input
                    type="text"
                    id="groupName"
                    name="groupName"
                    value={formData.groupName}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
              )}

              <motion.div className="form-group checkbox-group" variants={itemVariants}>
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agreeTerms">
                  {t('pages.registration.form.fields.agreeTerms')}
                </label>
              </motion.div>

              <motion.div className="form-actions" variants={itemVariants}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('pages.registration.form.buttons.submitting') : t('pages.registration.form.buttons.submit')}
                </button>
                <button
                  type="reset"
                  className="btn btn-secondary"
                  onClick={() => {
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      birthDate: '',
                      category: '',
                      groupName: '',
                      isGroup: false,
                      agreeTerms: false
                    });
                    setError(null);
                  }}
                  disabled={isSubmitting}
                >
                  {t('pages.registration.form.buttons.reset')}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Registration;