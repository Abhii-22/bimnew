import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaClock, FaGraduationCap, FaUsers, FaClipboardCheck, FaRocket, FaCheckCircle, FaAward, FaStar, FaLightbulb, FaTrophy } from 'react-icons/fa';
import './CourseDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    navigate('/contact');
  };

  const servicesData = {
    'bim-for-architecture': {
      title: 'BIM for Architecture: Advanced Building Information Modeling & Design',
      category: 'BIM for Architecture',
      description:
        'Comprehensive training in BIM workflows for architectural design, focusing on creating intelligent 3D models for better design visualization and coordination.',
      duration: '4 months',
      level: 'Intermediate',
      audience: 'Architects, Designers (ARCH)',
      provider: 'BIM_ARCHITECTURE',
      image: '/images/architrecture.jpeg',
      curriculum: [
        'Introduction to BIM in Architecture',
        '3D Modeling for Architectural Design',
        'Parametric Design and Documentation',
        'Energy Analysis and Performance',
        'Collaboration and Coordination'
      ],
      learningOutcomes: [
        'Create intelligent 3D architectural models',
        'Perform energy analysis and simulations',
        'Generate construction documents from BIM models',
        'Coordinate with other disciplines'
      ],
      prerequisites: [
        'Basic architectural knowledge',
        'Familiarity with CAD concepts'
      ]
    },
    'bim-for-construction': {
      title: 'BIM for Construction: Digital Project Delivery & On-Site Execution',
      category: 'BIM for Construction',
      description:
        'Covers collaborative construction management, BIM standards, and on-site workflow optimization.',
      duration: '4 months',
      level: 'Advanced',
      audience: 'Civil (CIV)',
      provider: 'BIM_CONSTRUCTION',
      image: '/images/cons.png',
      curriculum: [
        'BIM for Construction Planning',
        'Model-Based Quantity Takeoff',
        'Coordination Workflows',
        'Field BIM Implementation',
        'As-Built Documentation'
      ],
      learningOutcomes: [
        'Leverage BIM for construction management',
        'Implement collaborative BIM processes',
        'Optimize on-site workflows',
        'Document construction progress'
      ],
      prerequisites: [
        'Construction industry experience',
        'Basic BIM knowledge'
      ]
    },
    'bim-for-infrastructure': {
      title: 'BIM for Infrastructure: Engineering Civil Utilities & Smart Transportation',
      category: 'BIM for Infrastructure',
      description:
        'Comprehensive training in BIM methodologies for infrastructure projects including roads, bridges, and utilities, with focus on 4D scheduling and clash detection.',
      duration: '4 months',
      level: 'Advanced',
      audience: 'Civil Engineers, Infrastructure Specialists (CIV)',
      provider: 'BIM_INFRASTRUCTURE',
      image: '/images/in.jpg',
      curriculum: [
        'BIM Standards for Infrastructure',
        '3D Modeling for Civil Infrastructure',
        '4D Scheduling and Phasing',
        'Clash Detection and Resolution',
        'BIM for Infrastructure Lifecycle'
      ],
      learningOutcomes: [
        'Implement BIM for large-scale infrastructure projects',
        'Coordinate multidisciplinary infrastructure designs',
        'Create and manage 3D infrastructure models',
        'Develop and implement BIM execution plans'
      ],
      prerequisites: [
        'Civil engineering background',
        'Basic 3D modeling experience'
      ]
    }
  };

  const service = servicesData[serviceId] || servicesData['bim-for-architecture'];

  const getCourseContent = (courseId) => {
    switch (courseId) {
      case 'bim-for-architecture':
        return {
          subtitle: "Transform Architectural Design with BIM",
          description: "Master intelligent BIM workflows, parametric modeling, and coordinated design execution. Develop detailed architectural components, automated schedules, and energy simulations trusted by global AEC leaders.",
          tags: ["Parametric Modeling", "Clash Detection", "Energy Analysis"]
        };
      case 'bim-for-construction':
        return {
          subtitle: "Lead Construction Projects with Digital Excellence",
          description: "Master digital site management, 4D construction scheduling, and automated quantity takeoffs. Coordinate cross-functional contractor teams and eliminate on-site project delays.",
          tags: ["4D Scheduling", "Cost Estimation", "Site Coordination"]
        };
      case 'bim-for-infrastructure':
        return {
          subtitle: "Engineer the Infrastructure of Tomorrow",
          description: "Design large-scale civil infrastructure with precision BIM methodologies. Coordinate multidisciplinary networks, bridge designs, and lifecycle asset management seamlessly.",
          tags: ["Civil Infrastructure", "Utility Networks", "Lifecycle Management"]
        };
      default:
        return {
          subtitle: "Master the Future of Design & Construction",
          description: "Transform your career with industry-leading BIM training. Gain hands-on experience with cutting-edge tools and methodologies.",
          tags: ["BIM Modeling", "Coordination", "Digital AEC"]
        };
    }
  };

  const courseContent = getCourseContent(serviceId);

  return (
    <div className="course-detail-page">
      {/* Hero Section */}
      <section className="course-hero-section">
        <div className="hero-content">
          {/* Left Column */}
          <div className="hero-left">
            <div className="hero-partner-badge">
              <span className="badge-dot"></span>
              Professional BIM Certification Program
            </div>

            <h1 className="hero-title">{service.title}</h1>

            <p className="hero-description">
              {courseContent.description}
            </p>

            <div className="hero-actions">
              <button
                className="hero-enroll-btn"
                onClick={() => window.open('https://register.medinitechnologies.in/', '_blank')}
              >
                Enroll Now <span>→</span>
              </button>
              <button className="hero-learn-btn" onClick={scrollToContact}>
                Learn more
              </button>
            </div>
          </div>

          {/* Right Column - Laptop Mockup Screen with Floating Tags */}
          <div className="hero-right">
            <span className="floating-tag tag-top-left">{courseContent.tags[0]}</span>
            <span className="floating-tag tag-top-right">{courseContent.tags[1]}</span>
            <span className="floating-tag tag-bottom-right">{courseContent.tags[2]}</span>

            <div className="laptop-mockup">
              <div className="laptop-screen">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="laptop-base"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Content */}
      <div className="course-detail-container">
        <div className="course-detail-layout">
          <div className="course-content-left">
            <div className="service-header">
              <span className="course-category">{service.category}</span>
              <h1>{service.title}</h1>
              <p className="course-description">{service.description}</p>
            </div>

            <div className="info-cards">
              {service.duration && service.level && service.audience ? (
                <>
                  <div className="info-card">
                    <FaClock className="info-icon" size={28} />
                    <span>Duration</span>
                    <strong>{service.duration}</strong>
                  </div>
                  <div className="info-card">
                    <FaGraduationCap className="info-icon" size={28} />
                    <span>Level</span>
                    <strong>{service.level}</strong>
                  </div>
                  <div className="info-card">
                    <FaUsers className="info-icon" size={28} />
                    <span>Audience</span>
                    <strong>{service.audience}</strong>
                  </div>
                </>
              ) : (
                <>
                  <div className="info-card">
                    <FaClock className="info-icon" size={28} />
                    <span>Timeline</span>
                    <strong>Project-based</strong>
                  </div>
                  <div className="info-card">
                    <FaUsers className="info-icon" size={28} />
                    <span>Expert Team</span>
                    <strong>Architects & Designers</strong>
                  </div>
                  <div className="info-card">
                    <FaClipboardCheck className="info-icon" size={28} />
                    <span>Quality</span>
                    <strong>Standards Compliant</strong>
                  </div>
                </>
              )}
            </div>

            <div className="course-main-content">
              {service.curriculum ? (
                <>
                  <section className="curriculum">
                    <h2>Curriculum</h2>
                    <div className="curriculum-contact">
                      <p className="curriculum-contact-text">
                        Want to learn more about our comprehensive curriculum? Our expert instructors are here to guide you through every aspect of BIM training and help you achieve your career goals.
                      </p>
                      <button className="contact-us-btn" onClick={scrollToContact}>
                        Contact Us - More Details
                      </button>
                    </div>
                  </section>
                  <section className="learning-outcomes">
                    <h2>What You Will Learn</h2>
                    <div className="outcomes-container">
                      {service.learningOutcomes.map((outcome, index) => {
                        const descriptions = {
                          0: 'Master advanced BIM modeling techniques and parametric workflows. Learn to create intelligent 3D building models with precise metadata, assemble coordinated architectural structures, and implement global BIM execution standards.',
                          1: 'Develop comprehensive analytical skills for building performance optimization. Conduct automated clash detection workflows, perform sustainability evaluations, and create data-driven reports for engineering decisions.',
                          2: 'Generate fully coordinated construction documentation directly from centralized BIM models. Produce accurate floor plans, sectional elevations, quantity takeoffs, and bill-of-materials with zero discrepancies.',
                          3: 'Learn industry-standard collaborative workflows using cloud-based Common Data Environments (CDE). Coordinate interdisciplinary architectural and civil project teams with strict version control and change management protocols.'
                        };
                        return (
                          <div key={index} className="outcome-card">
                            <div className="outcome-icon">
                              {index === 0 && <FaStar size={24} />}
                              {index === 1 && <FaLightbulb size={24} />}
                              {index === 2 && <FaTrophy size={24} />}
                              {index === 3 && <FaRocket size={24} />}
                            </div>
                            <div className="outcome-content">
                              <h4>{outcome}</h4>
                              <p>{descriptions[index] || 'Gain practical skills and real-world experience'}</p>
                            </div>
                            <div className="outcome-number">
                              <span>{index + 1}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                  <section className="course-benefits">
                    <h2>Course Benefits</h2>
                    <div className="benefits-container">
                      {[
                        {
                          title: "Industry Recognition",
                          description: "Earn a certificate recognized by leading architecture and civil engineering firms, validating your core BIM expertise."
                        },
                        {
                          title: "Career Advancement",
                          description: "Open doors to high-growth positions as a BIM Model Specialist, BIM Coordinator, or Digital Project Manager."
                        },
                        {
                          title: "Hands-On Practical Skills",
                          description: "Work directly on live architectural and structural datasets adhering to real-world international BIM standards."
                        },
                        {
                          title: "Network Opportunities",
                          description: "Connect with a growing network of AEC professionals, BIM managers, and certified industry leaders."
                        }
                      ].map((benefit, index) => (
                        <div key={index} className="benefit-card">
                          <div className="benefit-icon">
                            <FaAward size={24} />
                          </div>
                          <div className="benefit-content">
                            <h4>{benefit.title}</h4>
                            <p>{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                </>
              ) : (
                <div className="service-details-section">
                  <h2>Service Details</h2>
                  <div className="service-details-grid">
                    {service.serviceDetails && service.serviceDetails.map((item, index) => (
                      <div key={index} className="service-detail-card">
                        <div className="detail-icon">
                          <FaCheckCircle size={24} />
                        </div>
                        <div className="detail-content">
                          <h3>{item}</h3>
                          <p>Comprehensive professional service</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              className="enroll-now-btn"
              onClick={() => window.open('https://register.medinitechnologies.in/', '_blank')}
            >
              <FaRocket size={18} />
              {service.curriculum ? 'Enroll Now' : 'Get Started'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;