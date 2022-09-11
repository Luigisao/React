import React from "react";
import { useCartContext } from "../CartContext/CartContext";
import { Link } from 'react-router-dom';
import ItemCart from "../ItemCart/ItemCart";
import '../ItemCart/ItemCart.css'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/Firebase";

const Cart = () => {
    const {cart, precioTotal, clear} = useCartContext();

    const order = {
      Comprador: {
        nombre:'Luigi',
        email: 'luigimarencodelossantos@hotmail.com',
        telefono:'654321despegue',
        direccion:'callefalsa 123'
      },
      items: cart.map(product => ({id: product.id,nombre: product.nombre,precio: product.precio, precioBotella: product.precioBotella, quantity: product.quantity })),
      total: precioTotal(),
      date: serverTimestamp()
    }
 

    const handleClick = () => {
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => alert("Su codigo de orden es :" +id) );
      clear();
  }

   
    if (cart.length === 0)
    


    {


        return(
        <>
           <h3 className="inside-2">No hay articulos Seleccionados </h3>
           <Link to ='/'><h3 className="inside-2"> Volver a seleccion de Vinos </h3> </Link>
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
             <button  onClick={handleClick} className="btnvista" id='chau'>Finalizar Compra</button>
            </aside>
            
            </>
    );
}

export default Cart;