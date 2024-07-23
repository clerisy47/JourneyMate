import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Itinerary from './components/Itinerary/Itinerary';
import Budget from './components/Budget/Budget';
import Destination from './components/Destination/Destination';
import Booking from './components/Booking/Booking';
import RealTimeUpdates from './components/RealTimeUpdates/RealTimeUpdates';
import SocialPlanning from './components/SocialPlanning/SocialPlanning';
import LoginSignup from './components/Auth/LoginSignup';
import UserProfile from './components/Profile/UserProfile';
import AboutUs from './components/AboutUs/AboutUs.js';
import Blog from './components/Blog/Blog.js';
import Faq from './components/FAQ/Faq.js';
import Reviews from './components/Reviews/Reviews.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/real-time-updates" element={<RealTimeUpdates />} />
          <Route path="/social-planning" element={<SocialPlanning />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
