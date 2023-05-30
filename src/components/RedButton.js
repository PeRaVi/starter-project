
import '../styles/RedButton.css';

const closeButton = () => {
    const windowElement = document.querySelector('.window');
    if (windowElement) {
      windowElement.style.display = 'none';
    }
  };

const RedButton = () => {

    return (
        <button className="red-button" onClick={closeButton}>
        </button>
      );

};

export default RedButton;
