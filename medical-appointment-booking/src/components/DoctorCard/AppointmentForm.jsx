import React, { useState } from 'react';

const AppointmentForm = ({ doctorName, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <h3>Book Appointment with {doctorName}</h3>
      <div className="form-group">
        <label>Name:</label>
        <input 
          type="text" 
          value={formData.name} 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input 
          type="tel" 
          value={formData.phone} 
          onChange={(e) => setFormData({...formData, phone: e.target.value})} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input 
          type="date" 
          value={formData.date} 
          onChange={(e) => setFormData({...formData, date: e.target.value})} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Time:</label>
        <input 
          type="time" 
          value={formData.time} 
          onChange={(e) => setFormData({...formData, time: e.target.value})} 
          required 
        />
      </div>
      <button type="submit">Confirm Appointment</button>
    </form>
  );
};

export default AppointmentForm;