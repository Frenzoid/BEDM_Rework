import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/Statistics.css';

const Statistics = () => {
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
        <h3>Participants by Year and Category</h3>
        <p>The total number of participants in the Bernese Distance March from 2015 to 2024</p>
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
                <span className="legend-label">Category A (Military)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color cat-b"></span>
                <span className="legend-label">Category B (Youth)</span>
              </div>
              <div className="legend-item">
                <span className="legend-color cat-c"></span>
                <span className="legend-label">Category C (Civilian)</span>
              </div>
            </div>
          </>
        )}
        {!chartLoaded && (
          <div className="chart-loading">
            <div className="loading-spinner"></div>
            <p>Loading chart data...</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderInternationalChart = () => (
    <div className="chart international-chart">
      <div className="chart-header">
        <h3>International Participation</h3>
        <p>Percentage of participants by country of origin (2024 data)</p>
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
            <p>Loading chart data...</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderAgeDistributionChart = () => (
    <div className="chart age-distribution-chart">
      <div className="chart-header">
        <h3>Age Distribution</h3>
        <p>Percentage of participants by age group (2024 data)</p>
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
            <p>Loading chart data...</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderCompletionRatesChart = () => (
    <div className="chart completion-rates-chart">
      <div className="chart-header">
        <h3>Completion Rates</h3>
        <p>Percentage of participants who successfully completed the march</p>
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
            <p>Loading chart data...</p>
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
          <h1>Statistics</h1>
          <p>Data and insights from past Bernese Distance Marches</p>
        </div>
      </div>

      <div className="container">
        <div className="statistics-intro">
          <p>
            The Bernese Distance March has been collecting data since its inception in the 1960s.
            These statistics offer insights into participation trends, international representation,
            and other interesting facts about this unique event.
          </p>
        </div>

        <div className="chart-tabs">
          <button
            className={`chart-tab ${activeChart === 'participants' ? 'active' : ''}`}
            onClick={() => handleChartChange('participants')}
          >
            <i className="fas fa-users"></i>
            <span>Participation</span>
          </button>
          <button
            className={`chart-tab ${activeChart === 'international' ? 'active' : ''}`}
            onClick={() => handleChartChange('international')}
          >
            <i className="fas fa-globe-europe"></i>
            <span>International</span>
          </button>
          <button
            className={`chart-tab ${activeChart === 'age' ? 'active' : ''}`}
            onClick={() => handleChartChange('age')}
          >
            <i className="fas fa-user-clock"></i>
            <span>Age Groups</span>
          </button>
          <button
            className={`chart-tab ${activeChart === 'completion' ? 'active' : ''}`}
            onClick={() => handleChartChange('completion')}
          >
            <i className="fas fa-chart-line"></i>
            <span>Completion Rates</span>
          </button>
        </div>

        <div className="chart-container">
          {renderActiveChart()}
        </div>

        <div className="key-statistics">
          <h2>Key Statistics</h2>
          <div className="stats-cards">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-number">598</div>
              <div className="stat-label">Participants in 2024</div>
              <div className="stat-trend positive">
                <i className="fas fa-arrow-up"></i> 5.1% from 2023
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-medal"></i>
              </div>
              <div className="stat-number">67</div>
              <div className="stat-label">Years of tradition</div>
              <div className="stat-trend">
                <i className="fas fa-calendar-alt"></i> Since 1960
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-flag"></i>
              </div>
              <div className="stat-number">14</div>
              <div className="stat-label">Countries represented</div>
              <div className="stat-trend positive">
                <i className="fas fa-arrow-up"></i> 2 new countries in 2024
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-route"></i>
              </div>
              <div className="stat-number">23,920</div>
              <div className="stat-label">Total km walked in 2024</div>
              <div className="stat-trend positive">
                <i className="fas fa-arrow-up"></i> 1,160 km from 2023
              </div>
            </div>
          </div>
        </div>

        <div className="interesting-facts">
          <h2>Interesting Facts</h2>
          <div className="facts-grid">
            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Fastest Time</h3>
              <p>The fastest completion time ever recorded was 4:21:05 by Thomas Huber in 2023 (Category A).</p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-baby"></i>
              </div>
              <h3>Youngest Participant</h3>
              <p>The youngest participant was 7-year-old Emma Keller, who completed the youth course in 2022.</p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-user-clock"></i>
              </div>
              <h3>Oldest Participant</h3>
              <p>The oldest participant was 82-year-old Johann Weber, who completed his 45th march in 2024.</p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-user-friends"></i>
              </div>
              <h3>Largest Group</h3>
              <p>The largest group ever to participate was the "Bern Veterans" with 28 members in 2019.</p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-plane"></i>
              </div>
              <h3>Farthest Traveler</h3>
              <p>In 2023, a participant traveled from New Zealand (18,000 km) to join the march.</p>
            </div>

            <div className="fact-card">
              <div className="fact-icon">
                <i className="fas fa-history"></i>
              </div>
              <h3>Perfect Attendance</h3>
              <p>Paul Fürst has participated in all 66 editions of the march without missing a single year.</p>
            </div>
          </div>
        </div>

        <div className="data-download">
          <h2>Historical Data</h2>
          <p>Looking for more detailed statistics? Download our historical data files:</p>
          <div className="download-buttons">
            <a href="#" className="btn btn-secondary">
              <i className="fas fa-download"></i> Participation Data (2000-2024)
            </a>
            <a href="#" className="btn btn-secondary">
              <i className="fas fa-download"></i> Complete Results Archive
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;