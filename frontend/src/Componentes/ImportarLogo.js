import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import '../App.css';

class ImportarLogo extends Component {
  render() {
    return (
        <div>
        <img src={logo} alt='' width="45" height="50" className="d-inline-block align-top"/>
        {' '} WINE CARE</div>
    
      
    );
  }
}

export default ImportarLogo;