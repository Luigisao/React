import Cart from '../Img/carrito.png'
import './CartWidget.css'
import {Link} from 'react-router-dom'
import { useCartContext } from '../CartContext/CartContext';
import React from 'react';


function CartWidghet () {

    const {productoTotal} = useCartContext();

    return(
        <Link to='/Cart'><img src={Cart} className='carrito'/> {productoTotal () || ''} </Link>
    )
}


export default CartWidghet;