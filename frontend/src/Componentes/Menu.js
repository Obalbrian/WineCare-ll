import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ImportarLogo from './ImportarLogo';


export const Menu= () =>{
  return (
    <>
      <Navbar className='navBg' bg="navBg">
        

        <ImportarLogo/>{' '}WINE CARE
      </Navbar>
      
      
    </>
  );
}

