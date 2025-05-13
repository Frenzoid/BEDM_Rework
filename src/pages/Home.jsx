import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';

const Home = () => {
  const { t } = useTranslation();

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
            {t('pages.home.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('pages.home.hero.subtitle')}
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/registration" className="btn btn-primary">
              {t('common.buttons.registerNow')}
            </Link>
            <Link to="/current-march" className="btn btn-secondary">
              {t('common.buttons.learnMore')}
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
            <h3>{t('pages.home.eventInfo.edition.title')}</h3>
            <p>
              {t('pages.home.eventInfo.edition.description')}
            </p>
          </div>

          <div className="event-card">
            <div className="event-icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3>{t('pages.home.eventInfo.route.title')}</h3>
            <p>
              {t('pages.home.eventInfo.route.description')}
            </p>
          </div>

          <div className="event-card">
            <div className="event-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>{t('pages.home.eventInfo.welcome.title')}</h3>
            <p>
              {t('pages.home.eventInfo.welcome.description')}
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
              <h2>{t('pages.home.about.title')}</h2>
              <p>
                {t('pages.home.about.paragraph1')}
              </p>
              <p>
                {t('pages.home.about.paragraph2')}
              </p>
              <Link to="/history" className="btn btn-outline">
                {t('pages.home.about.discoverHistory')}
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
          <h2>{t('pages.home.testimonials.title')}</h2>
          <div className="testimonial-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  {t('pages.home.testimonials.testimonial1.quote')}
                </p>
                <div className="testimonial-author">
                  {/* Using placeholder for testimonial author image */}
                  <div className="author-avatar">HS</div>
                  <div className="author-info">
                    <h4>{t('pages.home.testimonials.testimonial1.author')}</h4>
                    <p>{t('pages.home.testimonials.testimonial1.role')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>
                  {t('pages.home.testimonials.testimonial2.quote')}
                </p>
                <div className="testimonial-author">
                  {/* Using placeholder for testimonial author image */}
                  <div className="author-avatar">MW</div>
                  <div className="author-info">
                    <h4>{t('pages.home.testimonials.testimonial2.author')}</h4>
                    <p>{t('pages.home.testimonials.testimonial2.role')}</p>
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
            <h2>{t('pages.home.cta.title')}</h2>
            <p>
              {t('pages.home.cta.subtitle')}
            </p>
            <Link to="/registration" className="btn btn-large">
              {t('pages.home.cta.button')}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="featured-posts">
        <div className="container">
          <h2>{t('pages.home.featuredPosts.title')}</h2>
          <div className="post-grid">
            <div className="post-card">
              <div className="post-image">
                {/* Using themed post icon instead of image */}
                <div className="post-icon"><i className="fas fa-route"></i></div>
              </div>
              <div className="post-content">
                <h3>{t('pages.home.featuredPosts.post1.title')}</h3>
                <p>{t('pages.home.featuredPosts.post1.description')}</p>
                <Link to="/current-march" className="read-more">
                  {t('pages.home.featuredPosts.post1.readMore')} <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="post-card">
              <div className="post-image">
                {/* Using themed post icon instead of image */}
                <div className="post-icon"><i className="fas fa-medal"></i></div>
              </div>
              <div className="post-content">
                <h3>{t('pages.home.featuredPosts.post2.title')}</h3>
                <p>{t('pages.home.featuredPosts.post2.description')}</p>
                <Link to="/leaderboards" className="read-more">
                  {t('pages.home.featuredPosts.post2.readMore')} <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="post-card">
              <div className="post-image">
                {/* Using themed post icon instead of image */}
                <div className="post-icon"><i className="fas fa-history"></i></div>
              </div>
              <div className="post-content">
                <h3>{t('pages.home.featuredPosts.post3.title')}</h3>
                <p>{t('pages.home.featuredPosts.post3.description')}</p>
                <Link to="/history" className="read-more">
                  {t('pages.home.featuredPosts.post3.readMore')} <i className="fas fa-arrow-right"></i>
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