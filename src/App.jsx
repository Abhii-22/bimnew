import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import CourseDetail from './pages/CourseDetail';
import PartnersSection from './components/PartnersSection';
import OurAlumnies from './components/ouralumnies';
import Ourinstitutionalpartners from './components/Ourinstitutionalpartners';



import './App.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<><Home /><PartnersSection /><OurAlumnies /><Ourinstitutionalpartners /><Feedback /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:serviceId" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
