
import '../styles/Navbar.css';
import Clock from './Clock';
import MenuItem from './MenuItem';

const Navbar = () => {

  const aboutItems = ['Aux 1', 'Aux 2', 'Aux 3'];
  const proyectItems = ['Aux 1', 'Aux 2', 'Aux 3'];
  const contactItems = ['Aux 1', 'Aux 2', 'Aux 3'];

  return (
    <div className="navbar">
      <ul className="menu-list">
        <MenuItem value="Sobre mí" menuItems={aboutItems} dropdown={true}/>
        <MenuItem value="Proyectos" menuItems={proyectItems} dropdown={true}/>
        <MenuItem value="Contactos" menuItems={contactItems} dropdown={true}/>
      </ul>
      
      <ul className="menu-state">
      
      <MenuItem value="A Coruña" icon={"rain.ico"} iconAlt={"Orballo"}/>

      <MenuItem value={<Clock/>} />

        
      </ul>

    </div>
  );
};

export default Navbar;
