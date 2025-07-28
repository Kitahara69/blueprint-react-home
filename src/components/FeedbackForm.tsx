import React, { useState } from 'react';
import CustomToast from './CustomToast';
import "../styles/FeedbackForm.css";
import "../styles/CustomToast.css";
interface FeedbackFormProps {
  onSubmit?: (data: { rating: number; feedback: string }) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    title: string;
    description: string;
    type: 'success' | 'error';
  }>({
    show: false,
    title: '',
    description: '',
    type: 'success'
  });

  const maxChars = 1000;
  const remainingChars = maxChars - feedback.length;

  const ratingLabels = [
    '',
    'Poor',
    'Fair', 
    'Good',
    'Very Good',
    'Excellent'
  ];

  const hideToast = () => {
    setToast(prev => ({ ...prev, show: false }));
  };

  const showToast = (title: string, description: string, type: 'success' | 'error') => {
    setToast({
      show: true,
      title,
      description,
      type
    });
  };

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
  };

  const handleStarHover = (starIndex: number) => {
    setHoverRating(starIndex);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      showToast(
        "Rating Required",
        "Please select a rating before submitting.",
        "error"
      );
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSubmit?.({
        rating,
        feedback: feedback.trim()
      });

      // Reset form
      setRating(0);
      setFeedback('');
      showToast(
        "Feedback Submitted!",
        "Thank you for your feedback! We appreciate your comment.",
        "success"
      );
    } catch (error) {
      showToast(
        "Submission Failed",
        "Failed to submit feedback. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const displayRating = hoverRating || rating;

  return (
    <div className="feedback-container">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h1 className="feedback-title">Send us a feedback!</h1>
        <p className="feedback-subtitle">Please rate your experience below</p>

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`star ${star <= displayRating ? 'filled' : ''}`}
              viewBox="0 0 24 24"
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => handleStarHover(star)}
              onMouseLeave={handleStarLeave}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ))}
        </div>

        <div className="rating-text">
          {displayRating > 0 ? ratingLabels[displayRating] : ''}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="feedback">
            Additional feedback
          </label>
          <textarea
            id="feedback"
            className="form-textarea"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback here..."
            maxLength={maxChars}
          />
          <div className="char-count">
            {feedback.length}/{maxChars}
          </div>
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={isSubmitting || rating === 0}
        >
          {isSubmitting ? 'Submitting...' : 'Submit feedback'}
        </button>
      </form>
      
      <CustomToast
        title={toast.title}
        description={toast.description}
        type={toast.type}
        show={toast.show}
        onHide={hideToast}
      />
    </div>
  );
};

export default FeedbackForm;