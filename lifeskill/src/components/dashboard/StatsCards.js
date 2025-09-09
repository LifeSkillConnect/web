import React from 'react';
import './StatsCards.css';

const StatsCards = () => {
  const stats = [
    {
      id: 'ongoing',
      label: 'Ongoing Modules',
      value: '4',
      icon: '📁'
    },
    {
      id: 'completed',
      label: 'Completed Modules',
      value: '4',
      icon: '✓'
    },
    {
      id: 'rewards',
      label: 'Reward Points',
      value: '2340',
      icon: '🎁'
    }
  ];

  return (
    <div className="stats-cards">
      {stats.map(stat => (
        <div key={stat.id} className="stat-card">
          <div className="stat-icon">
            <span className="icon-symbol">{stat.icon}</span>
          </div>
          <div className="stat-content">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
