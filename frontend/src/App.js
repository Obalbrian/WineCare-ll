import './App.css';
import { Menu } from './Componentes/Menu';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import { Sidebar } from './Componentes/Sidebar';
import RegistroUsuario from './Componentes/RegistroUsuario';
import Login from './Componentes/Login';
import Bienvenida from './Componentes/Bienvenida';
import { Usuarios } from './VistasAdmin/Usuarios';



const App = () => {
  return (
    

    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<>
                                    <Menu />
                                    <Sidebar />
                                  </>} />
          
          <Route path="/registrousuario" element={<RegistroUsuario/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/bienvenida" element={<Bienvenida/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/usuarios" element={<Usuarios/>} />
      
  
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
