import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Notification from './components/Notification/Notification';
import Sign_Up from './pages/Sign_Up/Sign_Up';
import Login from './pages/Login/Login';
import FindDoctorSearch from './pages/FindDoctorSearch/FindDoctorSearch';
import ProfileCard from './components/ProfileCard/ProfileCard';
import GiveReviews from './components/GiveReviews/GiveReviews';

const Home = () => (
  <div className="hero-section">
    <h1 className="hero-title">Your Health, Our Commitment</h1>
    <p className="hero-tagline">
      Book instant medical appointments with certified healthcare specialists, manage your profiles, and leave feedback seamlessly online.
    </p>
    <Link to="/search/doctors" className="hero-cta-btn">Book an Appointment</Link>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Notification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search/doctors" element={<FindDoctorSearch />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/reviews" element={<GiveReviews />} />
      </Routes>
    </Router>
  );
}

export default App;