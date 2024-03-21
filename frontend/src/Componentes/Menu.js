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


export const Menu= () =>{
  
    

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='navBg' bg="navBg">
      <Container className="navBg"  >
       
      
      
        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav" className="navBg" > 
      
      <ImportarLogo/>{' '} WINE CARE
      <Nav className="ms-auto"  >
      
      
      
        
      <div className='search-box'>
          <input type='text' placeholder='Search'/>
      
        
        </div >
        
        
        </Nav >


        <img src={campana} alt="" width="45" height="50" className='toggle-icon'/>
        <img src={usuario} alt="" width="40" height="65"className='toggle-icon'/>
        <img src={configuracion} alt="" width="42" height="50"className='toggle-icon'/>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
}

