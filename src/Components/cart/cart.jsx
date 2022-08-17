import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import ItemCart from "../ItemCart/ItemCart";
import '../ItemCart/ItemCart.css'


const Cart = () => {
    const {cart, precioTotal, clear} = useCartContext();

    
 
   
    if (cart.length === 0)
    


    {


        return(
        <>
           <h3 className="inside">No hay articulos Seleccionados </h3>
           <Link to ='/'><h3 className="inside"> Volver a seleccion de Vinos </h3> </Link>
        </>
        );
    }
    return (
      <>
    
        : {
             cart.map (product =><ItemCart key={product.id} product={product}/>)}
            
             <aside className="cerrar-compra">
             <h4 className='holaDonJose'>El precio total de su compra es de ${precioTotal()}</h4> 
             
             <button onClick={()=> clear (cart)} className="btnvista" id='hola'> Limpiar Carrito Completo </button>
             <button   className="btnvista" id='chau'>Finalizar Compra</button>
            </aside>
            
            </>
    );
}

export default Cart;