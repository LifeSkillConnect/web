import React from 'react';
import './Sidebar.css';
import logo from '../../assets/images/logos/brand/logo.png';
import dashboardIcon from '../../assets/images/icons/navigation/dash-icon.png';
import modulesIcon from '../../assets/images/icons/navigation/modules.png';
import modulesSeeIcon from '../../assets/images/icons/navigation/modules-see.png';
import gptIcon from '../../assets/images/icons/navigation/gpt.png';
import avatarIcon from '../../assets/images/icons/navigation/avatar.png';
import chattingIcon from '../../assets/images/icons/navigation/chatting.png';
import alertIcon from '../../assets/images/icons/navigation/alert.png';
import mapIcon from '../../assets/images/icons/navigation/map.png';

const Sidebar = ({ collapsed, onToggle }) => {
  const mainNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '⊞', iconImage: dashboardIcon, active: true },
    { id: 'my-modules', label: 'My Modules', icon: '📁', iconImage: modulesIcon },
    { id: 'modules', label: 'Modules', icon: '📚', iconImage: modulesSeeIcon },
    { id: 'lsc-gpt', label: 'LSC GPT', icon: '🤖', iconImage: gptIcon },
    { id: 'profile', label: 'Profile', icon: '👤', iconImage: avatarIcon }
  ];

  const safeguardingItems = [
    { id: 'crisis-help', label: 'Crisis Help', icon: '💼', iconImage: modulesIcon },
    { id: 'anonymous-chat', label: 'Anonymous Chat', icon: '💬', iconImage: chattingIcon },
    { id: 'report-abuse', label: 'Report Abuse', icon: '⚠', iconImage: alertIcon },
    { id: 'safe-space-map', label: 'Safe Space Map', icon: '📍', iconImage: mapIcon }
  ];

  const handleNavClick = (itemId) => {
    // TODO: Implement navigation
    console.log('Navigating to:', itemId);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      {collapsed ? (
        // Collapsed state - only logo and expand icon
        <div className="sidebar-collapsed">
          <div className="collapsed-logo">
            <img src={logo} alt="LifeSkills Connect" className="logo" />
          </div>
          <button className="expand-button" onClick={onToggle}>
            <span className="expand-icon">→</span>
          </button>
        </div>
      ) : (
        // Expanded state - full sidebar
        <>
          <div className="sidebar-header">
            <div className="logo-section">
              <img src={logo} alt="LifeSkills Connect" className="logo" />
              <span className="logo-text">
                <span className="logo-text-light">LifeSkills</span>
                <span className="logo-text-bold"> Connect</span>
              </span>
            </div>
            <button className="sidebar-toggle" onClick={onToggle}>
              <span className="icon-symbol">✕</span>
            </button>
          </div>

          <nav className="sidebar-nav">
            <div className="nav-section">
              <h3 className="nav-section-title">Main</h3>
              <ul className="nav-list">
                {mainNavItems.map(item => (
                  <li key={item.id} className="nav-item">
                    <button 
                      className={`nav-link ${item.active ? 'active' : ''}`}
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.iconImage ? (
                        <img src={item.iconImage} alt={item.label} className="nav-icon-image" />
                      ) : (
                        <span className="icon-symbol nav-icon">{item.icon}</span>
                      )}
                      <span className="nav-label">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav-section">
              <h3 className="nav-section-title">Safe Guarding Tools</h3>
              <ul className="nav-list">
                {safeguardingItems.map(item => (
                  <li key={item.id} className="nav-item">
                    <button 
                      className="nav-link"
                      onClick={() => handleNavClick(item.id)}
                    >
                      {item.iconImage ? (
                        <img src={item.iconImage} alt={item.label} className="nav-icon-image" />
                      ) : (
                        <span className="icon-symbol nav-icon">{item.icon}</span>
                      )}
                      <span className="nav-label">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default Sidebar;
