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
      <Navbar collapseOnSelect expand="lg" className="navbar">
      
        <Navbar.Brand className="logo" ><ImportarLogo/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <div className='search-box'>
          <input type='text' placeholder='Search'/> </div>
          
        
          
          <NavLink href="Notificacion" ><img src={campana} alt="" width="40" height="50" className='toggle-icon'/></NavLink>
          <NavLink href="Bienvenida" ><img src={usuario} alt="" width="32" height="50"className='toggle-icon'/></NavLink>
          <NavLink href="Configuracion" ><img src={configuracion} alt="" width="40" height="50"className='toggle-icon'/></NavLink>
           
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </>
  );
}

