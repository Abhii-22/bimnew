import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaArrowRight } from 'react-icons/fa';
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

  // Right-side utility links
  // const utilityLinks = [
  //   { path: '/career', label: 'Career' },
  //   { path: '/internship', label: 'Internship' },
  //   { path: '/competitions', label: 'Competitions' },
  //   { path: '/placements', label: 'Placements' }
  // ];

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

  const isActive = (path) => location.pathname === path;

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
          <img src="/images/MEDINITECHNOLOGIESWHITE.png" alt="Medini Logo" className="logo-image medini-logo" />
        </Link>

        {/* <Link to="/get-started" className="get-started-btn" onClick={closeMobileMenu}>
          <span>Get Started</span>
          <FaArrowRight className="get-started-icon" />
        </Link> */}
      </nav>

<<<<<<< HEAD
      <nav className="secondary-nav">
        <div className={`nav-links-wrapper ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links-left">
            <li>
=======
      {/* Bottom Navigation Bar */}
      <div
        className="desktop-only"
        style={{
          background: "#406d6e",
          boxShadow: showBottomNav ? "0 4px 12px rgba(0,0,0,0.2)" : "none",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: showBottomNav ? "translateY(0)" : "translateY(-100%)",
          opacity: showBottomNav ? 1 : 0,
          pointerEvents: showBottomNav ? "auto" : "none"
        }}
      >
        <div style={{ maxWidth: "100%", margin: "0 auto", padding: `0 0 0 ${isScrolled ? "124px" : "154px"}`, transition: "padding-left 0.3s ease" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "24px", padding: "10px 0" }}>

            {/* Regular nav links (no Contact) */}
            {navItems.map((item) => (
              <div key={item.path} className="h1-nav-item">
                <Link
                  to={item.path}
                  onClick={item.path === "/" ? handleHomeClick : toggleMobileMenu}
                  className={isActive(item.path) ? "h1-active" : ""}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </div>
            ))}

            {/* Services Dropdown */}
            <div className="h1-nav-item" style={{ position: "relative" }} ref={dropdownRef}>
              <button
                onClick={toggleCoursesDropdown}
                className={`h1-nav-trigger${isCoursesActive() || isCoursesDropdownOpen ? " h1-active" : ""}`}
                aria-expanded={isCoursesDropdownOpen}
                aria-haspopup="true"
              >
<<<<<<< HEAD
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActive('/about') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <span>About</span>
              </Link>
            </li>
            <li className="course-dropdown">
              <button className="course-dropdown-btn" onClick={toggleCourseDropdown}>
                <span>Courses</span>  
                <FaChevronDown className={`dropdown-arrow ${isCourseDropdownOpen ? 'open' : ''}`} />
=======
                Services
                <FiChevronDown
                  className="h1-courses-chevron"
                  style={{
                    fontSize: "13px",
                    transform: isCoursesDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease"
                  }}
                />
>>>>>>> eed56e03231fc404d7d5a45aba2819701721b003
              </button>

              {isCoursesDropdownOpen && (
                <div className="h1-dropdown" role="menu">
                  <div className="h1-dropdown-inner">
                    {courses.map((course, index) => (
                      <button
                        key={course.id}
                        onClick={() => handleCourseClick(course.id)}
                        role="menuitem"
                        className={isActive(`/service/${course.id}`) ? "h1-active-course" : ""}
                        style={{ animationDelay: `${index * 0.03}s` }}
                      >
                        {course.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact — always last */}
            <div className="h1-nav-item">
>>>>>>> 743d23645d094edf5a0bc85febfb5cde6c85d860
              <Link
                to="/"
                className={isActive('/') ? 'active' : ''}
                onClick={handleHomeClick}
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isActive('/about') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <span>About</span>
              </Link>
            </li>
            <li className="course-dropdown">
              <button className="course-dropdown-btn" onClick={toggleCourseDropdown}>
                <span>Services</span>
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
            {/* <li>
              <Link
                to="/awards"
                className={isActive('/awards') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <span>Awards</span>
              </Link>
            </li> */}
            <li>
              <Link
                to="/contact"
                className={isActive('/contact') ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                <span>Contact</span>
              </Link>
            </li>
          </ul>

          {/* <ul className="nav-links-right">
            {utilityLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={isActive(link.path) ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;

     