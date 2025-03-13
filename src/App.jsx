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

        <div
          className="fixed top-2.5 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl z-50 transition-all duration-300 ease-in-out
                    sm:w-10/12 
                    md:w-3/4 
                    lg:w-2/3">
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
              <a
                href="#"
                onClick={e => {
                  e.preventDefault(); //preventDefault in simpler terms mean
                  window.scrollToSection("demo");
                }}>
                Download
              </a>
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
