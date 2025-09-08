import React, { useState } from 'react';
import './App.css';
import LanguageSelectionModal from './components/onboarding/LanguageSelectionModal';
import SignupModal from './components/onboarding/SignupModal';
import OTPVerificationModal from './components/onboarding/OTPVerificationModal';
import './assets/fonts/satoshi.css';

function App() {
  const [showLanguageModal, setShowLanguageModal] = useState(true);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleCloseLanguageModal = () => {
    setShowLanguageModal(false);
  };

  const handleNext = (language) => {
    console.log('Selected language:', language);
    setSelectedLanguage(language);
    setShowLanguageModal(false);
    setShowSignupModal(true);
  };

  const handleSignInFromLanguage = () => {
    console.log('Sign in clicked from language modal');
    setShowLanguageModal(false);
    // Navigate to sign in screen (to be implemented)
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  const handleSignup = (formData) => {
    console.log('Signup data:', formData);
    console.log('Selected language:', selectedLanguage);
    setUserEmail(formData.email);
    setShowSignupModal(false);
    setShowOTPModal(true);
  };

  const handleSignInFromSignup = () => {
    console.log('Sign in clicked from signup modal');
    setShowSignupModal(false);
    // Navigate to sign in screen (to be implemented)
  };

  const handleCloseOTPModal = () => {
    setShowOTPModal(false);
  };

  const handleBackToSignup = () => {
    setShowOTPModal(false);
    setShowSignupModal(true);
  };

  const handleOTPVerify = (otp) => {
    console.log('OTP verified:', otp);
    console.log('User email:', userEmail);
    // Process OTP verification
    setShowOTPModal(false);
  };

  return (
    <div className="App">
      <LanguageSelectionModal
        isOpen={showLanguageModal}
        onClose={handleCloseLanguageModal}
        onNext={handleNext}
        onSignIn={handleSignInFromLanguage}
      />
      
      <SignupModal
        isOpen={showSignupModal}
        onClose={handleCloseSignupModal}
        onSignIn={handleSignInFromSignup}
        onSignup={handleSignup}
      />
      
      <OTPVerificationModal
        isOpen={showOTPModal}
        onClose={handleCloseOTPModal}
        email={userEmail}
        onVerify={handleOTPVerify}
        onBackToSignup={handleBackToSignup}
      />
    </div>
  );
}

export default App;
