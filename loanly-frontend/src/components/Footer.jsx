import React from 'react';
import './../assets/CSS/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>RentalHub</h3>
          <p>© {new Date().getFullYear()} RentalHub. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <a href="#home">Home</a>
          <a href="#featured">Equipment</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
