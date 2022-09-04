import {Contador} from '../ItemCount/ItemCount';
import { useState } from "react";
import './itemDetail.scss'

const ItemDetail = ( {item} ) => {

    const {stock} = item

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
        <div className="imgCardDetail">
            <h4>{item.nombre}</h4>
            
            <img className="imgDivDetail" alt={item.nombre} src={item.img}/>
            <p>Precio: {item.precio}</p>
            <small>Stock disponible: {item.stock}</small>
            <p>{item.desc}</p>
            <Contador onAdd= {handleSumar} counter= {counter} onDecrement= {handleRestar}/>
            
            
        </div>
    )
    
}
export default ItemDetail