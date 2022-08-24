import React, { useState, useContext} from 'react';




const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartContextProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addToCart= (data, newQuantity) => {
      const { quantity = 0 } = cart.find(prod => prod.id === data.id) || {};
      const newCart = cart.filter(prod => prod.id !== data.id);
      setCart([...newCart, {...data, quantity: quantity + newQuantity}])
   }

   const clear = () => setCart([]);
      
   const isInCart = (id) =>cart.find(product => product.id === id) ? true:false;

   const removeItem=(id) => setCart(cart.filter(product =>product.id!==id))

   const productoTotal =()=> cart.reduce((acumulador,productoActual) => acumulador + productoActual.quantity,0);

   const precioTotal =() =>{return cart.reduce((prev,act)=>prev+act.quantity*act.precio,0)};

 return (
   <CartContext.Provider value={{ 
      cart,
      addToCart,
      clear,
      removeItem,
      isInCart,
      precioTotal,
      productoTotal
      }}> 
   {children} 
    </CartContext.Provider>
 )
}

export default CartContextProvider;
