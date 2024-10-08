// Dependencies
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface FloatingImageProps {
  src: string;
  alt: string;
  tooltip: string;
  containerWidth: number;
  containerHeight: number;
}

const getRandomSpeed = () => Math.random() * 2 + 1; // Speed between 1 and 3

const FloatingImage: React.FC<FloatingImageProps> = ({ src, alt, tooltip, containerWidth, containerHeight }) => {
  const [position, setPosition] = useState({ x: Math.random() * containerWidth, y: Math.random() * containerHeight, z: 0 });
  const [direction, setDirection] = useState({ x: getRandomSpeed(), y: getRandomSpeed(), z: getRandomSpeed() });
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('FloatingImage props:', { src, alt, tooltip, containerWidth, containerHeight });
    const move = () => {
      setPosition((prev) => {
        let newX = prev.x + direction.x;
        let newY = prev.y + direction.y;
        let newZ = prev.z + direction.z;

        if (newX < 0 || newX > containerWidth - 100) setDirection((d) => ({ ...d, x: -d.x })); // Bounce on X axis
        if (newY < 0 || newY > containerHeight - 100) setDirection((d) => ({ ...d, y: -d.y })); // Bounce on Y axis
        if (newZ < -100 || newZ > 100) setDirection((d) => ({ ...d, z: -d.z })); // Bounce on Z axis (for depth)

        return { x: newX, y: newY, z: newZ };
      });
    };

    const interval = setInterval(move, 100);
    return () => clearInterval(interval);
  }, [direction, containerWidth, containerHeight]);

  useEffect(() => {
    console.log('Position:', position);
    console.log('Direction:', direction);
  }, [position, direction]);

  return (
    <div
      ref={imgRef}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: `translateZ(${position.z}px)`,
        transition: 'transform 0.1s linear',
      }}
      title={tooltip}
    >
      <img src={src} alt={alt} style={{ width: '100px', height: '100px' }} />
    </div>
  );
};

export default FloatingImage;
