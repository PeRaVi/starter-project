import '../styles/Window.css';
const Window = () => {
    const closeButton = () => {
      const windowElement = document.querySelector('.window');
      if (windowElement) {
        windowElement.style.display = 'none';
      }
    };
  return (
    <div className="window">
    <div className="window-bar">
      <div className="window-controls">
        <button onClick={closeButton} className="window-control"></button>
        <button className="window-control"></button>
        <button className="window-control"></button>
      </div>
    </div>
    <div className="window-content">
      {/* Contenido de la ventana */}
    </div>
  </div>
  );
};

export default Window;