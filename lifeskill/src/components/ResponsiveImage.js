import React, { useState, useEffect } from 'react';
import { getCurrentScreenSize, getResponsiveImagePath } from '../utils/imageUtils';

/**
 * ResponsiveImage component that automatically loads the appropriate image
 * based on the current screen size
 */
const ResponsiveImage = ({ 
  basePath, 
  imageName, 
  alt, 
  className, 
  fallbackSrc,
  ...props 
}) => {
  const [screenSize, setScreenSize] = useState(getCurrentScreenSize());
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getCurrentScreenSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    try {
      const responsivePath = getResponsiveImagePath(basePath, imageName, screenSize);
      setImageSrc(responsivePath);
    } catch (error) {
      console.warn(`Failed to load responsive image: ${imageName}`, error);
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      }
    }
  }, [screenSize, basePath, imageName, fallbackSrc]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export default ResponsiveImage;
