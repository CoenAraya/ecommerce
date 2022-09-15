import { stock } from "../stock/stock"


export const pedirDatos = () => {
    
    return new Promise( (resolve, reject) => {
            // cuerpo de la promesa
    
            setTimeout(() => {
                resolve(stock)
                
            }, 2000 )
        }
    
    )
    
}



