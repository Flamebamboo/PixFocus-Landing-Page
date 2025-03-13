import React, { useState } from "react";
import Preview from "./Preview";
import Footer from "./Footer";
import "../styles/noise.css";
import { Clock, Sliders, Mail, Youtube } from "lucide-react";
import WaitlistForm from "./WaitlistForm";
import hero from "/images/HeroImage.jpg";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white min-h-screen overflow-hidden relative">
        {/* Background image container */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.8
          }}></div>

        {/* Noise effect overlay */}
        <div className="absolute inset-0 noise z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto px-4 h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            {/* Empty left column */}
            <div className="hidden md:block"></div>

            {/* Text Content - Right column */}
            <div className="text-center md:text-left">
              <h1 className="font-[ReadexPro] text-5xl md:text-6xl lg:text-7xl mb-6">Gamified focus timer app</h1>
              <p className="lg:text-3xl text-2xl mb-8 font-[M5x7] opacity-90">
                Pomodoro, Timeblock with amazing pixel art visual timers
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  // onClick={() => window.open("https://apps.apple.com/app/pixfocus", "_blank")}
                  className="bg-[#CFEE2E] border-4 text-black px-6 py-4 rounded-full font-[ReadexPro] shadow-lg transition-transform duration-300 hover:bg-[#ADCE00] hover:-translate-y-1 hover:shadow-xl">
                  Get on App Store(soon)
                </button>
                <button
                  onClick={() =>
                    window.open(
                      "https://chromewebstore.google.com/detail/hdndbhnidlhphocggjbhdpeeaiehmadh?utm_source=item-share-cb",
                      "_blank"
                    )
                  }
                  className="bg-[#B4E4FF] border-4 text-black px-6 py-4 rounded-full font-[ReadexPro] shadow-lg transition-transform duration-300 hover:bg-[#8ED4FF] hover:-translate-y-1 hover:shadow-xl">
                  Chrome Extension (beta)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="preview">
        <Preview />
      </section>

      {/* <section id="demo" className="bg-[#9482DA] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl text-white text-center mb-8 font-[M5x7]">See PixFocus in Action</h2>
          <p className="text-center text-gray-300 font-[ReadexPro] text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Watch how PixFocus helps you stay productive with its pixel art inspired timers and gamified focus
            techniques
          </p>

          <div className="relative w-full max-w-4xl mx-auto aspect-video mb-12">
            <div className="border-8 border-black rounded-2xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-[#B4E4FF]">
              <iframe
                className="w-full h-full aspect-video"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                title="PixFocus Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section> */}

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
      {/* Platform Availability Section */}
      <section className="bg-[#FAF1FF] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl text-black text-center mb-8 font-[M5x7]">Available On</h2>

          {/* Large Platform Image */}
          <div className="relative w-full max-w-5xl mx-auto mb-12">
            <div className="border-6 border-black rounded-2xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="/images/displaystore_4.png"
                alt="PixFocus available on iOS and as Chrome Extension"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              // onClick={() => window.open("https://testflight.apple.com/join/CCvp6EAS", "_blank")}
              className="bg-[#CFEE2E] border-4 text-black px-6 py-3 rounded-full font-[ReadexPro] shadow-lg transition-colors duration-300 hover:bg-[#ADCE00] flex items-center justify-center gap-2">
              Get on App Store(soon)
            </button>

            <button
              onClick={() =>
                window.open(
                  "https://chromewebstore.google.com/detail/hdndbhnidlhphocggjbhdpeeaiehmadh?utm_source=item-share-cb",
                  "_blank"
                )
              }
              className="bg-[#B4E4FF] border-4 text-black px-6 py-3 rounded-full font-[ReadexPro] shadow-lg transition-colors duration-300 hover:bg-[#8ED4FF] flex items-center justify-center gap-2">
              Get On Chrome Extension (beta)
            </button>
          </div>
        </div>
      </section>

      <WaitlistForm />
      <Footer />
    </>
  );
};

export default Home;
