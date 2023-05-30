
import '../styles/Navbar.css';
import Clock from './Clock';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="menu-list">
        <li className="menu-item">
          <div className="menu-text">Sobre mí</div>
        </li>
        <li className="menu-item">
         <div className="menu-text">Proyectos</div>
        </li>
        <li className="menu-item">
          <div className="menu-text">Contacto</div>
        </li>
      </ul>
      
      <ul className="menu-state">
      
      <li className="menu-item"> 
        
        <div className="icon-containerv">
          <img 
             className="menu-icon" 
            src={process.env.PUBLIC_URL + '/icons/rain.ico'} 
            alt="Orballo" />
        </div>
        <div className="menu-text">
          A Coruña
        </div> 
     
     
        
      </li>

      <li className="menu-item"> 
      <div className="menu-text"><Clock/> </div>
      
      </li>
        
      </ul>

    </div>
  );
};

export default Navbar;
