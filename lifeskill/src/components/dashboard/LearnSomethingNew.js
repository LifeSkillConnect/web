import React from 'react';
import './LearnSomethingNew.css';
import moduleImage1 from '../../assets/images/screens/dashboard/desktop/person2.jpg';
import moduleImage2 from '../../assets/images/screens/dashboard/desktop/person3.jpg';
import moduleImage3 from '../../assets/images/screens/dashboard/desktop/person4.jpg';

const LearnSomethingNew = () => {
  const modules = [
    {
      id: 'interview-skills-1',
      title: 'Interview and workplace skills',
      rating: 4.6,
      reviews: 344,
      image: moduleImage1
    },
    {
      id: 'interview-skills-2',
      title: 'Interview and workplace skills',
      rating: 4.6,
      reviews: 344,
      image: moduleImage2
    },
    {
      id: 'interview-skills-3',
      title: 'Interview and workplace skills',
      rating: 4.6,
      reviews: 344,
      image: moduleImage3
    }
  ];

  const handleModuleClick = (moduleId) => {
    console.log('Module clicked:', moduleId);
  };

  const handleViewAll = () => {
    console.log('View all new modules');
  };

  return (
    <div className="learn-something-new">
      <div className="section-header">
        <h3 className="section-title">Learn Something New</h3>
        <button className="view-all-btn" onClick={handleViewAll}>
          View All
        </button>
      </div>

      <div className="modules-container">
        {modules.map(module => (
          <div 
            key={module.id} 
            className="module-card"
          >
            <div className="module-image-container">
              <img src={module.image} alt={module.title} className="module-image" />
            </div>
            
            <div className="module-info">
              <h4 className="module-title">{module.title}</h4>
              <div className="module-rating">
                <span className="star">★</span>
                <span className="rating-number">{module.rating}</span>
                <span className="reviews-text">-{module.reviews} Reviews</span>
              </div>
              <button 
                className="view-module-button" 
                onClick={() => handleModuleClick(module.id)}
              >
                View Module
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearnSomethingNew;