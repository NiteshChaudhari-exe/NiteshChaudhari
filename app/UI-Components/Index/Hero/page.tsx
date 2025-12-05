"use client";
import Image from "next/image";
import Link from "next/link";
// import { Link as ScrollLink } from "react-scroll";

import profile from "@/public/profile.webp";
import HeroImg from "@/public/hero.png";
import Heroelm1 from "@/public/Hero-elm1.svg";
import Heroelm2 from "@/public/Hero-elm2.svg";
import Heroelm3 from "@/public/Hero-elm3.svg";
import Heroelm4 from "@/public/Hero-elm4.svg";

import HotTopic1 from "@/public/hot-topic1.webp";
import HotTopic2 from "@/public/hot-topic2.webp";
import HotTopic3 from "@/public/hot-topic3.webp";
import HotTopic4 from "@/public/hot-topic4.webp";
import HotTopic5 from "@/public/hot-topic5.webp";
import HotTopic6 from "@/public/hot-topic6.webp";
import HotTopic7 from "@/public/hot-topic7.webp";
import HotTopic8 from "@/public/hot-topic8.webp";
import HotTopic9 from "@/public/hot-topic9.webp";

import { Swiper , SwiperSlide } from "swiper/react";
import { Autoplay , Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HotTopicData = [
  { id: "1", title: "Travel", subtitle:"36 Articles", image: HotTopic1 },
  { id: "2", title: "Culture", subtitle:"24 Articles", image: HotTopic2 },
  { id: "3", title: "Lifestyle", subtitle:"18 Articles", image: HotTopic3 },
  { id: "4", title: "Fashion", subtitle:"12 Articles", image: HotTopic4 },
  { id: "5", title: "Food", subtitle:"20 Articles", image: HotTopic5 },
  { id: "6", title: "Space", subtitle:"15 Articles", image: HotTopic6 },
  { id: "7", title: "Sports", subtitle:"10 Articles", image: HotTopic7 },
  { id: "8", title: "Entertainment", subtitle:"22 Articles", image: HotTopic8 },
  { id: "9", title: "Peace", subtitle:"30 Articles", image: HotTopic9 },
]

export function Hero() {
  return (
  <>
  <div className="hero hero-header px-[8%] lg:px-[5%] pt-10 text-(--white)">
    {/* Hero Section */}
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5">
      <div className="w-full z-10 lg:w-1/2">
      <span className="text-(--text-light) Unbounded font-bold text-[17px]"><span className="text-(--prim-color)">A MAN OF HONOR</span> </span>
       <h1 className="text-(--white) Notoserif text-5xl font-bold">SOFTWARE ENGINEER  </h1> {/* */}
        <p className="Notoserif text-(--text-light)  font-bold text-[14px]">
           IN A WORLD FULL OF NOISE,
            I build systems that stay silent 
fast, loyal, and never betraying the user—<br/>
React, Next.js, TypeScript crafted with the precision of a tailor in Palermo
and the discipline of a Shelby plan.
        </p>
        <div className="flex gap-2 items-center justify-between p-1 mt-10">
          <div className="hero-inputs border border-(--prim-color) rounded p-1 w-full md:w-[60%] flex gap-1 justify-between">
            <label htmlFor="hero-email" className="sr-only">Email address</label>
            <input 
            
            type="email" 
            placeholder="AN OFFER YOU CAN'T REFUSE....."
            className="w-full h-8 text-sm px-2 py-1 outline-none ps-3 Unbounded font-bold"
             />
             <button className="btn nav-btn text-white font-bold  rounded-md hover:opacity-90 transition px-3 py-1 text-sm w-24 h-8">JoinFamily</button>
          </div>
        </div>
        <div className="text-xs mt-2 text-cyan-400 font-semibold text-center animate-fade">
        FOR RESPECTABLE PEOPLE ONLY.
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full lg:w-1/2 flex justify-center" >
        <div className="hero-image relative z-1">
          <Image src={HeroImg} alt="Hero" className="heroimg mr-10" />
          <Image src={Heroelm1} alt="Heroelm1" className="hero-elm hero-elm-1"/>
          <Image src={Heroelm2} alt="Heroelm2" className="hero-elm hero-elm-2"/>
          <Image src={Heroelm3} alt="Heroelm3" className="hero-elm hero-elm-3"/>
          <Image src={Heroelm4} alt="Heroelm4" className="hero-elm hero-elm-4"/>
        </div>
      </div>
    </div>

    {/* Hot Topics Section */}
    <div className="flex flex-col lg:flex-row justify-between gap-5 z-10 p-5 rounded-md border border-(--prim-light) bg-(--bg-color) relative">
      <div className="w-full lg:w-1/1 relative">
       <h2 className="text-(--text) Notoserif text-2xl font-bold text-center">Hot Topics</h2>
       <p className="text-(--text-light) font-medium text-center">I don’t chase trends. I write when something has been decided.
       </p>

       <div className="gap-2">
        <div className="swiper-button-next hero-swiper-next swiper-btn w-8 h-8 bg-(--prim-light) hover:bg-(--prim-color) rounded-full items-center cursor-pointer text-white">
          <i className="bi bi-chevron-right"></i>
        </div>

        <div className="swiper-button-prev hero-swiper-prev swiper-btn w-8 h-8 bg-(--prim-light) hover:bg-(--prim-color) rounded-full items-center cursor-pointer text-white">
          <i className="bi bi-chevron-left"></i>
        </div>

       </div>
      </div>
      <div className="w-full lg:w-[80%] hero-swiper">
        <Swiper
        modules={[Autoplay , Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}  
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,  
          }}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            1200: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
          className="mt-5"
        >{HotTopicData.map((topic , index) =>(
          <SwiperSlide key={index}>
            {/* Render your topic content here */}
            <Link href="/app/UI-Components/Blogs/blog">
            <div className="relative hot-topic-card cursor-pointer">
              <Image 
              src={topic.image}
              alt={topic.title} 
              className="w-full h-full rounded object-contain"
              />
              <div className="hot-topic-info absolute bottom-2 left-2 text-white font-bold">
                <h2 className="Notoserif text-white">{topic.title}</h2>
                <p className="text-gray-400">{topic.subtitle}</p>
                
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  </div>
  </>
  )
}
