import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // For navigation
import "./styles.css";

export default function HomePage() {
  return (
    <div>
      {/* Homepage */}
      <div 
        className="relative w-screen h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ 
          backgroundImage: "url('/pic1.jpg')", // Homepage background image
          backgroundSize: "cover", // Ensure the image covers the container
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent repeating
          height: "100vh", // Ensure full viewport height
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white text-center px-4">
          <motion.h1 className="text-5xl font-bold" animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} transition={{ duration: 1 }}>
            Capturing Your Special Moments
          </motion.h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">We create timeless memories with professional wedding photography, ensuring every moment is beautifully captured.</p>
        </div>
      </div>
      <div className="button-container">
        <a href="#contact" className="button button-primary">Contact Us</a>
        <a href="https://www.instagram.com/divine_memories_1" target="_blank" rel="noopener noreferrer" className="button button-outline">Instagram</a>
        <a href="/gallery" className="button button-primary">Gallery</a>
      </div>
      
      
      {/* Contact Us Section */}
      <div id="contact" className="bg-black text-white py-12 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4 text-lg">Have questions or want to book a session? Reach out to us!</p>
        <div className="mt-6 space-y-2">
          <p className="text-lg">📞 <a href="tel:+917017843309" className="underline">+917017843309</a></p>
          <p className="text-lg">📧 <a href="mailto:info@weddingphotography.com" className="underline">info@weddingphotography.com</a></p>
        </div>
      </div>
    </div>
  );
}