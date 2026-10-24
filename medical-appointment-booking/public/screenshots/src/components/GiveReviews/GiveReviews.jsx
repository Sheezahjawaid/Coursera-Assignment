import React, { useState } from 'react';

const GiveReviews = () => {
  const [review, setReview] = useState({ name: '', rating: '5', comments: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="review-container">
      <h2>Give Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            disabled={isSubmitted} 
            value={review.name} 
            onChange={(e) => setReview({...review, name: e.target.value})} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <select 
            disabled={isSubmitted} 
            value={review.rating} 
            onChange={(e) => setReview({...review, rating: e.target.value})}
          >
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
        <div className="form-group">
          <label>Review:</label>
          <textarea 
            disabled={isSubmitted} 
            value={review.comments} 
            onChange={(e) => setReview({...review, comments: e.target.value})} 
            required 
          />
        </div>
        <button type="submit" disabled={isSubmitted}>
          {isSubmitted ? 'Submitted' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default GiveReviews;