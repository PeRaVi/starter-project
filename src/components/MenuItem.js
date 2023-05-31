import '../styles/MenuItem.css';
import { useState } from 'react';

const MenuItem = ({ value, menuItems, dropdown , icon, iconAlt}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    return (

        // TODO: Probablemente sea mejor controlar la prop de visibilidad del submenú y del icono
        <li className="menu-item">


            {icon && (
                     <div className="icon-containerv">
                     <img 
                        className="menu-icon" 
                       src={process.env.PUBLIC_URL + '/icons/'+ icon} 
                       alt={iconAlt} />
                    </div>
            )}
            <div className="menu-text"onClick={toggleMenu}>
                {value}
            </div>

            
            {dropdown && isMenuOpen && (
                <ul className="submenu">
                {menuItems.map((menuItem, index) => (
                    <li key={index}>{menuItem}</li>
                ))}
                </ul>
            )}
        </li>
      );

};

MenuItem.defaultProps = {
    menuItems: null,
    dropdown: false,
    icon: null,
  };
  
export default MenuItem;
