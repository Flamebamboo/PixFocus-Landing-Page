import React from "react";
import { useState } from "react";

import Timer from "./Timer";
import Stats from "./Stats";
import Shop from "./Shop";

const Preview = () => {
  const [currentPreview, setCurrentPreview] = useState("timer");
  return (
    <section className="flex flex-col items-center justify-center bg-[#FAF1FF] pt-6 sm:pt-12">
      {/* Preview Header */}
      <div className="bg-[#B4E4FF] px-4 sm:px-12 md:px-24 lg:px-32 py-4 sm:py-6 rounded-xl sm:rounded-2xl mb-3 border-4 sm:border-6 border-black w-[90%] sm:w-[85%] md:w-auto mx-auto">
        <h1 className="text-black text-lg sm:text-xl md:text-4xl font-[ReadexPro] text-center">Preview</h1>
      </div>
      {/* Description */}
      <p className="text-black text-2xl sm:text-3xl font-[M5x7] mb-4 sm:mb-6 text-center px-4">
        PixFocus was designed to make productivity fun with
        <br className="hidden sm:block" /> neo-brutalism theme and pixel art
      </p>

      <div className="flex-1 flex-col rounded-t-[2.5rem] lg:rounded-t-full pt-6 sm:pt-10 bg-[#9482DA] w-full h-full flex items-center justify-center transition-opacity duration-300 ease-in-out">
        {/* Navigation */}
        <div className="flex gap-4 sm:gap-8 mb-8 sm:mb-12">
          <button
            className={`text-black text-2xl font-[ReadexPro] transition-all duration-300 ${currentPreview === "timer" ? "opacity-100 border-b-2 border-black" : "opacity-50 hover:opacity-75"}`}
            onClick={() => setCurrentPreview("timer")}>
            Timer
          </button>
          <button
            className={`text-black text-2xl font-[ReadexPro] transition-all duration-300 ${currentPreview === "stats" ? "opacity-100 border-b-2 border-black" : "opacity-50 hover:opacity-75"}`}
            onClick={() => setCurrentPreview("stats")}>
            Stats
          </button>
          <button
            className={`text-black text-2xl font-[ReadexPro] transition-all duration-300 ${currentPreview === "shop" ? "opacity-100 border-b-2 border-black" : "opacity-50 hover:opacity-75"}`}
            onClick={() => setCurrentPreview("shop")}>
            Shop
          </button>
        </div>
        {currentPreview === "timer" && <Timer />}
        {currentPreview === "stats" && <Stats />}
        {currentPreview === "shop" && <Shop />}
      </div>
    </section>
  );
};

export default Preview;
