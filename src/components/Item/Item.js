import '../ItemList/item.scss';
import {Contador} from '../ItemCount/ItemCount';
import { useState } from "react";

const Item = ( {producto} ) => {

    const {stock} = producto

    const [counter, setCounter] = useState(1)

    
    const handleSumar = () => {
        if(counter < stock)
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        if (counter > 1 ) {
            setCounter(counter - 1)
        }
    }

    return (
        <div className="imgCard">
            
            <img className="imgDiv" alt={producto.nombre} src={producto.img}/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio}</p>
            <small>Stock disponible: {producto.stock}</small>
            <p>{producto.desc}</p>
            <Contador onAdd= {handleSumar} counter= {counter} onDecrement= {handleRestar}/>
            
            
        </div>
    )
    
}
export default Item