import '../ItemList/item.scss';
import {Contador} from '../ItemCount/ItemCount';

const Item = ( {producto} ) => {

    return (
        <div className="imgCard">
            
            <img className="imgDiv" alt={producto.nombre} src={producto.img}/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio}</p>
            <small>Stock disponible: {producto.stock}</small>
            <p>{producto.desc}</p>
            <Contador stock= {producto.stock}/>
            
            
        </div>
    )
    
}
export default Item