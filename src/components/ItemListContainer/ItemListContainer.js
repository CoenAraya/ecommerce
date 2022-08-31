import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { Loading } from "../loading/loading"


export const ItemListContainer = () => {
   
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(false);

    
    useEffect(() => {
        setloading(true)
        pedirDatos()
            .then( (res) => {
                setProductos(res)
                setloading(false)
            },)
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                // console.log("Fin del proceso")
            })
    }, [])

    if(loading){
        return(
            <Loading/>
        )}
        else{
    return (
        <div className="prodContainer">
            <ItemList productos={productos}/>
        </div>
    )
}
}
