import React, { useState } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCards from './StatsCards';
import PremiumBanner from './PremiumBanner';
import ContinueLearning from './ContinueLearning';
import LearnSomethingNew from './LearnSomethingNew';
import RightSidebar from './RightSidebar';

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSidebarToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // TODO: Implement search functionality
    console.log('Searching for:', query);
  };

  const handleUpgradePremium = () => {
    // TODO: Implement premium upgrade functionality
    console.log('Upgrade to Premium clicked');
  };

  return (
    <div className="dashboard-container">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={handleSidebarToggle}
      />
      
      <div className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Header 
          onSearch={handleSearch}
          searchQuery={searchQuery}
        />
        
        <div className="dashboard-content">
          <div className="left-content">
            <PremiumBanner onUpgrade={handleUpgradePremium} />
            <StatsCards />
            <ContinueLearning />
            <LearnSomethingNew />
          </div>
          
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
