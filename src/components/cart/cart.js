import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./cart.scss"


export const Cart = () => {

    const {cart, removerItem, cartPrecio} = useContext(CartContext)
    console.log(cart)
    

    return(
        <div className="container my-5">
            {cart.length > 0
            ? 
            <div>
            <h2>CARRITO !</h2>

            {cart.map((item) =>
            <div className="prodCarrito" key= {item.id}>
                <div className="bordesCaja">Producto: {item.nombre}</div>
                <div className="bordesCaja">Cantidad: {item.cantidad}</div>
                <div className="bordesCaja">Precio total: ${item.precio}</div>
                <img  src={item.img} alt={item.desc}/>
                <div onClick={() => removerItem(item.id)} className="btn btn-danger mx-2"> borrar</div>
            </div> )}
            <div className="precioPagar">Precio total de los productos en carrito ${cartPrecio()} </div>
            <div className="btn btn-success mx-2 botonPagar">Pagar</div>
            </div>
            :
                <Link to="/"><h3 className="carritoVacio">El carrito esta vacio, corre a llenarlo de productos !</h3></Link>
        }
        </div>
    )
}