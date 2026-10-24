import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Notification from './components/Notification/Notification';
import Sign_Up from './pages/Sign_Up/Sign_Up';
import Login from './pages/Login/Login';
import FindDoctorSearch from './pages/FindDoctorSearch/FindDoctorSearch';
import ProfileCard from './components/ProfileCard/ProfileCard';
import GiveReviews from './components/GiveReviews/GiveReviews';

function App() {
  return (
    <Router>
      <Navbar />
      <Notification />
      <Routes>
        <Route path="/" element={<h1>Welcome to StayHealthy Medical Portal</h1>} />
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