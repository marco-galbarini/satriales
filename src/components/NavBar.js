import React from 'react';
import logo from '../satriales-logo.png';
import './NavBar.css';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="brand-section">
          <img
            className="logo"
            src={logo}
            alt="logo"
          />
          <h1>Satriale's</h1>
        </div>
        <p className="menu-item" onClick={() => console.log('clicked!')}>Home</p>
        <p className="menu-item" onClick={() => console.log('clicked!')}>Products</p>
        <p className="menu-item" onClick={() => console.log('clicked!')}>Our History</p>
        <CartWidget />

      </nav>
    </header>
  );
};

export default NavBar;