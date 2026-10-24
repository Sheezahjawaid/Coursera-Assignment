import React, { useState, useEffect } from 'react';

const Notification = () => {
  const [appointment, setAppointment] = useState(null);

  useEffect(() => {
    const savedData = sessionStorage.getItem('appointmentData');
    if (savedData) {
      setAppointment(JSON.parse(savedData));
    }
  }, []);

  if (!appointment) return null;

  return (
    <div className="notification-banner" style={{ background: '#e0f2fe', padding: '10px', textAlign: 'center', borderBottom: '1px solid #0284c7' }}>
      <p style={{ margin: 0, color: '#0369a1' }}>
        <strong>Upcoming Appointment:</strong> Booked with {appointment.doctorName || 'Doctor'} on {appointment.date || 'Scheduled Date'}
      </p>
    </div>
  );
};

export default Notification;