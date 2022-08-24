


export const ItemListContainer = (props) => {

    const {titular, nombre} = props

    return(
        <div>
            <h1>{titular} !</h1>
            <p>Bienvenido {nombre}</p>
        </div>
    )
}