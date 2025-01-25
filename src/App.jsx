import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

// Main App Component
const App = () => {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}>
                Home
              </a>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection("preview");
                }}>
                Preview
              </a>
              <a href="https://testflight.apple.com/join/CCvp6EAS">TestFlight</a>
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
