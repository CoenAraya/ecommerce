import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import {Contador} from '../ItemCount/ItemCount';
import {Select} from '../Select/Select'
import './itemDetail.scss'

const ItemDetail = ( {item} ) => {

    
    const [tipos, setTipos] = useState(0)
    const [medida, setMedida] = useState(0)
    const [cantidad, setCantidad] = useState(1)
    const {cart, addToCart, isInCart} = useCartContext()
    console.log(cart)
    
    

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            nombre: item.nombre,
            precio: item.precio * cantidad,
            img: item.img,
            detalle: item.desc,
            tipos,
            medida,
            cantidad

            
        }
        console.log(cantidad)
        
        addToCart(itemToCart)
        
    }

    return (
        <div className="imgCardDetail">
            <h4>{item.nombre}</h4>
            
            <img className="imgDivDetail" alt={item.nombre} src={item.img}/>
            <p>Precio: ${item.precio}</p>
            <small>Stock disponible: {item.stock}</small>
            <p>{item.desc}</p>
            {item.tipo?
            <Select options={item.tipo} onSelect= {setTipos}/>
            : null}
            {item.tamaño?
            <Select options={item.tamaño} onSelect= {setMedida}/>
            : null}
            {item.precio > 3000 ?
            <div className="envioGratis"> Este producto tiene envio gratis !</div>
            : null}
            
            {   
                isInCart(item.id)
            ? 
            <div>
            <hr></hr>
            <Link to="/cart" className="btn btn-primary">Terminar compra</Link>
            </div>
            :
            <Contador  
            counter= {cantidad} 
            cantMax= {item.stock}
            agregar={handleAgregar} 
            setCounter= {setCantidad}/>
        }
            
        </div>
    )
    
}
export default ItemDetail