import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, GraduationCap, Users, ArrowLeft, Building, ClipboardCheck, Rocket, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import './CourseDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <div className="back-button-container">
          <button onClick={() => navigate(-1)} className="back-link">
            <ArrowLeft size={16} /> Back to Courses
          </button>
        </div>
        
        <div className="service-header">
          <span className="course-category">{service.category}</span>
          <h1>{service.title}</h1>
          <p className="course-description">{service.description}</p>
        </div>
        
        <div className="info-cards">
          {service.duration && service.level && service.audience ? (
            <>
              <div className="info-card">
                <Clock className="info-icon" size={28} />
                <span>Duration</span>
                <strong>{service.duration}</strong>
              </div>
              <div className="info-card">
                <GraduationCap className="info-icon" size={28} />
                <span>Level</span>
                <strong>{service.level}</strong>
              </div>
              <div className="info-card">
                <Users className="info-icon" size={28} />
                <span>Audience</span>
                <strong>{service.audience}</strong>
              </div>
            </>
          ) : (
            <>
              <div className="info-card">
                <Clock className="info-icon" size={28} />
                <span>Timeline</span>
                <strong>Project-based</strong>
              </div>
              <div className="info-card">
                <Users className="info-icon" size={28} />
                <span>Expert Team</span>
                <strong>Architects & Designers</strong>
              </div>
              <div className="info-card">
                <ClipboardCheck className="info-icon" size={28} />
                <span>Quality</span>
                <strong>Standards Compliant</strong>
              </div>
            </>
          )}
        </div>

        <div className="course-detail-content">
          <main className="course-main-content">
            {service.curriculum ? (
              <>
                <section className="curriculum">
                  <h2>Curriculum</h2>
                  <ul>
                    {service.curriculum.map((item, idx) => (
                      <li key={idx}>
                        <span>{idx + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
                <section className="learning-outcomes">
                  <h2>What You'll Learn</h2>
                  <div className="outcomes-grid">
                    {service.learningOutcomes.map((o, i) => (
                      <li key={i}>
                        <CheckCircle2 size={18} /> {o}
                      </li>
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
                        <CheckCircle2 size={24} />
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
          </main>
          
          <aside className="course-sidebar">
            <div className="sidebar-widget">
              <div className="provider-summary">
                <Building size={32} className="provider-icon" />
                <h3>{service.curriculum ? 'Course Information' : 'Service Information'}</h3>
              </div>
              
              <div className="provider-info">
                <span className="provider-label">Provider </span>
                <span className="provider-name">{service.provider || 'BIM Construct'}</span>
              </div>

              {service.prerequisites ? (
                <div className="prerequisites-section">
                  <h4><ShieldCheck className="prereq-icon" size={18} /> Prerequisites</h4>
                  <ul>
                    {service.prerequisites.map((p, i) => (
                      <li key={i}><ShieldCheck size={16} className="prereq-icon" /> {p}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="why-choose-us">
                  <h4>Why Choose Us?</h4>
                  <ul>
                    <li><Award size={18} /> <span>Industry Experts</span></li>
                    <li><Users size={18} /> <span>Collaborative Approach</span></li>
                    <li><ShieldCheck size={18} /> <span>Quality Assured</span></li>
                  </ul>
                </div>
              )}
              
              <button className="enroll-now-btn">
                <Rocket size={18} />
                {service.curriculum ? 'Enroll Now' : 'Get Started'}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
