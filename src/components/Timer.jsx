import React, { useState } from "react";

const Timer = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-4 sm:px-12 pb-10">
      <div className="relative flex items-center justify-center">
        {/* Desktop Left Bullet Points */}
        <div className="hidden lg:flex absolute -left-52 h-full flex-col justify-center gap-8 lg:gap-16">
          <div className="bg-[#E0FFFF] border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
            <p className="font-[ReadexPro] text-black text-base ">Notification</p>
          </div>
          <div className="bg-[#E0FFFF] border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
            <p className="font-[ReadexPro] text-black text-base ">Time Block</p>
          </div>
          <div className="bg-[#F0FFF0] border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
            <p className="font-[ReadexPro] text-black text-base ">Pomodoro</p>
          </div>
        </div>

        {/* Phone Frame */}
        <div className="w-[280px] h-[570px] bg-white border-4 sm:border-6 border-white rounded-[35px] overflow-hidden relative shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1">
          <div className="absolute top-0 w-24 sm:w-32 h-4 sm:h-6 bg-white left-1/2 -translate-x-1/2 rounded-b-2xl"></div>
          <img src="/images/homebunny.gif" alt="Timer Preview" className="w-full h-full object-cover" />
        </div>

        {/* Desktop Right Bullet Points */}
        <div className="hidden lg:flex absolute -right-52 h-full flex-col justify-center gap-8 lg:gap-16">
          <div className="bg-[#FFE4E6] border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
            <p className="font-[ReadexPro] text-black text-base ">Custom Task</p>
          </div>
          <div className="bg-[#F0E6FF] border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
            <p className="font-[ReadexPro] text-black text-base ">Simple UI</p>
          </div>
          <div className="bg-[#E6FFFA] border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer transform">
            <p className="font-[ReadexPro] text-black text-base ">Rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
