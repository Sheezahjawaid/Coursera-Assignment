import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';

const DoctorCard = ({ doctor }) => {
  const [appointment, setAppointment] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleBooking = (data) => {
    setAppointment(data);
    setShowForm(false);
  };

  const handleCancel = () => {
    setAppointment(null);
  };

  return (
    <div className="doctor-card">
      <h3>{doctor.name}</h3>
      <p>Speciality: {doctor.speciality}</p>
      <p>Experience: {doctor.experience} years</p>

      {appointment ? (
        <div className="appointment-booked-info">
          <p><strong>Booked for:</strong> {appointment.name} on {appointment.date} at {appointment.time}</p>
          <button onClick={handleCancel} className="btn-cancel">Cancel Appointment</button>
        </div>
      ) : (
        <>
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Close Form' : 'Book Appointment'}
          </button>
          {showForm && <AppointmentForm doctorName={doctor.name} onSubmit={handleBooking} />}
        </>
      )}
    </div>
  );
};

export default DoctorCard;