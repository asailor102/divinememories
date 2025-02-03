import React from 'react';
import './App.css'; // Import the CSS file
import headerBg from './assets/header-bg.jpg'; // Import background images
import portfolioBg from './assets/portfolio-bg.jpg';
import footerBg from './assets/footer-bg.jpg';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header style={{ backgroundImage: `url(${headerBg})` }}>
        <div className="header-content">
          <h1>Your Name</h1>
          <p>Elegant Portfolio & Creative Works</p>
        </div>
      </header>

      {/* Navigation */}
      <nav>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Portfolio Section */}
      <section className="portfolio" style={{ backgroundImage: `url(${portfolioBg})` }}>
        <div className="portfolio-content">
          <h2>Portfolio</h2>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://via.placeholder.com/400x200" alt="Project 1" />
              <h3>Project 1</h3>
              <p>A brief description of your first project.</p>
            </div>
            <div className="portfolio-item">
              <img src="https://via.placeholder.com/400x200" alt="Project 2" />
              <h3>Project 2</h3>
              <p>A brief description of your second project.</p>
            </div>
            <div className="portfolio-item">
              <img src="https://via.placeholder.com/400x200" alt="Project 3" />
              <h3>Project 3</h3>
              <p>A brief description of your third project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{ backgroundImage: `url(${footerBg})` }}>
        <div className="footer-content">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;