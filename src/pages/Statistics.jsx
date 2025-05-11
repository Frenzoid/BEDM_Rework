// pages/Statistics/Statistics.jsx
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaChartBar, FaUsers, FaGlobeEurope, FaRulerHorizontal, FaClipboardList } from 'react-icons/fa';
import '../styles/Statistics.css';
import PageBanner from '../components/PageBanner';

const Statistics = () => {
  const { t } = useTranslation();
  const [activeYear, setActiveYear] = useState('all');

  // Simulated data for statistics visualizations
  const participationData = {
    labels: ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'],
    datasets: [
      {
        label: t('participants'),
        data: [1200, 3500, 6000, 5000, 4200, 4800, 5200]
      }
    ]
  };

  const countryData = {
    labels: ['Switzerland', 'Germany', 'France', 'Austria', 'Italy', 'Other'],
    datasets: [
      {
        data: [65, 12, 8, 5, 4, 6]
      }
    ]
  };

  const categoryData = {
    labels: [t('categoryA'), t('categoryB'), t('categoryC'), t('groupCategories')],
    datasets: [
      {
        data: [30, 15, 40, 15]
      }
    ]
  };

  const distanceData = {
    labels: ['15-20km', '25-30km', '35-40km', '45+km'],
    datasets: [
      {
        data: [20, 35, 30, 15]
      }
    ]
  };

  const completionData = {
    overall: 92,
    categoryA: 95,
    categoryB: 87,
    categoryC: 90,
    groups: 94
  };

  // Stats highlights
  const statsHighlights = [
    {
      icon: <FaUsers />,
      number: '5,200+',
      label: t('participantsIn2024')
    },
    {
      icon: <FaGlobeEurope />,
      number: '35+',
      label: t('countriesRepresented')
    },
    {
      icon: <FaRulerHorizontal />,
      number: '45km',
      label: t('averageDistance')
    },
    {
      icon: <FaClipboardList />,
      number: '92%',
      label: t('completionRate')
    }
  ];

  // Simulated records data
  const recordsData = [
    {
      category: t('longestDistance'),
      record: '68.5 km',
      holder: 'Thomas Wagner',
      year: '2018'
    },
    {
      category: t('fastestCompletion'),
      record: '6h 12m',
      holder: 'Michael Baumgartner',
      year: '2022'
    },
    {
      category: t('mostParticipations'),
      record: '45',
      holder: 'Hans Müller',
      year: '1975-2023'
    },
    {
      category: t('largestGroup'),
      record: '32 ' + t('people'),
      holder: 'Team Helvetia',
      year: '2019'
    },
    {
      category: t('oldestParticipant'),
      record: '87 ' + t('yearsOld'),
      holder: 'Karl Weber',
      year: '2021'
    },
    {
      category: t('youngestFinisher'),
      record: '15 ' + t('yearsOld'),
      holder: 'Lukas Schmid',
      year: '2023'
    }
  ];

  // Initialize charts after component mounts
  useEffect(() => {
    // This would normally use a charting library like Chart.js
    // For this example, we're using simulated data

    // In a real application, you would initialize the charts here
    // For example, using Chart.js:
    // const participationChart = new Chart(participationCtx, { ... });

    // Simple loader animation for simulation
    const chartCanvases = document.querySelectorAll('.chart-canvas');
    chartCanvases.forEach(canvas => {
      const context = canvas.getContext('2d');
      context.fillStyle = '#f5f5f5';
      context.fillRect(0, 0, canvas.width, canvas.height);

      // Draw a simple placeholder for demonstration
      context.fillStyle = '#748067';
      context.fillRect(10, 10, canvas.width - 20, canvas.height - 20);

      // Add text
      context.fillStyle = '#fff';
      context.font = '14px Arial';
      context.textAlign = 'center';
      context.fillText('Chart Visualization', canvas.width / 2, canvas.height / 2);
    });
  }, [activeYear]);

  return (
    <div className="statistics-page">
      <PageBanner
        title={t('statistics')}
        subtitle={t('statisticsSubtitle')}
        background="https://www.bernerdm.ch/wp-content/uploads/2024/12/statistics-bg.jpg"
      />

      <div className="container">
        <motion.div
          className="statistics-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="statistics-header">
            <h2><FaChartBar className="header-icon" /> {t('marchStatistics')}</h2>
            <p className="header-description">{t('statisticsDesc')}</p>

            <div className="year-selector">
              <span>{t('selectYear')}:</span>
              <div className="year-buttons">
                <button
                  className={activeYear === 'all' ? 'active' : ''}
                  onClick={() => setActiveYear('all')}
                >
                  {t('allYears')}
                </button>
                <button
                  className={activeYear === '2024' ? 'active' : ''}
                  onClick={() => setActiveYear('2024')}
                >
                  2024
                </button>
                <button
                  className={activeYear === '2023' ? 'active' : ''}
                  onClick={() => setActiveYear('2023')}
                >
                  2023
                </button>
                <button
                  className={activeYear === '2022' ? 'active' : ''}
                  onClick={() => setActiveYear('2022')}
                >
                  2022
                </button>
                <button
                  className={activeYear === '2021' ? 'active' : ''}
                  onClick={() => setActiveYear('2021')}
                >
                  2021
                </button>
                <button
                  className={activeYear === '2020' ? 'active' : ''}
                  onClick={() => setActiveYear('2020')}
                >
                  2020
                </button>
              </div>
            </div>
          </div>

          {/* Stats Highlights */}
          <div className="stats-highlights">
            {statsHighlights.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Visualizations */}
          <div className="visualizations-section">
            <div className="visualization-grid">
              <div className="visualization-card">
                <h3>{t('participationTrends')}</h3>
                <div className="chart-container">
                  <canvas className="chart-canvas" width="400" height="300"></canvas>
                </div>
              </div>

              <div className="visualization-card">
                <h3>{t('participantsByCountry')}</h3>
                <div className="chart-container">
                  <canvas className="chart-canvas" width="400" height="300"></canvas>
                </div>
              </div>

              <div className="visualization-card">
                <h3>{t('participantsByCategory')}</h3>
                <div className="chart-container">
                  <canvas className="chart-canvas" width="400" height="300"></canvas>
                </div>
              </div>

              <div className="visualization-card">
                <h3>{t('distanceDistribution')}</h3>
                <div className="chart-container">
                  <canvas className="chart-canvas" width="400" height="300"></canvas>
                </div>
              </div>
            </div>
          </div>

          {/* Completion Rates */}
          <div className="completion-section">
            <h3>{t('completionRates')}</h3>
            <div className="completion-bars">
              <div className="completion-bar-item">
                <div className="bar-label">{t('overall')}</div>
                <div className="bar-container">
                  <div
                    className="bar-fill"
                    style={{ width: `${completionData.overall}%` }}
                  >
                    <span className="bar-value">{completionData.overall}%</span>
                  </div>
                </div>
              </div>

              <div className="completion-bar-item">
                <div className="bar-label">{t('categoryA')}</div>
                <div className="bar-container">
                  <div
                    className="bar-fill category-a"
                    style={{ width: `${completionData.categoryA}%` }}
                  >
                    <span className="bar-value">{completionData.categoryA}%</span>
                  </div>
                </div>
              </div>

              <div className="completion-bar-item">
                <div className="bar-label">{t('categoryB')}</div>
                <div className="bar-container">
                  <div
                    className="bar-fill category-b"
                    style={{ width: `${completionData.categoryB}%` }}
                  >
                    <span className="bar-value">{completionData.categoryB}%</span>
                  </div>
                </div>
              </div>

              <div className="completion-bar-item">
                <div className="bar-label">{t('categoryC')}</div>
                <div className="bar-container">
                  <div
                    className="bar-fill category-c"
                    style={{ width: `${completionData.categoryC}%` }}
                  >
                    <span className="bar-value">{completionData.categoryC}%</span>
                  </div>
                </div>
              </div>

              <div className="completion-bar-item">
                <div className="bar-label">{t('groups')}</div>
                <div className="bar-container">
                  <div
                    className="bar-fill groups"
                    style={{ width: `${completionData.groups}%` }}
                  >
                    <span className="bar-value">{completionData.groups}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Records Section */}
          <div className="records-section">
            <h3>{t('marchRecords')}</h3>
            <div className="records-grid">
              {recordsData.map((record, index) => (
                <div className="record-card" key={index}>
                  <div className="record-category">{record.category}</div>
                  <div className="record-value">{record.record}</div>
                  <div className="record-details">
                    <span className="record-holder">{record.holder}</span>
                    <span className="record-year">{record.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Notes */}
          <div className="data-notes">
            <h3>{t('dataNotes')}</h3>
            <ul className="notes-list">
              <li>{t('dataNote1')}</li>
              <li>{t('dataNote2')}</li>
              <li>{t('dataNote3')}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Statistics;