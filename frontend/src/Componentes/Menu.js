import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ImportarLogo from './ImportarLogo';
import {Switch} from 'antd';
import {useState} from 'react';


export const Menu= () =>{
    const [enabled, setEnabled] = useState(false)
    

  return (
    <>
      <Navbar className='navBg' bg="navBg">
      <Container className="navBg"  >
      
        <ImportarLogo/>{' '}WINE CARE
      
        <Navbar.Toggle  aria-controls="basic-navbar-nav" />

           
      <Navbar.Collapse id="basic-navbar-nav" className="navBg" > 
      
      
      <Nav className="ms-auto"  >
       
            
      <Switch/>
              
         
        

        </Nav >
        </Navbar.Collapse>
        </Container>
      </Navbar>
      
      
    </>
  );
}

