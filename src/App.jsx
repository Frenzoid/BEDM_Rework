import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Registration from './pages/Registration';
import CurrentMarch from './pages/CurrentMarch';
import History from './pages/History';
import Leaderboards from './pages/Leaderboards';
import Statistics from './pages/Statistics';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Style
import './styles/App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <motion.div
        className="app-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/current-march" element={<CurrentMarch />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/history" element={<History />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </Router>
  );
}

export default App;