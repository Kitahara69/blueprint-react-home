import React, { useState } from 'react';
import '../styles/UserEditProfile.css';

interface UserEditProfileProps {
  onSave?: (data: ProfileData) => void;
  onCancel?: () => void;
}

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  avatar?: File | null;
}

const UserEditProfile: React.FC<UserEditProfileProps> = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState<ProfileData>({
    firstName: 'Tameka',
    lastName: '',
    email: 'tameka@gmail.com',
    country: 'Myanmar'
  });

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const countries = [
    'Myanmar', 'United States', 'United Kingdom', 'Canada', 'Australia', 
    'Germany', 'France', 'Japan', 'South Korea', 'Singapore'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, avatar: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave?.(formData);
  };

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <div className="edit-profile-container">
      <h2 className="edit-profile-title">Edit Profile</h2>
      
      <div className="avatar-section">
        <div className="avatar-container">
          {avatarPreview ? (
            <img src={avatarPreview} alt="Avatar" className="avatar-image" />
          ) : (
            <div className="avatar-placeholder">👤</div>
          )}
        </div>
        <div className="avatar-upload">
          <p className="upload-text">Click or drag file to this area to upload</p>
          <label htmlFor="avatar-upload" className="upload-link">
            Browse
          </label>
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </div>
      </div>

      <form className="profile-form">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter first name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="form-select"
            >
              {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter last name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Details</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter details"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
            placeholder="Enter email address"
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={handleCancel} className="btn btn-secondary">
            Cancel
          </button>
          <button type="button" onClick={handleSave} className="btn btn-primary">
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEditProfile;