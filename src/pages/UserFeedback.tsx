import React from 'react';
// Navbar and Sidebar should generally not be imported here if this is a page
// that will be rendered within a common Layout component.
// import Navbar from '../components/Navbar'; 
// import Sidebar from '../components/Sidebar'; 
import FeedbackForm from '../components/FeedbackForm'; // Assuming FeedbackForm exists
import "../styles/UserFeedback.css"; // Keep page-specific styles

const UserFeedback: React.FC = () => {
  // These handlers are no longer relevant here if Navbar/Sidebar are in Layout
  // const handleSidebarItemClick = (itemId: string) => {
  //   console.log('Sidebar item clicked:', itemId);
  //   // Handle navigation here
  // };

  const handleFeedbackSubmit = (data: { rating: number; feedback: string }) => {
    console.log('Feedback submitted:', data);
    // Handle feedback submission here (e.g., send to API, show success message)
  };

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
        
        <FeedbackForm onSubmit={handleFeedbackSubmit} /> {/* The actual content for this page */}
      {/* </div> */}
    </div>
  );
};

export default UserFeedback;
