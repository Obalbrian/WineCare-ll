import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImportarLogo from './ImportarLogo'
import campana from '../img/campana.jpg';
import usuario from '../img/usuario.jpg';
import configuracion from '../img/configuracion.jpg'
import { Button } from 'primereact/button';
        


import {useState} from 'react';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import NavLink from 'react-bootstrap/esm/NavLink';


export const Menu= () =>{
  
    

  return (
    <>
      <Navbar expand="lg" className="navbar">
      <Container className='navBg'>
        <Navbar.Brand href="#home" ><ImportarLogo/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <div className='search-box'>
          <input type='text' placeholder='Search'/>
      
        
          </div >
          <img src={campana} alt="" width="40" height="50" className='toggle-icon'/>
          <img src={usuario} alt="" width="32" height="50"className='toggle-icon'/>
          <img src={configuracion} alt="" width="40" height="50"className='toggle-icon'/>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

