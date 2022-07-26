import Luigibosca from '../img/LuigiBosca.png'
import Busqueda from '../img/busqueda.png'
import Login from '../img/log.png'
import './navBar.css'
import CartWidghet from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


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
        <li><a href='#' className='dorado'>
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
                placeholder={'¿Que estas buscando?'}
            />

            <img src={Login} className='login'/>
            <CartWidghet></CartWidghet>
            <ItemListContainer></ItemListContainer>
        </div>
    </div>
    )
}

export default NavBar;
