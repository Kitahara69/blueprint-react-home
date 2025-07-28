import React from 'react';
import '../styles/Statistics.css';

interface StatisticProps {
  icon: string;
  value: number;
  label: string;
  color: string;
}

const Statistic: React.FC<StatisticProps> = ({ icon, value, label, color }) => (
  <div className="statistic-item">
    <div className={`statistic-icon ${color}`}>
      {icon}
    </div>
    <div className="statistic-content">
      <div className="statistic-value">{value}</div>
      <div className="statistic-label">{label}</div>
    </div>
  </div>
);

interface StatisticsProps {
  dayStreak: number;
  totalStar: number;
  leaderboardRank: number;
  collectedBadge: number;
}

const Statistics: React.FC<StatisticsProps> = ({
  dayStreak,
  totalStar,
  leaderboardRank,
  collectedBadge
}) => {
  return (
    <div className="statistics">
      <Statistic
        icon="🔥"
        value={dayStreak}
        label="Day streak"
        color="orange"
      />
      <Statistic
        icon="⭐"
        value={totalStar}
        label="Total star"
        color="yellow"
      />
      <Statistic
        icon="📊"
        value={leaderboardRank}
        label="Leaderboard rank"
        color="orange"
      />
      <Statistic
        icon="🏆"
        value={collectedBadge}
        label="Collected badge"
        color="blue"
      />
    </div>
  );
};

export default Statistics;