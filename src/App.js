import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import GalleryPage from "./components/GalleryPage";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/gallery" element={<GalleryPage />} /> {/* Gallery Page */}
      </Routes>
    </Router>
  );
}

export default App;