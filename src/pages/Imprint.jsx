// pages/Imprint/Imprint.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';
import '../styles/Imprint.css';

const Imprint = () => {
  const { t } = useTranslation();

  return (
    <div className="imprint-page">
      <div className="legal-banner">
        <div className="container">
          <h1><FaInfoCircle className="title-icon" /> {t('imprint')}</h1>
        </div>
      </div>

      <div className="container">
        <motion.div
          className="imprint-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="legal-section">
            <h2>{t('responsibleEntity')}</h2>
            <div className="entity-details">
              <p><strong>Bernese Distance March</strong></p>
              <p>
                Rütigässli 3<br />
                CH - 3115 Gerzensee<br />
                Switzerland
              </p>
              <p>
                <strong>{t('phone')}:</strong> +41 (0) 79 153 28 87
              </p>
              <p>
                <strong>Email:</strong> kommando@bernerdm.ch
              </p>
              <p>
                <strong>Website:</strong> www.bernerdm.ch
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>{t('legalRepresentative')}</h2>
            <p>
              <strong>Commander:</strong> Hptadj Adrian Venner
            </p>
          </section>

          <section className="legal-section">
            <h2>{t('vatRegistration')}</h2>
            <p>{t('vatRegistrationDesc')}</p>
            <p><strong>UID:</strong> CHE-123.456.789</p>
          </section>

          <section className="legal-section">
            <h2>{t('responsibilityContent')}</h2>
            <p>{t('responsibilityContentDesc1')}</p>
            <p>{t('responsibilityContentDesc2')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('externalLinks')}</h2>
            <p>{t('externalLinksDesc')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('copyright')}</h2>
            <p>{t('copyrightDesc1')}</p>
            <p>{t('copyrightDesc2')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('imageCredits')}</h2>
            <p>{t('imageCreditsDesc')}</p>
            <ul className="legal-list">
              <li>{t('imageCredit1')}</li>
              <li>{t('imageCredit2')}</li>
              <li>{t('imageCredit3')}</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>{t('disputeResolution')}</h2>
            <p>{t('disputeResolutionDesc')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('dataProtectionOfficer')}</h2>
            <p>{t('dataProtectionOfficerDesc')}</p>
            <div className="contact-details">
              <p>
                <strong>{t('dataProtectionOfficer')}:</strong> Michael Weber
              </p>
              <p>
                <strong>Email:</strong> datenschutz@bernerdm.ch
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Imprint;