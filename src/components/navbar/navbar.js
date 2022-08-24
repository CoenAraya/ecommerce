import logo from '../../logo.png';
import './navbar.scss';
import {CartWidget} from '../cart/cartWidget';

export const Navbar = () => {
    return (
    
    <div className="navBarOn">
            <a href="/#"><img src={logo} className="App-logo" alt="logo" /></a>
            <a href="/#">Log in/out</a>
            <a href="/#">Productos</a>
            <a href="/#">Redes</a>
            <a href="/#">Contactanos</a>
            <CartWidget/>
    </div>

    )

}