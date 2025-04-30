import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-wrapper">
      <div className="spinner"></div>
      <p className="loading-text">Ładowanie...</p>
    </div>
  );
};

export default LoadingSpinner;