import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHome, FiBookOpen, FiMail, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import MediniIcon from '../assets/Image/Medini_logo.png';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

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

  const navItems = [
    { path: "/", label: "Home", icon: <FiHome /> },
    { path: "/about", label: "About", icon: <FiBookOpen /> },
  ];

  const contactItem = { path: "/contact", label: "Contact", icon: <FiMail /> };

  useEffect(() => {
    let timeoutId = null;
    const controlVisibility = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (typeof window !== "undefined") {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setShowBottomNav(false);
          } else {
            setShowBottomNav(true);
          }
          setIsScrolled(currentScrollY > 10);
          setLastScrollY(currentScrollY);
        }
      }, 10);
    };
    window.addEventListener("scroll", controlVisibility, { passive: true });
    return () => {
      window.removeEventListener("scroll", controlVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCoursesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCoursesDropdownOpen(false);
    setIsMobileCoursesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsCoursesDropdownOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isCoursesActive = () => location.pathname.startsWith('/service');

  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
  const toggleCoursesDropdown = useCallback(() => setIsCoursesDropdownOpen(prev => !prev), []);
  const toggleMobileCourses = useCallback(() => setIsMobileCoursesOpen(prev => !prev), []);

  const handleCourseClick = (courseId) => {
    navigate(`/service/${courseId}`);
    setIsCoursesDropdownOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileCoursesOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

        .h1-nav-item {
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .h1-nav-item a,
        .h1-nav-item .h1-nav-trigger {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 400;
          padding: 4px 0;
          position: relative;
          transition: opacity 0.2s ease;
          letter-spacing: 0.3px;
          cursor: pointer;
          background: none;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .h1-nav-item a::after,
        .h1-nav-item .h1-nav-trigger::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: white;
          transition: width 0.25s ease;
          border-radius: 2px;
        }

        .h1-nav-item a:hover::after,
        .h1-nav-item .h1-nav-trigger:hover::after {
          width: 100%;
        }

        .h1-nav-item a:hover,
        .h1-nav-item .h1-nav-trigger:hover {
          color: white;
          opacity: 0.85;
        }

        .h1-nav-item a.h1-active::after,
        .h1-nav-item .h1-nav-trigger.h1-active::after {
          width: 100%;
        }

        .h1-courses-chevron {
          transition: transform 0.25s ease;
        }

        .h1-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          transform: none;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
          min-width: 200px;
          max-width: 260px;
          padding: 4px 0;
          z-index: 1001;
          animation: dropdownFadeIn 0.2s ease;
        }

        .h1-dropdown-inner {
          max-height: 400px;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .h1-dropdown button {
          display: block;
          width: 100%;
          padding: 10px 16px;
          font-size: 1rem;
          color: #374151;
          text-decoration: none;
          transition: background 0.15s ease;
          font-weight: 400;
          letter-spacing: 0;
          white-space: nowrap;
          text-align: left;
          background: none;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
        }

        .h1-dropdown button:last-child {
          border-bottom: none;
        }

        .h1-dropdown button:hover {
          background: #f3f4f6;
          color: #111827;
        }

        .h1-dropdown button.h1-active-course {
          background: #e5e7eb;
          color: #111827;
          font-weight: 500;
        }

        .h1-dropdown-inner::-webkit-scrollbar { width: 5px; }
        .h1-dropdown-inner::-webkit-scrollbar-track { background: rgba(0,0,0,0.04); border-radius: 10px; }
        .h1-dropdown-inner::-webkit-scrollbar-thumb { background: rgba(64,109,110,0.3); border-radius: 10px; }
        .h1-dropdown-inner::-webkit-scrollbar-thumb:hover { background: rgba(64,109,110,0.5); }

        .mobile-menu::-webkit-scrollbar { width: 5px; }
        .mobile-menu::-webkit-scrollbar-track { background: rgba(0,0,0,0.04); border-radius: 10px; }
        .mobile-menu::-webkit-scrollbar-thumb { background: rgba(64,109,110,0.3); border-radius: 10px; }
        .mobile-menu::-webkit-scrollbar-thumb:hover { background: rgba(64,109,110,0.5); }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes dropdownFadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

        .h1-fixed-logo {
          position: fixed;
          top: 14px;
          left: 24px;
          z-index: 1002;
          display: flex;
          align-items: center;
        }

        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 768px) and (min-width: 481px) {
          .desktop-only { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .h1-fixed-logo { left: 16px; }
          .medini-logo { width: 100px !important; height: 38px !important; }
        }
        @media (max-width: 480px) {
          .desktop-only { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .desktop-spacer { flex: 0.3 !important; }
          .h1-fixed-logo { left: 12px; top: 12px; }
          .medini-logo { width: 85px !important; height: 32px !important; }
        }
        @media (max-width: 360px) {
          .medini-logo { width: 75px !important; height: 29px !important; }
        }
        @media (min-width: 1400px) {
          .medini-logo { width: 130px !important; height: 50px !important; }
        }
        @media (min-width: 1200px) and (max-width: 1399px) {
          .medini-logo { width: 120px !important; height: 46px !important; }
        }
        @media (min-width: 992px) and (max-width: 1199px) {
          .medini-logo { width: 110px !important; height: 42px !important; }
        }
      `}</style>

      {/* Medini Logo — pinned to top-left (position independent of nav layout), shrinks on scroll so it never overflows the navbar */}
      <div className="h1-fixed-logo" style={{ top: isScrolled ? "5px" : "14px", transition: "top 0.3s ease" }}>
        <Link
          to="/"
          onClick={handleHomeClick}
          style={{ display: "flex", alignItems: "center", textDecoration: "none", transition: "all 0.3s ease", filter: "drop-shadow(0 2px 8px rgba(255,255,255,0.15))" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px) scale(1.05)"; e.currentTarget.style.filter = "drop-shadow(0 4px 12px rgba(255,255,255,0.35))"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.filter = "drop-shadow(0 2px 8px rgba(255,255,255,0.15))"; }}
          aria-label="Medini Home"
        >
          <img src={MediniIcon} alt="Medini Logo" className="medini-logo" style={{ width: isScrolled ? "100px" : "130px", height: isScrolled ? "38px" : "50px", objectFit: "contain", transition: "all 0.3s ease" }} />
        </Link>
      </div>

      {/* Top Navigation Bar */}
      <nav style={{
        background: "#23414b",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.35)" : "0 2px 10px rgba(0,0,0,0.2)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        transition: "box-shadow 0.3s ease"
      }}>
        <div style={{
          maxWidth: "100%", margin: "0 auto",
          padding: isScrolled ? "18px 24px" : "24px 24px",
          display: "flex", justifyContent: "flex-end", alignItems: "center",
          transition: "padding 0.3s ease"
        }}>

          {/* Right: Mobile btn only */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", minWidth: "fit-content", flex: "0 0 auto" }}>
            <button
              onClick={toggleMobileMenu}
              style={{ display: "none", padding: "12px", background: isMobileMenuOpen ? "rgba(255,255,255,0.15)" : "transparent", border: "none", cursor: "pointer", borderRadius: "8px", transition: "all 0.3s ease", position: "relative", width: "32px", height: "28px" }}
              className="mobile-menu-btn"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = isMobileMenuOpen ? "rgba(255,255,255,0.15)" : "transparent"; }}
            >
              <span style={{
                position: "absolute",
                width: "24px",
                height: "2px",
                background: "white",
                borderRadius: "2px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isMobileMenuOpen ? "rotate(45deg) translate(6px, 6px)" : "translateY(0)",
                top: isMobileMenuOpen ? "13px" : "8px",
                left: "4px"
              }}></span>
              <span style={{
                position: "absolute",
                width: "24px",
                height: "2px",
                background: "white",
                borderRadius: "2px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                opacity: isMobileMenuOpen ? "0" : "1",
                transform: isMobileMenuOpen ? "translateX(10px)" : "translateX(0)",
                top: "13px",
                left: "4px"
              }}></span>
              <span style={{
                position: "absolute",
                width: "24px",
                height: "2px",
                background: "white",
                borderRadius: "2px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isMobileMenuOpen ? "rotate(-45deg) translate(6px, -6px)" : "translateY(0)",
                top: isMobileMenuOpen ? "13px" : "18px",
                left: "4px"
              }}></span>
            </button>
          </div>
        </div>
      </nav>

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
              <Link
                to={contactItem.path}
                onClick={toggleMobileMenu}
                className={isActive(contactItem.path) ? "h1-active" : ""}
                aria-current={isActive(contactItem.path) ? "page" : undefined}
              >
                {contactItem.label}
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)", animation: "fadeIn 0.3s ease", zIndex: 999 }}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="mobile-menu"
        style={{
          position: "fixed",
          top: isScrolled ? "62px" : "73px",
          left: 0, right: 0,
          background: "#fff",
          borderTop: "1px solid rgba(0,0,0,0.08)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          padding: isMobileMenuOpen ? "16px" : "0 16px",
          maxHeight: isMobileMenuOpen ? "calc(100vh - 73px)" : "0",
          overflow: "auto",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: isMobileMenuOpen ? "0 16px 48px rgba(0,0,0,0.15)" : "none",
          opacity: isMobileMenuOpen ? 1 : 0,
          zIndex: 1000
        }}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <ul style={{ display: "flex", flexDirection: "column", gap: "8px", listStyle: "none", margin: 0, padding: 0 }}>
          {/* Nav items without Contact */}
          {navItems.map((item, index) => (
            <li key={item.path} style={{ animation: isMobileMenuOpen ? `slideIn 0.4s ease ${index * 0.08}s both` : "none" }}>
              <Link
                to={item.path}
                onClick={item.path === "/" ? handleHomeClick : toggleMobileMenu}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "13px 16px", borderRadius: "8px", textDecoration: "none",
                  fontSize: "1rem", fontWeight: "500",
                  color: isActive(item.path) ? "#23414b" : "#374151",
                  background: isActive(item.path) ? "rgba(35,65,75,0.08)" : "transparent",
                  transition: "all 0.25s ease",
                  border: isActive(item.path) ? "1px solid rgba(35,65,75,0.15)" : "1px solid transparent",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.5px"
                }}
                onMouseEnter={(e) => { if (!isActive(item.path)) { e.currentTarget.style.background = "rgba(64,109,110,0.08)"; e.currentTarget.style.color = "#23414b"; } }}
                onMouseLeave={(e) => { if (!isActive(item.path)) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; } }}
              >
                <span style={{ fontSize: "17px", color: "#406d6e" }}>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}

          {/* Mobile Services */}
          <li style={{ animation: isMobileMenuOpen ? `slideIn 0.4s ease ${navItems.length * 0.08}s both` : "none" }}>
            <button
              onClick={toggleMobileCourses}
              style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px",
                padding: "13px 16px", borderRadius: "8px", fontSize: "1rem", fontWeight: "500",
                color: isCoursesActive() ? "#23414b" : "#374151",
                background: isCoursesActive() ? "rgba(35,65,75,0.08)" : "transparent",
                transition: "all 0.25s ease",
                border: isCoursesActive() ? "1px solid rgba(35,65,75,0.15)" : "1px solid transparent",
                cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.5px"
              }}
              onMouseEnter={(e) => { if (!isCoursesActive()) { e.currentTarget.style.background = "rgba(64,109,110,0.08)"; e.currentTarget.style.color = "#23414b"; } }}
              onMouseLeave={(e) => { if (!isCoursesActive()) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; } }}
              aria-expanded={isMobileCoursesOpen}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <FiBookOpen style={{ fontSize: "17px", color: "#406d6e" }} />
                Services
              </div>
              <FiChevronDown style={{ fontSize: "17px", color: "#406d6e", transform: isMobileCoursesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }} />
            </button>

            {isMobileCoursesOpen && (
              <div style={{ marginTop: "6px", paddingLeft: "12px" }}>
                {courses.map((course, index) => (
                  <button
                    key={course.id}
                    onClick={() => handleCourseClick(course.id)}
                    style={{
                      display: "block", width: "100%", padding: "10px 16px",
                      color: isActive(`/service/${course.id}`) ? "#23414b" : "#4b5563",
                      textDecoration: "none", borderRadius: "6px",
                      fontSize: "1rem", fontWeight: "400",
                      background: isActive(`/service/${course.id}`) ? "rgba(64,109,110,0.1)" : "transparent",
                      transition: "all 0.2s ease", marginBottom: "2px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.5px",
                      animation: `slideIn 0.3s ease ${index * 0.05}s both`,
                      borderLeft: "2px solid rgba(64,109,110,0.25)",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => { if (!isActive(`/service/${course.id}`)) { e.currentTarget.style.background = "rgba(64,109,110,0.08)"; e.currentTarget.style.color = "#23414b"; e.currentTarget.style.borderLeft = "2px solid #406d6e"; } }}
                    onMouseLeave={(e) => { if (!isActive(`/service/${course.id}`)) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#4b5563"; e.currentTarget.style.borderLeft = "2px solid rgba(64,109,110,0.25)"; } }}
                  >
                    {course.title}
                  </button>
                ))}
              </div>
            )}
          </li>

          {/* Contact — always last in mobile too */}
          <li style={{ animation: isMobileMenuOpen ? `slideIn 0.4s ease ${(navItems.length + 1) * 0.08}s both` : "none" }}>
            <Link
              to={contactItem.path}
              onClick={toggleMobileMenu}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "13px 16px", borderRadius: "8px", textDecoration: "none",
                fontSize: "1rem", fontWeight: "500",
                color: isActive(contactItem.path) ? "#23414b" : "#374151",
                background: isActive(contactItem.path) ? "rgba(35,65,75,0.08)" : "transparent",
                transition: "all 0.25s ease",
                border: isActive(contactItem.path) ? "1px solid rgba(35,65,75,0.15)" : "1px solid transparent",
                fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.5px"
              }}
              onMouseEnter={(e) => { if (!isActive(contactItem.path)) { e.currentTarget.style.background = "rgba(64,109,110,0.08)"; e.currentTarget.style.color = "#23414b"; } }}
              onMouseLeave={(e) => { if (!isActive(contactItem.path)) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; } }}
            >
              <span style={{ fontSize: "17px", color: "#406d6e" }}>{contactItem.icon}</span>
              {contactItem.label}
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
}

export default Header;
