import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.svg'; // Ruta del logo (ajusta según la ubicación de tu archivo)
import headerImage from '../assets/header.png'; // Ruta de la imagen del header

const Navbar= ({ balance }) => {
  return (
    <nav className="navbar">
      <div className="header-container">
        <img src={headerImage} alt="Header" className="header-image" />
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Productos</Link>
        </li>
      </ul>

      {/* Contenedor para saldo y usuario */}
      <div className="header__balance-container">
        <div className="header__balance">
          Saldo: ${balance.toFixed(2)} USD
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

