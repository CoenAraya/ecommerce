import { useEffect, useState } from "react"

import ItemList from "../ItemList/ItemList"
import { Loading } from "../loading/loading"
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

export const ItemListContainer = () => {
   
    const [productos, setProductos] = useState([])
    const [loading, setloading] = useState(false);

    const {categoryId} = useParams()
    
    useEffect(() => {
        setloading(true)
       
        const productosRef = collection(db, 'productos')
        const q = categoryId 
                    ? query(productosRef, where ('category', '==', categoryId))
                    : productosRef
        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) =>({id: doc.id, ...doc.data()}) )
                setProductos(productosDB)
            })
            .finally(() =>{
                setloading(false)
            } )
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
