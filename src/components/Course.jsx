import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaUsers, FaStar, FaChartLine, FaTag } from "react-icons/fa";
import "./Course.css";

const servicesData = [
  {
    title: "BIM for Architecture",
    serviceId: "bim-for-architecture",
    image:
      "https://images.prismic.io/travauxlib/4c6ff268-9350-4578-b460-fb4101c5ba99_etape-realisation-plans-maison.jpg?auto=compress,format&rect=0,0,1050,700&w=1050&h=700",
    duration: "4 Months",
    students: "1,200+",
    successRate: "96%",
    rating: 4.9,
    tags: ["Structural Analysis", "Steel Design", "Concrete Design", "Seismic"],
  },
  {
    title: "BIM for Construction",
    serviceId: "bim-for-construction",
    image:
      "https://www.constructionplacements.com/wp-content/uploads/2024/02/The-Benefits-of-BIM-Virtual-Design-and-Construction.jpg",
    duration: "4 Months",
    students: "950+",
    successRate: "94%",
    rating: 4.8,
    tags: ["Civil Design", "3D Modeling", "Corridor Modeling", "Site Design"],
  },
  {
    title: "BIM for Infrastructure",
    serviceId: "bim-for-infrastructure",
    image:
      "https://wallpapercave.com/wp/wp8548012.jpg",
    duration: "4 Months",
    students: "2,500+",
    successRate: "97%",
    rating: 4.7,
    tags: ["CAD", "2D Drafting", "3D Modeling", "Visualization"],
  },
  
];

const Services = () => {
  return (
    <section id="courses" className="courses-section">
      <div className="courses-header">
        <h2>Our Popular Courses</h2>
        <p>
          Explore our most advanced programs designed for future-ready professionals.
        </p>
      </div>

      <div className="courses-grid">
        {servicesData.map((service, index) => (
          <div className="course-card" key={index}>
            <div
              className="course-img"
              style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            <div className="course-content">
              <h3>{service.title}</h3>
              <div className="course-meta">
                <div className="meta-item">
                  <FaClock className="meta-icon" />
                  <span>{service.duration}</span>
                </div>
                <div className="meta-item">
                  <FaUsers className="meta-icon" />
                  <span>{service.students}</span>
                </div>
                <div className="meta-item">
                  <FaChartLine className="meta-icon" />
                  <span>{service.successRate} Success</span>
                </div>
                <div className="meta-item">
                  <FaStar className="meta-icon" />
                  <span>{service.rating}</span>
                </div>
              </div>
              <div className="course-tags">
                <FaTag className="tags-icon" />
                {service.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className="course-footer">
                
                <Link to={`/service/${service.serviceId}`} className="explore-btn">
                  Explore More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
