import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            <li><a href="https://mediniedutech.com/" rel="noopener noreferrer">Medini EduTech</a> - Training and Certifications</li>
            <li><a href="https://bimconstruct.in/"  rel="noopener noreferrer">BIM Construct</a> - Interior and Exterior Designing</li>
            <li><a href="https://nalaneel.com/"  rel="noopener noreferrer">TechVruddhi</a> - Software Development</li>
            <li><a href="https://eduphygital.com/"  rel="noopener noreferrer">EDUPHYGITAL</a> - Centre of Excellence</li>
            <li><a href="https://digidhvani.com/"  rel="noopener noreferrer">DigiDhvani</a> - Digital Marketing</li>
            <li><a href="https://builddspace.in/"  rel="noopener noreferrer">BuilddSpace</a> - Incubation Centre</li>
          
           
          </ul>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/#courses">Courses</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/medinitechnologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://www.instagram.com/medinitechnologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Medini Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
