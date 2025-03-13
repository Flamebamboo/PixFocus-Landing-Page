import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-5">
      <div className="max-w-xl mx-auto sm:px-16 py-10 sm:py-12">
        <div>
          <h3 className="text-7xl font-[M5x7] cursor-default mb-6 text-center">PixFocus</h3>
          <div className="flex flex-wrap gap-5 justify-center mb-3">
            <a href="https://twitter.com/pixfocusapp" className="text-2xl font-[M5x7]  opacity-50 hover:opacity-100">
              Twitter(soon)
            </a>
            <a href="https://instagram.com/pixfocusapp" className="text-2xl font-[M5x7]  opacity-50 hover:opacity-100">
              Instagram(soon)
            </a>
            <a
              href="https://testflight.apple.com/join/CCvp6EAS"
              className="text-2xl font-[M5x7]  opacity-50 hover:opacity-100">
              TestFlight
            </a>
          </div>
          <p className="mt-5 font-[ReadexPro] opacity-50 text-center">©{new Date().getFullYear()} PixFocus</p>
        </div>
      </div>
    </footer>
  );
}
