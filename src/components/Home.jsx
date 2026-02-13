import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const slides = [
  {
    src: '/images/arch.jpg',
    serviceId: 'bim-for-architecture',
    text: {
      title: 'BIM for Architecture',
      description:
        'Comprehensive training in BIM workflows for architectural design, focusing on creating intelligent 3D models for better design visualization and coordination.'
    }
  },
  {
    src: '/images/constr.webp',
    serviceId: 'bim-for-construction',
    text: {
      title: 'BIM for Construction',
      description:
        'Covers collaborative construction management, BIM standards, and on-site workflow optimization.'
    }
  },
  {
    src: '/images/infra.jpg',
    serviceId: 'bim-for-infrastructure',
    text: {
      title: 'BIM for Infrastructure',
      description:
        'Comprehensive training in BIM methodologies for infrastructure projects including roads, bridges, and utilities, with focus on 4D scheduling and clash detection.'
    }
  },
  
  
];

const Home = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [animation, setAnimation] = useState('fade-in');
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation('fade-out');
      setTimeout(() => {
        setCurrentSlideIndex(prev => (prev + 1) % slides.length);
        setAnimation('fade-in');
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const exploreService = () => {
    const currentSlide = slides[currentSlideIndex];
    navigate(`/service/${currentSlide.serviceId}`);
  };

  const currentSlide = slides[currentSlideIndex];

  return (
    <div id="home">
      <div
        className="home-slider"
        style={{ backgroundImage: `url(${currentSlide.src})` }}
      >
        <div className={`slider-text ${animation}`}>
          <h1>{currentSlide.text.title}</h1>
          <p>{currentSlide.text.description}</p>
          <button className="explore-btn" onClick={exploreService}>Explore Courses →</button>
        </div>
        <div className="slider-logos">
          <img src="/images/Medini logo White-1[1] (1).png" alt="Medini Logo" className="logo-item" />
          <img src="/images/medini.png" alt="Medini Logo" className="logo-item" />
          <img src="/images/Credly White.png" alt="BIM Construct Logo" className="logo-item" />
        </div>
      </div>
    </div>
  );
};

export default Home;
