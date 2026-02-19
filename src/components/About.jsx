import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [text, setText] = useState('');
  const sectionRef = useRef(null);
  const fullText =
    'Pioneering the future of construction with innovative design and Building Information Modeling (BIM) expertise.';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = sectionRef.current.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach((el) => observer.observe(el));

    // Typewriter effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        const cursor = document.querySelector('.cursor');
        if (cursor) cursor.style.animation = 'none';
      }
    }, 50);

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-wrapper">
        {/* ========== SECTION 1: HEADER INTRO ========== */}
        <div className="about-hero animate-on-scroll">
          <div className="about-hero-content">
            <h2 className="about-heading">
              Unlock Your Potential with <span>BIM Courses</span>
            </h2>
            <p className="about-intro-animated">
              {text}
              <span className="cursor"></span>
            </p>
          </div>
          <div className="about-hero-image">
            <img src="/images/about.jpg" alt="Students learning BIM" />
          </div>
        </div>

        {/* ========== SECTION 2: MAIN CONTENT ========== */}
        <div className="about-main animate-on-scroll">
          <div className="about-image">
            <img src="/images/about1.jpg" alt="Collaborative learning environment" />
          </div>
          <div className="about-description">
            <p>
              Welcome to <strong>BIM Course's learning hub</strong>. We are dedicated to empowering the next generation of architects, engineers, and construction professionals with industry-leading BIM training.
            </p>
            <p>
              Our courses are designed by experts to provide practical, hands-on knowledge. Whether you're starting your career or upskilling, we provide the tools and expertise you need to succeed in the rapidly evolving world of construction technology.
            </p>
          </div>
        </div>

        {/* ========== SECTION 3: MISSION & VISION ========== */}
        <div className="mission-vision-section">
          <div className="mission-card">
            <div className="mission-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To empower professionals and students with cutting-edge BIM skills and knowledge, transforming the construction industry through innovative education and practical training. We strive to bridge the gap between academic learning and industry requirements, creating competent BIM professionals who can drive digital transformation in the built environment.
            </p>
          </div>
          
          <div className="vision-card">
            <div className="vision-icon">🔮</div>
            <h3>Our Vision</h3>
            <p>
              To become the global leader in BIM education, shaping the future of the construction industry by nurturing talent that embraces technology, sustainability, and innovation. We envision a world where every construction project is powered by skilled BIM professionals, creating smarter, more efficient, and sustainable built environments for generations to come.
            </p>
          </div>
        </div>

        {/* ========== SECTION 4: HIGHLIGHTS & STATS ========== */}
        <div className="about-extras animate-on-scroll">
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>🎓 Expert-Led Instruction</h3>
              <p>Learn from seasoned industry professionals who bring real-world experience to the classroom.</p>
            </div>
            <div className="highlight-card">
              <h3>🛠️ Hands-On Projects</h3>
              <p>Apply your skills to practical projects that mirror the challenges of a real construction site.</p>
            </div>
            <div className="highlight-card">
              <h3>📈 Career-Focused Curriculum</h3>
              <p>Our courses are tailored to meet industry demands and help you achieve your career goals.</p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>20,000+</h3>
              <p>Students Trained</p>
            </div>
            <div className="stat-card">
              <h3>4.5</h3>
              <p>Average Rating</p>
            </div>
            <div className="stat-card">
              <h3>30+</h3>
              <p>Expert Instructors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
