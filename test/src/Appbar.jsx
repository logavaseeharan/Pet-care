
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Search from './Search';
import "./Appbar.css"

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
function Appbar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const navigate=useNavigate();
  return (
  
    <div className='wholenavbar'>
      
    <Navbar  expand="lg" className='navcolor' >
      <Container>
        <Navbar.Brand href="#home"><img src="https://dt-petty.myshopify.com/cdn/shop/files/logo.png?v=1651472821"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/Product',{state:null})}>Shop</Nav.Link>
            <Nav.Link href="/Blog1">Blog</Nav.Link>
            
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/Faq">Faq</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          <Search/>
         <Nav>
          <Nav.Link className='icon'><a href='#ch'><i class="bi bi-heart" ></i></a></Nav.Link>
          <Nav.Link className='icons'><a href='/Cart'><i class="bi bi-cart" onClick={handleShow}></i></a> </Nav.Link>
          </Nav>
          <Nav.Link href="/Login"><a href='/Login'><i class="bi bi-person-circle"></i></a></Nav.Link>
        </Container>
    </Navbar>

    <Offcanvas show={show} onHide={handleClose}placement='end' scroll={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>


   </div>
  );
}


export default Appbar;
