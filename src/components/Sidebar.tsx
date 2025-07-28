import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import hooks
import "../styles/Sidebar.css";

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

// SidebarProps no longer needs activeItem or onItemClick as it will manage navigation internally
interface SidebarProps {} 

const Sidebar: React.FC<SidebarProps> = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook to get current URL path

  const menuItems: SidebarItem[] = [
    {
      id: 'profile',
      label: 'Profile',
      href: '/profile',
      icon: (
        <svg className="sidebar-icon" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    },
    {
      id: 'learn-asl',
      label: 'Learn ASL',
      href: '/learn-asl',
      icon: (
        <svg className="sidebar-icon" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      )
    },
    {
      id: 'leaderboards',
      label: 'Leaderboards',
      href: '/leaderboards',
      icon: (
        <svg className="sidebar-icon" viewBox="0 0 24 24">
          <path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>
        </svg>
      )
    },
    {
      id: 'achievements',
      label: 'Achievements',
      href: '/achievements',
      icon: (
        <svg className="sidebar-icon" viewBox="0 0 24 24">
          <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5 10H12v2h7.5v-2zm0-18H12V1h7.5v2zM12 5h-2v4h2V5zm0 6H5v8h2v-6h2v4h2v-4h1v6h2v-8z"/>
        </svg>
      )
    },
    {
      id: 'sign-bot',
      label: 'Sign bot',
      href: '/sign-bot',
      icon: (
        <svg className="sidebar-icon" viewBox="0 0 24 24">
          <path d="M20 9V7c0-1.1-.9-2-2-2h-3c0-1.66-1.34-3-3-3S9 3.34 9 5H6c-1.1 0-2 .9-2 2v2c-1.66 0-3 1.34-3 3s1.34 3 3 3v4c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4c1.66 0 3-1.34 3-3s-1.34-3-3-3zM7.5 11.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      id: 'feedback',
      label: 'Feedback',
      href: '/feedback',
      icon: (
        <svg className="sidebar-icon" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      )
    },
    {
      id: 'settings',
      label: 'Settings',
      href: '/settings',
      icon: (
        <svg className="sidebar-icon" viewBox="0 0 24 24">
          <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
        </svg>
      )
    }
  ];

  const handleItemClickInternal = (item: SidebarItem) => {
    navigate(item.href); // Use navigate to change the route
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isCollapsed ? '→' : '←'}
      </button>

      <nav>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.id} className="sidebar-item">
              <a
                href={item.href} // Keep href for accessibility/fallback
                className={`sidebar-link ${location.pathname === item.href ? 'active' : ''}`} // Check active based on current path
                onClick={(e) => {
                  e.preventDefault(); // Prevent full page reload
                  handleItemClickInternal(item);
                }}
              >
                {item.icon}
                {!isCollapsed && <span className="sidebar-label">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
