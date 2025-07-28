import React, { useState } from 'react';
import '../styles/StreakCalendar.css';

interface StreakCalendarProps {
  currentMonth: string;
  currentYear: number;
  learningDates: string[]; // Array of dates in 'YYYY-MM-DD' format
  currentDate: string; // Current date in 'YYYY-MM-DD' format
}

const StreakCalendar: React.FC<StreakCalendarProps> = ({
  currentMonth: initialMonth,
  currentYear: initialYear,
  learningDates,
  currentDate
}) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  
  const [displayMonth, setDisplayMonth] = useState(monthNames.indexOf(initialMonth));
  const [displayYear, setDisplayYear] = useState(initialYear);
  
  const firstDayOfMonth = new Date(displayYear, displayMonth, 1);
  const lastDayOfMonth = new Date(displayYear, displayMonth + 1, 0);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  
  const navigateToPreviousMonth = () => {
    if (displayMonth === 0) {
      setDisplayMonth(11);
      setDisplayYear(displayYear - 1);
    } else {
      setDisplayMonth(displayMonth - 1);
    }
  };
  
  const navigateToNextMonth = () => {
    if (displayMonth === 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  };
  
  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayMonth(parseInt(event.target.value));
  };
  
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDisplayYear(parseInt(event.target.value));
  };
  
  const calendarDays = [];
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null);
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }
  
  const formatDate = (day: number) => {
    return `${displayYear}-${(displayMonth + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  };
  
  const isLearningDay = (day: number) => {
    return learningDates.includes(formatDate(day));
  };
  
  const isCurrentDay = (day: number) => {
    return currentDate === formatDate(day);
  };

  // Generate year options (current year ± 5 years)
  const yearOptions = [];
  for (let year = displayYear - 5; year <= displayYear + 5; year++) {
    yearOptions.push(year);
  }

  return (
    <div className="streak-calendar">
      <div className="calendar-header">
        <button className="nav-button" onClick={navigateToPreviousMonth}>
          &#8249;
        </button>
        <div className="header-selects">
          <select value={displayMonth} onChange={handleMonthChange} className="month-select">
            {monthNames.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
          <select value={displayYear} onChange={handleYearChange} className="year-select">
            {yearOptions.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
        <button className="nav-button" onClick={navigateToNextMonth}>
          &#8250;
        </button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((dayName, index) => (
          <div key={index} className="calendar-day-header">
            {dayName}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day ? 'has-day' : 'empty-day'} ${
              day && isLearningDay(day) ? 'learning-day' : ''
            } ${day && isCurrentDay(day) ? 'current-day' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreakCalendar;