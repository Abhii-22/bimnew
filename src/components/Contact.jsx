import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiUser, FiMessageSquare } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [hoveredCard, setHoveredCard] = useState(null);
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9749038945', '_blank');
  };

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Our Location',
      subtitle: 'Vijayanagar, Bengaluru',
      details: 'No. 2943/E, 3rd Floor, 40, Service Rd, opposite Shri Maruthi Mandira, Hosahalli Extension, Vijayanagar, Bengaluru, Karnataka 560040',
      color: '#f6f6f7',
      // gradient: 'linear-gradient(135deg, #356575 0%, #2d5562 100%)'
    },
    {
      icon: FiPhone,
      title: 'Call Us',
      subtitle: 'Mon - Sat, 9 AM - 8:30 PM',
      details: '(+91) 8971721005',
      link: 'tel:+918971721005',
      color: '#356575',
      gradient: 'linear-gradient(135deg, #356575 0%, #2d5562 100%)'
    },
    {
      icon: FiMail,
      title: 'Email Us',
      subtitle: 'We reply within 24 hours',
      details: 'connect@medini.in',
      link: 'mailto:connect@medini.in',
      color: '#356575',
      gradient: 'linear-gradient(135deg, #356575 0%, #2d5562 100%)'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      subtitle: 'Visit us anytime',
      details: 'Monday - Saturday: 9:00 AM - 8:30 PM\nSunday: Closed',
      color: '#356575',
      gradient: 'linear-gradient(135deg, #356575 0%, #2d5562 100%)'
    }
  ];

  return (
    <div className="contact-page-wrapper">
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsWhatsAppHovered(true)}
        onMouseLeave={() => setIsWhatsAppHovered(false)}
        className={`whatsapp-float-button ${isWhatsAppHovered ? 'hovered' : ''}`}
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </button>

      {/* Hero Section */}
      <div className="contact-hero-section">
        <div className="hero-background-overlay"></div>
        <div className="hero-animated-particles"></div>

        <div className="hero-content-wrapper">
          <h1 className="hero-main-title">Get In Touch</h1>
          <p className="hero-subtitle">
            Have questions about our courses? We're here to help you start your learning journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main-container">
        {/* Contact Info Cards */}
        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`contact-info-card ${hoveredCard === index ? 'hovered' : ''}`}
            >
              <div className={`info-icon-wrapper ${hoveredCard === index ? 'hovered' : ''}`}>
                <info.icon className="info-icon" />
              </div>

              <h3 className="info-title">{info.title}</h3>
              <p className="info-subtitle">{info.subtitle}</p>

              {info.link ? (
                <a href={info.link} className="info-link">
                  {info.details}
                </a>
              ) : (
                <p className="info-details">{info.details}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form + Map */}
        <div className="contact-form-map-grid">
          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-description">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">
                  <FiUser className="label-icon" />
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FiMail className="label-icon" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FiPhone className="label-icon" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FiMessageSquare className="label-icon" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-textarea"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button type="submit" className="form-submit-button">
                <FiSend className="submit-icon" />
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="map-container-wrapper">
            <div className="map-header">
              <h2 className="map-title">Visit Our Office</h2>
              <p className="map-description">
                Come visit us at our Vijayanagar location
              </p>
            </div>
            <div className="map-iframe-wrapper">
              <iframe
                title="Medini Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.536369683326!2d77.5118!3d13.0079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzI4LjQiTiA3N8KwMzAnNDIuNSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;