import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/CurrentMarch.css';

const CurrentMarch = () => {
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
              className={`tab ${activeTab === 'how-it-works' ? 'active' : ''}`}
              onClick={() => handleTabChange('how-it-works')}
            >
              How It Works
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
                    <div className="icon p-4">
                      <i className="fas fa-calendar-day"></i>
                    </div>
                    <h3>Date</h3>
                    <p>December 6th, 2025</p>
                  </div>
                  <div className="info-card">
                    <div className="icon p-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h3>Location</h3>
                    <p>Ins, Canton of Bern, Switzerland</p>
                  </div>
                  <div className="info-card">
                    <div className="icon p-4">
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
                    <a href="#how-it-works" className="btn btn-secondary" onClick={(e) => {
                      e.preventDefault();
                      handleTabChange('how-it-works');
                    }}>How It Works</a>
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

            {activeTab === 'how-it-works' && (
              <motion.div
                className="distance-scheme-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2>How Does the March Work?</h2>

                <div className="overview-description">
                  <p>
                    The Bernese Distance March is distinguished by a unique approach to course design that sets it apart from many other marching events. While most marches require participants to follow a fixed route and register the distance in advance, participants of the Bernese Distance March have the freedom to choose their route individually. They orient themselves according to a given distance scheme and can decide how far they wish to go. This flexible structure not only presents a physical challenge but also adds an extra task in navigation and orientation in the terrain.
                  </p>
                </div>

                <div className="scheme-info">
                  <h3>Example of the Distance Scheme</h3>
                  <div className="featured-image">
                    <img
                      src="https://www.bernerdm.ch/wp-content/uploads/2025/02/Muster_Distanzschema.png"
                    />
                  </div>
                </div>

                <div className="regulations-section mt-4">
                  <h3>Here's an example:</h3>

                  <h4>Before the March:</h4>
                  <div className="overview-description">
                    <p>
                      All participants gather at the march center before the starting time and receive their march card. If you have registered for shooting: This will take place before the march, so go directly to the shooting range or profit from our shuttle service, departing from the march center.
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
                      Once you've received your march card, you'll choose a route (of at least 10 km). The numbers in the black boxes indicate the number of kilometers you will walk to reach the desired checkpoint. For example, if you want to walk from the start to checkpoints C, D, and then back, according to the scheme, that would be 6 km + 5 km + 7 km = 18 km.
                    </p>
                  </div>

                  <div className="featured-image">
                    <img
                      src="https://www.bernerdm.ch/wp-content/uploads/2025/02/grafik-2-1024x566.png"
                    />
                  </div>
                </div>

                <div className="regulations-section mt-4">
                  <h4>During the March:</h4>
                  <div className="overview-description">
                    <p>
                      From 12:00 PM, the commander will start the march, and you can begin! The route is signposted, and members of the BEDM team will also be on the route to assist with any questions or emergencies.
                    </p>
                    <p>
                      Once you reach your first checkpoint, you can have the BEDM team member log your distance. The checkpoints are strategically located in inns that are both easily accessible and easy to find. During a break, you can relax here and be served drinks and small snacks by the friendly staff before continuing on the march.
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
                  <h4>After the March:</h4>
                  <div className="overview-description">
                    <p>
                      After completing your march, return to the march center and hand in your march card to the BEDM team. Upon request, you will receive a certificate, a shooting badge, and a medal. Now you can relax and refresh at the march center—our guesthouse is ready to welcome you.
                    </p>
                    <p>
                      At 11:00 PM, the rankings for the various categories will be announced—at which point the march day officially ends.
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
                    The <Link to="/leaderboards">rankings</Link> will be uploaded to the website in the weeks following the march.
                  </p>
                  <p>
                    For more information regarding the shooting program or the march itself, feel free to take a look at our regulations (<Link to="/download">shooting regulations, march regulations</Link>).
                  </p>
                  <p className="text-center">
                    <strong>"Have fun with the march!"</strong>
                  </p>
                </div>

                <div className="march-images">
                  <div className="featured-image">
                    <img
                      src="https://www.bernerdm.ch/wp-content/uploads/2025/02/hiking-bears.jpg"
                    />
                  </div>
                  <div className="featured-image">
                    <img
                      src="https://www.bernerdm.ch/wp-content/uploads/2025/02/image-1024x680.png"
                    />
                  </div>
                </div>

                <div className="overview-description">
                  <p className="text-center">
                    <strong>Bernese Distance March 2025 – 2027: March with us to Ins!</strong>
                  </p>
                </div>

                <div className="cta-buttons">
                  <Link to="/registration" className="btn btn-primary">Register Now</Link>
                  <button onClick={() => handleTabChange('regulations')} className="btn btn-secondary">View Regulations</button>
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

                <div className="regulations-section mt-4">
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

                <div className="regulations-section mt-4">
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