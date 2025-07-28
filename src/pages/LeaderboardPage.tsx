import React from 'react';
// Navbar and Sidebar should generally not be imported here if this is a page
// that will be rendered within a common Layout component.
// import Navbar from '../components/Navbar'; 
// import Sidebar from '../components/Sidebar'; 
import Leaderboard from '../components/Leaderboard';
import '../styles/LeaderboardPage.css'; // Keep page-specific styles

// Renamed from UserFeedback to reflect its content
const LeaderboardPage: React.FC = () => {
  // These handlers are no longer relevant here if Navbar/Sidebar are in Layout
  // const handleSidebarItemClick = (itemId: string) => {
  //   console.log('Sidebar item clicked:', itemId);
  //   // Handle navigation here
  // };

  // const handleFeedbackSubmit = (data: { rating: number; feedback: string }) => {
  //   console.log('Feedback submitted:', data);
  //   // Handle feedback submission here
  // };

  // const handleSettings = () => {
  //   console.log('Settings clicked');
  //   // Handle settings navigation
  // };

  // const handleLogout = () => {
  //   console.log('Logout clicked');
  //   // Handle logout
  // };

  return (
    // If this is a page rendered by react-router-dom within the Layout,
    // you should NOT include Sidebar and Navbar here.
    // The Layout component already provides them.
    <div className="page-content-wrapper"> {/* A wrapper for page-specific content */}
      {/* <Sidebar 
        activeItem="feedback" // REMOVED: Sidebar handles its own active state
        onItemClick={handleSidebarItemClick} // REMOVED: Sidebar handles its own navigation
      /> */}
      
      {/* <div className="main-content"> */} {/* This div is part of the Layout */}
        {/* <Navbar 
          profileName="Tomato Juicy"
          onSettings={handleSettings}
          onLogout={handleLogout}
        /> */}
        
        <Leaderboard /> {/* This is the actual content for this page */}
      {/* </div> */}
    </div>
  );
};

export default LeaderboardPage; // Export as LeaderboardPage
