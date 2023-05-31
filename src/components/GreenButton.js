import '../styles/GreenButton.css';
import { useState } from 'react';
const GreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const resizeButton = () => {
    const windowElement = document.querySelector('.window');
    if (windowElement ){
      if (!isFullscreen){
        windowElement.style.width = '100%';
        windowElement.style.height = '100vh';
        setIsFullscreen(true)
      } else {
        windowElement.style.width = '1200px';
        windowElement.style.height = '720px';
        setIsFullscreen(true)
      }
    }
  };
  return (
      <button className="green-button" onClick={resizeButton}>
      </button>
    );
};

export default GreenButton;
