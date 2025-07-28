import React, { useState, useRef, useEffect } from 'react';
import "../styles/Navbar.css";
interface NavbarProps {
  profileName?: string;
  onSettings?: () => void;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  profileName = "Tomato Juicy", 
  onSettings, 
  onLogout 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSettings = () => {
    setIsDropdownOpen(false);
    onSettings?.();
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
    onLogout?.();
  };


  return (
    <nav className="navbar">
      <div className="logo-container">
          <span className="logo-text">
            Talky<span className="logo-accent">Hands</span>
          </span>
        </div>
      
      <div className="navbar-profile" ref={dropdownRef}>
        <div 
          className={`profile-section ${isDropdownOpen ? 'open' : ''}`}
          onClick={toggleDropdown}
        >
          <div className="profile-avatar">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Profile" 
              className="profile-image"
            />
          </div>
          <span className="profile-name">{profileName}</span>
          <svg className="dropdown-arrow" viewBox="0 0 24 24">
            <path d="m7 10 5 5 5-5H7z"/>
          </svg>
        </div>

        {isDropdownOpen && (
          <div className="profile-dropdown">
            <button className="dropdown-item" onClick={handleSettings}>
              Settings
            </button>
            <button className="dropdown-item" onClick={handleLogout}>
              Log out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;