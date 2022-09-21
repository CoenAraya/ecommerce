import { useEffect, useState } from "react"
import { db } from "../../firebase/firebase"
import { doc, getDoc } from "firebase/firestore"
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
        
        const itemRef = doc(db, 'productos', itemId)

        getDoc(itemRef)
            .then( (res) => {
                setItem({id: res.id, ...res.data()})
            })
            .finally(() => {
                setloading(false)
            })
    }, [])

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
