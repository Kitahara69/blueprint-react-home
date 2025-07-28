import React from 'react';
import UserInfo from '../components/UserInfo';
import Statistics from '../components/Statistics';
import ProgressChart from '../components/ProgressChart';
import StreakCalendar from '../components/StreakCalendar';
import RecentlyLearned from '../components/RecentlyLearned';
import '../styles/UserProfile.css'; // Ensure this path is correct

const UserProfile: React.FC = () => {
  // Mock data - replace with real data from props or API
  const userData = {
    name: 'Tomato Juicy',
    email: 'tomato@gmail.com',
    joinDate: 'January 2025'
  };

  const statistics = {
    dayStreak: 23,
    totalStar: 30,
    leaderboardRank: 5,
    collectedBadge: 3
  };

  const progressData = [
    { day: 'Mon', lessons: 2, minutes: 45 },
    { day: 'Tue', lessons: 1, minutes: 30 },
    { day: 'Wed', lessons: 3, minutes: 60 },
    { day: 'Thu', lessons: 2, minutes: 40 },
    { day: 'Fri', lessons: 4, minutes: 75 },
    { day: 'Sat', lessons: 0, minutes: 0 },
    { day: 'Sun', lessons: 1, minutes: 25 }
  ];

  const learningDates = [
    '2025-08-05', '2025-08-06', '2025-08-07', '2025-08-12', '2025-08-13',
    '2025-08-19', '2025-08-20', '2025-08-26', '2025-08-27'
  ];

  const recentLessons = [
    { title: 'Unit 1', lesson: 'Lesson 3', rating: 2 }
  ];

  return (
    <div className="user-profile">
      <div className="profile-container">
        <div className="left-section">
          <UserInfo
            name={userData.name}
            email={userData.email}
            joinDate={userData.joinDate}
          />
          <Statistics
            dayStreak={statistics.dayStreak}
            totalStar={statistics.totalStar}
            leaderboardRank={statistics.leaderboardRank}
            collectedBadge={statistics.collectedBadge}
          />
          <ProgressChart data={progressData} />
        </div>
        <div className="right-section">
          <StreakCalendar
            currentMonth="August"
            currentYear={2025}
            learningDates={learningDates}
            currentDate="2025-08-15"
          />
          <RecentlyLearned lessons={recentLessons} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
