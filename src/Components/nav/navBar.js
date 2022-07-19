import Luigibosca from '../img/LuigiBosca.png'
import Busqueda from '../img/busqueda.png'
import '../nav/navBar.css'


function NavBar () {
    return (
    <div className="div-container">
        <img 
        className='imagen-icon'
        src={Luigibosca} />

        <ul className='list-container'>
        <li><a href='#'>
            Vinos  
            </a>
        </li>
        <li><a href='#'>
            Colecciones
            </a>
        </li>
        <li><a href='#'>
            Contacto
            </a>
        </li>
        <li><a href='#'>
            Exclusivo Online
            </a>
        </li>
        </ul>
        <div className='buscador-glass'>
            <img 
                className='img-buscador'
                src={Busqueda} />
            <input 
                className='input-container' 
                type="search"
                placeholder={'¿Que estas buscando?'} />
        </div>
    </div>
    )
}

export default NavBar;
