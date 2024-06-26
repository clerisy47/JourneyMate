import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './Header.css';

function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/"><img src="logo.jpg" alt="JourneyMate Logo"/></Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/reviews">User Reviews</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><a href="#contact" onClick={scrollToContact}>Contact Us</a></li>
          {isAuthenticated ? (
            <li className="profile-icon">
              <Link to="/profile">Profile</Link>
            </li>
          ) : (
            <li><Link to="/login">Login/Signup</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
