import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src="/logo.png" alt="Prime Pillar" className="footer-logo-img" />
                <span>Prime Pillar Engineering System Ltd</span>
              </Link>
            <p>
              Your trusted partner in security solutions, alarm monitoring,
              CCTV, access control, fire safety, electrical installation,
              and security consulting in Rwanda.
            </p>
            <div className="footer-social">
              <a href="https://wa.me/250783888852" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="mailto:info@primepillarengineering.com">
                <FaEnvelope />
              </a>
              <a href={`tel:+250783888852`}>
                <FaPhone />
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/booking">Book Now</Link>
          </div>

          <div className="footer-links-col">
            <h4>Services</h4>
            <span>Security Alarm Monitoring</span>
            <span>CCTV Installation</span>
            <span>Access Control Systems</span>
            <span>Fire Alarm Systems</span>
            <span>Intruder Alarm Systems</span>
            <span>GPS Tracking</span>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="footer-contact-row">
              <FaPhone />
              <a href="tel:+250783888852">+250 783 888 852</a>
            </div>
            <div className="footer-contact-row">
              <FaEnvelope />
              <a href="mailto:info@primepillarengineering.com">info@primepillarengineering.com</a>
            </div>
            <div className="footer-contact-row">
              <FaMapMarkerAlt />
              <span>Kami, Gasharu, Kinyinya, Gasabo, Kigali</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Prime Pillar Engineering System Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
