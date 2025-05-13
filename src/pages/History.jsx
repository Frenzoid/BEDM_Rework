import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/History.css';

const History = () => {
  const { t } = useTranslation();

  const timelineEvents = [
    {
      year: 1960,
      title: t('pages.history.timeline.events.event1.title'),
      description: t('pages.history.timeline.events.event1.description'),
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: t('pages.history.timeline.events.event2.year'),
      title: t('pages.history.timeline.events.event2.title'),
      description: t('pages.history.timeline.events.event2.description'),
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: t('pages.history.timeline.events.event3.year'),
      title: t('pages.history.timeline.events.event3.title'),
      description: t('pages.history.timeline.events.event3.description'),
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: t('pages.history.timeline.events.event4.year'),
      title: t('pages.history.timeline.events.event4.title'),
      description: t('pages.history.timeline.events.event4.description'),
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: 2000,
      title: t('pages.history.timeline.events.event5.title'),
      description: t('pages.history.timeline.events.event5.description'),
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: 2020,
      title: t('pages.history.timeline.events.event6.title'),
      description: t('pages.history.timeline.events.event6.description'),
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    },
    {
      year: 2025,
      title: t('pages.history.timeline.events.event7.title'),
      description: t('pages.history.timeline.events.event7.description'),
      image: "https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
    }
  ];

  return (
    <div className="history-page">
      <div className="page-header">
        <div className="container">
          <h1>{t('pages.history.header.title')}</h1>
          <p>{t('pages.history.header.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="history-intro">
          <motion.div
            className="intro-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t('pages.history.intro.title')}</h2>
            <p>
              {t('pages.history.intro.paragraph1')}
            </p>
            <p>
              {t('pages.history.intro.paragraph2')}
            </p>
            <p>
              {t('pages.history.intro.paragraph3')}
            </p>
          </motion.div>

          <motion.div
            className="intro-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://www.bernerdm.ch/wp-content/uploads/2024/12/image-1-1024x680.png"
              alt={t('pages.history.intro.imageAlt')}
            />
          </motion.div>
        </div>

        <div className="timeline-section">
          <h2>{t('pages.history.timeline.title')}</h2>
          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <motion.div
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  {event.image && (
                    <div className="timeline-image">
                      <img src={event.image} alt={`${event.title} - ${event.year}`} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="traditions-section">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('pages.history.traditions.title')}
          </motion.h2>

          <div className="traditions-content">
            <motion.div
              className="traditions-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p>
                {t('pages.history.traditions.paragraph1')}
              </p>
              <p>
                {t('pages.history.traditions.paragraph2')}
              </p>
              <p>
                {t('pages.history.traditions.paragraph3')}
              </p>
              <p>
                {t('pages.history.traditions.paragraph4')}
              </p>
              <p>
                {t('pages.history.traditions.paragraph5')}
              </p>
            </motion.div>

            <motion.div
              className="traditions-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="stat-card">
                <div className="stat-number">67</div>
                <div className="stat-label">{t('pages.history.traditions.stats.editions')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6,000+</div>
                <div className="stat-label">{t('pages.history.traditions.stats.peakParticipants')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">{t('pages.history.traditions.stats.countriesRepresented')}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">65</div>
                <div className="stat-label">{t('pages.history.traditions.stats.yearsOfTradition')}</div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="notable-participants">
          <h2>{t('pages.history.notableParticipants.title')}</h2>
          <div className="participants-grid">
            <motion.div
              className="participant-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="participant-image">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
                  alt={t('pages.history.notableParticipants.participant1.name')}
                />
              </div>
              <h3>{t('pages.history.notableParticipants.participant1.name')}</h3>
              <p className="participant-achievement">{t('pages.history.notableParticipants.participant1.achievement')}</p>
              <p className="participant-description">
                {t('pages.history.notableParticipants.participant1.description')}
              </p>
            </motion.div>

            <motion.div
              className="participant-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="participant-image">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2021/01/Oberst_Kraehenbuehl-726x1024.jpg"
                  alt={t('pages.history.notableParticipants.participant2.name')}
                />
              </div>
              <h3>{t('pages.history.notableParticipants.participant2.name')}</h3>
              <p className="participant-achievement">{t('pages.history.notableParticipants.participant2.achievement')}</p>
              <p className="participant-description">
                {t('pages.history.notableParticipants.participant2.description')}
              </p>
            </motion.div>

            <motion.div
              className="participant-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="participant-image">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
                  alt={t('pages.history.notableParticipants.participant3.name')}
                />
              </div>
              <h3>{t('pages.history.notableParticipants.participant3.name')}</h3>
              <p className="participant-achievement">{t('pages.history.notableParticipants.participant3.achievement')}</p>
              <p className="participant-description">
                {t('pages.history.notableParticipants.participant3.description')}
              </p>
            </motion.div>

            <motion.div
              className="participant-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div className="participant-image">
                <img
                  src="https://www.bernerdm.ch/wp-content/uploads/2022/07/command_adrian_venner-150x150.jpg"
                  alt={t('pages.history.notableParticipants.participant4.name')}
                />
              </div>
              <h3>{t('pages.history.notableParticipants.participant4.name')}</h3>
              <p className="participant-achievement">{t('pages.history.notableParticipants.participant4.achievement')}</p>
              <p className="participant-description">
                {t('pages.history.notableParticipants.participant4.description')}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="legacy-section">
          <motion.div
            className="legacy-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t('pages.history.legacy.title')}</h2>
            <p>
              {t('pages.history.legacy.paragraph1')}
            </p>
            <p>
              {t('pages.history.legacy.paragraph2')}
            </p>
            <p>
              {t('pages.history.legacy.paragraph3')}
            </p>
            <p>
              {t('pages.history.legacy.paragraph4')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default History;