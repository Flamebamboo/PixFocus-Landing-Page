import React, { useState } from "react";
import Preview from "./Preview";
import Footer from "./Footer";
import "../styles/noise.css";
import { Clock, Sliders, Mail } from "lucide-react";
import WaitlistForm from "./WaitlistForm";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-120 from-black from-10% via-[#7C3FFF] via-70% to-[#C05DEF] text-white min-h-screen overflow-hidden">
        <div className="noise"></div>
        {/* Content Container */}
        <div className="z-10 container mx-auto px-4 h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="font-[ReadexPro] text-5xl md:text-6xl lg:text-7xl mb-6">Gamified focus timer app</h1>
              <p className="lg:text-3xl text-2xl mb-8 font-[M5x7] opacity-90">
                Pomodoro, Timeblock with amazing pixel art visual timers
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <button
                  onClick={() => window.open("https://testflight.apple.com/join/CCvp6EAS", "_blank")}
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
      <section className="bg-[#F6EA96]">
        <div className="grid lg:grid-cols-2 grid-rows min-h-[70vh] gap-4 px-4 py-8 md:py-4">
          <div className="flex items-center justify-center flex-col">
            <div className="w-full max-w-[80%] space-y-4">
              <div className="bg-[#B4E4FF] sm:p-10 md:p-12 p-6 md:max-w-fit  border-4 sm:border-6 border-black rounded-2xl">
                <h1 className="font-[ReadexPro] text-black text-xl md:text-3xl text-center md:text-left">
                  We keep it simple. <br></br>intuitive and fun.✌️
                </h1>
              </div>

              <h5 className="text-black font-[M5x7] md:text-3xl text-3xl md:text-left text-center  ">
                Pixfocus was developed by a high school student to make focus and creativity fun. A simple, pixel art
                inspired focus timer to help you stay on track without the distractions!
              </h5>
            </div>
          </div>
          <div className="flex items-center justify-center p-4 md:p-8">
            <div className="w-full max-w-[400px] md:max-w-[500px]">
              <img
                src="/images/PixFocusClear.gif"
                alt="pixfocus logo"
                className="w-full h-auto object-cover bg-[#9482DA] rounded-4xl border-8 border-black"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF1FF] min-h-[80vh] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl text-black text-center mb-36 font-[M5x7]">Customizable modes!</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#B4E4FF] p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]  hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 mr-2 text-black" />
                <h3 className="text-2xl md:text-3xl f text-black font-[ReadexPro]">Pomodoro Timer</h3>
              </div>
              <p className="text-lg text-black font-[ReadexPro]">
                The Pomodoro timer is a well-known productivity interval that has been shown to improve your
                productivity. It gives you a prescribed interval of 25 minutes of work followed by a 5-minute break.
                After 4 work intervals, there is a 15-minute break. If you want to get started on a Pomodoro Timer get
                Pixfocus! you can also customise these options!
              </p>
            </div>
            <div className="bg-[#B4E4FF] p-8 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
              <div className="flex items-center mb-4">
                <Sliders className="w-8 h-8 mr-2 text-black" />
                <h3 className="text-2xl md:text-3xl text-black font-[ReadexPro]">Custom Timer</h3>
              </div>
              <p className="text-lg text-black font-[ReadexPro]">
                Sometimes the Pomodoro timer works great, but sometimes you want something a little more fluid. If you
                need a timer with some flexibility. Our custom timer allows you to set your own work and break
                intervals, tailoring your productivity sessions to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <WaitlistForm />
      <Footer />
    </>
  );
};

export default Home;
