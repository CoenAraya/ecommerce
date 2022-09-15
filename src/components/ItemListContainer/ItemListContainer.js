import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import { Loading } from "../loading/loading"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"


export const ItemListContainer = () => {
   
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(false);

    const {categoryId} = useParams()
    
    useEffect(() => {
        setloading(true)
        pedirDatos()
            .then( (res) => {
                if(!categoryId){
                setProductos(res)
            }else{setProductos(res.filter((prod)=> prod.category === categoryId))
            }})
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setloading(false)
            })
    }, [categoryId])

    if(loading){
        return(
            <Loading/>
        )}
        else{
    return (
        <div className="prodContainer">
            <h2>{categoryId ? categoryId.toUpperCase() : "TODOS LOS PRODUCTOS"} </h2>
            <ItemList productos={productos}/>
        </div>
    )
}
}
