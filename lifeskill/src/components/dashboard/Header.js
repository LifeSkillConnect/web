import React from 'react';
import './Header.css';
import zeenoAvatar from '../../assets/images/avatars/placeholders/zeeno.jpg';
import verifiedIcon from '../../assets/images/icons/status/verified.png';
import notificationIcon from '../../assets/images/icons/actions/notifications.png';
import searchIcon from '../../assets/images/icons/actions/search.png';

const Header = ({ onSearch, searchQuery }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleNotificationClick = () => {
    // TODO: Implement notification functionality
    console.log('Notifications clicked');
  };

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <div className="user-profile">
          <img src={zeenoAvatar} alt="Zeeno" className="user-avatar" />
          <div className="user-info">
            <div className="user-name">
              Zeeno.
              <img src={verifiedIcon} alt="Verified" className="verified-badge" />
            </div>
            <div className="user-greeting">Hey Zeeno, ready to grow today?</div>
          </div>
        </div>
      </div>

      <div className="header-center">
        <div className="search-container">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <button className="notification-btn" onClick={handleNotificationClick}>
          <img src={notificationIcon} alt="Notifications" className="notification-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
