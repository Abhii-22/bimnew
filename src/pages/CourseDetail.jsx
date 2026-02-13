import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaClock, FaGraduationCap, FaUsers, FaBuilding, FaClipboardCheck, FaRocket, FaCheckCircle, FaAward, FaStar, FaLightbulb, FaTrophy } from 'react-icons/fa';
import './CourseDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    // Navigate to contact page
    navigate('/contact');
  };

  const servicesData = {
    // Course-style detail for BIM for Architecture
    'bim-for-architecture': {
      title: 'BIM for Architecture',
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
      title: 'BIM for Construction',
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
      title: 'BIM for Infrastructure',
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
    },
  };

  const service = servicesData[serviceId] || servicesData['bim-for-architecture'];

  return (
    <div className="course-detail-page">
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
                          0: 'Master advanced BIM modeling techniques using industry-standard software like Revit and AutoCAD. Learn to create intelligent 3D models with accurate parametric components, develop complex building systems, and implement industry best practices for model organization, coordination, and documentation that meet professional standards.',
                          1: 'Develop comprehensive analytical skills for building performance optimization using BIM tools. Learn to conduct energy analysis, daylighting studies, and sustainability assessments. Master clash detection workflows, interference checking, and create detailed reports for design optimization and decision-making processes.',
                          2: 'Create professional construction documents directly from BIM models with precision and efficiency. Learn to generate detailed floor plans, elevations, sections, and construction drawings. Master scheduling, quantity takeoffs, cost estimation, and produce comprehensive documentation packages for construction projects.',
                          3: 'Learn collaborative workflows and team coordination strategies using BIM 360 and cloud-based platforms. Master interdisciplinary coordination between architects, engineers, and contractors. Implement version control, change management, and develop effective communication protocols for successful project delivery.'
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
                          description: "Earn a certificate recognized by leading architecture and construction firms, validating your BIM expertise."
                        },
                        {
                          title: "Career Advancement",
                          description: "Open doors to higher-paying positions and leadership roles in BIM management and coordination."
                        },
                        {
                          title: "Practical Skills",
                          description: "Gain hands-on experience with real-world projects and industry-standard BIM software tools."
                        },
                        {
                          title: "Network Opportunities",
                          description: "Connect with industry professionals and join a community of BIM practitioners and experts."
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
          </div>
          
          <div className="course-content-right">
            <div className="course-image-container">
              <img src={service.image || '/images/3D.jpg'} alt={service.title} className="course-image" />
            </div>
            <div className="sidebar-widget">
              <div className="provider-summary">
                <FaBuilding size={32} className="provider-icon" />
                <h3>{service.curriculum ? 'Course Information' : 'Service Information'}</h3>
              </div>
              
              <div className="provider-info">
                <span className="provider-label">Provider </span>
                <span className="provider-name">{service.provider || 'BIM Construct'}</span>
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
    </div>
  );
};

export default ServiceDetail;
