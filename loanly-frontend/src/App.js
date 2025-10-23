// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar'; // import Navbar
import './App.css';
import Footer from './components/Footer'; // import Footer

function App() {
  return (
    <Router>
      {/* Navbar is now at the top for all pages */}
      <Navbar />
      
      {/* Main content */}
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
