
import '../styles/GreenButton.css';

const anyButton = () => {
    const windowElement = document.querySelector('.window');
    if (windowElement) {
      windowElement.style.display = 'none';
    }
  };

const GreenButton = () => {

    return (
        <button className="green-button" onClick={anyButton}>
        </button>
      );

};

export default GreenButton;
