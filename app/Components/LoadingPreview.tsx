"use client";

import { useEffect, useState } from "react";

export function LoadingPreview() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Logo Container with enhanced animations */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outer ring - rotating */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-400 border-r-purple-400 border-b-cyan-400 animate-spin"
            style={{ animationDuration: "3s" }}
          ></div>

          {/* Second ring - counter-rotating */}
          <div
            className="absolute inset-4 rounded-full border-2 border-transparent border-t-purple-500 border-r-cyan-500 animate-spin"
            style={{ animationDuration: "4s", animationDirection: "reverse" }}
          ></div>

          {/* Pulsing middle ring */}
          <div className="absolute inset-8 rounded-full border border-blue-400 opacity-40 animate-pulse"></div>

          {/* Inner gradient circle */}
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 shadow-2xl shadow-blue-500/50"></div>

          {/* NC Text - centered */}
          <div className="relative z-20 text-center">
            <span className="text-4xl font-black text-white drop-shadow-lg">NC</span>
          </div>
        </div>

        {/* Text content */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Loading
          </h2>
          <p className="text-gray-400 text-sm md:text-base font-light tracking-wider">
            Preparing your experience...
          </p>
        </div>

        {/* Enhanced loading bar */}
        <div className="w-64 space-y-3">
          {/* Main progress bar */}
          <div className="relative w-full h-1.5 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full overflow-hidden border border-slate-700">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50"
              style={{
                animation: "slideRight 2s ease-in-out infinite",
              }}
            ></div>
          </div>

          {/* Loading text */}
          <p className="text-xs text-gray-500 text-center font-mono">
            <span className="animate-pulse">●</span> Initializing...
          </p>
        </div>

        {/* Animated dots indicator */}
        <div className="flex gap-3 items-center justify-center">
          <span
            className="w-2.5 h-2.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/50"
            style={{ animation: "bounce 1.4s infinite", animationDelay: "0s" }}
          ></span>
          <span
            className="w-2.5 h-2.5 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg shadow-purple-500/50"
            style={{ animation: "bounce 1.4s infinite", animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-2.5 h-2.5 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full shadow-lg shadow-cyan-500/50"
            style={{ animation: "bounce 1.4s infinite", animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>

      {/* Version badge */}
      <div className="absolute bottom-6 right-6 px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-full backdrop-blur">
        <span className="text-xs text-gray-400 font-mono">v0.1.0</span>
      </div>

      {/* CSS Animations */}
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

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
