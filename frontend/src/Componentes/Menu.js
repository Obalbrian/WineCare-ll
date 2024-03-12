import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImportarLogo from './ImportarLogo';

import {useState} from 'react';


export const Menu= () =>{
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }
    

  return (
    <>
      <Navbar className='navBg' bg="navBg">
      <Container className="navBg"  >
      
        <ImportarLogo/>{' '}WINE CARE
      
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />

           
      <Navbar.Collapse id="basic-navbar-nav" className="navBg" > 
      
      
      <Nav className="ms-auto"  >
        <div className='place'>
         <div  onClick={handleClick} className='toggle'>
            {toggleButton?<div className='toggle-left'></div>:
            <div className='toggle-right'></div>
            }
            </div>
        </div>
        </Nav >
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
}

