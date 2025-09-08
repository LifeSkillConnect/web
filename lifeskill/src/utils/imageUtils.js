/**
 * Image utility functions for handling responsive images and imports
 */

/**
 * Get responsive image path based on screen size
 * @param {string} basePath - Base path to the image folder
 * @param {string} imageName - Name of the image file
 * @param {string} screenSize - Screen size ('mobile', 'tablet', 'desktop')
 * @returns {string} - Full path to the responsive image
 */
export const getResponsiveImagePath = (basePath, imageName, screenSize = 'desktop') => {
  return `${basePath}/${screenSize}/${imageName}`;
};

/**
 * Import responsive images for different screen sizes
 * @param {string} basePath - Base path to the image folder
 * @param {string} imageName - Name of the image file
 * @returns {object} - Object containing paths for all screen sizes
 */
export const importResponsiveImages = (basePath, imageName) => {
  return {
    mobile: require(`${basePath}/mobile/${imageName}`),
    tablet: require(`${basePath}/tablet/${imageName}`),
    desktop: require(`${basePath}/desktop/${imageName}`)
  };
};

/**
 * Get image path for common assets
 * @param {string} category - Category of the image (icons, logos, backgrounds, etc.)
 * @param {string} subcategory - Subcategory within the main category
 * @param {string} imageName - Name of the image file
 * @returns {string} - Full path to the image
 */
export const getCommonImagePath = (category, subcategory, imageName) => {
  return `../assets/images/${category}/${subcategory}/${imageName}`;
};

/**
 * Get screen-specific image path
 * @param {string} screen - Screen name (auth, dashboard, profile, etc.)
 * @param {string} screenSize - Screen size ('mobile', 'tablet', 'desktop')
 * @param {string} imageName - Name of the image file
 * @returns {string} - Full path to the screen-specific image
 */
export const getScreenImagePath = (screen, screenSize, imageName) => {
  return `../assets/images/screens/${screen}/${screenSize}/${imageName}`;
};

/**
 * Image path constants for easy access
 */
export const IMAGE_PATHS = {
  // Common images
  COMMON: {
    MOBILE: '../assets/images/common/mobile/',
    TABLET: '../assets/images/common/tablet/',
    DESKTOP: '../assets/images/common/desktop/'
  },
  
  // Screen images
  SCREENS: {
    AUTH: '../assets/images/screens/auth/',
    DASHBOARD: '../assets/images/screens/dashboard/',
    PROFILE: '../assets/images/screens/profile/',
    SETTINGS: '../assets/images/screens/settings/',
    ONBOARDING: '../assets/images/screens/onboarding/'
  },
  
  // Icons
  ICONS: {
    NAVIGATION: '../assets/images/icons/navigation/',
    ACTIONS: '../assets/images/icons/actions/',
    STATUS: '../assets/images/icons/status/'
  },
  
  // Logos
  LOGOS: {
    BRAND: '../assets/images/logos/brand/',
    VARIANTS: '../assets/images/logos/variants/'
  },
  
  // Backgrounds
  BACKGROUNDS: {
    GRADIENTS: '../assets/images/backgrounds/gradients/',
    PATTERNS: '../assets/images/backgrounds/patterns/'
  },
  
  // Avatars
  AVATARS: {
    DEFAULTS: '../assets/images/avatars/defaults/',
    PLACEHOLDERS: '../assets/images/avatars/placeholders/'
  },
  
  // Illustrations
  ILLUSTRATIONS: {
    EMPTY_STATES: '../assets/images/illustrations/empty-states/',
    SUCCESS: '../assets/images/illustrations/success/',
    ERROR: '../assets/images/illustrations/error/'
  }
};

/**
 * Screen size breakpoints for responsive images
 */
export const SCREEN_SIZES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  DESKTOP: 'desktop'
};

/**
 * Get current screen size based on window width
 * @returns {string} - Current screen size
 */
export const getCurrentScreenSize = () => {
  const width = window.innerWidth;
  
  if (width < 768) {
    return SCREEN_SIZES.MOBILE;
  } else if (width < 1024) {
    return SCREEN_SIZES.TABLET;
  } else {
    return SCREEN_SIZES.DESKTOP;
  }
};
