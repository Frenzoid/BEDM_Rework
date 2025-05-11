// pages/Leaderboards/Leaderboards.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "motion/react"
import { FaTrophy, FaFilter, FaSearch, FaDownload, FaUsers, FaUser, FaShieldAlt } from 'react-icons/fa';
import '../styles/Leaderboards.css';
import PageBanner from '../components/PageBanner';

const Leaderboards = () => {
  const { t } = useTranslation();
  const [year, setYear] = useState('2024');
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample leaderboard data (in a real app, this would come from an API)
  const leaderboardData = {
    'groupA': [
      { rank: 1, name: 'Team Alpha', members: 5, distanceCompleted: 45, time: '8:24:15', points: 98 },
      { rank: 2, name: 'Bernese Guards', members: 6, distanceCompleted: 45, time: '8:45:30', points: 95 },
      { rank: 3, name: 'Swiss Marchers', members: 4, distanceCompleted: 40, time: '7:50:10', points: 92 },
      { rank: 4, name: 'Alpine Squad', members: 5, distanceCompleted: 42, time: '8:30:45', points: 89 },
      { rank: 5, name: 'Team Helvetia', members: 7, distanceCompleted: 45, time: '9:15:20', points: 85 }
    ],
    'groupC': [
      { rank: 1, name: 'Mountain Walkers', members: 8, distanceCompleted: 38, time: '8:10:30', points: 94 },
      { rank: 2, name: 'Bern City Hikers', members: 6, distanceCompleted: 38, time: '8:20:15', points: 92 },
      { rank: 3, name: 'Trail Blazers', members: 5, distanceCompleted: 35, time: '7:45:50', points: 90 },
      { rank: 4, name: 'Swiss Explorers', members: 7, distanceCompleted: 38, time: '8:55:40', points: 87 },
      { rank: 5, name: 'Aar Valley Group', members: 4, distanceCompleted: 35, time: '8:05:25', points: 85 }
    ],
    'categoryAWomen': [
      { rank: 1, name: 'Emma Schneider', country: 'Switzerland', distanceCompleted: 35, time: '6:45:20', points: 96 },
      { rank: 2, name: 'Sophie Müller', country: 'Switzerland', distanceCompleted: 35, time: '6:55:10', points: 94 },
      { rank: 3, name: 'Anna Weber', country: 'Germany', distanceCompleted: 35, time: '7:05:45', points: 92 },
      { rank: 4, name: 'Laura Martinez', country: 'Spain', distanceCompleted: 35, time: '7:15:30', points: 90 },
      { rank: 5, name: 'Nina Keller', country: 'Switzerland', distanceCompleted: 35, time: '7:25:50', points: 88 }
    ],
    'categoryAMen': [
      { rank: 1, name: 'Thomas Wagner', country: 'Switzerland', distanceCompleted: 42, time: '7:10:15', points: 98 },
      { rank: 2, name: 'Michael Baumgartner', country: 'Switzerland', distanceCompleted: 42, time: '7:20:30', points: 96 },
      { rank: 3, name: 'Andreas Schmid', country: 'Germany', distanceCompleted: 42, time: '7:35:45', points: 94 },
      { rank: 4, name: 'Marc Dupont', country: 'France', distanceCompleted: 42, time: '7:45:20', points: 92 },
      { rank: 5, name: 'Peter Meyer', country: 'Austria', distanceCompleted: 42, time: '7:55:10', points: 90 }
    ],
    'categoryB': [
      { rank: 1, name: 'Daniel Moser', country: 'Switzerland', distanceCompleted: 30, time: '5:50:25', points: 95 },
      { rank: 2, name: 'Julian Egger', country: 'Switzerland', distanceCompleted: 30, time: '6:05:40', points: 93 },
      { rank: 3, name: 'Tim Schäfer', country: 'Germany', distanceCompleted: 30, time: '6:15:10', points: 91 },
      { rank: 4, name: 'Lucas Berger', country: 'Switzerland', distanceCompleted: 30, time: '6:25:50', points: 89 },
      { rank: 5, name: 'Simon Huber', country: 'Switzerland', distanceCompleted: 30, time: '6:30:15', points: 87 }
    ],
    'categoryCWomen': [
      { rank: 1, name: 'Lisa Brunner', country: 'Switzerland', distanceCompleted: 35, time: '6:40:30', points: 97 },
      { rank: 2, name: 'Sarah Zimmermann', country: 'Switzerland', distanceCompleted: 35, time: '6:50:15', points: 95 },
      { rank: 3, name: 'Julia König', country: 'Germany', distanceCompleted: 35, time: '7:00:45', points: 93 },
      { rank: 4, name: 'Elena Garcia', country: 'Spain', distanceCompleted: 35, time: '7:10:20', points: 91 },
      { rank: 5, name: 'Maria Fischer', country: 'Austria', distanceCompleted: 35, time: '7:20:55', points: 89 }
    ],
    'categoryCMen': [
      { rank: 1, name: 'David Hofmann', country: 'Switzerland', distanceCompleted: 40, time: '7:05:40', points: 99 },
      { rank: 2, name: 'Martin Steiner', country: 'Switzerland', distanceCompleted: 40, time: '7:15:25', points: 97 },
      { rank: 3, name: 'Christian Vogel', country: 'Germany', distanceCompleted: 40, time: '7:25:50', points: 95 },
      { rank: 4, name: 'Pierre Dubois', country: 'France', distanceCompleted: 40, time: '7:35:10', points: 93 },
      { rank: 5, name: 'Robert Maier', country: 'Austria', distanceCompleted: 40, time: '7:45:30', points: 91 }
    ]
  };

  // Years for filter dropdown
  const years = ['2024', '2023', '2022', '2021', '2020'];

  // Categories for filter dropdown
  const categories = [
    { value: 'all', label: t('allCategories') },
    { value: 'groupA', label: t('groupsCategoryA') },
    { value: 'groupC', label: t('groupsCategoryC') },
    { value: 'categoryAWomen', label: t('categoryAWomen') },
    { value: 'categoryAMen', label: t('categoryAMen') },
    { value: 'categoryB', label: t('categoryB') },
    { value: 'categoryCWomen', label: t('categoryCWomen') },
    { value: 'categoryCMen', label: t('categoryCMen') }
  ];

  // Filter the leaderboard data based on category and search term
  const filteredData = () => {
    if (category === 'all') {
      // Combine all categories for search
      const allResults = Object.values(leaderboardData).flat();

      if (searchTerm) {
        return allResults.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.country && item.country.toLowerCase().includes(searchTerm.toLowerCase()))
        );
      }

      return allResults.slice(0, 10); // Show top 10 from all categories
    }

    if (!leaderboardData[category]) return [];

    if (searchTerm) {
      return leaderboardData[category].filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.country && item.country.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return leaderboardData[category];
  };

  // Determine if the current category is a group category
  const isGroupCategory = () => {
    return category === 'groupA' || category === 'groupC';
  };

  return (
    <div className="leaderboards-page">
      <PageBanner
        title={t('leaderboards')}
        subtitle={t('leaderboardsSubtitle')}
        background="https://www.bernerdm.ch/wp-content/uploads/2024/12/leaderboards-bg.jpg"
      />

      <div className="container">
        <motion.div
          className="leaderboards-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="leaderboards-header">
            <div className="header-text">
              <h2><FaTrophy className="header-icon" /> {t('marchResults')}</h2>
              <p>{t('leaderboardsDesc')}</p>
            </div>

            <div className="filter-toolbar">
              <div className="filter-group">
                <label htmlFor="year">{t('year')}</label>
                <select
                  id="year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label htmlFor="category">{t('category')}</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group search-group">
                <label htmlFor="search">{t('search')}</label>
                <div className="search-input-container">
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                  />
                  <FaSearch className="search-icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="leaderboard-results">
            <div className="category-badge">
              {category === 'all' ? (
                <span>{t('showingTopResults')}</span>
              ) : (
                <span>
                  {categories.find(cat => cat.value === category)?.label} - {year}
                </span>
              )}
            </div>

            <div className="leaderboard-table-container">
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>{t('rank')}</th>
                    <th className="text-left">
                      {isGroupCategory() ? (
                        <><FaUsers className="table-icon" /> {t('groupName')}</>
                      ) : (
                        <><FaUser className="table-icon" /> {t('participant')}</>
                      )}
                    </th>
                    {!isGroupCategory() && <th>{t('country')}</th>}
                    {isGroupCategory() && <th>{t('members')}</th>}
                    <th>{t('distance')}</th>
                    <th>{t('time')}</th>
                    <th>{t('points')}</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData().length > 0 ? (
                    filteredData().map((item, index) => (
                      <tr key={index} className={item.rank <= 3 ? `rank-${item.rank}` : ''}>
                        <td className="rank-cell">
                          {item.rank <= 3 && <FaTrophy className={`trophy trophy-${item.rank}`} />}
                          {item.rank}
                        </td>
                        <td className="text-left name-cell">
                          {item.name}
                          {item.isUniformed && (
                            <span className="uniform-indicator" title={t('uniformed')}>
                              <FaShieldAlt />
                            </span>
                          )}
                        </td>
                        {!isGroupCategory() && <td>{item.country}</td>}
                        {isGroupCategory() && <td>{item.members}</td>}
                        <td>{item.distanceCompleted} km</td>
                        <td>{item.time}</td>
                        <td className="points-cell">{item.points}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={isGroupCategory() ? 6 : 7} className="no-results">
                        {t('noResultsFound')}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="leaderboard-actions">
              <button className="btn btn-secondary">
                <FaDownload className="btn-icon" /> {t('downloadResults')}
              </button>

              <div className="disclaimer">
                <p>{t('resultsDisclaimer')}</p>
              </div>
            </div>
          </div>

          <div className="archive-section">
            <h3>{t('pastYearsArchive')}</h3>
            <p>{t('pastYearsArchiveDesc')}</p>

            <div className="archive-links">
              {years.map((archiveYear) => (
                <a
                  key={archiveYear}
                  href={`#${archiveYear}`}
                  className={`archive-link ${archiveYear === year ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setYear(archiveYear);
                  }}
                >
                  {archiveYear}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Leaderboards;