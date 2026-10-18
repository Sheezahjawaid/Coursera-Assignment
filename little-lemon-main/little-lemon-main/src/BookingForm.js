import React, { useState } from 'react';

function BookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Table booked for ${guests} guest(s) on ${date} at ${time}!`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '350px', gap: '20px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Little Lemon Table Reservation</h2>

      <label htmlFor="res-date">Choose date</label>
      <input 
        type="date" 
        id="res-date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
        aria-label="Choose booking date"
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required aria-label="Choose booking time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        placeholder="1" 
        min="1" 
        max="10" 
        id="guests" 
        value={guests} 
        onChange={(e) => setGuests(e.target.value)} 
        required 
        aria-label="Number of guests"
    />

    <label htmlFor="occasion">Occasion</label>
    <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} aria-label="Select occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>

    <input type="submit" value="Make Your Reservation" aria-label="Submit reservation form" style={{ padding: '10px', backgroundColor: '#495E57', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} />
    </form>
);
}

export default BookingForm;