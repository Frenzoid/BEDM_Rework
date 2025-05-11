// App.jsx - Main application component
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './i18n';
import './styles/App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Registration from './pages/Registration';
import CurrentMarch from './pages/CurrentMarch';
import Leaderboards from './pages/Leaderboards';
import Statistics from './pages/Statistics';
import Contact from './pages/Contact';
import History from './pages/History';
import Gallery from './pages/Gallery';
import Loader from './components/Loader';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Imprint from './pages/Imprint';

// Create bear track on mouse move
const createBearTrack = (e) => {
  // Only create bear tracks occasionally for performance
  if (Math.random() > 0.97) {
    const bearTrack = document.createElement('div');
    bearTrack.className = 'bear-track';
    bearTrack.style.left = `${e.clientX - 15}px`;
    bearTrack.style.top = `${e.clientY - 20}px`;

    // Random rotation for more natural look
    bearTrack.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

    document.body.appendChild(bearTrack);

    // Remove track after animation completes
    setTimeout(() => {
      if (bearTrack && bearTrack.parentNode) {
        bearTrack.parentNode.removeChild(bearTrack);
      }
    }, 2000);
  }
};

function App() {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Add bear track event listener
    window.addEventListener('mousemove', createBearTrack);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', createBearTrack);
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <AnimatePresence>
          {loading ? (
            <Loader />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="app-content"
            >
              <Header />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/current-march" element={<CurrentMarch />} />
                  <Route path="/leaderboards" element={<Leaderboards />} />
                  <Route path="/statistics" element={<Statistics />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/imprint" element={<Imprint />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;