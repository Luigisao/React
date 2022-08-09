import Luigibosca from '../img/LuigiBosca.png'
import Busqueda from '../img/busqueda.png'
import Login from '../img/log.png'
import './navBar.css'
import CartWidghet from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'




function NavBar () {
    return (
    <div className="div-container">
      <NavLink to={`/`}>  <img 
        className='imagen-icon'
        src={Luigibosca} /> </NavLink>

        <ul className='list-container'>
        <li><NavLink to={`categoria/vinoespumante`} > Vino espumante </NavLink>
            
        </li>
        <li><NavLink to={`categoria/vinotinto`} > Vino Tinto </NavLink>
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
        </div>
    </div>
    )
}

export default NavBar;
