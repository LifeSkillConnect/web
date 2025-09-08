import React, { useState, useEffect } from 'react';
import './SignupModal.css';
import logo from '../../assets/images/logos/brand/logo.png';
import googleLogo from '../../assets/images/logos/brand/google.png';
import appleLogo from '../../assets/images/logos/brand/apple.png';
import backgroundImage from '../../assets/images/backgrounds/auth_back.jpg';

const SignupModal = ({ isOpen, onClose, onSignIn, onSignup }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignup = () => {
    if (formData.email && formData.password && formData.confirmPassword) {
      if (formData.password === formData.confirmPassword) {
        onSignup(formData);
      } else {
        alert('Passwords do not match');
      }
    }
  };

  const handleGoogleSignup = () => {
    console.log('Google signup clicked');
    // Implement Google signup logic
  };

  const handleAppleSignup = () => {
    console.log('Apple signup clicked');
    // Implement Apple signup logic
  };

  const handleSignInClick = () => {
    onSignIn();
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`signup-modal-backdrop ${isAnimating ? 'modal-enter' : 'modal-exit'}`}
      onClick={handleBackdropClick}
    >
      <div className="background-image">
        <img src={backgroundImage} alt="Background" />
      </div>
      
      <div className={`signup-modal-container ${isAnimating ? 'modal-enter' : 'modal-exit'}`}>
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
            Create An Account
            <span className="thumbs-icon">👍</span>
          </h1>
          <p className="subtitle">Sign Up and get started.</p>
        </div>

        {/* Social Login Buttons */}
        <div className="social-buttons">
          <button className="social-button google-button" onClick={handleGoogleSignup}>
            <img src={googleLogo} alt="Google" className="google-icon" />
            Continue with Google
          </button>
          
          <button className="social-button apple-button" onClick={handleAppleSignup}>
            <img src={appleLogo} alt="Apple" className="apple-icon" />
            Continue with Apple
          </button>
        </div>

        {/* Separator */}
        <div className="separator">
          <div className="separator-line"></div>
          <span className="separator-text">or</span>
          <div className="separator-line"></div>
        </div>

        {/* Form Fields */}
        <div className="form-fields">
          <div className="input-group">
            <label className="input-label">Email</label>
            <div className="input-container">
              <span className="input-icon email-icon">
                <span className="material-icons">email</span>
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="helloshivani24@gmail.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <div className="input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="form-input password-input"
              />
              <button 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-icons">
                  {showPassword ? 'visibility' : 'visibility_off'}
                </span>
              </button>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <div className="input-container">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className="form-input password-input"
              />
              <button 
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <span className="material-icons">
                  {showConfirmPassword ? 'visibility' : 'visibility_off'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Sign Up Button */}
        <button 
          className={`signup-button ${formData.email && formData.password && formData.confirmPassword ? 'enabled' : 'disabled'}`}
          onClick={handleSignup}
          disabled={!formData.email || !formData.password || !formData.confirmPassword}
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <div className="signin-section">
          <span className="signin-text">
            Already have an account? 
            <span className="signin-link" onClick={handleSignInClick}>Sign in</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
