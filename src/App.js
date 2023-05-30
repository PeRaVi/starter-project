import logo from './logo.svg';
import './App.css';
import Window from './components/Window';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
      <div className="App">
        <header className="App-header">
        <Window />
        </header>
      </div>
    </div>
  );
}

export default App;
