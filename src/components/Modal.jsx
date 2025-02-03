import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-60" onClick={onClose} />

      <div className="relative bg-white rounded-2xl border-4 border-black p-8 max-w-md w-full m-4 z-50 transform transition-all">
        <button onClick={onClose} className="absolute top-4 right-4 text-black hover:text-gray-700">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
