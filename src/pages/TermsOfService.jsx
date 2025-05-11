// pages/TermsOfService/TermsOfService.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGavel } from 'react-icons/fa';
import '../styles/TermsOfService.css';

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="terms-service-page">
      <div className="legal-banner">
        <div className="container">
          <h1><FaGavel className="title-icon" /> {t('termsOfService')}</h1>
        </div>
      </div>

      <div className="container">
        <motion.div
          className="terms-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="legal-meta">
            <p className="last-updated">{t('lastUpdated')}: 01.05.2025</p>
          </div>

          <section className="legal-section">
            <h2>{t('acceptance')}</h2>
            <p>{t('termsAcceptance1')}</p>
            <p>{t('termsAcceptance2')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('eligibility')}</h2>
            <p>{t('eligibilityDesc1')}</p>
            <p>{t('eligibilityDesc2')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('registrationParticipation')}</h2>
            <p>{t('registrationDesc1')}</p>
            <p>{t('registrationDesc2')}</p>

            <h3>{t('accountResponsibilities')}</h3>
            <p>{t('accountResponsibilitiesDesc')}</p>
            <ul className="legal-list">
              <li>{t('accountResp1')}</li>
              <li>{t('accountResp2')}</li>
              <li>{t('accountResp3')}</li>
              <li>{t('accountResp4')}</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>{t('paymentRefunds')}</h2>
            <p>{t('paymentRefundsDesc1')}</p>
            <p>{t('paymentRefundsDesc2')}</p>

            <h3>{t('refundPolicy')}</h3>
            <p>{t('refundPolicyDesc')}</p>
            <ul className="legal-list">
              <li>{t('refundPolicyItem1')}</li>
              <li>{t('refundPolicyItem2')}</li>
              <li>{t('refundPolicyItem3')}</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>{t('eventParticipation')}</h2>
            <p>{t('eventParticipationDesc')}</p>

            <h3>{t('participantConduct')}</h3>
            <p>{t('participantConductDesc')}</p>
            <ul className="legal-list">
              <li>{t('conductItem1')}</li>
              <li>{t('conductItem2')}</li>
              <li>{t('conductItem3')}</li>
              <li>{t('conductItem4')}</li>
              <li>{t('conductItem5')}</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>{t('healthSafety')}</h2>
            <p>{t('healthSafetyDesc1')}</p>
            <p>{t('healthSafetyDesc2')}</p>
            <p>{t('healthSafetyDesc3')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('mediaConsent')}</h2>
            <p>{t('mediaConsentDesc1')}</p>
            <p>{t('mediaConsentDesc2')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('intellectualProperty')}</h2>
            <p>{t('intellectualPropertyDesc1')}</p>
            <p>{t('intellectualPropertyDesc2')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('limitationLiability')}</h2>
            <p>{t('limitationLiabilityDesc1')}</p>
            <p>{t('limitationLiabilityDesc2')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('indemnification')}</h2>
            <p>{t('indemnificationDesc')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('termsCancellation')}</h2>
            <p>{t('termsCancellationDesc1')}</p>
            <p>{t('termsCancellationDesc2')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('forceMAjeure')}</h2>
            <p>{t('forceMajeureDesc')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('governingLaw')}</h2>
            <p>{t('governingLawDesc')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('contactUs')}</h2>
            <p>{t('termsContactDesc')}</p>
            <div className="contact-details">
              <p>
                <strong>Email:</strong> info@bernerdm.ch
              </p>
              <p>
                <strong>{t('address')}:</strong><br />
                Bernese Distance March<br />
                Rütigässli 3<br />
                CH - 3115 Gerzensee<br />
                Switzerland
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;