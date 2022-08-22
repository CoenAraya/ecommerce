import logo from '../../logo.png';
import './navbar.scss';

export const Navbar = () => {
    return (
    
    <div className="navBarOn">
            <li><a href=""><img src={logo} className="App-logo" alt="logo" /></a></li>
            <li><a href="">Log in/out</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Redes</a></li>
            <li><a href="">Contactanos</a></li>
    </div>

    )

}