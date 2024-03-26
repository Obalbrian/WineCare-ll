import React, { Component } from 'react';
import logo from '../img/logo.jpg';
import '../App.css';

class ImportarLogo extends Component {
  render() {
    return (
      <div className="logo-container">
        <img
          src={logo}
          alt=""
          className="d-inline-block"
        />
        <h2>WINE CARE</h2>
      </div>
    );
  }
}

export default ImportarLogo;