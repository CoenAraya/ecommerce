import './navbar.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CartWidget} from '../cart/cartWidget'
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom'

export const NavbarCollapsed = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><a href="/#"><img src={logo} className="App-logo" alt="logo" /></a></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="#Conocenos">Conocenos</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item ><Link to="/products/sillones" className='linkBoot'> Sillones</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link to="/products/espejo" className='linkBoot'> Espejos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/products/alfombra" className='linkBoot'> Alfombras</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/products/deco" className='linkBoot'> Decoracion</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Link to="/products" className='linkBoot'> Todos los productos</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#logs">Log In/ Log Out</Nav.Link>
            <Nav.Link eventKey={2} href="#cart">
            <CartWidget/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

