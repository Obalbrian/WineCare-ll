import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImportarLogo from './ImportarLogo';


import {useState} from 'react';


export const Menu= () =>{
    
    

  return (
    <>
      <Navbar className='navBg' bg="navBg">
      <Container className="navBg"  >
      
        <ImportarLogo/>{' '}WINE CARE
      
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />

           
      <Navbar.Collapse id="basic-navbar-nav" className="navBg" > 
      
      
      <Nav className="ms-auto"  >
        

        <div className='search-box'>
          <input type='text' placeholder='Search'/>
          
        </div>
        
        
        
        </Nav >
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
}

