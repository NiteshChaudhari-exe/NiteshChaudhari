"use client";
import React, { useState } from 'react';
const HERO_TITLES = ['Hello World', 'Welcome to React', 'Hello, Next.js', 'Welcome to TypeScript'];
const HERO_INTERVAL = 2000;

function RotatingTitle() {
  const [displayed, setDisplayed] = useState('');

  React.useEffect(() => {
    setDisplayed(HERO_TITLES[0]);
    const timer = setInterval(() => {
      setDisplayed(prev => HERO_TITLES[(HERO_TITLES.indexOf(prev) + 1) % HERO_TITLES.length]);
    }, HERO_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="text-(--white) Notoserif text-5xl font-bold min-h-[60px] transition-all duration-500">
      {displayed}
      <span className="inline-block w-2 animate-blink">|</span>
    </h1>
  );
}

export default function Hero() {
  return (
    <>
      <div className="hero hero-header px-[8%] lg:px-[10%] pt-10 text-(--white)">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="w-full z-10 lg:w-1/2">
            <span className="text-(--text-light) Unbounded font-bold text-[13px]">Hey There </span>
            <RotatingTitle />
            <p className="Unbounded text-(--text-light) font-bold text-[14px]">
              A passionate Full-Stack Developer building accessible, performant web applications with React, Next.js and TypeScript. I enjoy designing clean interfaces, optimizing UX, and shipping delightful products.
            </p>
            <div className="flex gap-2 items-center justify-between p-1 mt-10">
              <div className="hero-inputs border border-(--prim-color) rounded p-1 w-full md:w-[60%] flex gap-5 justify-between">
                <input 
                  type="text" 
                  placeholder="Type_Your_Email_Here...."
                  className="w-full outline-none ps-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}