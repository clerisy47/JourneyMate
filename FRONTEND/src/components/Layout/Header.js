import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './Header.css';
import logo from './logo.png';


function Header() {
  const { isAuthenticated } = useContext(AuthContext);
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className=''>
      <div>
        <div><li><Link to="/"><img src={logo} alt="JourneyMate Logo" /></Link></li></div>
      </div>
      <nav>
        <ul>
          <li><Link to="/aboutus">ABOUT</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/reviews">USER-REVIEWS</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
          <li><a href="#contact" onClick={scrollToContact}>CONTACT-US</a></li>
          {isAuthenticated ? (
            <li className="profile-icon">
              <Link to="/profile">Profile</Link>
            </li>
          )
            :
            (
              <li><Link to="/login">LOGIN/SIGNUP</Link></li>
            )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
