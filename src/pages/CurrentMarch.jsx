// pages/CurrentMarch/CurrentMarch.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react"
import { FaDownload, FaMapMarkedAlt, FaCalendarDay, FaShieldAlt, FaWalking, FaClock, FaExclamationTriangle, FaInfoCircle, FaFilePdf } from 'react-icons/fa';
import '../styles/CurrentMarch.css';
import PageBanner from '../components/PageBanner';
import RouteMap from '../components/RouteMap';

const CurrentMarch = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('overview');

  // Define tabs
  const tabs = [
    { id: 'overview', label: t('overview'), icon: <FaInfoCircle /> },
    { id: 'schedule', label: t('schedule'), icon: <FaCalendarDay /> },
    { id: 'routes', label: t('routes'), icon: <FaMapMarkedAlt /> },
    { id: 'regulations', label: t('regulations'), icon: <FaShieldAlt /> }
  ];

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="current-march-page">
      <PageBanner
        title={t('currentMarch')}
        subtitle={t('currentMarchSubtitle')}
        background="https://www.bernerdm.ch/wp-content/uploads/2024/12/current-march-bg.jpg"
      />

      <div className="container">
        <div className="current-march-content">
          {/* Highlight Banner */}
          <motion.div
            className="highlight-banner"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="highlight-content">
              <h2>{t('nextMarchDate')}</h2>
              <p>{t('markYourCalendar')}</p>
              <div className="date-highlight">
                <FaCalendarDay className="date-icon" />
                <span>6th December 2025</span>
              </div>
            </div>
            <Link to="/registration" className="btn btn-highlight">
              {t('registerNow')}
            </Link>
          </motion.div>

          {/* Tabs Navigation */}
          <div className="tabs-container">
            <div className="tabs-nav">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="tab-content">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  className="tab-pane"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="tab-header">
                    <h2>{t('marchOverview')}</h2>
                    <p>{t('marchOverviewDesc')}</p>
                  </div>

                  <div className="info-card">
                    <h3>{t('aboutTheMarch')}</h3>
                    <p>{t('aboutTheMarchDesc1')}</p>
                    <p>{t('aboutTheMarchDesc2')}</p>

                    <div className="key-features">
                      <div className="feature">
                        <div className="feature-icon">
                          <FaMapMarkedAlt />
                        </div>
                        <div className="feature-text">
                          <h4>{t('flexibleRoutes')}</h4>
                          <p>{t('flexibleRoutesDesc')}</p>
                        </div>
                      </div>

                      <div className="feature">
                        <div className="feature-icon">
                          <FaWalking />
                        </div>
                        <div className="feature-text">
                          <h4>{t('participationOptions')}</h4>
                          <p>{t('participationOptionsDesc')}</p>
                        </div>
                      </div>

                      <div className="feature">
                        <div className="feature-icon">
                          <FaShieldAlt />
                        </div>
                        <div className="feature-text">
                          <h4>{t('categorizationSystem')}</h4>
                          <p>{t('categorizationSystemDesc')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="cta-box">
                      <h4>{t('readyToJoin')}</h4>
                      <p>{t('readyToJoinDesc')}</p>
                      <Link to="/registration" className="btn">
                        {t('registerNow')}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Schedule Tab */}
              {activeTab === 'schedule' && (
                <motion.div
                  className="tab-pane"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="tab-header">
                    <h2>{t('marchSchedule')}</h2>
                    <p>{t('marchScheduleDesc')}</p>
                  </div>

                  <div className="info-card">
                    <div className="schedule-timeline">
                      <div className="timeline-item">
                        <div className="timeline-point"></div>
                        <div className="timeline-content">
                          <div className="timeline-time">07:00 - 09:00</div>
                          <h4>{t('registration')}</h4>
                          <p>{t('registrationTimeDesc')}</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-point"></div>
                        <div className="timeline-content">
                          <div className="timeline-time">09:00</div>
                          <h4>{t('officialStart')}</h4>
                          <p>{t('officialStartDesc')}</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-point"></div>
                        <div className="timeline-content">
                          <div className="timeline-time">09:00 - 18:00</div>
                          <h4>{t('marchTime')}</h4>
                          <p>{t('marchTimeDesc')}</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-point"></div>
                        <div className="timeline-content">
                          <div className="timeline-time">12:00 - 19:00</div>
                          <h4>{t('checkpointHours')}</h4>
                          <p>{t('checkpointHoursDesc')}</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-point"></div>
                        <div className="timeline-content">
                          <div className="timeline-time">19:00</div>
                          <h4>{t('marchClosure')}</h4>
                          <p>{t('marchClosureDesc')}</p>
                        </div>
                      </div>

                      <div className="timeline-item">
                        <div className="timeline-point"></div>
                        <div className="timeline-content">
                          <div className="timeline-time">19:30 - 21:00</div>
                          <h4>{t('awardsCeremony')}</h4>
                          <p>{t('awardsCeremonyDesc')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="schedule-notes">
                      <div className="note">
                        <FaExclamationTriangle className="note-icon" />
                        <p>{t('scheduleNote1')}</p>
                      </div>
                      <div className="note">
                        <FaClock className="note-icon" />
                        <p>{t('scheduleNote2')}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Routes Tab */}
              {activeTab === 'routes' && (
                <motion.div
                  className="tab-pane"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="tab-header">
                    <h2>{t('marchRoutes')}</h2>
                    <p>{t('marchRoutesDesc')}</p>
                  </div>

                  <div className="info-card map-section">
                    <RouteMap />

                    <div className="checkpoints-list">
                      <h3>{t('checkpoints')}</h3>
                      <ul>
                        <li>
                          <span className="checkpoint-number">1</span>
                          <div className="checkpoint-info">
                            <h4>Bern City Center</h4>
                            <p>{t('startPoint')}</p>
                          </div>
                        </li>
                        <li>
                          <span className="checkpoint-number">2</span>
                          <div className="checkpoint-info">
                            <h4>Wabern</h4>
                            <p>{t('checkpoint')} 1</p>
                          </div>
                        </li>
                        <li>
                          <span className="checkpoint-number">3</span>
                          <div className="checkpoint-info">
                            <h4>Köniz</h4>
                            <p>{t('checkpoint')} 2</p>
                          </div>
                        </li>
                        <li>
                          <span className="checkpoint-number">4</span>
                          <div className="checkpoint-info">
                            <h4>Zimmerwald</h4>
                            <p>{t('checkpoint')} 3</p>
                          </div>
                        </li>
                        <li>
                          <span className="checkpoint-number">5</span>
                          <div className="checkpoint-info">
                            <h4>Kehrsatz</h4>
                            <p>{t('checkpoint')} 4</p>
                          </div>
                        </li>
                        <li>
                          <span className="checkpoint-number">6</span>
                          <div className="checkpoint-info">
                            <h4>Bern (Finish)</h4>
                            <p>{t('endPoint')}</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="distance-info">
                      <h3>{t('distanceScheme')}</h3>
                      <p>{t('distanceSchemeDesc')}</p>

                      <div className="distance-options">
                        <div className="distance-option">
                          <h4>{t('shortRoute')}</h4>
                          <span className="distance">15-20 km</span>
                          <p>{t('shortRouteDesc')}</p>
                        </div>
                        <div className="distance-option">
                          <h4>{t('mediumRoute')}</h4>
                          <span className="distance">25-30 km</span>
                          <p>{t('mediumRouteDesc')}</p>
                        </div>
                        <div className="distance-option">
                          <h4>{t('longRoute')}</h4>
                          <span className="distance">40+ km</span>
                          <p>{t('longRouteDesc')}</p>
                        </div>
                      </div>

                      <div className="download-map">
                        <a href="https://www.bernerdm.ch/wp-content/uploads/2024/12/route-map.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                          <FaDownload className="btn-icon" />
                          {t('downloadMap')}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Regulations Tab */}
              {activeTab === 'regulations' && (
                <motion.div
                  className="tab-pane"
                  variants={fadeInVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="tab-header">
                    <h2>{t('marchRegulations')}</h2>
                    <p>{t('marchRegulationsDesc')}</p>
                  </div>

                  <div className="info-card">
                    <div className="regulations-section">
                      <h3>{t('generalRules')}</h3>
                      <ul className="regulations-list">
                        <li>{t('regulation1')}</li>
                        <li>{t('regulation2')}</li>
                        <li>{t('regulation3')}</li>
                        <li>{t('regulation4')}</li>
                        <li>{t('regulation5')}</li>
                      </ul>
                    </div>

                    <div className="regulations-section">
                      <h3>{t('categorySpecificRules')}</h3>
                      <h4>{t('categoryA')}</h4>
                      <ul className="regulations-list">
                        <li>{t('regulationA1')}</li>
                        <li>{t('regulationA2')}</li>
                        <li>{t('regulationA3')}</li>
                      </ul>

                      <h4>{t('categoryB')}</h4>
                      <ul className="regulations-list">
                        <li>{t('regulationB1')}</li>
                        <li>{t('regulationB2')}</li>
                      </ul>

                      <h4>{t('categoryC')}</h4>
                      <ul className="regulations-list">
                        <li>{t('regulationC1')}</li>
                        <li>{t('regulationC2')}</li>
                      </ul>
                    </div>

                    <div className="regulations-section">
                      <h3>{t('safety')}</h3>
                      <ul className="regulations-list">
                        <li>{t('safety1')}</li>
                        <li>{t('safety2')}</li>
                        <li>{t('safety3')}</li>
                        <li>{t('safety4')}</li>
                      </ul>
                    </div>

                    <div className="document-downloads">
                      <h3>{t('officialDocuments')}</h3>
                      <div className="downloads-grid">
                        <a href="https://www.bernerdm.ch/wp-content/uploads/2024/12/march-regulations.pdf" className="download-item" target="_blank" rel="noopener noreferrer">
                          <FaFilePdf className="download-icon" />
                          <span>{t('marchingRegulations')}</span>
                        </a>
                        <a href="https://www.bernerdm.ch/wp-content/uploads/2024/12/shooting-regulations.pdf" className="download-item" target="_blank" rel="noopener noreferrer">
                          <FaFilePdf className="download-icon" />
                          <span>{t('shootingRegulations')}</span>
                        </a>
                        <a href="https://www.bernerdm.ch/wp-content/uploads/2024/12/flyer-2025.pdf" className="download-item" target="_blank" rel="noopener noreferrer">
                          <FaFilePdf className="download-icon" />
                          <span>{t('flyer2025')}</span>
                        </a>
                        <a href="https://www.bernerdm.ch/wp-content/uploads/2024/12/distance-scheme.pdf" className="download-item" target="_blank" rel="noopener noreferrer">
                          <FaFilePdf className="download-icon" />
                          <span>{t('distanceScheme')}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentMarch;