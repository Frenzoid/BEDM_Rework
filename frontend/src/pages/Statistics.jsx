import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/Statistics.css';

const Statistics = () => {
  const { t } = useTranslation();
  const [activeChart, setActiveChart] = useState('participants');
  const [chartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    // Reset chart loaded state when active chart changes
    setChartLoaded(false);
    // Simulate chart loading delay
    const timer = setTimeout(() => {
      setChartLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeChart]);

  const participantData = [
    { year: 2015, total: 422, catA: 187, catB: 68, catC: 167 },
    { year: 2016, total: 451, catA: 201, catB: 72, catC: 178 },
    { year: 2017, total: 483, catA: 213, catB: 85, catC: 185 },
    { year: 2018, total: 512, catA: 225, catB: 91, catC: 196 },
    { year: 2019, total: 547, catA: 236, catB: 97, catC: 214 },
    { year: 2020, total: 320, catA: 142, catB: 51, catC: 127 }, // Remote march during COVID
    { year: 2021, total: 487, catA: 218, catB: 82, catC: 187 },
    { year: 2022, total: 531, catA: 239, catB: 93, catC: 199 },
    { year: 2023, total: 569, catA: 251, catB: 104, catC: 214 },
    { year: 2024, total: 598, catA: 265, catB: 112, catC: 221 },
  ];

  const internationalData = [
    { country: 'Switzerland', percentage: 68 },
    { country: 'Germany', percentage: 12 },
    { country: 'France', percentage: 8 },
    { country: 'Austria', percentage: 5 },
    { country: 'Italy', percentage: 3 },
    { country: 'Other', percentage: 4 },
  ];

  const ageDistributionData = [
    { ageGroup: 'Under 20', percentage: 17 },
    { ageGroup: '20-30', percentage: 21 },
    { ageGroup: '31-40', percentage: 25 },
    { ageGroup: '41-50', percentage: 19 },
    { ageGroup: '51-60', percentage: 12 },
    { ageGroup: 'Over 60', percentage: 6 },
  ];

  const completionRatesData = [
    { year: 2020, rate: 92 },
    { year: 2021, rate: 94 },
    { year: 2022, rate: 93 },
    { year: 2023, rate: 95 },
    { year: 2024, rate: 96 },
  ];

  const handleChartChange = (chart) => {
    setActiveChart(chart);
  };

  const renderParticipantsChart = () => (
    <div className="chart participants-chart">
      <div className="chart-header">
        <h3>{t('pages.statistics.charts.participants.title')}</h3>
        <p>{t('pages.statistics.charts.participants.subtitle')}</p>
      </div>
      <div className="chart-content">
        {chartLoaded && (
          <>
            <div className="chart-bars">
              {participantData.map((data, index) => (
                <div className="year-bar" key={index}>
                  <div className="bar-group">
                    <motion.div
                      className="bar cat-a"
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.catA / data.total) * 200}px` }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <span className="bar-value">{data.catA}</span>
                    </motion.div>
                    <motion.div
                      className="bar cat-b"
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.catB / data.total) * 200}px` }}
                      transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                    >
                      <span className="bar-value">{data.catB}</span>
                    </motion.div>
                    <motion.div
                      className="bar cat-c"
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.catC / data.total) * 200}px` }}
                      transition={{ duration: 0.5, delay: index * 0.05 + 0.2 }}
                    >
                      <span className="bar-value">{data.catC}</span>
                    </motion.div>
                  </div>
                  <div className="bar-year">{data.year}</div>
                  <div className="bar-total">{data.total}</div>
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <div className="legend-item">
                <span className="legend-color cat-a"></span>
                <span className="legend-label">{t('pages.statistics.charts.participants.legend.catA')}</span>
              </div>
              <div className="legend-item">
                <span className="legend-color cat-b"></span>
                <span className="legend-label">{t('pages.statistics.charts.participants.legend.catB')}</span>
              </div>
              <div className="legend-item">
                <span className="legend-color cat-c"></span>
                <span className="legend-label">{t('pages.statistics.charts.participants.legend.catC')}</span>
              </div>
            </div>
          </>
        )}
        {!chartLoaded && (
          <div className="chart-loading">
            <div className="loading-spinner"></div>
            <p>{t('pages.statistics.charts.participants.loading')}</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderInternationalChart = () => (
    <div className="chart international-chart">
      <div className="chart-header">
        <h3>{t('pages.statistics.charts.international.title')}</h3>
        <p>{t('pages.statistics.charts.international.subtitle')}</p>
      </div>
      <div className="chart-content">
        {chartLoaded ? (
          <div className="pie-chart-container">
            <div className="pie-chart">
              {internationalData.map((data, index) => (
                <motion.div
                  key={index}
                  className={`pie-slice country-${index}`}
                  style={{
                    '--slice-start': `${index > 0
                      ? internationalData.slice(0, index).reduce((sum, item) => sum + item.percentage, 0)
                      : 0}%`,
                    '--slice-end': `${internationalData.slice(0, index + 1).reduce((sum, item) => sum + item.percentage, 0)}%`
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              ))}
              <div className="pie-center">
                <span>2024</span>
              </div>
            </div>
            <div className="pie-legend">
              {internationalData.map((data, index) => (
                <div className="legend-item" key={index}>
                  <span className={`legend-color country-${index}`}></span>
                  <span className="legend-label">{data.country}</span>
                  <span className="legend-value">{data.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="chart-loading">
            <div className="loading-spinner"></div>
            <p>{t('pages.statistics.charts.participants.loading')}</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderAgeDistributionChart = () => (
    <div className="chart age-distribution-chart">
      <div className="chart-header">
        <h3>{t('pages.statistics.charts.ageDistribution.title')}</h3>
        <p>{t('pages.statistics.charts.ageDistribution.subtitle')}</p>
      </div>
      <div className="chart-content">
        {chartLoaded ? (
          <div className="horizontal-bars">
            {ageDistributionData.map((data, index) => (
              <div className="bar-row" key={index}>
                <div className="bar-label">{data.ageGroup}</div>
                <div className="bar-container">
                  <motion.div
                    className="horizontal-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${data.percentage * 5}px` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="bar-value">{data.percentage}%</span>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="chart-loading">
            <div className="loading-spinner"></div>
            <p>{t('pages.statistics.charts.participants.loading')}</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderCompletionRatesChart = () => (
    <div className="chart completion-rates-chart">
      <div className="chart-header">
        <h3>{t('pages.statistics.charts.completionRates.title')}</h3>
        <p>{t('pages.statistics.charts.completionRates.subtitle')}</p>
      </div>
      <div className="chart-content">
        {chartLoaded ? (
          <div className="line-chart">
            <div className="chart-grid">
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="grid-line">
                  <span className="grid-value">{100 - (i * 5)}%</span>
                </div>
              ))}
            </div>
            <div className="line-container">
              <svg className="line-svg" viewBox="0 0 500 200" preserveAspectRatio="none">
                <motion.path
                  d={`M 
                    ${0},${200 - (completionRatesData[0].rate * 2)} 
                    ${125},${200 - (completionRatesData[1].rate * 2)} 
                    ${250},${200 - (completionRatesData[2].rate * 2)} 
                    ${375},${200 - (completionRatesData[3].rate * 2)} 
                    ${500},${200 - (completionRatesData[4].rate * 2)}
                  `}
                  fill="none"
                  stroke="#4a8c3f"
                  strokeWidth="3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5 }}
                />
                {completionRatesData.map((data, index) => (
                  <motion.circle
                    key={index}
                    cx={index * 125}
                    cy={200 - (data.rate * 2)}
                    r="6"
                    fill="#4a8c3f"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1 + (index * 0.1) }}
                  />
                ))}
              </svg>
              <div className="line-labels">
                {completionRatesData.map((data, index) => (
                  <div key={index} className="line-label" style={{ left: `${index * 25}%` }}>
                    <div className="label-year">{data.year}</div>
                    <div className="label-value">{data.rate}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="chart-loading">
            <div className="loading-spinner"></div>
            <p>{t('pages.statistics.charts.participants.loading')}</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderActiveChart = () => {
    switch (activeChart) {
      case 'participants':
        return renderParticipantsChart();
      case 'international':
        return renderInternationalChart();
      case 'age':
        return renderAgeDistributionChart();
      case 'completion':
        return renderCompletionRatesChart();
      default:
        return renderParticipantsChart();
    }
  };

  return (
    <div className="statistics-page">
      <div className="page-header">
        <div className="container">
          <h1>{t('pages.statistics.header.title')}</h1>
          <p>{t('pages.statistics.header.subtitle')}</p>
        </div>
      </div>

      <div className="container">
        <div className="statistics-intro">
          <p>
            {t('pages.statistics.intro')}
          </p>
        </div>

        <div className="chart-tabs">
          <button
            className={`chart-tab ${activeChart === 'participants' ? 'active' : ''}`}
            onClick={() => handleChartChange('participants')}
          >
            <i className="fas fa-users"></i>
            <span>{t('pages.statistics.chartTabs.participation')}</span>
          </button>
          <button
            className={`chart-tab ${activeChart === 'international' ? 'active' : ''}`}
            onClick={() => handleChartChange('international')}
          >
            <i className="fas fa-globe-europe"></i>
            <span>{t('pages.statistics.chartTabs.international')}</span>
          </button>
          <button
            className={`chart-tab ${activeChart === 'age' ? 'active' : ''}`}
            onClick={() => handleChartChange('age')}
          >
            <i className="fas fa-user-clock"></i>
            <span>{t('pages.statistics.chartTabs.ageGroups')}</span>
          </button>
          <button
            className={`chart-tab ${activeChart === 'completion' ? 'active' : ''}`}
            onClick={() => handleChartChange('completion')}
          >
            <i className="fas fa-chart-line"></i>
            <span>{t('pages.statistics.chartTabs.completionRates')}</span>
          </button>
        </div>

        <div className="chart-container">
          {renderActiveChart()}
        </div>

        <div className="key-statistics">
          <h2>{t('pages.statistics.keyStats.title')}</h2>
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-number">{t('pages.statistics.keyStats.participants.value')}</div>
              <div className="stat-label">{t('pages.statistics.keyStats.participants.label')}</div>
              <div className="stat-trend positive">
                <i className="fas fa-arrow-up"></i> {t('pages.statistics.keyStats.participants.trend')}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-medal"></i>
              </div>
              <div className="stat-number">{t('pages.statistics.keyStats.tradition.value')}</div>
              <div className="stat-label">{t('pages.statistics.keyStats.tradition.label')}</div>
              <div className="stat-trend">
                <i className="fas fa-calendar-alt"></i> {t('pages.statistics.keyStats.tradition.trend')}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-flag"></i>
              </div>
              <div className="stat-number">{t('pages.statistics.keyStats.countries.value')}</div>
              <div className="stat-label">{t('pages.statistics.keyStats.countries.label')}</div>
              <div className="stat-trend positive">
                <i className="fas fa-arrow-up"></i> {t('pages.statistics.keyStats.countries.trend')}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-route"></i>
              </div>
              <div className="stat-number">{t('pages.statistics.keyStats.totalDistance.value')}</div>
              <div className="stat-label">{t('pages.statistics.keyStats.totalDistance.label')}</div>
              <div className="stat-trend positive">
                <i className="fas fa-arrow-up"></i> {t('pages.statistics.keyStats.totalDistance.trend')}
              </div>
            </div>
          </div>
        </div>

        <div className="interesting-facts">
          <h2>{t('pages.statistics.interestingFacts.title')}</h2>
          <div className="facts-grid">
            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>{t('pages.statistics.interestingFacts.fastestTime.title')}</h3>
              <p>{t('pages.statistics.interestingFacts.fastestTime.description')}</p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-baby"></i>
              </div>
              <h3>{t('pages.statistics.interestingFacts.youngestParticipant.title')}</h3>
              <p>{t('pages.statistics.interestingFacts.youngestParticipant.description')}</p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-user-clock"></i>
              </div>
              <h3>{t('pages.statistics.interestingFacts.oldestParticipant.title')}</h3>
              <p>{t('pages.statistics.interestingFacts.oldestParticipant.description')}</p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3>{t('pages.statistics.interestingFacts.largestGroup.title')}</h3>
              <p>{t('pages.statistics.interestingFacts.largestGroup.description')}</p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-plane"></i>
              </div>
              <h3>{t('pages.statistics.interestingFacts.farthestTraveler.title')}</h3>
              <p>{t('pages.statistics.interestingFacts.farthestTraveler.description')}</p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-history"></i>
              </div>
              <h3>{t('pages.statistics.interestingFacts.perfectAttendance.title')}</h3>
              <p>{t('pages.statistics.interestingFacts.perfectAttendance.description')}</p>
            </div>
          </div>
        </div>

        <div className="data-download">
          <h2>{t('pages.statistics.dataDownload.title')}</h2>
          <p>{t('pages.statistics.dataDownload.description')}</p>
          <div className="download-buttons">
            <a href="#" className="btn btn-secondary">
              <i className="fas fa-download"></i> {t('pages.statistics.dataDownload.participationData')}
            </a>
            <a href="#" className="btn btn-secondary">
              <i className="fas fa-download"></i> {t('pages.statistics.dataDownload.resultsArchive')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;