// pages/History/History.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaHistory, FaCalendarAlt, FaUsers, FaGlobeEurope, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import '../styles/History.css';
import PageBanner from '../components/PageBanner';
import TimelineEvent from '../components/TimelineEvent';

const History = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const timelineScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  // Timeline events
  const timelineEvents = [
    {
      year: '1956',
      title: t('initialMarch'),
      description: t('initialMarchDesc'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/history-1956.jpg'
    },
    {
      year: '1970s',
      title: t('internationalization'),
      description: t('internationalizationDesc'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/history-1970s.jpg'
    },
    {
      year: '1980s',
      title: t('participationPeak'),
      description: t('participationPeakDesc'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/history-1980s.jpg'
    },
    {
      year: '1990s',
      title: t('categoryUpdates'),
      description: t('categoryUpdatesDesc'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/history-1990s.jpg'
    },
    {
      year: '2000s',
      title: t('modernization'),
      description: t('modernizationDesc'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/history-2000s.jpg'
    },
    {
      year: '2010s',
      title: t('digitalTransformation'),
      description: t('digitalTransformationDesc'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/history-2010s.jpg'
    },
    {
      year: '2020s',
      title: t('resilienceAdaptation'),
      description: t('resilienceAdaptationDesc'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/history-2020s.jpg'
    },
    {
      year: '2025',
      title: t('currentEra'),
      description: t('currentEraDesc'),
      image: 'https://www.bernerdm.ch/wp-content/uploads/2024/12/history-2025.jpg'
    }
  ];

  return (
    <div className="history-page">
      <PageBanner
        title={t('history')}
        subtitle={t('historySubtitle')}
        background="https://www.bernerdm.ch/wp-content/uploads/2024/12/history-bg.jpg"
      />

      <div className="container">
        <motion.div
          className="history-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="history-intro">
            <div className="intro-header">
              <h2><FaHistory className="intro-icon" /> {t('historyOfBernDM')}</h2>
              <p className="intro-text">{t('historyIntroText')}</p>
            </div>

            <div className="intro-stats">
              <div className="stat-item">
                <div className="stat-icon">
                  <FaCalendarAlt />
                </div>
                <div className="stat-number">67</div>
                <div className="stat-label">{t('yearsOfTradition')}</div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <FaUsers />
                </div>
                <div className="stat-number">100k+</div>
                <div className="stat-label">{t('totalParticipants')}</div>
              </div>

              <div className="stat-item">
                <div className="stat-icon">
                  <FaGlobeEurope />
                </div>
                <div className="stat-number">40+</div>
                <div className="stat-label">{t('countriesRepresented')}</div>
              </div>
            </div>
          </div>

          <div className="history-quote">
            <div className="quote-container">
              <FaQuoteLeft className="quote-icon quote-left" />
              <blockquote>{t('historyQuote')}</blockquote>
              <FaQuoteRight className="quote-icon quote-right" />
              <cite>- {t('quoteAuthor')}</cite>
            </div>
          </div>

          <motion.div
            className="history-timeline"
            style={{ scale: timelineScale }}
          >
            <div className="timeline-header">
              <h2>{t('marchThroughYears')}</h2>
              <p>{t('timelineIntro')}</p>
            </div>

            <div className="timeline-container">
              <div className="timeline-line"></div>

              {timelineEvents.map((event, index) => (
                <TimelineEvent
                  key={index}
                  year={event.year}
                  title={event.title}
                  description={event.description}
                  image={event.image}
                  align={index % 2 === 0 ? 'left' : 'right'}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          <div className="history-gallery">
            <h2>{t('historicImages')}</h2>
            <div className="gallery-grid">
              {Array(8).fill().map((_, index) => (
                <div key={index} className="gallery-item">
                  <img
                    src={`https://www.bernerdm.ch/wp-content/uploads/2024/12/gallery-${index + 1}.jpg`}
                    alt={`Historic Image ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="history-testimony">
            <h2>{t('voicesFromPast')}</h2>
            <div className="testimony-grid">
              <div className="testimony-card">
                <div className="testimony-content">
                  <p>{t('testimony1')}</p>
                </div>
                <div className="testimony-author">
                  <img
                    src="https://www.bernerdm.ch/wp-content/uploads/2024/12/testimony-1.jpg"
                    alt="Testimony Author 1"
                  />
                  <div className="author-details">
                    <h4>Hans Müller</h4>
                    <p>{t('participantSince')} 1975</p>
                  </div>
                </div>
              </div>

              <div className="testimony-card">
                <div className="testimony-content">
                  <p>{t('testimony2')}</p>
                </div>
                <div className="testimony-author">
                  <img
                    src="https://www.bernerdm.ch/wp-content/uploads/2024/12/testimony-2.jpg"
                    alt="Testimony Author 2"
                  />
                  <div className="author-details">
                    <h4>Col. Peter Weber</h4>
                    <p>{t('formerCommander')} (1985-1995)</p>
                  </div>
                </div>
              </div>

              <div className="testimony-card">
                <div className="testimony-content">
                  <p>{t('testimony3')}</p>
                </div>
                <div className="testimony-author">
                  <img
                    src="https://www.bernerdm.ch/wp-content/uploads/2024/12/testimony-3.jpg"
                    alt="Testimony Author 3"
                  />
                  <div className="author-details">
                    <h4>Maria Schmidt</h4>
                    <p>{t('volunteerSince')} 1990</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default History;