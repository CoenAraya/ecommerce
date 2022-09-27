import { useState, useContext,  useEffect, createContext } from 'react';
import swal from 'sweetalert';

export const CartContext = createContext()


const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(init)





    
    const addToCart = (item) =>{
      setCart([...cart, item])
    }
  
    const isInCart = (id) =>{
      return cart.some((item) => item.id === id)
      
  }
  
    const cartCant = () =>{
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const removerItem = (id) => {
      setCart( cart.filter((item) => item.id !== id) )
  }

  const cartPrecio = () =>{
    return cart.reduce((acc, item) => acc + item.precio, 0)
}

  const compraFinalizada = () => {
    swal("Compra exitosa!", "Tus productos seran despachados en las proximas 24hs !", "success");
    setCart([])
  }

    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(cart))
  }, [cart])





    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartCant,
            removerItem,
            cartPrecio,
            compraFinalizada
          }}>
            {children}
        </CartContext.Provider>
    )
}


export const useCartContext = () => {
  return useContext(CartContext)
}