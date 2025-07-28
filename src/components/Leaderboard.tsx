import React, { useState } from 'react';
import '../styles/Leaderboard.css';
import leaderboardBanner from '@/assets/leaderboard-banner.png';

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  avatar?: string;
}

const Leaderboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, name: 'Harry Potter', score: 349 },
    { rank: 2, name: 'Ron Weasley', score: 312 },
    { rank: 3, name: 'Hermione', score: 300 },
    { rank: 4, name: 'Draco Malfoy', score: 298 },
    { rank: 5, name: 'Tomato Juicy', score: 240 },
    { rank: 6, name: 'Evelyn', score: 230 },
    { rank: 7, name: 'Severus Snape', score: 220 },
    { rank: 8, name: 'Albus Dumbledore', score: 210 },
    { rank: 9, name: 'Lord Voldemort', score: 200 },
    { rank: 10, name: 'Rubeus Hagrid', score: 190 },
  ];

  const filteredData = leaderboardData.filter(entry =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    // Search functionality is handled by the filter above
  };

  const handleReset = () => {
    setSearchTerm('');
  };

  const getRankSuffix = (rank: number) => {
    if (rank === 1) return 'st';
    if (rank === 2) return 'nd';
    if (rank === 3) return 'rd';
    return '';
  };

  const getRowClass = (rank: number) => {
    if (rank === 1) return 'rank-first';
    if (rank === 2) return 'rank-second';
    if (rank === 3) return 'rank-third';
    return '';
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-banner">
        <img src={leaderboardBanner} alt="Leaderboard" className="banner-image" />
      </div>
      
      <div className="leaderboard-content">
        <div className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
              Search
            </button>
            <button onClick={handleReset} className="reset-button">
              Reset
            </button>
          </div>
        </div>

        <div className={`leaderboard-list ${filteredData.length > 5 ? 'scrollable' : ''}`}>
          {filteredData.map((entry) => (
            <div key={entry.rank} className={`leaderboard-row ${getRowClass(entry.rank)}`}>
              <div className="rank-section">
                <span className="rank-number">{entry.rank}</span>
                <span className="rank-suffix">{getRankSuffix(entry.rank)}</span>
              </div>
              
              <div className="user-avatar">
                <div className="avatar-placeholder">
                  <span>👤</span>
                </div>
              </div>
              
              <div className="user-name">
                {entry.name}
              </div>
              
              <div className="user-score">
                <span className="score-number">{entry.score}</span>
                <span className="score-star">⭐</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;