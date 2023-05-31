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
        setIsFullscreen(false)
      }
      // reseteamos posiciones, tanto para ajustar a pantalla como para reducirla, e impedir que la ventana quede fuera
      windowElement.style.top = '0';
      windowElement.style.left = '0';
    }
  };
  return (
      <button className="green-button" onClick={resizeButton}>
      </button>
    );
};

export default GreenButton;
