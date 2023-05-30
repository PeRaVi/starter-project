import '../styles/YellowButton.css';

const anyButton = () => {
    const windowElement = document.querySelector('.window');
    if (windowElement) {
      windowElement.style.display = 'none';
    }
  };

const YellowButton = () => {

    return (
        <button className="yellow-button" onClick={anyButton}>
        </button>
      );

};

export default YellowButton;
