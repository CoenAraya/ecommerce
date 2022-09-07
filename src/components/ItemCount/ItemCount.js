
export const Contador = (producto) => {

    const {counter, onAdd, onDecrement} = producto
    
    
    return (
        <div className="container contador">
            <button onClick={onDecrement} className="btn btn-outline-primary">-</button>
            <span className="mx-4">{counter}</span>
            <button onClick={onAdd} className="btn btn-primary">+</button>
            <hr/>
            <button className="btn btn-success">Agregar al carrito</button>
        </div>
    )
}