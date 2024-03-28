import React from 'react'
import { Sidebar } from '../Componentes/Sidebar'
import { Menu } from '../Componentes/Menu';
import Button from 'react-bootstrap/Button';

//Importamos hojas de estilos




export const Usuarios = () => {
  return (
    <>  
         <Menu/>
        
        <div className='flex'>
       
        <Sidebar/>
        <div className='contenedor'>
          <div className='inline'><Button className="outline-primary">Primary</Button>
          </div>
          <div className='sub-contenedor'>
            
          </div>
        </div>
        </div>
      </>   
          
          
          
        
      
  )
}
