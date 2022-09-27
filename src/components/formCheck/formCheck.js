import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import {addDoc , collection, doc} from 'firebase/firestore'
import {db} from "../../firebase/firebase"






export const FormCheck = () => {

  const {cart, cartPrecio , compraFinalizada} = useCartContext()
  const [ordenId , setOrdenId] = useState(null)
  const [values, setValues] = useState({
    nombre:"",
    email:"",
    direccion:""
  }
  )

  const handleInputSubmit = (e) => {

      setValues({
        ...values,
        [e.target.name] : e.target.value
      })
  }



  const handleSubmit = (e) => {
    e.preventDefault()

    const orden = {
      comprador: values,
      items: cart,
      precioTotal: cartPrecio()

    }
    const ordenPedida = collection(db, 'ordenes')

    addDoc(ordenPedida, orden)
        .then((doc) =>{
          setOrdenId(doc.id)
          compraFinalizada()

        })
}
  if(ordenId){
    return(
    <div className='container my5'>
      <h2>Compra finalizada</h2>
      <p>El numero de su orden es: {ordenId}</p>
      <p>Gracias por tu compra {values.nombre} !</p>
      <p>Hemos enviado el comprobante de facturacion al mail: {values.email}</p>
      <p>Recuerda que el envio se realizara a la direccion: {values.direccion}</p>
      <Link to="/"><h3>-Volver a la pagina de inicio-</h3></Link>
    </div>
    
    )
  }
  if(cart.length === 0){
    return <Navigate to="/"></Navigate>
  }
    return (
      <div>
      <h3 className="container">CheckOut !</h3>
      <Form className="container" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 container" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control 
            name='nombre'
            onChange={handleInputSubmit}
            type="text" 
            placeholder="Ej: Cristian Castro" />
     
          <Form.Label>Direccion de Entrega</Form.Label>
          <Form.Control 
            name='direccion'
            onChange={handleInputSubmit}
            type="text" 
            placeholder="Ej: Marmol 317, Quilmes." />


      
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            name='email'
            onChange={handleInputSubmit}
            type="email" 
            placeholder="Ej: C_Castro@gmail.com" />

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form.Group>
    </Form>
    </div>
  );

}
