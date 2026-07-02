import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaPhone, FaArrowDown } from 'react-icons/fa';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-overlay"></div>
      <div className="hero-glass-orb"></div>
      <div className="hero-glass-orb"></div>
      <div className="hero-glass-orb"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <FaShieldAlt />
          <span>Trusted Security Solutions in Rwanda</span>
        </div>

        <h1>
          Your Safety is Our <span className="highlight">Mission</span>
        </h1>

        <p className="hero-description">
          Professional security alarm monitoring, CCTV, access control, fire alarm systems,
          electrical installations, electronics repair, and security consulting across Rwanda.
          We protect what matters most to you.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('/booking')}>
            Book a Service
          </button>
          <button className="btn-secondary" onClick={() => navigate('/services')}>
            Our Services
          </button>
        </div>

        <div className="hero-contact-quick">
          <FaPhone className="phone-icon" />
          <span>Call us now: <strong>+250 783 888 852</strong></span>
        </div>
      </div>

      <button className="scroll-down" onClick={() => navigate('/services')}>
        <FaArrowDown />
      </button>
    </section>
  );
};

export default Hero;
