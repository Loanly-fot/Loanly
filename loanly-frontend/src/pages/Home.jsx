// Home.jsx
import React, { useState } from 'react';
import './../assets/CSS/Home.css';

// Import images
import cameraImg from '../assets/images/camera.jpg';
import projectorImg from '../assets/images/projector.jpg';
import speakerImg from '../assets/images/speaker.jpg';
import lightingImg from '../assets/images/lighting.jpg';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  const equipmentItems = [
    { name: 'Camera', image: cameraImg },
    { name: 'Projector', image: projectorImg },
    { name: 'Speaker', image: speakerImg },
    { name: 'Lighting Kit', image: lightingImg },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Rental Equipment Hub</h1>
        <p>Find and rent the equipment you need, fast and easy.</p>
      </header>

      {/* Search Bar */}
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search equipment..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Login / Sign Up */}
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>

      {/* Featured Equipment */}
      <section className="featured-section">
        <h2>Featured Equipment</h2>
        <div className="equipment-grid">
          {equipmentItems.map((item, index) => (
            <div key={index} className="equipment-card">
              <img
                src={item.image}
                alt={item.name}
                className="equipment-image"
              />
              <h3>{item.name}</h3>
              <p>High-quality rental for your needs.</p>
              <button className="rent-btn">Rent Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
