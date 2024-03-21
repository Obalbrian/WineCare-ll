import './App.css';
import { Menu } from './Componentes/Menu';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Sidebar } from './Componentes/Sidebar';

function App() {
  return (
    <Router>
    <Menu/>
    <div className='flex'>
    <Sidebar/>
    </div>
    </Router>
  );
}

export default App;
