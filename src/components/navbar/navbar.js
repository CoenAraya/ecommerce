import './navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CartWidget} from '../cartWidget/cartWidget'
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom'

export const NavbarCollapsed = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><a href="/#"><img src={logo} className="App-logo" alt="logo" /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/Conocenos">Conocenos</Nav.Link>
                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                  <Link to="/products/sillones" className='linkBoot'> Sillones</Link>
                  <Link to="/products/espejos" className='linkBoot'> Espejos</Link>
                  <Link to="/products/alfombras" className='linkBoot'> Alfombras</Link>
                  <Link to="/products/decoracion" className='linkBoot'> Decoracion</Link>
                <NavDropdown.Divider />
              
              <Link to="/products" className='linkBoot'> Todos los productos</Link>
              
            </NavDropdown>
          </Nav>
          <Nav>
                        
            <CartWidget/>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

