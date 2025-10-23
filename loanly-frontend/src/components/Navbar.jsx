import React from 'react';
import './../assets/CSS/components/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Loanly</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#featured">Equipment</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-actions">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
