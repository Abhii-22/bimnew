import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Course from './components/Course';
import CourseDetail from './pages/CourseDetail';



import './App.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<><Home /><About /><Course /><Feedback /><Contact /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:serviceId" element={<CourseDetail />} />
      </Routes>
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
