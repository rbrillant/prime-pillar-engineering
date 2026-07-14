import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaBuilding } from 'react-icons/fa';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
          <span className="section-tag">About Us</span>
          <h2>Prime Pillar Engineering System Ltd</h2>
          <p>
            We are a Rwandan company dedicated to providing top-tier security solutions,
            fire safety systems, electrical installations, and electronics maintenance services.
            With a commitment to reliability and excellence, we protect homes and businesses across Kigali and beyond.
          </p>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-number">13</span>
              <span className="stat-label">Core Services</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Monitoring</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Commitment</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="info-card">
            <h3>Contact Information</h3>

            <div className="info-row">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <span className="info-label">Address</span>
                <p>Kami, Gasharu, Kinyinya, Gasabo, Umujyi wa Kigali, Rwanda</p>
              </div>
            </div>

            <div className="info-row">
              <FaPhone className="info-icon" />
              <div>
                <span className="info-label">Phone</span>
                <p>+250 783 888 852</p>
              </div>
            </div>

            <div className="info-row">
              <FaEnvelope className="info-icon" />
              <div>
                <span className="info-label">Email</span>
                <p>info@primepillarengineering.com</p>
              </div>
            </div>

            <div className="divider"></div>

            <h3>Management</h3>

            <div className="info-row">
              <FaUser className="info-icon" />
              <div>
                <span className="info-label">Managing Director</span>
                <p>Jean Baptiste TUYISHIME</p>
              </div>
            </div>

            <div className="info-row">
              <FaBuilding className="info-icon" />
              <div>
                <span className="info-label">Company Secretary</span>
                <p>Jean Baptiste TUYISHIME</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
