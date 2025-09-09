import React from 'react';
import './ContinueLearning.css';
import moduleImage from '../../assets/images/screens/dashboard/desktop/person1.jpg';

const ContinueLearning = () => {
  const currentModule = {
    id: 'financial-literacy',
    title: 'Financial literacy and budgeting',
    progress: 80,
    image: moduleImage,
    isFree: true
  };

  const handleContinue = () => {
    console.log('Continue learning:', currentModule.id);
  };

  const handleViewAll = () => {
    console.log('View all modules');
  };

  return (
    <div className="continue-learning">
      <div className="section-header">
        <h3 className="section-title">Continue Learning</h3>
        <button className="view-all-btn" onClick={handleViewAll}>
          View All
        </button>
      </div>

      <div className="learning-card">
        <div className="card-image">
          <img src={currentModule.image} alt={currentModule.title} />
        </div>
        
        <div className="card-content">
          <div className="free-badge">Free</div>
          <h4 className="course-title">{currentModule.title}</h4>
          <div className="progress-info">
            <span className="progress-text">Progress: {currentModule.progress}%</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${currentModule.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="card-button">
          <button className="continue-button" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContinueLearning;