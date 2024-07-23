import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-content">
        <div className="social-media">
          <h2>Find Us on</h2>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Service Contact Number: +1 800 123 456</p>
          <p>Customer Care Contact Number: +1 800 654 321</p>
          <p>Customer Care Email: support@example.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; JourneyMate 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
