import React from "react";
import Preview from "./Preview";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#9482DA] text-white min-h-screen overflow-hidden">
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="font-[ReadexPro] text-5xl md:text-6xl lg:text-7xl mb-6">
                Gamified focus timer app
              </h1>
              <p className="lg:text-3xl md:text-xl mb-8 font-[M5x7] opacity-90">
                Pomodoro, Timeblock with amazing pixel art visual timers
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={() =>
                    window.open("https://testflight.apple.com/join/CCvp6EAS", "_blank")
                  }
                  className="bg-[#CFEE2E] border-4 text-black px-8 py-4 rounded-full font-[ReadexPro] shadow-lg transition-colors duration-300 hover:bg-[#ADCE00] hover:text-black">
                  Download Pixfocus TestFlight Now!
                </button>
              </div>
            </div>

            {/* App Preview Image */}
            <div className="hidden md:block">
              <img
                src="/images/home-mockup.png"
                alt="AuraHub App Preview"
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="preview">
        <Preview />
      </section>

      {/* Footer */}
      <footer className="footer bg-black text-white py-6 px-4 border-t border-[#191919] relative z-10">
        <div className="footer-container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-readex-pro text-xs md:text-sm text-center md:text-left">
            All rights reserved &copy; PixFocus
          </p>
          <div className="flex space-x-4">{/* Add your social icons here */}</div>
        </div>
      </footer>
    </>
  );
};

export default Home;
