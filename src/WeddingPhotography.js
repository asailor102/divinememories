import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

export default function WeddingPhotography() {
  return (
    <div className="w-screen min-h-screen">
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
          <div className="mt-8 space-x-4">
            <a href="#contact" className="px-6 py-3 bg-white text-black rounded-xl shadow-lg hover:bg-gray-200 transition">Contact Us</a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border-2 border-white rounded-xl shadow-lg hover:bg-white hover:text-black transition">Instagram</a>
            <a href="#gallery" className="px-6 py-3 bg-white text-black rounded-xl shadow-lg hover:bg-gray-200 transition">Gallery</a>
          </div>
        </div>
      </div>

      {/* Gallery Page */}
      <div 
        id="gallery" 
        className="relative w-screen h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ 
          backgroundImage: "url('/pic2.jpg')", // Gallery page background image
          backgroundSize: "cover", // Ensure the image covers the container
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Prevent repeating
          height: "100vh", // Ensure full viewport height
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h2 className="text-4xl font-bold">Our Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 p-4">
            {["portfolio1.jpg", "portfolio2.jpg", "portfolio3.jpg", "portfolio4.jpg"].map((img, index) => (
              <img key={index} src={`/images/${img}`} alt="Wedding Portfolio" className="w-full h-auto rounded-lg shadow-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}