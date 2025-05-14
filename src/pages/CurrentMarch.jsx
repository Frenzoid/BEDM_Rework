import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import BerneseMarchMap from '../components/BerneseMarchMap';

import { useTranslation } from 'react-i18next';
import '../styles/CurrentMarch.css';

const CurrentMarch = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (e) => {
    setSelectedImage({
      src: e.target.src,
      alt: e.target.alt
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="current-march-page">
      <div className="page-header">
        <div className="container">
          <h1>{t('pages.currentMarch.header.title')}</h1>
          <p>{t('pages.currentMarch.header.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => handleTabChange('overview')}
            >
              {t('pages.currentMarch.tabs.overview')}
            </button>

            <button
              className={`tab ${activeTab === 'how-it-works' ? 'active' : ''}`}
              onClick={() => handleTabChange('how-it-works')}
            >
              {t('pages.currentMarch.tabs.howItWorks')}
            </button>
            <button
              className={`tab ${activeTab === 'distance-scheme' ? 'active' : ''}`}
              onClick={() => handleTabChange('distance-scheme')}
            >
              {t('pages.currentMarch.tabs.distanceScheme')}
            </button>
            <button
              className={`tab ${activeTab === 'regulations' ? 'active' : ''}`}
              onClick={() => handleTabChange('regulations')}
            >
              {t('pages.currentMarch.tabs.regulations')}
            </button>
            <button
              className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => handleTabChange('faq')}
            >
              {t('pages.currentMarch.tabs.faq')}
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <motion.div
                className="overview-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>{t('pages.currentMarch.overview.title')}</h2>
                <div className="march-info-cards">
                  <div className="info-card">
                    <div className="icon p-4">
                      <i className="fas fa-calendar-day"></i>
                    </div>
                    <h3>{t('pages.currentMarch.overview.marchInfo.date.title')}</h3>
                    <p>{t('pages.currentMarch.overview.marchInfo.date.info')}</p>
                  </div>
                  <div className="info-card">
                    <div className="icon p-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>{t('pages.currentMarch.overview.marchInfo.location.title')}</h3>
                    <p>{t('pages.currentMarch.overview.marchInfo.location.info')}</p>
                  </div>
                  <div className="info-card">
                    <div className="icon p-4">
                      <i className="fas fa-clock"></i>
                    </div>
                    <h3>{t('pages.currentMarch.overview.marchInfo.startTime.title')}</h3>
                    <p>{t('pages.currentMarch.overview.marchInfo.startTime.info')}</p>
                  </div>
                </div>

                <div className="overview-description">
                  <p>
                    {t('pages.currentMarch.overview.description.paragraph1')}
                  </p>

                  <p>
                    {t('pages.currentMarch.overview.description.paragraph2')}
                  </p>

                  <div className="cta-buttons">
                    <Link to="/registration" className="btn btn-primary">{t('common.buttons.registerNow')}</Link>
                    <a href="#how-it-works" className="btn btn-secondary" onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('how-it-works');
                    }}>{t('pages.currentMarch.tabs.howItWorks')}</a>
                    <a href="#distance-scheme" className="btn btn-secondary" onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('distance-scheme');
                    }}>{t('pages.currentMarch.tabs.distanceScheme')}</a>
                  </div>
                </div>

                <div className="march-highlights">
                  <h3>{t('pages.currentMarch.overview.highlights.title')}</h3>
                  <ul>
                    <li>
                      <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="highlight-text">{t('pages.currentMarch.overview.highlights.item1')}</span>
                    </li>
                    <li>
                      <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="highlight-text">{t('pages.currentMarch.overview.highlights.item2')}</span>
                    </li>
                    <li>
                      <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="highlight-text">{t('pages.currentMarch.overview.highlights.item3')}</span>
                    </li>
                    <li>
                      <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="highlight-text">{t('pages.currentMarch.overview.highlights.item4')}</span>
                    </li>
                    <li>
                      <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="highlight-text">{t('pages.currentMarch.overview.highlights.item5')}</span>
                    </li>
                  </ul>
                </div>

                <div className="featured-image">
                  <img
                    src="https://www.bernerdm.ch/wp-content/uploads/2024/12/image-1-1024x680.png"
                    alt="Participants in the Bernese Distance March"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'distance-scheme' && (
              <motion.div
                className="distance-scheme-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>{t('pages.currentMarch.distanceScheme.title')}</h2>
                <div className="scheme-info">
                  <div className="scheme-alert">
                    <i className="fas fa-info-circle"></i>
                    <p>{t('pages.currentMarch.distanceScheme.alert')}</p>
                  </div>

                  <h3>{t('pages.currentMarch.distanceScheme.howItWorks.title')}</h3>
                  <p>
                    {t('pages.currentMarch.distanceScheme.howItWorks.description')}
                  </p>

                  <ul className="scheme-steps">
                    <li>
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>{t('pages.currentMarch.distanceScheme.howItWorks.steps.step1.title')}</h4>
                        <p>{t('pages.currentMarch.distanceScheme.howItWorks.steps.step1.description')}</p>
                      </div>
                    </li>
                    <li>
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>{t('pages.currentMarch.distanceScheme.howItWorks.steps.step2.title')}</h4>
                        <p>{t('pages.currentMarch.distanceScheme.howItWorks.steps.step2.description')}</p>
                      </div>
                    </li>
                    <li>
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>{t('pages.currentMarch.distanceScheme.howItWorks.steps.step3.title')}</h4>
                        <p>{t('pages.currentMarch.distanceScheme.howItWorks.steps.step3.description')}</p>
                      </div>
                    </li>
                    <li>
                      <div className="step-number">4</div>
                      <div className="step-content">
                        <h4>{t('pages.currentMarch.distanceScheme.howItWorks.steps.step4.title')}</h4>
                        <p>{t('pages.currentMarch.distanceScheme.howItWorks.steps.step4.description')}</p>
                      </div>
                    </li>
                  </ul>

                  <div className="distance-categories">
                    <h3>{t('pages.currentMarch.distanceScheme.categories.title')}</h3>
                    <p>{t('pages.currentMarch.distanceScheme.categories.description')}</p>

                    <div className="category-table">
                      <div className="table-header">
                        <div className="column">{t('pages.currentMarch.distanceScheme.categories.table.category')}</div>
                        <div className="column">{t('pages.currentMarch.distanceScheme.categories.table.minDistance')}</div>
                        <div className="column">{t('pages.currentMarch.distanceScheme.categories.table.requiredCheckpoints')}</div>
                      </div>
                      <div className="table-row">
                        <div className="column">{t('pages.currentMarch.distanceScheme.categories.table.catA')}</div>
                        <div className="column">40 km</div>
                        <div className="column">5-7</div>
                      </div>
                      <div className="table-row">
                        <div className="column">{t('pages.currentMarch.distanceScheme.categories.table.catB')}</div>
                        <div className="column">20 km</div>
                        <div className="column">3-5</div>
                      </div>
                      <div className="table-row">
                        <div className="column">{t('pages.currentMarch.distanceScheme.categories.table.catC')}</div>
                        <div className="column">30 km</div>
                        <div className="column">4-6</div>
                      </div>
                    </div>

                    <p className="note">
                      <i className="fas fa-exclamation-circle"></i> {t('pages.currentMarch.distanceScheme.categories.note')}
                    </p>
                  </div>

                  <div className="map-container">
                    <h3>Distance Scheme Map</h3>
                    <BerneseMarchMap />
                  </div>

                  <div className="download-section">
                    <h3>{t('pages.currentMarch.distanceScheme.documents.title')}</h3>
                    <p>{t('pages.currentMarch.distanceScheme.documents.description')}</p>
                    <ul className="download-list">
                      <li>
                        <i className="fas fa-file-pdf"></i>
                        <span>{t('pages.currentMarch.distanceScheme.documents.flyer')}</span>
                      </li>
                      <li>
                        <i className="fas fa-file-pdf"></i>
                        <span>{t('pages.currentMarch.distanceScheme.documents.map')}</span>
                      </li>
                      <li>
                        <i className="fas fa-file-pdf"></i>
                        <span>{t('pages.currentMarch.distanceScheme.documents.regulations')}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'how-it-works' && (
              <motion.div
                className="distance-scheme-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>{t('pages.currentMarch.howItWorks.title')}</h2>

                <div className="overview-description">
                  <p>
                    {t('pages.currentMarch.howItWorks.description')}
                  </p>
                </div>

                <div className="scheme-info">
                  <h3>{t('pages.currentMarch.howItWorks.example.title')}</h3>
                  <div className="featured-image">
                    <img
                      src="https://www.bernerdm.ch/wp-content/uploads/2025/02/Muster_Distanzschema.png"
                      alt="Distance scheme example"
                    />
                  </div>
                </div>

                <div className="regulations-section mt-4">
                  <h3>{t('pages.currentMarch.howItWorks.title')}</h3>

                  <h4>{t('pages.currentMarch.howItWorks.beforeMarch.title')}</h4>
                  <div className="overview-description">
                    <p>
                      {t('pages.currentMarch.howItWorks.beforeMarch.description1')}
                    </p>
                  </div>

                  <div className="march-images">
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/IMG20241130115404-768x1024.jpg"
                        alt="Participants at the march center"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/DSC_0064-1536x1021-Kopie-1024x681.jpg"
                        alt="Shuttle Service"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/IMG20241130115000-Kopie-1024x768.jpg"
                        alt="Participants preparing"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                  </div>

                  <div className="overview-description">
                    <p>
                      {t('pages.currentMarch.howItWorks.beforeMarch.description2')}
                    </p>
                  </div>

                  <div className="featured-image">
                    <img
                      src="https://www.bernerdm.ch/wp-content/uploads/2025/02/grafik-2-1024x566.png"
                      alt="Distance graph example"
                    />
                  </div>
                </div>

                <div className="regulations-section mt-4">
                  <h4>{t('pages.currentMarch.howItWorks.duringMarch.title')}</h4>
                  <div className="overview-description">
                    <p>
                      {t('pages.currentMarch.howItWorks.duringMarch.description1')}
                    </p>
                    <p>
                      {t('pages.currentMarch.howItWorks.duringMarch.description2')}
                    </p>
                  </div>

                  <div className="march-images">
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/DSC_0002-1024x685.jpg"
                        alt="BEDM Checkpoint"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/DSC_0018-1024x685.jpg"
                        alt="Checkpoint"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/DSC_0028-1024x685.jpg"
                        alt="Participants at a checkpoint"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/IMG_4500-1024x683.jpg"
                        alt="Participants on the route"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                  </div>
                </div>

                <div className="regulations-section mt-4">
                  <h4>{t('pages.currentMarch.howItWorks.afterMarch.title')}</h4>
                  <div className="overview-description">
                    <p>
                      {t('pages.currentMarch.howItWorks.afterMarch.description1')}
                    </p>
                    <p>
                      {t('pages.currentMarch.howItWorks.afterMarch.description2')}
                    </p>
                  </div>

                  <div className="march-images">
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/IMG20241130101143-768x1024.jpg"
                        alt="March completion"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/IMG20241130101204-1024x768.jpg"
                        alt="Printing some stuff"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/IMG20241130183501-768x1024.jpg"
                        alt="Certificate"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/IMG20241130210412-1024x768.jpg"
                        alt="Participants relaxing"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>

                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/DSC_0381-1536x1021-1-1024x681.jpg"
                        alt="March center"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/DSC_0425-1536x1021-1-1024x681.jpg"
                        alt="Awards ceremony"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                    <div className="featured-image">
                      <img
                        src="https://www.bernerdm.ch/wp-content/uploads/2025/02/IMG20241129213336-1024x768.jpg"
                        alt="Top 3 Winners"
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                  </div>
                </div>

                <div className="overview-description">
                  <p>
                    {t('pages.currentMarch.howItWorks.conclusion.rankings')}
                  </p>
                  <p>
                    {t('pages.currentMarch.howItWorks.conclusion.moreInfo')}
                  </p>
                  <p className="text-center">
                    <strong>{t('pages.currentMarch.howItWorks.conclusion.haveFun')}</strong>
                  </p>
                </div>

                <div className="march-images">
                  <div className="featured-image">
                    <img
                      src="https://www.bernerdm.ch/wp-content/uploads/2025/02/hiking-bears.jpg"
                      alt="Hiking bears"
                    />
                  </div>
                  <div className="featured-image">
                    <img
                      src="https://www.bernerdm.ch/wp-content/uploads/2025/02/image-1024x680.png"
                      alt="Distance march participants"
                    />
                  </div>
                </div>

                <div className="overview-description">
                  <p className="text-center">
                    <strong>{t('pages.currentMarch.howItWorks.conclusion.invitation')}</strong>
                  </p>
                </div>

                <div className="cta-buttons">
                  <Link to="/registration" className="btn btn-primary">{t('common.buttons.registerNow')}</Link>
                  <button onClick={() => handleTabChange('regulations')} className="btn btn-secondary">
                    {t('pages.currentMarch.tabs.regulations')}
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === 'regulations' && (
              <motion.div
                className="regulations-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>{t('pages.currentMarch.regulations.title')}</h2>

                <div className="regulations-section mt-4">
                  <h3>{t('pages.currentMarch.regulations.generalRules.title')}</h3>
                  <ul className="regulations-list">
                    <li>
                      <i className="fas fa-check"></i>
                      <span>{t('pages.currentMarch.regulations.generalRules.rule1')}</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>{t('pages.currentMarch.regulations.generalRules.rule2')}</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>{t('pages.currentMarch.regulations.generalRules.rule3')}</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>{t('pages.currentMarch.regulations.generalRules.rule4')}</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>{t('pages.currentMarch.regulations.generalRules.rule5')}</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>{t('pages.currentMarch.regulations.generalRules.rule6')}</span>
                    </li>
                  </ul>
                </div>

                <div className="regulations-section mt-4">
                  <h3>{t('pages.currentMarch.regulations.categoryRequirements.title')}</h3>

                  <div className="category-regulation">
                    <h4>{t('pages.currentMarch.regulations.categoryRequirements.catA.title')}</h4>
                    <ul>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catA.req1')}</li>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catA.req2')}</li>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catA.req3')}</li>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catA.req4')}</li>
                    </ul>
                  </div>

                  <div className="category-regulation">
                    <h4>{t('pages.currentMarch.regulations.categoryRequirements.catB.title')}</h4>
                    <ul>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catB.req1')}</li>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catB.req2')}</li>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catB.req3')}</li>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catB.req4')}</li>
                    </ul>
                  </div>

                  <div className="category-regulation">
                    <h4>{t('pages.currentMarch.regulations.categoryRequirements.catC.title')}</h4>
                    <ul>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catC.req1')}</li>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catC.req2')}</li>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catC.req3')}</li>
                      <li>{t('pages.currentMarch.regulations.categoryRequirements.catC.req4')}</li>
                    </ul>
                  </div>
                </div>

                <div className="regulations-section">
                  <h3>{t('pages.currentMarch.regulations.equipment.title')}</h3>
                  <div className="equipment-list">
                    <div className="equipment-category">
                      <h4>{t('pages.currentMarch.regulations.equipment.essential.title')}</h4>
                      <ul>
                        <li>{t('pages.currentMarch.regulations.equipment.essential.item1')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.essential.item2')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.essential.item3')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.essential.item4')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.essential.item5')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.essential.item6')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.essential.item7')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.essential.item8')}</li>
                      </ul>
                    </div>

                    <div className="equipment-category">
                      <h4>{t('pages.currentMarch.regulations.equipment.recommended.title')}</h4>
                      <ul>
                        <li>{t('pages.currentMarch.regulations.equipment.recommended.item1')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.recommended.item2')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.recommended.item3')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.recommended.item4')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.recommended.item5')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.recommended.item6')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.recommended.item7')}</li>
                        <li>{t('pages.currentMarch.regulations.equipment.recommended.item8')}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="safety-notice">
                  <h3>{t('pages.currentMarch.regulations.safety.title')}</h3>
                  <p>
                    {t('pages.currentMarch.regulations.safety.description')}
                  </p>
                  <ul>
                    <li>{t('pages.currentMarch.regulations.safety.guideline1')}</li>
                    <li>{t('pages.currentMarch.regulations.safety.guideline2')}</li>
                    <li>{t('pages.currentMarch.regulations.safety.guideline3')}</li>
                    <li>{t('pages.currentMarch.regulations.safety.guideline4')}</li>
                    <li>{t('pages.currentMarch.regulations.safety.guideline5')}</li>
                    <li>{t('pages.currentMarch.regulations.safety.guideline6')}</li>
                  </ul>
                </div>

                <div className="download-button">
                  <a href="#" className="btn btn-primary">
                    <i className="fas fa-download"></i> {t('pages.currentMarch.regulations.download')}
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === 'faq' && (
              <motion.div
                className="faq-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>{t('pages.currentMarch.faq.title')}</h2>

                <div className="faq-list">
                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>{t('pages.currentMarch.faq.questions.q1.question')}</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        {t('pages.currentMarch.faq.questions.q1.answer')}
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>{t('pages.currentMarch.faq.questions.q2.question')}</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        {t('pages.currentMarch.faq.questions.q2.answer')}
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>{t('pages.currentMarch.faq.questions.q3.question')}</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        {t('pages.currentMarch.faq.questions.q3.answer')}
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>{t('pages.currentMarch.faq.questions.q4.question')}</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        {t('pages.currentMarch.faq.questions.q4.answer')}
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>{t('pages.currentMarch.faq.questions.q5.question')}</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        {t('pages.currentMarch.faq.questions.q5.answer')}
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>{t('pages.currentMarch.faq.questions.q6.question')}</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        {t('pages.currentMarch.faq.questions.q6.answer')}
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>{t('pages.currentMarch.faq.questions.q7.question')}</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        {t('pages.currentMarch.faq.questions.q7.answer')}
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>{t('pages.currentMarch.faq.questions.q8.question')}</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        {t('pages.currentMarch.faq.questions.q8.answer')}
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>{t('pages.currentMarch.faq.questions.q9.question')}</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        {t('pages.currentMarch.faq.questions.q9.answer')}
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>{t('pages.currentMarch.faq.questions.q10.question')}</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        {t('pages.currentMarch.faq.questions.q10.answer')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-info">
                  <h3>{t('pages.currentMarch.faq.moreQuestions.title')}</h3>
                  <p>
                    {t('pages.currentMarch.faq.moreQuestions.contact')} <a href="mailto:kommando@bernerdm.ch">kommando@bernerdm.ch</a>
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="cta-banner">
        <div className="container">
          <h2>{t('pages.currentMarch.ctaBanner.title')}</h2>
          <p>{t('pages.currentMarch.ctaBanner.subtitle')}</p>
          <Link to="/registration" className="btn btn-large">{t('common.buttons.registerNow')}</Link>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="image-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal-image-container">
                <img src={selectedImage.src} alt={selectedImage.alt} className="modal-image" />
              </div>
              <div className="modal-info">
                {selectedImage.alt && <p className="modal-caption">{selectedImage.alt}</p>}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurrentMarch;