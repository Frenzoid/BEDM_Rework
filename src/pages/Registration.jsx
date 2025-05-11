// pages/Registration/Registration.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react"
import { FaUser, FaEnvelope, FaPhone, FaIdCard, FaBirthdayCake, FaFlag, FaUsers, FaShieldAlt, FaWalking, FaInfoCircle, FaCheck } from 'react-icons/fa';
import '../styles/Registration.css';
import PageBanner from '../components/PageBanner';

const Registration = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [registrationType, setRegistrationType] = useState('individual');
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    idNumber: '',
    groupName: '',
    groupSize: '',
    isUniform: false,
    emergencyContact: '',
    emergencyPhone: '',
    termsAccepted: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle registration type selection
  const handleRegistrationTypeChange = (type) => {
    setRegistrationType(type);
  };

  // Handle category selection
  const handleCategoryChange = (cat) => {
    setCategory(cat);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  // Go to next step
  const goToNextStep = () => {
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Go to previous step
  const goToPrevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="registration-page">
      <PageBanner
        title={t('registration')}
        subtitle={t('registerForMarch')}
        background="https://www.bernerdm.ch/wp-content/uploads/2024/12/registration-bg.jpg"
      />

      <div className="container">
        {/* Registration Steps */}
        <div className="registration-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <span className="step-name">{t('participantType')}</span>
          </div>

          <div className="step-connector"></div>

          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <span className="step-name">{t('personalInfo')}</span>
          </div>

          <div className="step-connector"></div>

          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <span className="step-name">{t('confirmation')}</span>
          </div>
        </div>

        {/* Registration Form */}
        <motion.div
          className="registration-form-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {formSubmitted ? (
            <div className="registration-success">
              <div className="success-icon">
                <FaCheck />
              </div>
              <h2>{t('registrationComplete')}</h2>
              <p>{t('registrationSuccessMessage')}</p>
              <p>{t('checkEmailMessage')}</p>
            </div>
          ) : (
            <form className="registration-form" onSubmit={handleSubmit}>
              {/* Step 1: Participant Type */}
              {step === 1 && (
                <div className="form-step">
                  <h2>{t('chooseParticipantType')}</h2>
                  <p className="form-description">{t('participantTypeDesc')}</p>

                  <div className="type-selection">
                    <div
                      className={`type-card ${registrationType === 'individual' ? 'selected' : ''}`}
                      onClick={() => handleRegistrationTypeChange('individual')}
                    >
                      <div className="type-icon">
                        <FaUser />
                      </div>
                      <h3>{t('individual')}</h3>
                      <p>{t('individualDesc')}</p>
                    </div>

                    <div
                      className={`type-card ${registrationType === 'group' ? 'selected' : ''}`}
                      onClick={() => handleRegistrationTypeChange('group')}
                    >
                      <div className="type-icon">
                        <FaUsers />
                      </div>
                      <h3>{t('group')}</h3>
                      <p>{t('groupDesc')}</p>
                    </div>
                  </div>

                  <h3 className="category-title">{t('selectCategory')}</h3>
                  <p className="form-description">{t('categoryDesc')}</p>

                  <div className="category-selection">
                    <div
                      className={`category-card ${category === 'A' ? 'selected' : ''}`}
                      onClick={() => handleCategoryChange('A')}
                    >
                      <div className="category-header">
                        <h4>{t('categoryA')}</h4>
                        <div className="uniform-badge">
                          <FaShieldAlt /> {t('uniformed')}
                        </div>
                      </div>
                      <p>{t('categoryADesc')}</p>
                    </div>

                    <div
                      className={`category-card ${category === 'B' ? 'selected' : ''}`}
                      onClick={() => handleCategoryChange('B')}
                    >
                      <div className="category-header">
                        <h4>{t('categoryB')}</h4>
                      </div>
                      <p>{t('categoryBDesc')}</p>
                    </div>

                    <div
                      className={`category-card ${category === 'C' ? 'selected' : ''}`}
                      onClick={() => handleCategoryChange('C')}
                    >
                      <div className="category-header">
                        <h4>{t('categoryC')}</h4>
                      </div>
                      <p>{t('categoryCDesc')}</p>
                    </div>
                  </div>

                  <div className="info-box">
                    <FaInfoCircle className="info-icon" />
                    <p>{t('categoryInfo')}</p>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn" onClick={goToNextStep}>
                      {t('continue')}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div className="form-step">
                  <h2>{t('personalInformation')}</h2>
                  <p className="form-description">{t('personalInfoDesc')}</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">
                        <FaUser className="form-icon" />
                        {t('firstName')} *
                      </label>
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
                      <label htmlFor="lastName">
                        <FaUser className="form-icon" />
                        {t('lastName')} *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">
                        <FaEnvelope className="form-icon" />
                        {t('email')} *
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
                        {t('phone')} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="dateOfBirth">
                        <FaBirthdayCake className="form-icon" />
                        {t('dateOfBirth')} *
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="nationality">
                        <FaFlag className="form-icon" />
                        {t('nationality')} *
                      </label>
                      <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="idNumber">
                        <FaIdCard className="form-icon" />
                        {t('idNumber')} *
                      </label>
                      <input
                        type="text"
                        id="idNumber"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {registrationType === 'group' && (
                      <div className="form-group">
                        <label htmlFor="groupName">
                          <FaUsers className="form-icon" />
                          {t('groupName')} *
                        </label>
                        <input
                          type="text"
                          id="groupName"
                          name="groupName"
                          value={formData.groupName}
                          onChange={handleChange}
                          required={registrationType === 'group'}
                        />
                      </div>
                    )}
                  </div>

                  {registrationType === 'group' && (
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="groupSize">
                          <FaUsers className="form-icon" />
                          {t('groupSize')} *
                        </label>
                        <select
                          id="groupSize"
                          name="groupSize"
                          value={formData.groupSize}
                          onChange={handleChange}
                          required={registrationType === 'group'}
                        >
                          <option value="">{t('selectGroupSize')}</option>
                          <option value="2-5">2-5 {t('people')}</option>
                          <option value="6-10">6-10 {t('people')}</option>
                          <option value="11-20">11-20 {t('people')}</option>
                          <option value="21+">21+ {t('people')}</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {(category === 'A' || category === 'C') && (
                    <div className="form-row">
                      <div className="form-group checkbox-group">
                        <input
                          type="checkbox"
                          id="isUniform"
                          name="isUniform"
                          checked={formData.isUniform}
                          onChange={handleChange}
                        />
                        <label htmlFor="isUniform">
                          <FaShieldAlt className="form-icon" />
                          {t('participatingInUniform')}
                        </label>
                      </div>
                    </div>
                  )}

                  <h3 className="section-title">{t('emergencyContact')}</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="emergencyContact">
                        <FaUser className="form-icon" />
                        {t('emergencyContactName')} *
                      </label>
                      <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="emergencyPhone">
                        <FaPhone className="form-icon" />
                        {t('emergencyContactPhone')} *
                      </label>
                      <input
                        type="tel"
                        id="emergencyPhone"
                        name="emergencyPhone"
                        value={formData.emergencyPhone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn btn-secondary" onClick={goToPrevStep}>
                      {t('back')}
                    </button>
                    <button type="button" className="btn" onClick={goToNextStep}>
                      {t('continue')}
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="form-step">
                  <h2>{t('confirmRegistration')}</h2>
                  <p className="form-description">{t('confirmRegistrationDesc')}</p>

                  <div className="confirmation-box">
                    <div className="confirmation-header">
                      <FaWalking className="confirmation-icon" />
                      <h3>{t('registrationSummary')}</h3>
                    </div>

                    <div className="confirmation-content">
                      <div className="confirmation-item">
                        <span className="confirmation-label">{t('registrationType')}:</span>
                        <span className="confirmation-value">
                          {registrationType === 'individual' ? t('individual') : t('group')}
                        </span>
                      </div>

                      <div className="confirmation-item">
                        <span className="confirmation-label">{t('category')}:</span>
                        <span className="confirmation-value">
                          {t(`category${category}`)}
                          {formData.isUniform && ` (${t('uniformed')})`}
                        </span>
                      </div>

                      <div className="confirmation-item">
                        <span className="confirmation-label">{t('name')}:</span>
                        <span className="confirmation-value">{`${formData.firstName} ${formData.lastName}`}</span>
                      </div>

                      <div className="confirmation-item">
                        <span className="confirmation-label">{t('email')}:</span>
                        <span className="confirmation-value">{formData.email}</span>
                      </div>

                      <div className="confirmation-item">
                        <span className="confirmation-label">{t('phone')}:</span>
                        <span className="confirmation-value">{formData.phone}</span>
                      </div>

                      <div className="confirmation-item">
                        <span className="confirmation-label">{t('dateOfBirth')}:</span>
                        <span className="confirmation-value">{formData.dateOfBirth}</span>
                      </div>

                      <div className="confirmation-item">
                        <span className="confirmation-label">{t('nationality')}:</span>
                        <span className="confirmation-value">{formData.nationality}</span>
                      </div>

                      {registrationType === 'group' && (
                        <>
                          <div className="confirmation-item">
                            <span className="confirmation-label">{t('groupName')}:</span>
                            <span className="confirmation-value">{formData.groupName}</span>
                          </div>

                          <div className="confirmation-item">
                            <span className="confirmation-label">{t('groupSize')}:</span>
                            <span className="confirmation-value">{formData.groupSize}</span>
                          </div>
                        </>
                      )}

                      <div className="confirmation-item">
                        <span className="confirmation-label">{t('emergencyContact')}:</span>
                        <span className="confirmation-value">
                          {formData.emergencyContact} ({formData.emergencyPhone})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="terms-section">
                    <div className="form-group checkbox-group">
                      <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="termsAccepted">
                        {t('termsAgreement')} <a href="/terms" target="_blank">{t('termsAndConditions')}</a> *
                      </label>
                    </div>
                  </div>

                  <div className="info-box">
                    <FaInfoCircle className="info-icon" />
                    <p>{t('registrationFeeInfo')}</p>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="btn btn-secondary" onClick={goToPrevStep}>
                      {t('back')}
                    </button>
                    <button type="submit" className="btn" disabled={!formData.termsAccepted}>
                      {t('completeRegistration')}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;