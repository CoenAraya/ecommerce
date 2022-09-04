import Item from "../Item/Item"
import './itemList.scss';



const ItemList = ( {productos = []} ) => {

    return (
        <div className="container my-5">
            <h2>Productos</h2>
            <hr/>
            <div className="stockContainer">
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
            </div>
        </div>
    )
}

export default ItemList