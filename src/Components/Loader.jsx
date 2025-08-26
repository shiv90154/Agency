import React, { useEffect, useState } from 'react';
import './Loader.css'; // We'll create this CSS file

const Loader = ({ 
  type = "spinner", 
  color = "#3B82F6", 
  size = "medium", 
  text = "Welcome to Our Website",
  fullScreen = true,
  isLoading = true 
}) => {
  const [isVisible, setIsVisible] = useState(isLoading);

  useEffect(() => {
    setIsVisible(isLoading);
  }, [isLoading]);

  if (!isVisible) return null;

  const sizeMap = {
    small: { width: 24, height: 24 },
    medium: { width: 48, height: 48 },
    large: { width: 64, height: 64 }
  };

  const loaderSize = sizeMap[size] || sizeMap.medium;

  const renderLoader = () => {
    switch (type) {
      case "spinner":
        return (
          <div className="spinner-loader" style={{ 
            width: loaderSize.width, 
            height: loaderSize.height,
            borderColor: `${color} transparent transparent transparent`
          }}></div>
        );
      case "dots":
        return (
          <div className="dots-loader">
            <div style={{ backgroundColor: color }}></div>
            <div style={{ backgroundColor: color }}></div>
            <div style={{ backgroundColor: color }}></div>
          </div>
        );
      case "bars":
        return (
          <div className="bars-loader">
            <div style={{ backgroundColor: color }}></div>
            <div style={{ backgroundColor: color }}></div>
            <div style={{ backgroundColor: color }}></div>
          </div>
        );
      case "progress":
        return (
          <div className="progress-loader" style={{ backgroundColor: `${color}20` }}>
            <div 
              className="progress-bar" 
              style={{ backgroundColor: color }}
            ></div>
          </div>
        );
      default:
        return (
          <div className="spinner-loader" style={{ 
            width: loaderSize.width, 
            height: loaderSize.height,
            borderColor: `${color} transparent transparent transparent`
          }}></div>
        );
    }
  };

  return (
    <div className={`loader-container ${fullScreen ? 'full-screen' : 'inline'}`}>
      <div className="loader-content">
        {renderLoader()}
        {text && <p className="loader-text" style={{ color }}>{text}</p>}
      </div>
    </div>
  );
};

export default Loader;