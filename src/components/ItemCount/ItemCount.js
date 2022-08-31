import { useState } from "react"



export const Contador = (producto) => {

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
        <div className="container">
            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>
            <hr/>
            <button className="btn btn-success">Agregar al carrito</button>
        </div>
    )
}