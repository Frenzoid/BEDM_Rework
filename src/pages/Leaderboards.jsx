import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/Leaderboards.css';

const Leaderboards = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCategory, setSelectedCategory] = useState('cat-a-men');

  // Mock data for demonstration purposes
  const leaderboardData = {
    '2024': {
      'cat-a-men': [
        { rank: 1, name: 'Johannes Schmidt', country: 'Switzerland', time: '4:23:15', distance: '42.5 km' },
        { rank: 2, name: 'Martin Weber', country: 'Germany', time: '4:31:47', distance: '42.5 km' },
        { rank: 3, name: 'Thomas Huber', country: 'Switzerland', time: '4:45:08', distance: '42.5 km' },
        { rank: 4, name: 'Marc Dubois', country: 'France', time: '4:52:31', distance: '42.5 km' },
        { rank: 5, name: 'Felix Meier', country: 'Switzerland', time: '5:01:19', distance: '42.5 km' },
        { rank: 6, name: 'Hans Müller', country: 'Switzerland', time: '5:07:45', distance: '42.5 km' },
        { rank: 7, name: 'Klaus Berger', country: 'Germany', time: '5:12:03', distance: '42.5 km' },
        { rank: 8, name: 'Pierre Laurent', country: 'France', time: '5:18:27', distance: '42.5 km' },
        { rank: 9, name: 'Urs Schneider', country: 'Switzerland', time: '5:23:40', distance: '42.5 km' },
        { rank: 10, name: 'Andreas Keller', country: 'Austria', time: '5:34:12', distance: '42.5 km' },
      ],
      'cat-a-women': [
        { rank: 1, name: 'Sophia Bauer', country: 'Switzerland', time: '4:45:33', distance: '42.5 km' },
        { rank: 2, name: 'Erika Zimmermann', country: 'Germany', time: '4:57:21', distance: '42.5 km' },
        { rank: 3, name: 'Marie Fontaine', country: 'France', time: '5:10:45', distance: '42.5 km' },
        { rank: 4, name: 'Lisa Hofmann', country: 'Switzerland', time: '5:22:18', distance: '42.5 km' },
        { rank: 5, name: 'Anna Gruber', country: 'Austria', time: '5:36:55', distance: '42.5 km' },
      ],
      'cat-a-group': [
        { rank: 1, name: 'Team Alpine', country: 'Switzerland', time: '4:35:17', distance: '42.5 km' },
        { rank: 2, name: 'Bergwacht Bayern', country: 'Germany', time: '4:49:32', distance: '42.5 km' },
        { rank: 3, name: 'Swiss Guards', country: 'Switzerland', time: '5:02:44', distance: '42.5 km' },
        { rank: 4, name: 'Mont Blanc Squad', country: 'France', time: '5:18:03', distance: '42.5 km' },
        { rank: 5, name: 'Tyrol Marchers', country: 'Austria', time: '5:27:15', distance: '42.5 km' },
      ],
      'cat-b': [
        { rank: 1, name: 'Julian Weber', country: 'Switzerland', time: '2:33:45', distance: '22.0 km' },
        { rank: 2, name: 'Tim Schneider', country: 'Switzerland', time: '2:41:18', distance: '22.0 km' },
        { rank: 3, name: 'Sophie Müller', country: 'Switzerland', time: '2:47:29', distance: '22.0 km' },
        { rank: 4, name: 'Max Fischer', country: 'Germany', time: '2:55:11', distance: '22.0 km' },
        { rank: 5, name: 'Emma Roth', country: 'Switzerland', time: '3:04:37', distance: '22.0 km' },
      ],
      'cat-c-men': [
        { rank: 1, name: 'Alexander Keller', country: 'Switzerland', time: '5:12:27', distance: '35.0 km' },
        { rank: 2, name: 'Michael Schwarz', country: 'Germany', time: '5:24:55', distance: '35.0 km' },
        { rank: 3, name: 'David Brunner', country: 'Switzerland', time: '5:37:19', distance: '35.0 km' },
        { rank: 4, name: 'Jean Dupont', country: 'France', time: '5:45:48', distance: '35.0 km' },
        { rank: 5, name: 'Peter Hofer', country: 'Austria', time: '5:59:02', distance: '35.0 km' },
        { rank: 6, name: 'Stefan Wagner', country: 'Switzerland', time: '6:07:33', distance: '35.0 km' },
        { rank: 7, name: 'Marco Fischer', country: 'Switzerland', time: '6:15:41', distance: '35.0 km' },
        { rank: 8, name: 'Christian Meyer', country: 'Germany', time: '6:24:09', distance: '35.0 km' },
        { rank: 9, name: 'Paul Schmidt', country: 'Switzerland', time: '6:33:27', distance: '35.0 km' },
        { rank: 10, name: 'Thomas König', country: 'Austria', time: '6:41:55', distance: '35.0 km' },
      ],
      'cat-c-women': [
        { rank: 1, name: 'Laura Weber', country: 'Switzerland', time: '5:33:12', distance: '35.0 km' },
        { rank: 2, name: 'Hannah Müller', country: 'Switzerland', time: '5:47:45', distance: '35.0 km' },
        { rank: 3, name: 'Caroline Schmidt', country: 'Germany', time: '6:05:31', distance: '35.0 km' },
        { rank: 4, name: 'Isabelle Dubois', country: 'France', time: '6:21:09', distance: '35.0 km' },
        { rank: 5, name: 'Martina Huber', country: 'Switzerland', time: '6:34:28', distance: '35.0 km' },
      ],
      'cat-c-group': [
        { rank: 1, name: 'Bern Trekkers', country: 'Switzerland', time: '5:15:42', distance: '35.0 km' },
        { rank: 2, name: 'Alpine Friends', country: 'Switzerland', time: '5:32:18', distance: '35.0 km' },
        { rank: 3, name: 'Munich Marchers', country: 'Germany', time: '5:48:55', distance: '35.0 km' },
        { rank: 4, name: 'Lyon Hikers', country: 'France', time: '6:03:27', distance: '35.0 km' },
        { rank: 5, name: 'Zürich Wanderers', country: 'Switzerland', time: '6:18:14', distance: '35.0 km' },
      ],
    },
    '2023': {
      'cat-a-men': [
        { rank: 1, name: 'Thomas Huber', country: 'Switzerland', time: '4:21:05', distance: '42.5 km' },
        { rank: 2, name: 'Johannes Schmidt', country: 'Switzerland', time: '4:29:47', distance: '42.5 km' },
        { rank: 3, name: 'Marc Dubois', country: 'France', time: '4:38:21', distance: '42.5 km' },
        { rank: 4, name: 'Martin Weber', country: 'Germany', time: '4:49:11', distance: '42.5 km' },
        { rank: 5, name: 'Felix Meier', country: 'Switzerland', time: '4:58:33', distance: '42.5 km' },
      ],
      'cat-a-women': [
        { rank: 1, name: 'Marie Fontaine', country: 'France', time: '4:43:18', distance: '42.5 km' },
        { rank: 2, name: 'Sophia Bauer', country: 'Switzerland', time: '4:51:27', distance: '42.5 km' },
        { rank: 3, name: 'Erika Zimmermann', country: 'Germany', time: '5:07:45', distance: '42.5 km' },
        { rank: 4, name: 'Lisa Hofmann', country: 'Switzerland', time: '5:19:35', distance: '42.5 km' },
        { rank: 5, name: 'Anna Gruber', country: 'Austria', time: '5:32:09', distance: '42.5 km' },
      ],
      'cat-a-group': [
        { rank: 1, name: 'Swiss Guards', country: 'Switzerland', time: '4:32:54', distance: '42.5 km' },
        { rank: 2, name: 'Team Alpine', country: 'Switzerland', time: '4:40:23', distance: '42.5 km' },
        { rank: 3, name: 'Bergwacht Bayern', country: 'Germany', time: '4:55:17', distance: '42.5 km' },
        { rank: 4, name: 'Mont Blanc Squad', country: 'France', time: '5:10:38', distance: '42.5 km' },
        { rank: 5, name: 'Tyrol Marchers', country: 'Austria', time: '5:25:49', distance: '42.5 km' },
      ],
      'cat-b': [
        { rank: 1, name: 'Tim Schneider', country: 'Switzerland', time: '2:31:22', distance: '22.0 km' },
        { rank: 2, name: 'Julian Weber', country: 'Switzerland', time: '2:39:15', distance: '22.0 km' },
        { rank: 3, name: 'Sophie Müller', country: 'Switzerland', time: '2:45:47', distance: '22.0 km' },
        { rank: 4, name: 'Emma Roth', country: 'Switzerland', time: '2:58:33', distance: '22.0 km' },
        { rank: 5, name: 'Max Fischer', country: 'Germany', time: '3:07:19', distance: '22.0 km' },
      ],
      'cat-c-men': [
        { rank: 1, name: 'Alexander Keller', country: 'Switzerland', time: '5:05:42', distance: '35.0 km' },
        { rank: 2, name: 'David Brunner', country: 'Switzerland', time: '5:18:14', distance: '35.0 km' },
        { rank: 3, name: 'Michael Schwarz', country: 'Germany', time: '5:29:55', distance: '35.0 km' },
        { rank: 4, name: 'Jean Dupont', country: 'France', time: '5:41:23', distance: '35.0 km' },
        { rank: 5, name: 'Peter Hofer', country: 'Austria', time: '5:53:09', distance: '35.0 km' },
      ],
      'cat-c-women': [
        { rank: 1, name: 'Laura Weber', country: 'Switzerland', time: '5:29:37', distance: '35.0 km' },
        { rank: 2, name: 'Hannah Müller', country: 'Switzerland', time: '5:45:21', distance: '35.0 km' },
        { rank: 3, name: 'Caroline Schmidt', country: 'Germany', time: '6:01:43', distance: '35.0 km' },
        { rank: 4, name: 'Isabelle Dubois', country: 'France', time: '6:19:25', distance: '35.0 km' },
        { rank: 5, name: 'Martina Huber', country: 'Switzerland', time: '6:32:16', distance: '35.0 km' },
      ],
      'cat-c-group': [
        { rank: 1, name: 'Bern Trekkers', country: 'Switzerland', time: '5:11:19', distance: '35.0 km' },
        { rank: 2, name: 'Alpine Friends', country: 'Switzerland', time: '5:28:45', distance: '35.0 km' },
        { rank: 3, name: 'Munich Marchers', country: 'Germany', time: '5:44:31', distance: '35.0 km' },
        { rank: 4, name: 'Zürich Wanderers', country: 'Switzerland', time: '6:01:48', distance: '35.0 km' },
        { rank: 5, name: 'Lyon Hikers', country: 'France', time: '6:15:27', distance: '35.0 km' },
      ],
    },
    '2022': {
      'cat-a-men': [
        { rank: 1, name: 'Martin Weber', country: 'Germany', time: '4:28:35', distance: '42.5 km' },
        { rank: 2, name: 'Thomas Huber', country: 'Switzerland', time: '4:35:41', distance: '42.5 km' },
        { rank: 3, name: 'Johannes Schmidt', country: 'Switzerland', time: '4:47:13', distance: '42.5 km' },
        { rank: 4, name: 'Felix Meier', country: 'Switzerland', time: '4:57:25', distance: '42.5 km' },
        { rank: 5, name: 'Marc Dubois', country: 'France', time: '5:08:59', distance: '42.5 km' },
      ],
      'cat-a-women': [
        { rank: 1, name: 'Sophia Bauer', country: 'Switzerland', time: '4:52:14', distance: '42.5 km' },
        { rank: 2, name: 'Marie Fontaine', country: 'France', time: '5:03:27', distance: '42.5 km' },
        { rank: 3, name: 'Erika Zimmermann', country: 'Germany', time: '5:15:08', distance: '42.5 km' },
        { rank: 4, name: 'Lisa Hofmann', country: 'Switzerland', time: '5:27:35', distance: '42.5 km' },
        { rank: 5, name: 'Anna Gruber', country: 'Austria', time: '5:39:42', distance: '42.5 km' },
      ],
      'cat-a-group': [
        { rank: 1, name: 'Team Alpine', country: 'Switzerland', time: '4:42:18', distance: '42.5 km' },
        { rank: 2, name: 'Bergwacht Bayern', country: 'Germany', time: '4:54:37', distance: '42.5 km' },
        { rank: 3, name: 'Swiss Guards', country: 'Switzerland', time: '5:07:29', distance: '42.5 km' },
        { rank: 4, name: 'Mont Blanc Squad', country: 'France', time: '5:21:15', distance: '42.5 km' },
        { rank: 5, name: 'Tyrol Marchers', country: 'Austria', time: '5:38:40', distance: '42.5 km' },
      ],
      'cat-b': [
        { rank: 1, name: 'Julian Weber', country: 'Switzerland', time: '2:35:17', distance: '22.0 km' },
        { rank: 2, name: 'Sophie Müller', country: 'Switzerland', time: '2:42:33', distance: '22.0 km' },
        { rank: 3, name: 'Tim Schneider', country: 'Switzerland', time: '2:49:05', distance: '22.0 km' },
        { rank: 4, name: 'Max Fischer', country: 'Germany', time: '2:59:47', distance: '22.0 km' },
        { rank: 5, name: 'Emma Roth', country: 'Switzerland', time: '3:11:21', distance: '22.0 km' },
      ],
      'cat-c-men': [
        { rank: 1, name: 'David Brunner', country: 'Switzerland', time: '5:14:35', distance: '35.0 km' },
        { rank: 2, name: 'Alexander Keller', country: 'Switzerland', time: '5:23:48', distance: '35.0 km' },
        { rank: 3, name: 'Michael Schwarz', country: 'Germany', time: '5:36:12', distance: '35.0 km' },
        { rank: 4, name: 'Jean Dupont', country: 'France', time: '5:49:35', distance: '35.0 km' },
        { rank: 5, name: 'Peter Hofer', country: 'Austria', time: '6:02:19', distance: '35.0 km' },
      ],
      'cat-c-women': [
        { rank: 1, name: 'Hannah Müller', country: 'Switzerland', time: '5:31:45', distance: '35.0 km' },
        { rank: 2, name: 'Laura Weber', country: 'Switzerland', time: '5:47:19', distance: '35.0 km' },
        { rank: 3, name: 'Caroline Schmidt', country: 'Germany', time: '6:05:38', distance: '35.0 km' },
        { rank: 4, name: 'Martina Huber', country: 'Switzerland', time: '6:23:27', distance: '35.0 km' },
        { rank: 5, name: 'Isabelle Dubois', country: 'France', time: '6:39:14', distance: '35.0 km' },
      ],
      'cat-c-group': [
        { rank: 1, name: 'Alpine Friends', country: 'Switzerland', time: '5:19:23', distance: '35.0 km' },
        { rank: 2, name: 'Bern Trekkers', country: 'Switzerland', time: '5:28:47', distance: '35.0 km' },
        { rank: 3, name: 'Munich Marchers', country: 'Germany', time: '5:47:15', distance: '35.0 km' },
        { rank: 4, name: 'Zürich Wanderers', country: 'Switzerland', time: '6:04:38', distance: '35.0 km' },
        { rank: 5, name: 'Lyon Hikers', country: 'France', time: '6:21:53', distance: '35.0 km' },
      ],
    },
  };

  const years = Object.keys(leaderboardData).sort((a, b) => b - a); // Sort years in descending order

  const categories = [
    { id: 'cat-a-men', name: 'Category A - Men (Uniformed)' },
    { id: 'cat-a-women', name: 'Category A - Women (Uniformed)' },
    { id: 'cat-a-group', name: 'Category A - Group (Uniformed)' },
    { id: 'cat-b', name: 'Category B - Youth & Sport' },
    { id: 'cat-c-men', name: 'Category C - Men' },
    { id: 'cat-c-women', name: 'Category C - Women' },
    { id: 'cat-c-group', name: 'Category C - Group' },
  ];

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="leaderboards-page">
      <div className="page-header">
        <div className="container">
          <h1>Leaderboards</h1>
          <p>Past results and rankings from the Bernese Distance March</p>
        </div>
      </div>

      <div className="container">
        <div className="leaderboards-filters">
          <div className="filter-group">
            <label htmlFor="year-select">Year</label>
            <select
              id="year-select"
              value={selectedYear}
              onChange={handleYearChange}
              className="filter-select"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="category-select">Category</label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="filter-select"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <motion.div
          className="leaderboard-container"
          key={`${selectedYear}-${selectedCategory}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="leaderboard-header">
            <h2>{categories.find(cat => cat.id === selectedCategory).name} - {selectedYear}</h2>
            <p>Distance: {leaderboardData[selectedYear][selectedCategory][0]?.distance}</p>
          </div>

          <div className="leaderboard-table-container">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData[selectedYear][selectedCategory].map((participant, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={index < 3 ? `top-${index + 1}` : ''}
                  >
                    <td>
                      {index < 3 && (
                        <div className="medal">
                          {index === 0 && <i className="fas fa-medal gold"></i>}
                          {index === 1 && <i className="fas fa-medal silver"></i>}
                          {index === 2 && <i className="fas fa-medal bronze"></i>}
                        </div>
                      )}
                      {participant.rank}
                    </td>
                    <td>{participant.name}</td>
                    <td>
                      <span className="country">
                        <span className={`flag flag-${participant.country.toLowerCase()}`}></span>
                        {participant.country}
                      </span>
                    </td>
                    <td>{participant.time}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="leaderboard-stats">
          <h3>Interesting Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="stat-content">
                <div className="stat-title">Most Wins</div>
                <div className="stat-value">Johannes Schmidt</div>
                <div className="stat-description">3 victories in Category A - Men</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-stopwatch"></i>
              </div>
              <div className="stat-content">
                <div className="stat-title">Fastest Time</div>
                <div className="stat-value">4:21:05</div>
                <div className="stat-description">Thomas Huber (2023, Category A - Men)</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-content">
                <div className="stat-title">Most Consistent Team</div>
                <div className="stat-value">Team Alpine</div>
                <div className="stat-description">Never finished below 2nd place</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-flag"></i>
              </div>
              <div className="stat-content">
                <div className="stat-title">Most Represented Country</div>
                <div className="stat-value">Switzerland</div>
                <div className="stat-description">65% of all participants</div>
              </div>
            </div>
          </div>
        </div>

        <div className="archive-section">
          <h3>Leaderboard Archive</h3>
          <p>Looking for older results? Check out our comprehensive archive of past Bernese Distance March leaderboards:</p>

          <div className="archive-years">
            {/* These would link to archived results from previous years */}
            <a href="#" className="archive-year">2021</a>
            <a href="#" className="archive-year">2020</a>
            <a href="#" className="archive-year">2019</a>
            <a href="#" className="archive-year">2018</a>
            <a href="#" className="archive-year">2017</a>
            <a href="#" className="archive-year">2016</a>
            <a href="#" className="archive-year">2015</a>
            <span className="archive-more">...</span>
          </div>

          <button className="btn btn-secondary">
            <i className="fas fa-archive"></i> View Complete Archive
          </button>
        </div>

        <div className="records-section">
          <h3>All-Time Records</h3>
          <div className="records-grid">
            <div className="record-card">
              <h4>Category A - Men</h4>
              <p className="record-holder">Thomas Huber</p>
              <p className="record-value">4:21:05 (2023)</p>
            </div>
            <div className="record-card">
              <h4>Category A - Women</h4>
              <p className="record-holder">Marie Fontaine</p>
              <p className="record-value">4:43:18 (2023)</p>
            </div>
            <div className="record-card">
              <h4>Category A - Group</h4>
              <p className="record-holder">Swiss Guards</p>
              <p className="record-value">4:32:54 (2023)</p>
            </div>
            <div className="record-card">
              <h4>Category B</h4>
              <p className="record-holder">Tim Schneider</p>
              <p className="record-value">2:31:22 (2023)</p>
            </div>
            <div className="record-card">
              <h4>Category C - Men</h4>
              <p className="record-holder">Alexander Keller</p>
              <p className="record-value">5:05:42 (2023)</p>
            </div>
            <div className="record-card">
              <h4>Category C - Women</h4>
              <p className="record-holder">Laura Weber</p>
              <p className="record-value">5:29:37 (2023)</p>
            </div>
            <div className="record-card">
              <h4>Category C - Group</h4>
              <p className="record-holder">Bern Trekkers</p>
              <p className="record-value">5:11:19 (2023)</p>
            </div>
            <div className="record-card special-record">
              <h4>Most Participations</h4>
              <p className="record-holder">Paul Fürst</p>
              <p className="record-value">All 66 editions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;