import React, { useState } from "react";

const Stats = () => {
  return (
    <div className="flex-1 flex items-center justify-center ph-12 pb-10">
      <div className="relative flex items-center justify-center">
        {/* Left Bullet Points */}
        <div className="absolute -left-60 h-full flex flex-col justify-center gap-16">
          <div className="bg-[#E0FFFF] border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
            <p className="font-[ReadexPro] text-black text-base ">Time Distribution</p>
          </div>
          <div className="bg-[#E0FFFF] border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
            <p className="font-[ReadexPro] text-black text-base ">Visualise Your Time</p>
          </div>
          <div className="bg-[#F0FFF0] border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
            <p className="font-[ReadexPro] text-black text-base ">Date Tracking</p>
          </div>
        </div>

        {/* Phone Frame */}
        <div className="w-[280px] h-[570px] bg-black border-6 border-black rounded-[35px] overflow-hidden relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 w-32 h-6 bg-black left-1/2 -translate-x-1/2 rounded-b-2xl"></div>
          <img
            src="/images/Stats.jpeg"
            alt="Timer Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
