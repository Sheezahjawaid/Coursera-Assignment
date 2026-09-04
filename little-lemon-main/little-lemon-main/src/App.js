import React from 'react';
import BookingForm from './BookingForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Little Lemon Restaurant</h1>
      </header>
      <main>
        <BookingForm />
      </main>
    </div>
  );
}

export default App;