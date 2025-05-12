import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Registration.css';

const Registration = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would submit the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);

    // Simulate form submission
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
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
          <h2>Registration Successful!</h2>
          <p>Thank you for registering for the 67th Bernese Distance March. We're excited to have you join us!</p>
          <p>A confirmation email has been sent to {formData.email} with further details about the event.</p>
          <p>Your registration details:</p>
          <ul className="registration-details">
            <li><strong>Name:</strong> {formData.firstName} {formData.lastName}</li>
            <li><strong>Category:</strong> {formData.category.replace('-', ' ').toUpperCase()}</li>
            {formData.isGroup && (
              <li><strong>Group Name:</strong> {formData.groupName}</li>
            )}
          </ul>
          <p>If you have any questions, please contact us at <a href="mailto:kommando@bernerdm.ch">kommando@bernerdm.ch</a>.</p>
          <button className="btn btn-primary" onClick={handleReset}>Register Another Participant</button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <div className="page-header">
        <div className="container">
          <h1>Registration</h1>
          <p>Sign up for the 67th Bernese Distance March - December 6th, 2025</p>
        </div>
      </div>

      <div className="container">
        <div className="registration-content">
          <div className="registration-info">
            <h2>Registration Information</h2>
            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="info-content">
                <h3>Important Notes</h3>
                <ul>
                  <li>Registration deadline: <strong>November 15, 2025</strong></li>
                  <li>Registration fee: <strong>CHF 25.00</strong> for adults</li>
                  <li>Children under 7: <strong>Free</strong></li>
                  <li>Payment to be made on-site (cash only)</li>
                  <li>No credit cards or checks accepted</li>
                </ul>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="fas fa-tags"></i>
              </div>
              <div className="info-content">
                <h3>Categories</h3>
                <ul>
                  <li><strong>Category A:</strong> Uniformed participants (military, police, etc.)</li>
                  <li><strong>Category B:</strong> Youth & Sport (under 20)</li>
                  <li><strong>Category C:</strong> Civilian participants</li>
                  <li><strong>Groups:</strong> Register as Category A or C group</li>
                </ul>
              </div>
            </div>

            <div className="registration-image">
              <img src="https://www.bernerdm.ch/wp-content/uploads/2024/12/image-1-1024x680.png" alt="Participants in the Bernese Distance March" />
            </div>
          </div>

          <motion.div
            className="registration-form-container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <h2>Registration Form</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
              <motion.div className="form-row" variants={itemVariants}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
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
                  <label htmlFor="lastName">Last Name *</label>
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
                  <label htmlFor="email">Email Address *</label>
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
                  <label htmlFor="phone">Phone Number *</label>
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
                <label htmlFor="birthDate">Date of Birth *</label>
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
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="category-a-men">Category A - Men (Uniformed)</option>
                  <option value="category-a-women">Category A - Women (Uniformed)</option>
                  <option value="category-a-group">Category A - Group (Uniformed)</option>
                  <option value="category-b">Category B - Youth & Sport (under 20)</option>
                  <option value="category-c-men">Category C - Men</option>
                  <option value="category-c-women">Category C - Women</option>
                  <option value="category-c-group">Category C - Group</option>
                </select>
              </motion.div>

              {formData.isGroup && (
                <motion.div
                  className="form-group"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="groupName">Group Name *</label>
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
                  I agree to the <a href="#terms">terms and conditions</a> and acknowledge that I am physically fit to participate in this event.
                </label>
              </motion.div>

              <motion.div className="form-actions" variants={itemVariants}>
                <button type="submit" className="btn btn-primary">Submit Registration</button>
                <button type="reset" className="btn btn-secondary" onClick={() => setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  birthDate: '',
                  category: '',
                  groupName: '',
                  isGroup: false,
                  agreeTerms: false
                })}>Reset Form</button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Registration;