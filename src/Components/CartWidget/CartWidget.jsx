import Cart from '../img/carrito.png'
import './CartWidget.css'
import {Link} from 'react-router-dom'




function CartWidghet () {
    return(
        <Link to='/Cart'><img src={Cart} className='carrito'/></Link>
    )
}


export default CartWidghet;