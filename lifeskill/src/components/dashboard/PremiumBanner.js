import React from 'react';
import './PremiumBanner.css';
import medalImage from '../../assets/images/screens/dashboard/desktop/gold-medal.png';
import starImage from '../../assets/images/screens/dashboard/desktop/star.png';
import ellipseGradient from '../../assets/images/backgrounds/gradients/Ellipse.png';

const PremiumBanner = ({ onUpgrade }) => {
  return (
    <div className="premium-banner">
      {/* Ellipse Gradient at Top Center */}
      <div className="ellipse-gradient">
        <img src={ellipseGradient} alt="Gradient" />
      </div>
      
      {/* Scattered Stars */}
      <div className="star star-1">
        <img src={starImage} alt="Star" />
      </div>
      <div className="star star-2">
        <img src={starImage} alt="Star" />
      </div>
      <div className="star star-3">
        <img src={starImage} alt="Star" />
      </div>
      <div className="star star-4">
        <img src={starImage} alt="Star" />
      </div>
      <div className="star star-5">
        <img src={starImage} alt="Star" />
      </div>
      <div className="star star-6">
        <img src={starImage} alt="Star" />
      </div>
      <div className="star star-7">
        <img src={starImage} alt="Star" />
      </div>
      <div className="star star-8">
        <img src={starImage} alt="Star" />
      </div>
      
      <div className="banner-content">
        <div className="banner-text">
          <h2 className="banner-title">Level Up with Premium</h2>
          <p className="banner-description">
            Unlock pro skills, mentor support, and tools to grow faster.
          </p>
          <button className="upgrade-btn" onClick={onUpgrade}>
            Upgrade to Premium
          </button>
        </div>
        <div className="banner-image">
          <img src={medalImage} alt="Premium Medal" className="medal-image" />
        </div>
      </div>
    </div>
  );
};

export default PremiumBanner;
