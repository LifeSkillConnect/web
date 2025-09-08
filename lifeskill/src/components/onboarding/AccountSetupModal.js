import React, { useState, useEffect } from 'react';
import './AccountSetupModal.css';
import logo from '../../assets/images/logos/brand/logo.png';
import backgroundImage from '../../assets/images/backgrounds/auth_back.jpg';

const AccountSetupModal = ({ isOpen, onClose, onNext, onSignIn }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    phoneNumber: '',
    dateOfBirth: '',
    hearAboutUs: 'None'
  });
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [errors, setErrors] = useState({});

  const hearAboutUsOptions = [
    'None', 'Social Media', 'Friend/Family', 'Advertisement', 
    'Search Engine', 'App Store', 'Other'
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

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleDropdownSelect = (option) => {
    setFormData(prev => ({
      ...prev,
      hearAboutUs: option
    }));
    setIsDropdownOpen(false);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.userName.trim()) {
      newErrors.userName = 'Username is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    }
    
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validateForm()) {
      onNext(formData);
    }
  };

  const handleSignIn = () => {
    onSignIn();
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`account-setup-backdrop ${isAnimating ? 'account-setup-enter' : 'account-setup-exit'}`}
      onClick={handleBackdropClick}
    >
      <div className="account-setup-background-image">
        <img src={backgroundImage} alt="Background" />
      </div>
      
      <div className={`account-setup-container ${isAnimating ? 'account-setup-enter' : 'account-setup-exit'}`}>
        {/* Logo Section */}
        <div className="account-setup-logo-section">
          <img src={logo} alt="LifeSkills Connect Logo" className="account-setup-logo" />
          <span className="account-setup-logo-text">
            <span className="account-setup-logo-text-light">LifeSkills</span>
            <span className="account-setup-logo-text-bold"> Connect</span>
          </span>
        </div>

        {/* Title Section */}
        <div className="account-setup-title-section">
          <h1 className="account-setup-main-title">Account Set up</h1>
          <p className="account-setup-subtitle">Let's complete your account.</p>
        </div>

        {/* Form Fields */}
        <div className="account-setup-form">
          {/* Full Name */}
          <div className="account-setup-field">
            <label className="account-setup-label">Full name</label>
            <input
              type="text"
              className={`account-setup-input ${errors.fullName ? 'error' : ''}`}
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
            />
            {errors.fullName && <span className="account-setup-error">{errors.fullName}</span>}
          </div>

          {/* User Name */}
          <div className="account-setup-field">
            <label className="account-setup-label">User name</label>
            <input
              type="text"
              className={`account-setup-input ${errors.userName ? 'error' : ''}`}
              placeholder="Enter your username"
              value={formData.userName}
              onChange={(e) => handleInputChange('userName', e.target.value)}
            />
            {errors.userName && <span className="account-setup-error">{errors.userName}</span>}
          </div>

          {/* Phone Number */}
          <div className="account-setup-field">
            <label className="account-setup-label">Phone Number</label>
            <input
              type="tel"
              className={`account-setup-input ${errors.phoneNumber ? 'error' : ''}`}
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            />
            {errors.phoneNumber && <span className="account-setup-error">{errors.phoneNumber}</span>}
          </div>

          {/* Date of Birth */}
          <div className="account-setup-field">
            <label className="account-setup-label">Date Of Birth</label>
            <div className="account-setup-date-container">
              <span className="account-setup-calendar-icon material-icons">calendar_today</span>
              <input
                type="date"
                className={`account-setup-input account-setup-date-input ${errors.dateOfBirth ? 'error' : ''}`}
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              />
            </div>
            {errors.dateOfBirth && <span className="account-setup-error">{errors.dateOfBirth}</span>}
          </div>

          {/* How did you hear about us */}
          <div className="account-setup-field">
            <label className="account-setup-label">How did You hear about us</label>
            <div className="account-setup-dropdown-container">
              <div 
                className={`account-setup-dropdown ${isDropdownOpen ? 'account-setup-dropdown-open' : ''}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="account-setup-dropdown-text">{formData.hearAboutUs}</span>
                <span className={`account-setup-dropdown-arrow ${isDropdownOpen ? 'account-setup-arrow-up' : 'account-setup-arrow-down'}`}>⌄</span>
              </div>
              
              {isDropdownOpen && (
                <div className="account-setup-dropdown-menu">
                  {hearAboutUsOptions.map((option) => (
                    <div
                      key={option}
                      className={`account-setup-dropdown-item ${formData.hearAboutUs === option ? 'account-setup-selected' : ''}`}
                      onClick={() => handleDropdownSelect(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sign Up Button */}
        <button 
          className="account-setup-signup-button"
          onClick={handleSignUp}
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <div className="account-setup-signin-section">
          <span className="account-setup-signin-text">
            Already have an account? 
            <span className="account-setup-signin-link" onClick={handleSignIn}>Sign in</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AccountSetupModal;
