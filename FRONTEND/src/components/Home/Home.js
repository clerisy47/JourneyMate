import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Smart Travel Planner</h1>
      <div className="search-section">
        <input type="text" placeholder="Search for destinations..." />
        <input type="text" placeholder="Search for activities..." />
        <input type="text" placeholder="Search for flights..." />
        <input type="text" placeholder="Search for hotels..." />
      </div>
      <div className="links-section">
        <Link to="/itinerary">Plan Your Itinerary</Link>
        <Link to="/budget">Manage Your Budget</Link>
        <Link to="/destination">Explore Destinations</Link>
        <Link to="/booking">Book Your Travel</Link>
        <Link to="/real-time-updates">Get Real-Time Updates</Link>
        <Link to="/social-planning">Collaborate with Friends</Link>
      </div>
    </div>
  );
}

export default Home;
