import React, { useState, useEffect } from 'react';
import './LanguageSelectionModal.css';
import logo from '../../assets/images/logos/brand/logo.png';
import backgroundImage from '../../assets/images/backgrounds/auth_back.jpg';

const LanguageSelectionModal = ({ isOpen, onClose, onNext, onSignIn }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 
    'Russian', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi',
    'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish',
    'Czech', 'Hungarian', 'Romanian', 'Bulgarian', 'Croatian', 'Serbian',
    'Slovak', 'Slovenian', 'Estonian', 'Latvian', 'Lithuanian', 'Greek',
    'Turkish', 'Hebrew', 'Thai', 'Vietnamese', 'Indonesian', 'Malay',
    'Filipino', 'Swahili', 'Amharic', 'Yoruba', 'Igbo', 'Hausa'
  ];

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const handleNext = () => {
    if (selectedLanguage) {
      onNext(selectedLanguage);
    }
  };

  const handleSignIn = () => {
    onSignIn();
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`modal-backdrop ${isAnimating ? 'modal-enter' : 'modal-exit'}`}
      onClick={handleBackdropClick}
    >
      <div className="background-image">
        <img src={backgroundImage} alt="Background" />
      </div>
      
      <div className={`modal-container ${isAnimating ? 'modal-enter' : 'modal-exit'}`}>
        {/* Logo Section */}
        <div className="logo-section">
          <img src={logo} alt="LifeSkills Connect Logo" className="logo" />
          <span className="logo-text">
            <span className="logo-text-light">LifeSkills</span>
            <span className="logo-text-bold"> Connect</span>
          </span>
        </div>

        {/* Title Section */}
        <div className="title-section">
          <h1 className="main-title">
            Preferred Language!
            <span className="flag-icon">🏳️</span>
          </h1>
          <p className="subtitle">Select your preferred language.</p>
        </div>

        {/* Language Dropdown */}
        <div className="dropdown-container">
          <div 
            className={`dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="dropdown-text">{selectedLanguage}</span>
            <span className={`dropdown-arrow ${isDropdownOpen ? 'arrow-up' : 'arrow-down'}`}>⌄</span>
          </div>
          
          {isDropdownOpen && (
            <div className="dropdown-menu">
              {languages.map((language) => (
                <div
                  key={language}
                  className={`dropdown-item ${selectedLanguage === language ? 'selected' : ''}`}
                  onClick={() => handleLanguageSelect(language)}
                >
                  {language}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Next Button */}
        <button 
          className={`next-button ${selectedLanguage ? 'enabled' : 'disabled'}`}
          onClick={handleNext}
          disabled={!selectedLanguage}
        >
          Next
        </button>

        {/* Sign In Link */}
        <div className="signin-section">
          <span className="signin-text">
            Already have an account? 
            <span className="signin-link" onClick={handleSignIn}>Sign in</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionModal;
