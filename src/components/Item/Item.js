import './item.scss';
import {Link} from 'react-router-dom'

const Item = ( {producto} ) => {

    return (
        <div className="imgCard">
            
            <img className="imgDiv" alt={producto.nombre} src={producto.img}/>
            <h4>{producto.nombre}</h4>
            <p>Precio: {producto.precio}</p>
            <small>Stock disponible: {producto.stock}</small>
            <p>{producto.desc}</p>
            <Link to={`/item/${producto.id}`} className="btn btn-outline-success">Ver mas</Link>
            
            
        </div>
    )
    
}
export default Item