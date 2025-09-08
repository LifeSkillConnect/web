import React, { useState, useEffect } from 'react';
import './OTPVerificationModal.css';
import logo from '../../assets/images/logos/brand/logo.png';
import backgroundImage from '../../assets/images/backgrounds/auth_back.jpg';

const OTPVerificationModal = ({ isOpen, onClose, email, onVerify, onBackToSignup }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isAnimating, setIsAnimating] = useState(false);
  const [resendTimer, setResendTimer] = useState(24);
  const [canResend, setCanResend] = useState(false);

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

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => {
        setResendTimer(resendTimer - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

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

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleContinue = () => {
    const otpString = otp.join('');
    if (otpString.length === 4) {
      onVerify(otpString);
    }
  };

  const handleResend = () => {
    if (canResend) {
      setResendTimer(24);
      setCanResend(false);
      // Implement resend logic here
      console.log('Resending OTP...');
    }
  };

  const maskEmail = (email) => {
    if (!email) return '';
    const [username, domain] = email.split('@');
    const maskedUsername = username.substring(0, 2) + '*'.repeat(username.length - 2);
    return `${maskedUsername}@${domain}`;
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`otp-modal-backdrop ${isAnimating ? 'modal-enter' : 'modal-exit'}`}
      onClick={handleBackdropClick}
    >
      <div className="background-image">
        <img src={backgroundImage} alt="Background" />
      </div>
      
      <div className={`otp-modal-container ${isAnimating ? 'modal-enter' : 'modal-exit'}`}>
        {/* Header */}
        <div className="otp-header">
          <div className="back-button" onClick={onBackToSignup}>
            <span className="material-icons">arrow_back</span>
          </div>
          <div className="header-logo">
            <img src={logo} alt="LifeSkills Connect Logo" className="logo" />
            <span className="logo-text">
              <span className="logo-text-light">LifeSkills</span>
              <span className="logo-text-bold"> Connect</span>
            </span>
          </div>
        </div>

        {/* Title Section */}
        <div className="otp-title-section">
          <h1 className="otp-main-title">
            OTP Verification
            <span className="surprised-icon">😲</span>
          </h1>
          <p className="otp-subtitle">We've sent you a confirmation code to your email</p>
          <p className="email-display">{maskEmail(email)}</p>
        </div>

        {/* OTP Input Fields */}
        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otp-input"
              maxLength={1}
            />
          ))}
        </div>

        {/* Continue Button */}
        <button 
          className={`otp-continue-button ${otp.join('').length === 4 ? 'enabled' : 'disabled'}`}
          onClick={handleContinue}
          disabled={otp.join('').length !== 4}
        >
          Continue
        </button>

        {/* Resend Section */}
        <div className="otp-resend-section">
          <span className="resend-text">
            {canResend ? (
              <span className="resend-link" onClick={handleResend}>Resend code</span>
            ) : (
              `Resend code, ${resendTimer}s`
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationModal;
