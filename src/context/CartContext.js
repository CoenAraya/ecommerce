import { createContext } from "react";
import { useState } from 'react';

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) =>{
      setCart([...cart, item])
    }
  
    const isInCart = (id) =>{
      cart.some((item) => item.id === id)
  }
  
    const cartCant = () =>{
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            setCart,
            isInCart,
            cartCant
          }}>
            {children}
        </CartContext.Provider>
    )
}