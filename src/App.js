import { Navbar} from './components/navbar/navbar';
import { Footer} from './components/footer/footer'
import './components/navbar/navbar';
import { Maincont } from './components/mainCont/maincont';
import {ItemListContainer} from '../src/components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
        < Navbar />
        < ItemListContainer/>
        < Maincont/>
        < Footer />
    </div>
  );
}

export default App;
