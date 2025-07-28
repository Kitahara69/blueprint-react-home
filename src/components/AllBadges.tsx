import React from 'react';
import '../styles/AllBadges.css'; // Ensure this path is correct

interface Badge {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  icon: string;
}

interface AllBadgesProps {
  badges: Badge[];
}

const AllBadges: React.FC<AllBadgesProps> = ({ badges }) => {
  const completedCount = badges.filter(badge => badge.completed).length;
  const totalCount = badges.length;

  return (
    // New wrapper div to contain both the header and the main container
    <div className="all-badges-wrapper">
      {/* achievements-header is now outside the achievements-container */}
      <div className="achievements-header">
        <div className="badges-subtitle">Badges</div>
        <div className="progress-indicator">{completedCount} out of {totalCount}</div>
      </div>
      
      <div className="achievements-container">
        <div className="badges-list">
          {badges.map((badge) => (
            <div key={badge.id} className="badge-item">
              <div className={`badge-icon ${badge.completed ? 'completed' : 'locked'}`}>
                {badge.icon}
              </div>
              <div className="badge-content">
                <h3 className={`badge-title ${!badge.completed ? 'locked' : ''}`}>
                  {badge.title}
                </h3>
                <p className={`badge-description ${!badge.completed ? 'locked' : ''}`}>
                  {badge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBadges;
