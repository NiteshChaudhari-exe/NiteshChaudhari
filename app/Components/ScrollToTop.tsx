"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <i className="bi bi-chevron-up text-xl group-hover:translate-y-[-3px] transition-transform duration-300"></i>

          {/* Animated ring background */}
          <span className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100 animate-pulse"></span>
        </button>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        button[aria-label="Scroll to top"] {
          animation: slideUp 0.7s ease-out;
        }
      `}</style>
    </>
  );
}
