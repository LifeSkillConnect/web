import React from 'react';
import ResponsiveImage from '../components/ResponsiveImage';
import { IMAGE_PATHS, getCommonImagePath, getScreenImagePath } from '../utils/imageUtils';

/**
 * Example component demonstrating how to use the image folder structure
 */
const ImageUsageExamples = () => {
  return (
    <div className="image-examples">
      <h2>Image Usage Examples</h2>
      
      {/* Example 1: Responsive Image Component */}
      <section>
        <h3>1. Responsive Image Component</h3>
        <ResponsiveImage
          basePath={IMAGE_PATHS.SCREENS.ONBOARDING}
          imageName="hero-image.jpg"
          alt="Hero image for onboarding"
          className="hero-image"
          fallbackSrc="/default-hero.jpg"
        />
      </section>

      {/* Example 2: Static Image Imports */}
      <section>
        <h3>2. Static Image Imports</h3>
        <img
          src={getCommonImagePath('logos', 'brand', 'main-logo.svg')}
          alt="Main Logo"
          className="logo"
        />
        
        <img
          src={getScreenImagePath('auth', 'desktop', 'login-bg.jpg')}
          alt="Login Background"
          className="auth-background"
        />
      </section>

      {/* Example 3: Icon Usage */}
      <section>
        <h3>3. Icon Usage</h3>
        <img
          src={getCommonImagePath('icons', 'navigation', 'dashboard.svg')}
          alt="Dashboard Icon"
          className="nav-icon"
        />
        
        <img
          src={getCommonImagePath('icons', 'actions', 'edit.svg')}
          alt="Edit Icon"
          className="action-icon"
        />
      </section>

      {/* Example 4: Avatar Usage */}
      <section>
        <h3>4. Avatar Usage</h3>
        <img
          src={getCommonImagePath('avatars', 'defaults', 'user-default.png')}
          alt="Default User Avatar"
          className="user-avatar"
        />
      </section>

      {/* Example 5: Illustration Usage */}
      <section>
        <h3>5. Illustration Usage</h3>
        <img
          src={getCommonImagePath('illustrations', 'empty-states', 'no-data.svg')}
          alt="No Data Illustration"
          className="empty-state-illustration"
        />
      </section>

      {/* Example 6: Background Usage */}
      <section>
        <h3>6. Background Usage</h3>
        <div 
          className="gradient-background"
          style={{
            backgroundImage: `url(${getCommonImagePath('backgrounds', 'gradients', 'primary-gradient.jpg')})`
          }}
        >
          <p>Content with gradient background</p>
        </div>
      </section>
    </div>
  );
};

export default ImageUsageExamples;
