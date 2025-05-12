import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/CurrentMarch.css';

const CurrentMarch = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="current-march-page">
      <div className="page-header">
        <div className="container">
          <h1>Current March</h1>
          <p>67th Bernese Distance March - December 6th, 2025</p>
        </div>
      </div>

      <div className="container">
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => handleTabChange('overview')}
            >
              Overview
            </button>
            <button
              className={`tab ${activeTab === 'distance-scheme' ? 'active' : ''}`}
              onClick={() => handleTabChange('distance-scheme')}
            >
              Distance Scheme
            </button>
            <button
              className={`tab ${activeTab === 'regulations' ? 'active' : ''}`}
              onClick={() => handleTabChange('regulations')}
            >
              Regulations
            </button>
            <button
              className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => handleTabChange('faq')}
            >
              FAQ
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
                <h2>67th Bernese Distance March</h2>
                <div className="march-info-cards">
                  <div className="info-card">
                    <div className="icon">
                      <i className="fas fa-calendar-day"></i>
                    </div>
                    <h3>Date</h3>
                    <p>December 6th, 2025</p>
                  </div>
                  <div className="info-card">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Location</h3>
                    <p>Ins, Canton of Bern, Switzerland</p>
                  </div>
                  <div className="info-card">
                    <div className="icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <h3>Start Time</h3>
                    <p>8:00 AM - 10:00 AM</p>
                  </div>
                </div>

                <div className="overview-description">
                  <p>
                    The Bernese Distance March is unique among distance marches because it allows participants to choose their own routes between control points. Unlike traditional marches with fixed paths, you can design your own journey through the beautiful landscapes of Bern.
                  </p>

                  <p>
                    Participants can join as individuals or groups across several categories, with routes of varying distances depending on your category and preference. The march combines military tradition with an appreciation for Switzerland's natural beauty.
                  </p>

                  <div className="cta-buttons">
                    <Link to="/registration" className="btn btn-primary">Register Now</Link>
                    <a href="#distance-scheme" className="btn btn-secondary" onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('distance-scheme');
                    }}>View Distance Scheme</a>
                  </div>
                </div>

                <div className="march-highlights">
                  <h3>Event Highlights</h3>
                  <ul>
                    <li>
                      <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="highlight-text">Design your own route through the Canton of Bern</span>
                    </li>
                    <li>
                      <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="highlight-text">Categories for military personnel, civilians, youth, and groups</span>
                    </li>
                    <li>
                      <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="highlight-text">Medals awarded based on completion and category</span>
                    </li>
                    <li>
                      <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="highlight-text">International participants welcome from around the world</span>
                    </li>
                    <li>
                      <span className="highlight-icon"><i className="fas fa-check-circle"></i></span>
                      <span className="highlight-text">Over 60 years of tradition in Swiss military marching</span>
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
                <h2>Distance Scheme 2025</h2>
                <div className="scheme-info">
                  <div className="scheme-alert">
                    <i className="fas fa-info-circle"></i>
                    <p>The definite distance scheme for the 2025 march is currently being prepared and will be published as soon as possible.</p>
                  </div>

                  <h3>How the Distance Scheme Works</h3>
                  <p>
                    The Bernese Distance March uses a unique checkpoint system that allows participants to create their own routes. Here's how it works:
                  </p>

                  <ul className="scheme-steps">
                    <li>
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Start at the central checkpoint</h4>
                        <p>All participants begin at the main registration point in Ins.</p>
                      </div>
                    </li>
                    <li>
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Choose your checkpoints</h4>
                        <p>Based on your category, you'll need to visit a specific number of checkpoints scattered throughout the region.</p>
                      </div>
                    </li>
                    <li>
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Plan your route</h4>
                        <p>You decide the order and path between checkpoints, allowing for a personalized experience.</p>
                      </div>
                    </li>
                    <li>
                      <div className="step-number">4</div>
                      <div className="step-content">
                        <h4>Complete the march</h4>
                        <p>Return to the finish line after visiting all required checkpoints within the time limit.</p>
                      </div>
                    </li>
                  </ul>

                  <div className="distance-categories">
                    <h3>Distance Categories</h3>
                    <p>Different categories have different distance requirements:</p>

                    <div className="category-table">
                      <div className="table-header">
                        <div className="column">Category</div>
                        <div className="column">Minimum Distance</div>
                        <div className="column">Required Checkpoints</div>
                      </div>
                      <div className="table-row">
                        <div className="column">Category A - Military</div>
                        <div className="column">40 km</div>
                        <div className="column">5-7</div>
                      </div>
                      <div className="table-row">
                        <div className="column">Category B - Youth</div>
                        <div className="column">20 km</div>
                        <div className="column">3-5</div>
                      </div>
                      <div className="table-row">
                        <div className="column">Category C - Civilian</div>
                        <div className="column">30 km</div>
                        <div className="column">4-6</div>
                      </div>
                    </div>

                    <p className="note">
                      <i className="fas fa-exclamation-circle"></i> Note: The final distance scheme for 2025 may have different requirements and will be published closer to the event date.
                    </p>
                  </div>

                  <div className="map-placeholder">
                    <div className="map-overlay">
                      <i className="fas fa-map-marked-alt"></i>
                      <p>Interactive map coming soon</p>
                    </div>
                  </div>

                  <div className="download-section">
                    <h3>Important Documents</h3>
                    <p>The following documents will be available for download:</p>
                    <ul className="download-list">
                      <li>
                        <i className="fas fa-file-pdf"></i>
                        <span>Flyer 2025 (Coming Soon)</span>
                      </li>
                      <li>
                        <i className="fas fa-file-pdf"></i>
                        <span>Distance Scheme Map (Coming Soon)</span>
                      </li>
                      <li>
                        <i className="fas fa-file-pdf"></i>
                        <span>Marching Regulations (Coming Soon)</span>
                      </li>
                    </ul>
                  </div>
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
                <h2>March Regulations</h2>

                <div className="regulations-section">
                  <h3>General Rules</h3>
                  <ul className="regulations-list">
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Participants must register before the event.</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>All participants must check in at the starting point on December 6th, 2025.</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Each participant must visit all required checkpoints for their category.</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Checkpoints must be visited during their operational hours.</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>Participants must finish the march within the designated time limit.</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>
                      <span>All participants must respect private property and follow Swiss traffic laws.</span>
                    </li>
                  </ul>
                </div>

                <div className="regulations-section">
                  <h3>Category-Specific Requirements</h3>

                  <div className="category-regulation">
                    <h4>Category A - Military/Uniformed</h4>
                    <ul>
                      <li>Must wear official uniform of their service</li>
                      <li>Required to carry standard equipment as specified</li>
                      <li>Must complete minimum 40km distance</li>
                      <li>Teams must stay together throughout the march</li>
                    </ul>
                  </div>

                  <div className="category-regulation">
                    <h4>Category B - Youth & Sport (under 20)</h4>
                    <ul>
                      <li>Participants under 16 must be accompanied by an adult</li>
                      <li>Must complete minimum 20km distance</li>
                      <li>Recommended to travel in groups of at least 2</li>
                      <li>Must carry sufficient water and supplies</li>
                    </ul>
                  </div>

                  <div className="category-regulation">
                    <h4>Category C - Civilian</h4>
                    <ul>
                      <li>Must complete minimum 30km distance</li>
                      <li>Must check in at all required control points</li>
                      <li>Teams register together and finish together</li>
                      <li>Proper hiking equipment recommended</li>
                    </ul>
                  </div>
                </div>

                <div className="regulations-section">
                  <h3>Equipment Requirements</h3>
                  <div className="equipment-list">
                    <div className="equipment-category">
                      <h4>Essential Items for All Participants</h4>
                      <ul>
                        <li>Comfortable walking/hiking shoes</li>
                        <li>Weather-appropriate clothing (layers recommended)</li>
                        <li>Waterproof jacket</li>
                        <li>Personal identification</li>
                        <li>Water bottle or hydration system</li>
                        <li>High-energy snacks</li>
                        <li>Basic first aid kit</li>
                        <li>Mobile phone (fully charged)</li>
                      </ul>
                    </div>

                    <div className="equipment-category">
                      <h4>Recommended Additional Items</h4>
                      <ul>
                        <li>Map of the region</li>
                        <li>Compass or GPS device</li>
                        <li>Small backpack</li>
                        <li>Sunscreen and hat</li>
                        <li>Walking poles</li>
                        <li>Extra socks</li>
                        <li>Blister treatment supplies</li>
                        <li>Flashlight or headlamp</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="safety-notice">
                  <h3>Safety Information</h3>
                  <p>
                    The safety of all participants is our highest priority. Please note the following safety guidelines:
                  </p>
                  <ul>
                    <li>Medical support will be available at checkpoints and through emergency services.</li>
                    <li>In case of emergency, call the event emergency number or 112 for Swiss emergency services.</li>
                    <li>If you are unable to complete the march, inform the nearest checkpoint staff.</li>
                    <li>Check weather forecasts before the event and dress accordingly.</li>
                    <li>Stay hydrated throughout the march.</li>
                    <li>Respect nature and wildlife encountered during the march.</li>
                  </ul>
                </div>

                <div className="download-button">
                  <a href="#" className="btn btn-primary">
                    <i className="fas fa-download"></i> Download Complete Regulations (Coming Soon)
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
                <h2>Frequently Asked Questions</h2>

                <div className="faq-list">
                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>What makes the Bernese Distance March different from other marches?</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        Unlike traditional marches with fixed routes, the Bernese Distance March allows participants to choose their own path between checkpoints. This freedom to design your own route makes each participant's experience unique and personal.
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>How do I register for the march?</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        You can register online through our <Link to="/registration">Registration Page</Link>. Registration will remain open until November 15, 2025, but we recommend registering early to secure your spot.
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>What is the registration fee?</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        The registration fee is CHF 25.00 for adults and CHF 20.00 for juniors under 20 years of age. Children under 7 can participate for free. Payment is made in cash (CHF only) at the event. No credit cards or checks are accepted.
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>What are the different categories?</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        We have three main categories:
                      </p>
                      <ul>
                        <li><strong>Category A:</strong> For uniformed participants (military, police, etc.)</li>
                        <li><strong>Category B:</strong> For youth and sport participants under 20 years old</li>
                        <li><strong>Category C:</strong> For civilian participants</li>
                      </ul>
                      <p>
                        Within Categories A and C, there are also group options for those who wish to march together.
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>How far will I need to walk?</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        The distance depends on your category and the route you choose:
                      </p>
                      <ul>
                        <li>Category A (Military): Approximately 40km</li>
                        <li>Category B (Youth): Approximately 20km</li>
                        <li>Category C (Civilian): Approximately 30km</li>
                      </ul>
                      <p>
                        The final distance scheme for 2025 will be published closer to the event date.
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>Do I need special equipment?</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        You should have good walking shoes, appropriate clothing for December weather in Switzerland, water, snacks, and a small backpack. Category A participants must wear their official uniforms. A detailed equipment list is available in the Regulations tab.
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>How do I plan my route?</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        Once the official distance scheme is published, you'll be able to see all checkpoints. You can then decide which checkpoints to visit and in what order, based on your category requirements. You can use online mapping tools or traditional maps to plan your route between checkpoints.
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>What happens if I can't complete the march?</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        If you are unable to complete the march, please inform the nearest checkpoint staff. They will arrange transport back to the start/finish area if needed. Safety is our priority, and there is no shame in not completing the full distance.
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>Can international participants join?</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        Absolutely! We welcome participants from around the world. The Bernese Distance March has a long tradition of international participation, especially from military personnel from various countries.
                      </p>
                    </div>
                  </div>

                  <div className="faq-item">
                    <div className="faq-question">
                      <h3>How do I get to the starting point?</h3>
                    </div>
                    <div className="faq-answer">
                      <p>
                        The 2025 march will start in Ins, Canton of Bern. Detailed directions and transportation options will be provided closer to the event date. Ins is accessible by public transportation (train) from major Swiss cities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="contact-info">
                  <h3>Still Have Questions?</h3>
                  <p>
                    Contact the organizing committee at <a href="mailto:kommando@bernerdm.ch">kommando@bernerdm.ch</a> or call +41 (0) 79 153 28 87.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <div className="cta-banner">
        <div className="container">
          <h2>Ready to Join the 67th Bernese Distance March?</h2>
          <p>Register today and be part of this unique Swiss tradition!</p>
          <Link to="/registration" className="btn btn-large">Register Now</Link>
        </div>
      </div>
    </div>
  );
};

export default CurrentMarch;