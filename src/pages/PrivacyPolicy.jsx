// pages/PrivacyPolicy/PrivacyPolicy.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaShieldAlt } from 'react-icons/fa';
import '../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy-page">
      <div className="legal-banner">
        <div className="container">
          <h1><FaShieldAlt className="title-icon" /> {t('privacyPolicy')}</h1>
        </div>
      </div>

      <div className="container">
        <motion.div
          className="privacy-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="legal-meta">
            <p className="last-updated">{t('lastUpdated')}: 01.05.2025</p>
          </div>

          <section className="legal-section">
            <h2>{t('introduction')}</h2>
            <p>{t('privacyIntro1')}</p>
            <p>{t('privacyIntro2')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('informationWeCollect')}</h2>
            <p>{t('informationCollectedDesc')}</p>

            <h3>{t('personalInformation')}</h3>
            <p>{t('personalInfoDesc')}</p>
            <ul className="legal-list">
              <li>{t('personalInfoItem1')}</li>
              <li>{t('personalInfoItem2')}</li>
              <li>{t('personalInfoItem3')}</li>
              <li>{t('personalInfoItem4')}</li>
              <li>{t('personalInfoItem5')}</li>
            </ul>

            <h3>{t('nonPersonalInformation')}</h3>
            <p>{t('nonPersonalInfoDesc')}</p>
            <ul className="legal-list">
              <li>{t('nonPersonalInfoItem1')}</li>
              <li>{t('nonPersonalInfoItem2')}</li>
              <li>{t('nonPersonalInfoItem3')}</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>{t('howWeUseInfo')}</h2>
            <p>{t('howWeUseInfoDesc')}</p>
            <ul className="legal-list">
              <li>{t('useInfoItem1')}</li>
              <li>{t('useInfoItem2')}</li>
              <li>{t('useInfoItem3')}</li>
              <li>{t('useInfoItem4')}</li>
              <li>{t('useInfoItem5')}</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>{t('cookies')}</h2>
            <p>{t('cookiesDesc1')}</p>
            <p>{t('cookiesDesc2')}</p>

            <h3>{t('typesOfCookies')}</h3>
            <ul className="legal-list">
              <li><strong>{t('essentialCookies')}:</strong> {t('essentialCookiesDesc')}</li>
              <li><strong>{t('analyticsCookies')}:</strong> {t('analyticsCookiesDesc')}</li>
              <li><strong>{t('functionalCookies')}:</strong> {t('functionalCookiesDesc')}</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>{t('dataSharing')}</h2>
            <p>{t('dataSharingDesc')}</p>
            <ul className="legal-list">
              <li>{t('dataSharingItem1')}</li>
              <li>{t('dataSharingItem2')}</li>
              <li>{t('dataSharingItem3')}</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>{t('dataSecurity')}</h2>
            <p>{t('dataSecurityDesc1')}</p>
            <p>{t('dataSecurityDesc2')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('dataRetention')}</h2>
            <p>{t('dataRetentionDesc')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('yourRights')}</h2>
            <p>{t('yourRightsDesc')}</p>
            <ul className="legal-list">
              <li><strong>{t('rightToAccess')}:</strong> {t('rightToAccessDesc')}</li>
              <li><strong>{t('rightToRectify')}:</strong> {t('rightToRectifyDesc')}</li>
              <li><strong>{t('rightToErase')}:</strong> {t('rightToEraseDesc')}</li>
              <li><strong>{t('rightToRestrict')}:</strong> {t('rightToRestrictDesc')}</li>
              <li><strong>{t('rightToDataPortability')}:</strong> {t('rightToDataPortabilityDesc')}</li>
              <li><strong>{t('rightToObject')}:</strong> {t('rightToObjectDesc')}</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>{t('changesPolicy')}</h2>
            <p>{t('changesPolicyDesc')}</p>
          </section>

          <section className="legal-section">
            <h2>{t('contactUs')}</h2>
            <p>{t('privacyContactDesc')}</p>
            <div className="contact-details">
              <p>
                <strong>Email:</strong> privacy@bernerdm.ch
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

export default PrivacyPolicy;