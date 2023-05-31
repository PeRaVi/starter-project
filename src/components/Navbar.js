
import '../styles/Navbar.css';
import Clock from './Clock';
import MenuItem from './MenuItem';

const Navbar = () => {

  const aboutItems = ['Read Me'];
  const proyectItems = [];
  const contactItems = ['LinkedIn', 'Github'];

  return (
    <div className="navbar">
      <ul className="menu-list">
        <MenuItem value="Sobre mí" menuItems={aboutItems} dropdown={true}/>
        <MenuItem value="Proyectos" menuItems={proyectItems} dropdown={false}/>
        <MenuItem value="Redes" menuItems={contactItems} dropdown={true}/>
        <MenuItem value="Ayuda"/>
      </ul>
      
      <ul className="menu-state">
        <MenuItem value="A Coruña" icon={"rain.ico"} iconAlt={"Orballo"}/>
        <MenuItem value={<Clock/>} />
      </ul>

    </div>
  );
};

export default Navbar;
