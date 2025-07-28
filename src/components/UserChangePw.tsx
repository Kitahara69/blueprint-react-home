import React, { useState, useEffect } from 'react';
import '../styles/UserChangePw.css';

interface UserChangePwProps {
  onSave?: (data: PasswordData) => void;
  onCancel?: () => void;
}

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface PasswordRequirements {
  minLength: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
  hasUppercase: boolean;
}

const UserChangePw: React.FC<UserChangePwProps> = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState<PasswordData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [requirements, setRequirements] = useState<PasswordRequirements>({
    minLength: false,
    hasNumber: false,
    hasSpecialChar: false,
    hasUppercase: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validatePassword = (password: string): PasswordRequirements => {
    return {
      minLength: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasUppercase: /[A-Z]/.test(password)
    };
  };

  useEffect(() => {
    setRequirements(validatePassword(formData.newPassword));
  }, [formData.newPassword]);

  const isFormValid = () => {
    const { minLength, hasNumber, hasSpecialChar, hasUppercase } = requirements;
    return (
      formData.currentPassword &&
      formData.newPassword &&
      formData.confirmPassword &&
      minLength &&
      hasNumber &&
      hasSpecialChar &&
      hasUppercase &&
      formData.newPassword === formData.confirmPassword
    );
  };

  const handleSave = () => {
    if (isFormValid()) {
      onSave?.(formData);
    }
  };

  const handleCancel = () => {
    onCancel?.();
  };

  const RequirementItem: React.FC<{ isValid: boolean; text: string }> = ({ isValid, text }) => (
    <div className="requirement-item">
      <div className={`requirement-icon ${isValid ? 'valid' : 'invalid'}`}>
        {isValid ? '✓' : '✕'}
      </div>
      <span>{text}</span>
    </div>
  );

  return (
    <div className="change-password-container">
      <h2 className="change-password-title">Change Password</h2>
      
      <div className="password-form-container">
        <form className="password-form">
          <div className="form-group">
            <label className="form-label">Current password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter current password"
            />
          </div>

          <div className="form-group">
            <label className="form-label">New password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter new password"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Confirm new password"
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={handleCancel} className="btn btn-secondary">
              Cancel
            </button>
            <button 
              type="button" 
              onClick={handleSave} 
              className="btn btn-primary"
              disabled={!isFormValid()}
            >
              Save changes
            </button>
          </div>
        </form>

        <div className="password-requirements">
          <h3 className="requirements-title">Your password must contain:</h3>
          <RequirementItem 
            isValid={requirements.minLength} 
            text="A minimum of 8 characters" 
          />
          <RequirementItem 
            isValid={requirements.hasNumber} 
            text="At least 1 number" 
          />
          <RequirementItem 
            isValid={requirements.hasSpecialChar} 
            text="At least 1 special character" 
          />
          <RequirementItem 
            isValid={requirements.hasUppercase} 
            text="At least 1 uppercase letter" 
          />
        </div>
      </div>
    </div>
  );
};

export default UserChangePw;