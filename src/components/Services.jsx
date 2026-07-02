import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaTools, FaLock, FaUserShield, FaFire, FaBolt, FaBell, FaIdCard, FaCamera, FaFireExtinguisher, FaSearch, FaMapMarkerAlt, FaWrench } from 'react-icons/fa';
import '../styles/Services.css';

const services = [
  {
    icon: <FaShieldAlt />,
    code: 'SN802001',
    title: 'Security Alarm Monitoring',
    description:
      'Professional monitoring and remote monitoring of electronic security alarm systems including burglar and fire alarms, with full maintenance support.',
    features: ['24/7 Remote Monitoring', 'Burglar Alarm Systems', 'Fire Alarm Systems', 'Full Maintenance'],
  },
  {
    icon: <FaTools />,
    code: 'SS952101',
    title: 'Electronics Repair & Maintenance',
    description:
      'Expert repair and maintenance of consumer electronics including televisions, radio receivers, video cassette recorders, CD players, and household video cameras.',
    features: ['TV Repair', 'Radio & VCR Repair', 'CD Player Service', 'Video Camera Repair'],
  },
  {
    icon: <FaLock />,
    code: 'SN802002',
    title: 'Lock Systems & Security Vaults',
    description:
      'Professional installing, repairing, rebuilding, and adjusting of mechanical or electronic locking devices, safes, and security vaults.',
    features: ['Electronic Locks', 'Safe Installation', 'Vault Security', 'Lock Repair'],
  },
  {
    icon: <FaUserShield />,
    code: 'SM749008',
    title: 'Security Consulting',
    description:
      'Expert security consulting services to assess, plan, and implement comprehensive security solutions tailored to your needs.',
    features: ['Risk Assessment', 'Security Planning', 'System Design', 'Compliance Advisory'],
  },
  {
    icon: <FaFire />,
    code: '',
    title: 'Fire Alarm System',
    description:
      'Design, installation, and maintenance of complete fire alarm systems for residential and commercial properties.',
    features: ['Smoke Detectors', 'Heat Detectors', 'Control Panels', 'Emergency Alarms'],
  },
  {
    icon: <FaBolt />,
    code: '',
    title: 'Electrical Installation',
    description:
      'Professional electrical installation services for homes, offices, and industrial facilities. Safe and code-compliant work.',
    features: ['Wiring Installation', 'Panel Upgrades', 'Lighting Setup', 'Safety Inspections'],
  },
  {
    icon: <FaBell />,
    code: '',
    title: 'Intruder Alarm System',
    description:
      'State-of-the-art intruder alarm systems for comprehensive security against unauthorized entry and break-ins.',
    features: ['Motion Sensors', 'Door/Window Sensors', 'Siren Alarms', 'Remote Monitoring'],
  },
  {
    icon: <FaIdCard />,
    code: '',
    title: 'Access Control System',
    description:
      'Advanced access control solutions including biometric, card-based, and keypad entry systems for secure premises.',
    features: ['Biometric Readers', 'Key Card Systems', 'Intercom Entry', 'Remote Management'],
  },
  {
    icon: <FaCamera />,
    code: '',
    title: 'CCTV Installation',
    description:
      'Professional CCTV system installation with high-definition cameras for comprehensive video surveillance coverage.',
    features: ['HD Cameras', 'Night Vision', 'Remote Viewing', 'DVR/NVR Setup'],
  },
  {
    icon: <FaFireExtinguisher />,
    code: '',
    title: 'Fire Fighting Equipment',
    description:
      'Supply, installation, and maintenance of fire fighting equipment to ensure safety and regulatory compliance.',
    features: ['Fire Extinguishers', 'Fire Hose Reels', 'Sprinkler Systems', 'Fire Blankets'],
  },
  {
    icon: <FaSearch />,
    code: '',
    title: 'Checkpoint Screening Equipment',
    description:
      'Installation and maintenance of security screening equipment for checkpoints including metal detectors and X-ray scanners.',
    features: ['Metal Detectors', 'X-Ray Scanners', 'Walk-Through Gates', 'Handheld Scanners'],
  },
  {
    icon: <FaMapMarkerAlt />,
    code: '',
    title: 'Global Positioning System (GPS)',
    description:
      'GPS tracking and positioning solutions for vehicle tracking, asset management, and personal security applications.',
    features: ['Vehicle Tracking', 'Real-Time Monitoring', 'Geo-Fencing', 'Asset Tracking'],
  },
  {
    icon: <FaWrench />,
    code: '',
    title: 'Equipment Maintenance',
    description:
      'Comprehensive maintenance services for all security systems and electronic equipment to ensure optimal performance.',
    features: ['Scheduled Maintenance', 'Emergency Repairs', 'System Upgrades', 'Performance Checks'],
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-header">
          <span className="section-tag">What We Do</span>
          <h2>Our Services</h2>
          <p>Comprehensive security, fire safety, electrical, and electronics solutions for homes and businesses across Rwanda</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <div className="service-code">{service.code}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, i) => (
                  <span key={i}>{feature}</span>
                ))}
              </div>
              <button className="service-btn" onClick={() => navigate('/booking')}>
                Book This Service
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
