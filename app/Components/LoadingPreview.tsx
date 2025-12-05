"use client";

import { useEffect, useState } from "react";

export function LoadingPreview() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading preview after 2 seconds or when page is fully loaded
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const handleLoad = () => {
      setIsVisible(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex items-center justify-center">
      {/* Loading Container */}
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Animated Logo/Circle */}
        <div className="relative w-24 h-24">
          {/* Outer rotating circle */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>

          {/* Middle pulsing circle */}
          <div className="absolute inset-2 rounded-full border-2 border-blue-400 opacity-50 animate-pulse"></div>

          {/* Inner circle with text */}
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">NC</span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2"></h2>
          <p className="text-gray-400 text-sm">Preparing your experience...</p>
        </div>

        {/* Animated Loading Bar */}
        <div className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full animate-pulse" style={{
            animation: "slideRight 1.5s ease-in-out infinite"
          }}></div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
          <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
        </div>
      </div>

      {/* CSS Animation for the loading bar */}
      <style>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
