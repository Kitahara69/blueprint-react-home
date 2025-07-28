import React, { useEffect, useState } from 'react';
import "../styles/CustomToast.css";

interface CustomToastProps {
  title: string;
  description: string;
  type: 'success' | 'error';
  show: boolean;
  onHide: () => void;
}

const CustomToast: React.FC<CustomToastProps> = ({ title, description, type, show, onHide }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onHide, 300); // Wait for animation to complete
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  if (!show && !isVisible) return null;

  return (
    <div className={`custom-toast ${type} ${!isVisible ? 'hide' : ''}`}>
      <div className="toast-title">{title}</div>
      <div className="toast-description">{description}</div>
    </div>
  );
};

export default CustomToast;