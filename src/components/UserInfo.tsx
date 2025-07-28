import React from 'react';
import '../styles/UserInfo.css';

interface UserInfoProps {
  name: string;
  email: string;
  joinDate: string;
  avatarUrl?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, joinDate, avatarUrl }) => {
  return (
    <div className="user-info">
      <div className="user-avatar">
        {avatarUrl ? (
          <img src={avatarUrl} alt={name} />
        ) : (
          <div className="avatar-placeholder">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <div className="user-details">
        <p className="user-name">{name}</p>
        <p className="user-email">{email}</p>
        <p className="user-join-date">Joined {joinDate}</p>
      </div>
    </div>
  );
};

export default UserInfo;