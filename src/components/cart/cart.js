import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "./cart.scss"


export const Cart = () => {

    const {cart} = useContext(CartContext)

    

    return(
        <div className="container my-5">
            <h2>CARRITO !</h2>

            {cart.map((item) =>
            <div className="prodCarrito" key= {item.id}>
                <h1>{item.nombre}</h1>
                <p>{item.detalle}</p>
                <img src={item.img}/>
                
            </div> )}
        </div>
    )
}