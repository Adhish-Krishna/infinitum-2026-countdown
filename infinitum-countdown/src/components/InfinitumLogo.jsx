import React from 'react';
import './InfinitumLogo.css';
import infinitumLogo from '../assets/infinitum.png'; // Update this path to match your actual logo file

const InfinitumLogo = () => {
  return (
    <div className="logo-container">
      <img 
        src={infinitumLogo} 
        alt="Infinitum Logo" 
        className="logo-image"
      />
    </div>
  );
};

export default InfinitumLogo;
