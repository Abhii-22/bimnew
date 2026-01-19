import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBook, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  // Available courses
  const courses = [
    {
      id: 'bim-for-architecture',
      title: 'BIM for Architecture',
      description: 'Comprehensive training in BIM workflows for architectural design'
    },
    {
      id: 'bim-for-construction',
      title: 'BIM for Construction',
      description: 'Covers collaborative construction management, BIM standards'
    },
    {
      id: 'bim-for-infrastructure',
      title: 'BIM for Infrastructure',
      description: 'BIM methodologies for infrastructure projects including roads, bridges'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleCourseDropdown = () => {
    setIsCourseDropdownOpen(!isCourseDropdownOpen);
  };

  const handleCourseClick = (courseId) => {
    navigate(`/service/${courseId}`);
    setIsCourseDropdownOpen(false);
    closeMobileMenu();
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    
    if (location.pathname === '/') {
      // If already on home page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to home page and scroll to top
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const targetId = href.replace(/.*#/, '');

    if (targetId) {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
    closeMobileMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="main-nav">
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/images/medini.png" alt="Medini Logo" className="logo-image medini-logo" />
        </Link>
        
        
      </nav>
      
      <nav className="secondary-nav">
        <ul className={isMobileMenuOpen ? 'active' : ''}>
          <li>
            <Link to="/" onClick={handleHomeClick}>
              <FaHome className="nav-icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={handleSmoothScroll}>
              <FaInfoCircle className="nav-icon" />
              <span>About</span>
            </Link>
          </li>
          <li className="course-dropdown">
            <button className="course-dropdown-btn" onClick={toggleCourseDropdown}>
              <FaBook className="nav-icon" />
              <span>Courses</span>
              <FaChevronDown className={`dropdown-arrow ${isCourseDropdownOpen ? 'open' : ''}`} />
            </button>
            <div className={`dropdown-menu ${isCourseDropdownOpen ? 'open' : ''}`}>
              {courses.map((course) => (
                <button
                  key={course.id}
                  className="dropdown-item"
                  onClick={() => handleCourseClick(course.id)}
                >
                  {course.title}
                </button>
              ))}
            </div>
          </li>
          <li>
            <Link to="/#contact" onClick={handleSmoothScroll}>
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
