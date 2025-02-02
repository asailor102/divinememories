import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function GalleryPage() {
  return (
    <div className="full-screen" style={{ backgroundImage: "url('/pic1.jpg')" }}>
      {/* Dark Overlay */}
      <div className="bg-overlay"></div>

      {/* Buttons (Fixed at Top-Right) */}
      <div className="button-container">
        <a href="#contact" className="button button-primary">Contact Us</a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="button button-outline">Instagram</a>
        <Link to="/" className="button button-primary">Home</Link>
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-8">
        <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>

        {/* Horizontal Scrollable Gallery */}
        <div className="gallery-container">
          <div className="gallery-scroll">
            {["portfolio1.jpg", "portfolio2.jpg", "portfolio3.jpg", "portfolio4.jpg"].map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={`/images/${img}`} alt="Wedding Portfolio" className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
