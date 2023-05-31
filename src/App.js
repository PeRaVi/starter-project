import './App.css';
import Window from './components/Window';
import Navbar from './components/Navbar';
import Dock from './components/Dock';

function App() {
  const containerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };
  return (
    <div className="App"  style={containerStyle}>
    <Navbar />
    <Dock />
    <Window />
    </div>
  );
}

export default App;
