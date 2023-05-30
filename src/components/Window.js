import '../styles/Window.css';
import RedButton from './RedButton';
import YellowButton from './YellowButton';
import GreenButton from './GreenButton';
import { useState, useEffect } from 'react';

const Window = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (event) => {
        const newX = event.clientX - offset.x;
        const newY = event.clientY - offset.y;
        setPosition({ x: newX, y: newY });
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, offset]);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffset({ x: event.clientX - position.x, y: event.clientY - position.y });
  };

  return (
    <div className="window"
    style={{ top: position.y, left: position.x }}
    onMouseDown={handleMouseDown}
    >
    <div className="window-bar">
      <div className="window-controls">
        <RedButton/>
        <YellowButton/>
        <GreenButton/>
      </div>
    </div>
    <div className="window-content">
      {/* Contenido de la ventana */}
    </div>
  </div>
  );
};

export default Window;