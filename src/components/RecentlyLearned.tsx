import React from 'react';
import trophyImage from "@/assets/cup1-trophy.png";
import '../styles/RecentlyLearned.css';

interface LessonProps {
  title: string;
  lesson: string;
  rating: number;
}

interface RecentlyLearnedProps {
  lessons: LessonProps[];
}

const RecentlyLearned: React.FC<RecentlyLearnedProps> = ({ lessons }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 3 }, (_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="recently-learned">
      <h4>Recently Learned</h4>
      <div className="lessons-list">
        {lessons.map((lesson, index) => (
          <div key={index} className="lesson-item">
            <div className="lesson-content">
              <div className="lesson-title">{lesson.title}</div>
              <div className="lesson-subtitle">{lesson.lesson}</div>
              <div className="lesson-rating">
                {renderStars(lesson.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="trophy-section">
        <img
              src={trophyImage}
              alt="trophy image"
              className="trophy-image"
            />
      </div>
    </div>
  );
};

export default RecentlyLearned;