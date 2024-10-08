'use client';
// Dependencies
import React, { useState, useEffect } from 'react';
// Components
import FloatingImage from './FloatingImage';
// Data
import images from '@/data/TechLogos';

const FloatingImageContainer: React.FC = () => {
  const [containerSize, setContainerSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setContainerSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {images.map((image, index) => (
        <FloatingImage
          key={index}
          src={image.src}
          alt={image.alt}
          tooltip={image.tooltip}
          containerWidth={containerSize.width}
          containerHeight={containerSize.height}
        />
      ))}
    </div>
  );
};

export default FloatingImageContainer;
