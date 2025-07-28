import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/LeaderboardPage.css'; // Contains app-container, main-content styles
import '../styles/Layout.css';
const Layout: React.FC = () => {
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);

  const handleSettings = () => {
    console.log('Settings clicked from Navbar');
    // In a real app, you might navigate to /settings or open a modal
  };

  const handleLogout = () => {
    console.log('Logout clicked from Navbar');
    // Implement actual logout logic here (e.g., clear tokens, redirect)
    setShowLogoutMessage(true); // Show the custom message box
    setTimeout(() => {
      setShowLogoutMessage(false); // Hide after a few seconds
      // Optionally, redirect to login page here after a delay
    }, 2000);
  };

  return (
    <div className="app-container">
      <Sidebar />

      <div className="main-content">
        <Navbar
          profileName="Tomato Juicy"
          onSettings={handleSettings}
          onLogout={handleLogout}
        />

        {/* Outlet renders the matched child route component */}
        <div className="page-content-scrollable"> {/* New div for scrollable content */}
          <Outlet />
        </div>
      </div>

      {/* Custom Logout Message Box */}
      {showLogoutMessage && (
        <div className="logout-message-box">
          <p>You have been logged out!</p>
        </div>
      )}
    </div>
  );
};

export default Layout;
