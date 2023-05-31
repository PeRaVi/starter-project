
import '../styles/Dock.css';

const Dock = () => {

  const data = ['Terminal','Documentos', 'Navegador', 'Papelera', 'Configuración' ];
  return (
    <div class="dock">
        <ul class="dock-items">
          {data.map((element, index) => (
            <li class="dock-item" key={index}>
            <img src= {process.env.PUBLIC_URL + '/icons/folder.ico'} alt={element} class="dock-icon"/>
            </li>
          ))}
        </ul>
    </div>

  );
};

export default Dock;
