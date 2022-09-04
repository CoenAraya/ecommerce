import { NavbarCollapsed} from './components/navbar/navbar';
import { Footer} from './components/footer/footer'
import { Maincont } from './components/mainCont/maincont';
import {ItemListContainer} from '../src/components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            < NavbarCollapsed />

        <Routes>
          <Route path="/" element= {< Maincont/>}/>
          <Route path="/products" element= {< ItemListContainer/> }/>
          <Route path="/products/:categoryId" element= {< ItemListContainer/> }/>
          <Route path="/item/:itemId" element= {< ItemDetailContainer/> }/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
            
            
            < Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
