
export const Contador = ({counter, agregar, setCounter, cantMax}) => {

    
    
    
    const handleRestar = () => {
        if (counter > 1 ) {
            setCounter(counter - 1)
        }
    }
    
    const handleSumar = () => {
        if(counter < cantMax)
        setCounter(counter + 1)
    }
    
    return (
        <div className="container contador">
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-4">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <hr/>
            <button onClick={agregar} className="btn btn-success">Agregar al carrito</button>
        </div>
    )
}