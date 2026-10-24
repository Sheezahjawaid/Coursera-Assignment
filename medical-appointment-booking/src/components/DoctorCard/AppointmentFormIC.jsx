import React, { useState } from 'react';

const AppointmentFormIC = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ name, phone });
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form-ic">
      <h3>Instant Consultation</h3>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default AppointmentFormIC;