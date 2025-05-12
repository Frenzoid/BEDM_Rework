import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome to the Bernese Distance March
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A unique marching experience in the beautiful regions of the Canton of Bern
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/registration" className="btn btn-primary">
              Register Now
            </Link>
            <Link to="/current-march" className="btn btn-secondary">
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="event-info">
        <div className="container">
          <div className="event-card">
            <div className="event-icon">
              <i className="fas fa-calendar-alt"></i>
            </div>
            <h3>67th Edition</h3>
            <p>
              The 67th Berne distance march will take place at Ins on 6th December 2025!
            </p>
          </div>

          <div className="event-card">
            <div className="event-icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3>Design Your Route</h3>
            <p>
              Unlike other marches with fixed routes, participants can freely choose their path between given posts.
            </p>
          </div>

          <div className="event-card">
            <div className="event-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Everyone Welcome</h3>
            <p>
              Whether as an individual or a group, the march is open to everyone who wants to participate.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>About The March</h2>
              <p>
                The Bernese Distance March is a unique event that combines the beauty of the Swiss landscape with a military tradition. Unlike conventional marches, participants design their own route between checkpoints, making each experience personal and unique.
              </p>
              <p>
                For many years, people from all over the world have registered for this extraordinary event held in the lovely regions of the canton of Bern. The tradition continues to grow, welcoming both military personnel and civilians.
              </p>
              <Link to="/history" className="btn btn-outline">
                Discover Our History
              </Link>
            </motion.div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://www.bernerdm.ch/wp-content/uploads/2024/12/image-1024x680.png"
                alt="Participants in the Bernese Distance March"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2>What Participants Say</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "The Bernese Distance March was an unforgettable experience. The freedom to choose my own route while enjoying the breathtaking Swiss landscapes made it truly special."
                </p>
                <div className="testimonial-author">
                  {/* Using placeholder for testimonial author image */}
                  <div className="author-avatar">HS</div>
                  <div className="author-info">
                    <h4>Hans Schmidt</h4>
                    <p>3-time Participant</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  "As a group, we've participated for 5 years. Each time the organization is impeccable, and the challenge remains fresh because we can always try new routes. Highly recommended!"
                </p>
                <div className="testimonial-author">
                  {/* Using placeholder for testimonial author image */}
                  <div className="author-avatar">MW</div>
                  <div className="author-info">
                    <h4>Maria Weber</h4>
                    <p>Group Leader</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for the Challenge?</h2>
            <p>
              Join hundreds of participants from around the world in this extraordinary event.
            </p>
            <Link to="/registration" className="btn btn-large">
              Register for the 67th Bernese Distance March
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <div className="container">
          <h2>Latest Updates</h2>
          <div className="post-grid">
            <div className="post-card">
              <div className="post-image">
                {/* Using themed post icon instead of image */}
                <div className="post-icon"><i className="fas fa-route"></i></div>
              </div>
              <div className="post-content">
                <h3>Distance Scheme 2025</h3>
                <p>The definite distance scheme for the 2025 march is currently being prepared.</p>
                <Link to="/current-march" className="read-more">
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="post-card">
              <div className="post-image">
                {/* Using themed post icon instead of image */}
                <div className="post-icon"><i className="fas fa-medal"></i></div>
              </div>
              <div className="post-content">
                <h3>Leaderboards Updated</h3>
                <p>Check out the latest rankings from previous events!</p>
                <Link to="/leaderboards" className="read-more">
                  View Leaderboards <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="post-card">
              <div className="post-image">
                {/* Using themed post icon instead of image */}
                <div className="post-icon"><i className="fas fa-history"></i></div>
              </div>
              <div className="post-content">
                <h3>History of the March</h3>
                <p>Learn about the rich history of the Bernese Distance March.</p>
                <Link to="/history" className="read-more">
                  Explore History <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;