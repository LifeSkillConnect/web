import React from 'react';
import './RightSidebar.css';
import aiMentorIcon from '../../assets/images/screens/dashboard/desktop/bot.png';
import achievement1 from '../../assets/images/screens/dashboard/desktop/person1.jpg';
import achievement2 from '../../assets/images/screens/dashboard/desktop/person2.jpg';
import achievement3 from '../../assets/images/screens/dashboard/desktop/person3.jpg';

const RightSidebar = () => {
  const achievements = [
    {
      id: 'financial-literacy',
      title: 'Financial literacy and Budgeting',
      user: 'Andrew Dickson',
      timeAgo: '2 days ago',
      points: 20,
      avatar: achievement1
    },
    {
      id: 'investment-strategies',
      title: 'Investment Strategies',
      user: 'Jessica Lee',
      timeAgo: '3 days ago',
      points: 15,
      avatar: achievement2
    },
    {
      id: 'credit-scores',
      title: 'Understanding Credit Scores',
      user: 'Michael Smith',
      timeAgo: '1 week ago',
      points: 25,
      avatar: achievement3
    }
  ];

  const handleAIMentorClick = () => {
    // TODO: Implement AI mentor functionality
    console.log('AI Mentor clicked');
  };

  const handleRewardSectionClick = () => {
    // TODO: Implement reward section functionality
    console.log('Reward Section clicked');
  };

  const handleCrisisHelpClick = () => {
    // TODO: Implement crisis help functionality
    console.log('Crisis Help clicked');
  };

  return (
    <div className="right-sidebar">
      {/* AI Mentor Card */}
      <div className="ai-mentor-card">
        <div className="mentor-content">
          <div className="mentor-text">
            <h3 className="mentor-title">Your 24/7 AI Mentor</h3>
            <p className="mentor-description">
              Get instant guidance, answers, and support anytime.
            </p>
            <button className="start-search-btn" onClick={handleAIMentorClick}>
              Start Search
            </button>
          </div>
          <div className="mentor-icon">
            <img src={aiMentorIcon} alt="AI Mentor" />
          </div>
        </div>
      </div>

      {/* Reward Section */}
      <div className="reward-section">
        <h3 className="reward-title">Reward section</h3>
        
        <div className="level-info">
          <span className="icon-symbol level-icon">🏆</span>
          <span className="level-text">Silver Level</span>
        </div>

        <div className="goal-progress">
          <div className="progress-header">
            <span className="progress-label">Goal Progress</span>
            <span className="progress-percentage">70% toward Gold Level</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '70%' }}></div>
          </div>
          <span className="icon-symbol gold-icon">🏆</span>
        </div>

        <div className="recent-achievements">
          <h4 className="achievements-title">Recent Achievements</h4>
          <div className="achievements-list">
            {achievements.map(achievement => (
              <div key={achievement.id} className="achievement-item">
                <img 
                  src={achievement.avatar} 
                  alt={achievement.user}
                  className="achievement-avatar"
                />
                <div className="achievement-content">
                  <div className="achievement-title">{achievement.title}</div>
                  <div className="achievement-user">{achievement.user}, {achievement.timeAgo}</div>
                </div>
                <div className="achievement-points">{achievement.points}pts</div>
              </div>
            ))}
          </div>
        </div>

        <button className="reward-section-btn" onClick={handleRewardSectionClick}>
          Reward Section
        </button>
      </div>

      {/* Crisis Help */}
      <div className="crisis-help-card">
        <div className="crisis-content">
          <div className="crisis-header">
            <span className="icon-symbol crisis-icon">❤</span>
            <h3 className="crisis-title">Crisis Help</h3>
          </div>
          <h4 className="crisis-subtitle">Crisis Help Hotline</h4>
          <p className="crisis-description">Get help anytime and anywhere</p>
          <button className="crisis-btn" onClick={handleCrisisHelpClick}>
            Call Hotline
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
