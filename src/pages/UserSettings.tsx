import React from 'react';
import UserEditProfile from '../components/UserEditProfile';
import UserChangePw from '../components/UserChangePw';
import '../styles/UserSettings.css'; // Import the CSS file

const UserSettings: React.FC = () => {
  const handleProfileSave = (data: any) => {
    console.log('Profile saved:', data);
    // Handle profile save logic here
  };

  const handlePasswordSave = (data: any) => {
    console.log('Password changed:', data);
    // Handle password change logic here
  };

  const handleCancel = () => {
    console.log('Action cancelled');
    // Handle cancel logic here
  };

  return (
    <div className="user-settings-page"> {/* Apply the main page class */}
      <div className="user-settings-container"> {/* Apply the container class */}
        <h1 className="user-settings-title">
          Settings
        </h1>

        <UserEditProfile
          onSave={handleProfileSave}
          onCancel={handleCancel}
        />

        <UserChangePw
          onSave={handlePasswordSave}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default UserSettings;