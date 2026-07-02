import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCalendarAlt, FaClock, FaCheck, FaSpinner, FaExclamationTriangle } from 'react-icons/fa';
import '../styles/Booking.css';

const serviceOptions = [
  'Security Alarm Monitoring',
  'Electronics Repair & Maintenance',
  'Lock Systems & Security Vaults',
  'Security Consulting',
  'Fire Alarm System',
  'Electrical Installation',
  'Intruder Alarm System',
  'Access Control System',
  'CCTV Installation',
  'Fire Fighting Equipment',
  'Checkpoint Screening Equipment',
  'Global Positioning System (GPS)',
  'Equipment Maintenance',
];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) throw new Error(data.error || 'Something went wrong');

      setSubmitted(true);
    } catch (err) {
      setError('Failed to send booking request. Please try calling us directly.');
    } finally {
      setLoading(false);
    }
  };

  const callNumber = '+250783888852';
  const emailAddress = 'ruchambo@gmail.com';
  const whatsappLink = `https://wa.me/250783888852?text=Hello%2C%20I%20would%20like%20to%20book%20a%20service%20from%20Prime%20Pillar%20Engineering.`;

  return (
    <section className="booking" id="booking">
      <div className="booking-container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2>Book a Service</h2>
          <p>Fill out the form below and we will get back to you, or contact us directly</p>
        </div>

        <div className="booking-grid">
          <div className="booking-form-section">
            {!submitted ? (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+250 7XX XXX XXX"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Service Required</label>
                  <select name="service" value={formData.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    {serviceOptions.map((s, i) => (
                      <option key={i} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Preferred Date</label>
                    <div className="input-with-icon">
                      <FaCalendarAlt className="input-icon" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Preferred Time</label>
                    <div className="input-with-icon">
                      <FaClock className="input-icon" />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your needs..."
                    rows="4"
                  ></textarea>
                </div>

                {error && (
                  <div className="form-error">
                    <FaExclamationTriangle />
                    <span>{error}</span>
                  </div>
                )}

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? <><FaSpinner className="spinner" /> Sending...</> : 'Submit Booking Request'}
                </button>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">
                  <FaCheck />
                </div>
                <h3>Booking Request Sent!</h3>
                <p>Thank you, <strong>{formData.name}</strong>. Your request for <strong>{formData.service}</strong> has been sent to our team.</p>
                <p className="success-note">We will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> to confirm.</p>
                <div className="success-actions">
                  <a href={`tel:${callNumber}`} className="btn-call">
                    <FaPhone /> Call Us Now
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                    <FaWhatsapp /> WhatsApp Us
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="booking-contact-section">
            <h3>Direct Contact</h3>
            <p className="contact-intro">
              Prefer to speak with us directly? Use any of the following methods to reach us immediately.
            </p>

            <div className="contact-methods">
              <a href={`tel:${callNumber}`} className="contact-method">
                <div className="contact-method-icon phone">
                  <FaPhone />
                </div>
                <div>
                  <span className="method-label">Call Us</span>
                  <span className="method-value">+250 783 888 852</span>
                </div>
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method-icon whatsapp">
                  <FaWhatsapp />
                </div>
                <div>
                  <span className="method-label">WhatsApp</span>
                  <span className="method-value">+250 783 888 852</span>
                </div>
              </a>

              <a href={`mailto:${emailAddress}`} className="contact-method">
                <div className="contact-method-icon email">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="method-label">Email</span>
                  <span className="method-value">{emailAddress}</span>
                </div>
              </a>

              <div className="contact-method">
                <div className="contact-method-icon location">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <span className="method-label">Visit Us</span>
                  <span className="method-value">Kami, Gasharu, Kinyinya, Gasabo, Kigali</span>
                </div>
              </div>
            </div>

            <div className="business-hours">
              <h4>Business Hours</h4>
              <div className="hours-row">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Sunday</span>
                <span>Emergency Only</span>
              </div>
              <div className="emergency-note">
                <FaPhone /> 24/7 Emergency Monitoring Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
