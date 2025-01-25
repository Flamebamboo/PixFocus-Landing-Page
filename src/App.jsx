import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="bg-black text-white">
        {/* Navbar */}
        <div className="nav-container">
          <nav className="dynamic-island">
            <div className="brand">
              <a href="#" className="logo">
                Pixfocus
              </a>
            </div>
            <div className="nav-content">
              <a href="#hero">Home</a>
              <a href="#features">Features</a>
              <a href="#contact">TestFlight</a>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
