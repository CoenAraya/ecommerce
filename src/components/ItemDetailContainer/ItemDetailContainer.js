import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemDetail from "../itemDetail/itemDetail"
import { Loading } from "../loading/loading"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.scss'

export const ItemDetailContainer = () => {
   
    const [item, setItem] = useState([])
    const [loading, setloading] = useState(false);

    const {itemId} = useParams()
    
    useEffect(() => {
        setloading(true)
        pedirDatos()
            .then( (res) => {
                if(!itemId){
                setItem(res)
            }else{setItem(res.find((prod)=> prod.id === Number(itemId)))
            }})
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setloading(false)
            })
    }, [itemId])

    if(loading){
        return(
            <Loading/>
        )}
        else{
    return (
        <div className="prodContainer">
            <ItemDetail item={item}/>
           
        </div>
    )
}
}
