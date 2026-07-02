import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Prime Pillar" className="logo-img" />
          <span>Prime Pillar Engineering</span>
        </Link>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''} onClick={closeMenu}>Services</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''} onClick={closeMenu}>About</Link>
          <Link to="/booking" className={`nav-cta ${location.pathname === '/booking' ? 'active-link' : ''}`} onClick={closeMenu}>Book Now</Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
