import '../styles/YellowButton.css';

const minimizeButton = () => {
    const windowElement = document.querySelector('.window');
    if (windowElement) {
      // TODO: implementar cuando se implemente una barra de procesos abiertos
    }
  };

const YellowButton = () => {

    return (
        <button className="yellow-button" onClick={minimizeButton}>
        </button>
      );

};

export default YellowButton;
