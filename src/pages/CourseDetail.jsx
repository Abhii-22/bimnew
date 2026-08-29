import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './CourseDetail.css';

// Isometric technical line-art icons matching the design
const CadRobotIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="isometric-svg">
    <path d="M16 14 L28 8 L38 13 L26 19 Z" />
    <path d="M16 14 L16 23 L26 28 L26 19" />
    <path d="M26 28 L38 22 L38 13" />
    <circle cx="23" cy="19" r="1" fill="currentColor" />
    <circle cx="31" cy="15" r="1" fill="currentColor" />
    <ellipse cx="14" cy="18" rx="2" ry="3.5" />
    <path d="M14 26 L24 21 L34 26" strokeDasharray="2 2" />
    <path d="M14 26 L14 36 L24 41 L24 21" />
    <path d="M24 41 L34 36 L34 26" />
    <path d="M14 31 L24 36 L34 31" strokeDasharray="2 2" />
    <path d="M40 18 L44 16 L48 18 L44 20 Z" />
    <path d="M40 18 L40 21 L44 23 L44 20" />
    <path d="M44 23 L48 21 L48 18" />
  </svg>
);

const CloudCollabIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="isometric-svg">
    <circle cx="24" cy="8" r="4" />
    <path d="M24 12 L24 26" />
    <path d="M12 40 L24 26 L36 40" />
    <path d="M16 35 L32 35" />
    <path d="M8 20 L24 16 L40 20" />
    <path d="M10 24 L24 38 L38 24" strokeDasharray="2 2" />
    <ellipse cx="24" cy="40" rx="14" ry="4" strokeDasharray="3 3" />
  </svg>
);

const GenerativeDesignIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="isometric-svg">
    <path d="M14 18 C14 12, 22 10, 26 14 C30 18, 38 16, 38 22 C38 28, 30 32, 26 30 C22 28, 14 34, 14 26 Z" />
    <path d="M22 16 L22 24 L28 20 Z" />
    <path d="M10 14 L10 22" />
    <path d="M38 12 L42 16 L38 20" />
    <path d="M14 36 L18 42" />
    <path d="M26 36 L26 42" />
    <ellipse cx="24" cy="42" rx="12" ry="3" />
  </svg>
);

const ElectronicsDesignIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="isometric-svg">
    <path d="M16 16 L28 10 L40 16 L28 22 Z" />
    <path d="M16 16 L16 30 L28 36 L28 22" />
    <path d="M28 36 L40 30 L40 16" />
    <circle cx="28" cy="22" r="5" fill="#cae6f7" stroke="currentColor" />
    <path d="M8 20 L16 20" />
    <path d="M8 26 L16 26" />
    <path d="M28 36 L28 44" />
    <path d="M40 20 L46 20" strokeDasharray="2 2" />
  </svg>
);

const SimulationIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="isometric-svg">
    <path d="M10 26 L24 18 L38 26 L24 34 Z" />
    <path d="M10 26 L10 32 L24 40 L24 34" />
    <path d="M24 40 L38 32 L38 26" />
    <path d="M14 18 L24 8 L34 18" strokeDasharray="2 2" />
    <circle cx="24" cy="14" r="2" fill="currentColor" />
    <circle cx="14" cy="24" r="1.5" fill="currentColor" />
    <circle cx="34" cy="24" r="1.5" fill="currentColor" />
  </svg>
);

const DataManagementIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="isometric-svg">
    <rect x="14" y="10" width="26" height="20" rx="3" />
    <path d="M14 16 L40 16" />
    <path d="M18 13 H20" />
    <path d="M22 13 H24" />
    <path d="M8 22 L18 16 L28 22 L18 28 Z" fill="#cae6f7" />
    <path d="M8 22 L8 32 L18 38 L18 28" fill="#cae6f7" />
    <path d="M18 38 L28 32 L28 22" fill="#cae6f7" />
  </svg>
);

const CourseDetail = () => {
  const { serviceId, courseId } = useParams();
  const currentId = serviceId || courseId || 'bim-for-architecture';
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentId]);

  const scrollToContact = () => {
    navigate('/contact');
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const coursesData = {
    'bim-for-architecture': {
      title: 'BIM for Architecture: Advanced Building Information Modeling & Design',
      category: 'BIM for Architecture',
      description:
        'Master intelligent BIM workflows, parametric modeling, and coordinated design execution. Develop detailed architectural components, automated schedules, and energy simulations trusted by global AEC leaders.',
      image: '/images/architrecture.jpeg',
      tags: ['Parametric Modeling', 'Clash Detection', 'Energy Analysis'],
      capabilitiesHeading: 'Explore BIM Architecture Capabilities',
      capabilities: [
        {
          title: '3D Parametric Modeling',
          desc: 'Engineer architectural elements with intelligent 3D modeling tools including smart walls, doors, curtain grids, and parametric massing.',
          image: '/images/architrecture.jpeg'
        },
        {
          title: 'Design Coordination',
          desc: 'Seamlessly coordinate architectural disciplines with structural and MEP systems using cloud-based Common Data Environments (CDE).',
          image: '/images/cons.png'
        },
        {
          title: 'Automated Documentation',
          desc: 'Generate complete construction documents, sheets, plans, sections, and automated bill-of-quantities synchronized with model revisions.',
          image: '/images/in.jpg'
        },
        {
          title: 'Energy & Performance',
          desc: 'Validate building sustainability, solar radiation, daylighting, and thermal loads with advanced performance analysis tools.',
          image: '/images/architrecture.jpeg'
        }
      ],
      featuresHeading: 'Features for your architectural workflow',
      features: [
        {
          icon: <CadRobotIcon />,
          title: 'Parametric BIM Design',
          desc: 'Create and modify complex building geometry with parametric design tools and automated component relationships.'
        },
        {
          icon: <CloudCollabIcon />,
          title: 'Cloud Collaboration',
          desc: 'Work together from anywhere with real-time multi-user synchronization on cloud-hosted central architectural models.'
        },
        {
          icon: <GenerativeDesignIcon />,
          title: 'Generative Space Planning',
          desc: 'Explore design alternatives with computational algorithms to optimize building layout, daylighting, and spatial efficiency.'
        },
        {
          icon: <ElectronicsDesignIcon />,
          title: 'Disciplined Coordination',
          desc: 'Integrate architectural spaces seamlessly with mechanical, electrical, and structural framing models in one federated view.'
        },
        {
          icon: <SimulationIcon />,
          title: 'Clash & Clash Detection',
          desc: 'Discover geometric clashes and design errors automatically prior to generating final fabrication and site blueprints.'
        },
        {
          icon: <DataManagementIcon />,
          title: 'Data & Asset Management',
          desc: 'Maintain centralized version control, room data sheets, finish schedules, and milestone approvals per ISO 19650 standards.'
        }
      ],
      faqs: [
        {
          question: 'What is BIM for Architecture used for?',
          answer:
            'BIM for Architecture is used to create intelligent 3D virtual models with embedded metadata, automate construction documentation, simulate energy efficiency, and collaborate across engineering disciplines.'
        },
        {
          question: 'Who uses BIM for Architecture?',
          answer:
            'Architects, architectural designers, computational BIM specialists, interior architects, and draftspersons working across residential, commercial, industrial, and institutional AEC projects.'
        },
        {
          question: 'What can I learn in this BIM course?',
          answer:
            'You will master parametric architectural modeling, automated schedule creation, sheet set generation, clash coordination, energy analysis, and Common Data Environment (CDE) collaboration workflows.'
        },
        {
          question: 'Do I need prior CAD experience to take this BIM course?',
          answer:
            'No prior advanced CAD experience is required. We begin with foundational spatial modeling concepts and progress to advanced multidisciplinary coordination workflows.'
        },
        {
          question: 'What career opportunities can I pursue after learning BIM for Architecture?',
          answer:
            'You can pursue careers as a BIM Architect, BIM Modeler, Architectural Designer, BIM Coordinator, and Digital Delivery Specialist at leading AEC and consulting firms.'
        }
      ]
    },
    'bim-for-construction': {
      title: 'BIM for Construction: Digital Project Delivery & On-Site Execution',
      category: 'BIM for Construction',
      description:
        'Master digital site management, 4D construction scheduling, and automated quantity takeoffs. Coordinate cross-functional contractor teams and eliminate on-site project delays.',
      image: '/images/cons.png',
      tags: ['4D Scheduling', 'Cost Estimation', 'Site Coordination'],
      capabilitiesHeading: 'Explore BIM Construction Capabilities',
      capabilities: [
        {
          title: '4D Construction Phasing',
          desc: 'Link BIM geometry directly with project master schedules to visually simulate staging, site logistics, and crane movements.',
          image: '/images/cons.png'
        },
        {
          title: '5D Quantity Takeoff',
          desc: 'Extract automated, highly accurate material quantities and cost models directly from constructible BIM elements.',
          image: '/images/architrecture.jpeg'
        },
        {
          title: 'Field BIM Execution',
          desc: 'Equip site teams with mobile BIM access for real-time verification, QA/QC checklists, and digital punch list management.',
          image: '/images/in.jpg'
        },
        {
          title: 'Constructability Review',
          desc: 'Identify spatial collisions and logistics bottlenecks prior to procurement and physical mobilization on site.',
          image: '/images/cons.png'
        }
      ],
      featuresHeading: 'Features for site & construction management',
      features: [
        {
          icon: <CadRobotIcon />,
          title: 'Timeline Integration',
          desc: 'Connect master Gantt charts directly with 3D model geometry for accurate 4D visual simulations and milestone tracking.'
        },
        {
          icon: <CloudCollabIcon />,
          title: 'Site Cloud Platform',
          desc: 'Seamlessly distribute constructible drawings, model viewpoints, and verified RFIs to field engineers via mobile devices.'
        },
        {
          icon: <GenerativeDesignIcon />,
          title: 'Automated Cost Estimation',
          desc: 'Generate live bill-of-quantities and cost forecasts that dynamically adapt as design changes and revisions occur.'
        },
        {
          icon: <ElectronicsDesignIcon />,
          title: 'Prefabrication & Spooling',
          desc: 'Export precise fabrication dimensions directly to manufacturing shops for off-site precast and modular assemblies.'
        },
        {
          icon: <SimulationIcon />,
          title: 'Safety Logistics Simulation',
          desc: 'Plan crane clearances, temporary works, scaffolding, and worker egress pathways inside digital twin simulations.'
        },
        {
          icon: <DataManagementIcon />,
          title: 'As-Built Documentation',
          desc: 'Deliver accurate digital asset handovers for facilities management, maintenance logging, and warranty tracking.'
        }
      ],
      faqs: [
        {
          question: 'What is BIM for Construction used for?',
          answer:
            'BIM for Construction is used for constructability reviews, 4D time simulation, 5D cost estimating, on-site quality control, and field coordination.'
        },
        {
          question: 'Who uses BIM for Construction?',
          answer:
            'General contractors, site engineers, VDC managers, project superintendents, cost estimators, and construction management firms.'
        },
        {
          question: 'What can I learn in this BIM course?',
          answer:
            'You will learn automated quantity takeoffs (5D QTO), 4D phase simulation, site coordination workflows, mobile field verification, and as-built delivery.'
        },
        {
          question: 'Do I need prior construction experience to take this BIM course?',
          answer:
            'A basic understanding of civil engineering, architecture, or construction site processes is helpful, but no advanced BIM background is required.'
        },
        {
          question: 'What career opportunities can I pursue after learning BIM for Construction?',
          answer:
            'You can pursue roles such as VDC Engineer, BIM Construction Manager, Site BIM Coordinator, Planning Engineer, and 5D Cost Estimator.'
        }
      ]
    },
    'bim-for-infrastructure': {
      title: 'BIM for Infrastructure: Engineering Civil Utilities & Smart Transportation',
      category: 'BIM for Infrastructure',
      description:
        'Design large-scale civil infrastructure with precision BIM methodologies. Coordinate multidisciplinary networks, bridge designs, and lifecycle asset management seamlessly.',
      image: '/images/in.jpg',
      tags: ['Civil Infrastructure', 'Utility Networks', 'Lifecycle Management'],
      capabilitiesHeading: 'Explore BIM Infrastructure Capabilities',
      capabilities: [
        {
          title: 'Corridor & Alignment Modeling',
          desc: 'Design dynamic horizontal and vertical alignments with parametric cross-section assemblies for roadways and highways.',
          image: '/images/in.jpg'
        },
        {
          title: 'Subsurface Utilities',
          desc: 'Model and clash-check complex underground water, drainage, sewer, and dry utility networks across terrain surfaces.',
          image: '/images/architrecture.jpeg'
        },
        {
          title: 'GIS + BIM Synchronization',
          desc: 'Bridge geospatial GIS mapping directly with intelligent civil BIM assets for city-scale planning and infrastructure modeling.',
          image: '/images/cons.png'
        },
        {
          title: 'Earthwork & Volume Analysis',
          desc: 'Calculate precise cut-and-fill earthwork quantities across varied terrain models with automated report outputs.',
          image: '/images/in.jpg'
        }
      ],
      featuresHeading: 'Features for civil infrastructure design',
      features: [
        {
          icon: <CadRobotIcon />,
          title: 'Roadway Alignments',
          desc: 'Create precision road alignments, superelevation calculations, and profile assemblies connected with terrain survey data.'
        },
        {
          icon: <CloudCollabIcon />,
          title: 'Infrastructure Hub',
          desc: 'Collaborate with transportation departments and municipal authorities across centralized civil project datasets.'
        },
        {
          icon: <GenerativeDesignIcon />,
          title: 'Hydraulic Network BIM',
          desc: 'Model storm, wastewater, and culvert hydraulics with gravity pipe sizing directly inside civil model geometry.'
        },
        {
          icon: <ElectronicsDesignIcon />,
          title: 'Geospatial Context',
          desc: 'Incorporate drone survey point clouds, LiDAR scans, and GIS elevation layers seamlessly into 3D engineering models.'
        },
        {
          icon: <SimulationIcon />,
          title: 'Bridge & Tunnel BIM',
          desc: 'Coordinate structural civil works with detailed grade profiles, abutments, and clearance envelopes.'
        },
        {
          icon: <DataManagementIcon />,
          title: 'Digital Twin Handover',
          desc: 'Provide operational infrastructure models for highway authorities, rail operators, and asset management systems.'
        }
      ],
      faqs: [
        {
          question: 'What is BIM for Infrastructure used for?',
          answer:
            'BIM for Infrastructure is used for planning, designing, building, and operating highways, bridges, railways, drainage systems, and civil utility networks.'
        },
        {
          question: 'Who uses BIM for Infrastructure?',
          answer:
            'Civil engineers, highway design specialists, transportation planners, utility engineers, and public infrastructure agencies.'
        },
        {
          question: 'What can I learn in this BIM course?',
          answer:
            'You will learn corridor modeling, terrain surfaces, gravity and pressure pipe networks, 4D phasing, earthwork volume calculations, and GIS-BIM interoperability.'
        },
        {
          question: 'Do I need prior civil software experience to take this BIM course?',
          answer:
            'A basic understanding of civil engineering, surveying, or infrastructure concepts is helpful. The course covers complete modeling and workflow fundamentals.'
        },
        {
          question: 'What career opportunities can I pursue after learning BIM for Infrastructure?',
          answer:
            'You can pursue careers such as Civil BIM Specialist, Infrastructure Design Engineer, Highway BIM Coordinator, and Utility Modeling Lead.'
        }
      ]
    }
  };

  const course = coursesData[currentId] || coursesData['bim-for-architecture'];

  return (
    <div className="course-detail-page">
      {/* ══════════════════════════════════════════
          HERO SECTION (ORIGINAL & UNTOUCHED)
         ══════════════════════════════════════════ */}
      <section className="course-hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-partner-badge">
              <span className="badge-dot"></span>
              Professional BIM Certification Program
            </div>

            <h1 className="hero-title">{course.title}</h1>

            <p className="hero-description">{course.description}</p>

            <div className="hero-actions">
              <button
                className="hero-enroll-btn"
                onClick={() =>
                  window.open('https://register.medinitechnologies.in/', '_blank')
                }
              >
                Enroll Now <span>→</span>
              </button>
              <button className="hero-learn-btn" onClick={scrollToContact}>
                Learn more
              </button>
            </div>
          </div>

          <div className="hero-right">
            <span className="floating-tag tag-top-left">{course.tags[0]}</span>
            <span className="floating-tag tag-top-right">{course.tags[1]}</span>
            <span className="floating-tag tag-bottom-right">{course.tags[2]}</span>

            <div className="laptop-mockup">
              <div className="laptop-screen">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="laptop-base"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 1: CAPABILITIES CARDS (BIM CONTENT)
         ══════════════════════════════════════════ */}
      <section className="custom-section-container">
        <h2 className="custom-section-title">{course.capabilitiesHeading}</h2>
        <div className="capabilities-grid">
          {course.capabilities.map((item, idx) => (
            <div key={idx} className="capability-card">
              <div className="capability-img-wrapper">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="capability-body">
                <h3 className="capability-card-title">{item.title}</h3>
                <p className="capability-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2: FEATURES CARDS (BIM CONTENT & EXACT ICONS)
         ══════════════════════════════════════════ */}
      <section className="custom-section-container">
        <h2 className="custom-section-title">{course.featuresHeading}</h2>
        <div className="features-grid">
          {course.features.map((item, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon-badge">
                {item.icon}
              </div>
              <h3 className="feature-card-title">{item.title}</h3>
              <p className="feature-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3: FAQ ACCORDION (BIM CONTENT)
         ══════════════════════════════════════════ */}
      <section className="custom-section-container custom-faq-container">
        <h2 className="custom-section-title">Questions? We have answers.</h2>
        
        <div className="faq-tab-bar">
          <span className="faq-tab-active">FAQs</span>
        </div>

        <div className="faq-accordion-box">
          {course.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="faq-item">
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="faq-chevron" size={20} />
                  ) : (
                    <ChevronDown className="faq-chevron" size={20} />
                  )}
                </button>
                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;