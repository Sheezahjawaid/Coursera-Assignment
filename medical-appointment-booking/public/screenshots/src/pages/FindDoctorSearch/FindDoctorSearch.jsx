import React, { useState } from 'react';

const FindDoctorSearch = ({ onSearch }) => {
  const [speciality, setSpeciality] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(speciality);
  };

  return (
    <div className="doctor-search-box">
      <h2>Find a Doctor and Book an Appointment</h2>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          placeholder="Search doctors, specialities..." 
          value={speciality}
          onChange={(e) => setSpeciality(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default FindDoctorSearch;