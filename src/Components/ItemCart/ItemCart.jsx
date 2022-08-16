
import React from 'react';
import { useCartContext } from '../CartContext/CartContext';
import './ItemCart.css' 

const ItemCart = ({ product}) =>{
    const {removeItem} =useCartContext();

 return (
    <div className="superContainer">
    <div className="itemCart">
        <img src={product.imagen} alt={product.nombre}/>
     </div>
      <div className="carro">
          <h4 className="inside" id='tituloo'>{product.nombre}</h4>
          <h6 className="inside">Cantidad de Articulos : {product.quantity}</h6>
          <h6 className="inside">Precio : ${product.precio}</h6>
          <h6 className="inside">Subtotal : ${product.quantity*product.precio}</h6>
          <button  onClick={()=> removeItem(product.id)} className="btnvista">Eliminar Articulo</button> 
       </div>
   </div>

)
}

export default ItemCart;