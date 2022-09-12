import { NavbarCollapsed} from './components/navbar/navbar';
import { Footer} from './components/footer/footer'
import { Maincont } from './components/mainCont/maincont';
import {ItemListContainer} from '../src/components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {CartProvider} from './context/CartContext'

import{Cart} from './components/cart/cart'

function App() {



  return (
    <div className="App">
      <CartProvider>

        <BrowserRouter>

            < NavbarCollapsed />

              <Routes>
                <Route path="/" element= {< ItemListContainer/> }/>
                <Route path="/products" element= {< ItemListContainer/> }/>
                <Route path="/products/:categoryId" element= {< ItemListContainer/> }/>
                <Route path="/item/:itemId" element= {< ItemDetailContainer/> }/>
                <Route path="/cart" element= {< Cart/> }/>
                <Route path="*" element={<Navigate to="/"/>}/>
              </Routes>
            
            < Maincont/>
            < Footer />
        </BrowserRouter>
      
      </CartProvider>
    </div>
  );
}

export default App;
