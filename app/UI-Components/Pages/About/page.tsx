"use client";

import Link from "next/link";

import Image from "next/image";

import profile from "@/public/profile.webp";
import HeroImg from "@/public/hero.png";
import Heroelm1 from "@/public/Hero-elm1.svg";
import Heroelm2 from "@/public/Hero-elm2.svg";
import Heroelm3 from "@/public/Hero-elm3.svg";
import Heroelm4 from "@/public/Hero-elm4.svg";

import serviceIcon1 from "@/public/service-Icon1.svg";
import serviceIcon2 from "@/public/service-Icon2.svg";
import serviceIcon3 from "@/public/service-Icon3.svg";
import serviceIcon4 from "@/public/service-Icon4.svg";
import serviceIcon5 from "@/public/service-Icon5.svg";
import serviceIcon6 from "@/public/service-Icon6.svg";
import projects from "@/app/JsonData/projects.json";
import { useState } from "react";

import pricingIcon from "@/public/pricing-Icon.svg";

import plusIcon from "@/public/plus-Icon.svg";
import minusIcon from "@/public/minus-Icon.svg";

import testiAuthor1 from "@/public/testi-author1.webp";
import testiAuthor2 from "@/public/testi-author2.webp";
import testiAuthor3 from "@/public/testi-author3.webp";
import testiQuote from "@/public/testi-quote.svg";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

import partner1 from "@/public/partner1.svg";
import partner2 from "@/public/partner2.svg";
import partner3 from "@/public/partner3.svg";
import partner4 from "@/public/partner4.svg";
import partner5 from "@/public/partner5.svg";

interface FAQItem {
  question: string;
  answer: string;
}

const tabs = [
  { id: "all projects", label: "All Projects" },
  { id: "web development", label: "Web Development" },
  { id: "mobile apps", label: "Mobile Apps" },
  { id: "website design", label: "Design" },
  { id: "other", label: "Other" },
];

const service = [
  {
    Icon: serviceIcon1,
    name: "Web Development",
    pere: "Building responsive and dynamic websites using modern technologies.",
  },
  {
    Icon: serviceIcon2,
    name: "Mobile Apps",
    pere: "Creating user-friendly mobile applications for iOS and Android platforms.",
  },
  {
    Icon: serviceIcon3,
    name: "UI/UX Design",
    pere: "Designing intuitive and engaging user interfaces and experiences.",
  },
  {
    Icon: serviceIcon4,
    name: "E-commerce Solutions",
    pere: "Developing robust e-commerce platforms to boost your online sales.",
  },
  {
    Icon: serviceIcon5,
    name: "SEO Optimization",
    pere: "Improving website visibility and search engine rankings.",
  },
  {
    Icon: serviceIcon6,
    name: "Content Management",
    pere: "Implementing CMS solutions for easy content updates and management.",
  },
];

const faqData: FAQItem[] = [
  {
    question: "How you doing?",
    answer: "Good, What about you!",
  },
  {
    question: "What are the techs used?",
    answer: "React, tailwind, typescript",
  },
  {
    question: "How you doing?",
    answer: "Good, What about you!",
  },
];

const testimonials = [
  {
    img: testiAuthor1,
    name: "John Doe",
    company: "CEO, ExampleCorp",
    dese: "Nitesh's expertise in web development transformed our online presence. His attention to detail and commitment to quality are unmatched.",
  },
  {
    img: testiAuthor2,
    name: "Jane Smith",
    company: "CTO, TechSolutions",
    dese: "Working with Nitesh was a pleasure. He delivered our mobile app on time and exceeded our expectations in terms of functionality and design.",
  },
  {
    img: testiAuthor3,
    name: "Mike Johnson",
    company: "Founder, StartupHub",
    dese: "Nitesh's UI/UX design skills brought our vision to life. His ability to understand user needs and create engaging interfaces is impressive.",
  },
  {
    img: testiAuthor1,
    name: "John Doe",
    company: "CEO, ExampleCorp",
    dese: "Nitesh's expertise in web development transformed our online presence. His attention to detail and commitment to quality are unmatched.",
  },
  {
    img: testiAuthor2,
    name: "Jane Smith",
    company: "CTO, TechSolutions",
    dese: "Working with Nitesh was a pleasure. He delivered our mobile app on time and exceeded our expectations in terms of functionality and design.",
  },
  {
    img: testiAuthor3,
    name: "Mike Johnson",
    company: "Founder, StartupHub",
    dese: "Nitesh's UI/UX design skills brought our vision to life. His ability to understand user needs and create engaging interfaces is impressive.",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("all projects");

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="px-[8%] lg:px-[16%] pt-10">
        <div className="heading border-b border-(--light-border) pb-5 px-5 mb-10 z-50">
          <div className="flex">
            <Link href="/" className="text-(--text-light)">
              <i className="bi bi-app text-white me-2 px-2 py-1 rounded-full bg-(--prim-color)"></i>
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-(--white)"></i>
            </span>
            <h2 className="text-(--text-light)">About</h2>
          </div>
        </div>
      </div>

      <div className="hero h-full px-[8%] lg:px-[16%] text-(--white)">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="w-full z-10 lg:w-1/2">
            <span className="text-(--text-light) Unbounded font-bold text-[17px]">
              <span className="text-(--prim-color)">A MAN OF HONOR</span>{" "}
            </span>
            <h1 className="text-(--white) Notoserif text-5xl font-bold">
              SOFTWARE ENGINEER{" "}
            </h1>{" "}
            {/* */}
            <p className="Notoserif text-(--text-light)  font-bold text-[14px]">
              IN A WORLD FULL OF NOISE, I build systems that stay silent fast,
              loyal, and never betraying the user—
              <br />
              React, Next.js, TypeScript crafted with the precision of a tailor
              in Palermo and the discipline of a Shelby plan.
            </p>
            <div className="flex gap-2 items-center justify-between p-1 mt-10">
              <div className="hero-inputs border border-(--prim-color) rounded p-1 w-full md:w-[60%] flex gap-1 justify-between">
                <label htmlFor="hero-email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="AN OFFER YOU CAN'T REFUSE....."
                  className="w-full h-8 text-sm px-2 py-1 outline-none ps-3 Unbounded font-bold"
                />
                <button className="btn nav-btn text-white font-bold  rounded-md hover:opacity-90 transition px-3 py-1 text-sm w-24 h-8">
                  JoinFamily
                </button>
              </div>
            </div>
            <div className="text-xs mt-2 text-cyan-400 font-semibold text-center animate-fade">
              FOR RESPECTABLE PEOPLE ONLY.
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="hero-image relative z-1">
              <Image src={HeroImg} alt="Hero" className="heroimg mr-10" />
              <Image
                src={Heroelm1}
                alt="Heroelm1"
                className="hero-elm hero-elm-1"
              />
              <Image
                src={Heroelm2}
                alt="Heroelm2"
                className="hero-elm hero-elm-2"
              />
              <Image
                src={Heroelm3}
                alt="Heroelm3"
                className="hero-elm hero-elm-3"
              />
              <Image
                src={Heroelm4}
                alt="Heroelm4"
                className="hero-elm hero-elm-4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="title flex flex-col items-center justify-center ">
          <h1 className="Unbounded font-bold text-5xl mb-5">my SErviCES</h1>
          <p className="text-xl text-(--text-light) Notoserif text-center lg:w-[58%] mb-10">
            I offer a range of services to help you achieve your goals. Whether
            you need a website, mobile app, or design work, I’ve got you
            covered.
          </p>
        </div>
        <div className="bg-(--bg-color) rounded-2xl p-15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.map((services, index) => (
              <div
                key={index}
                className="flex flex-col cursor-pointer group border-b border-(--light-border) pb-5"
              >
                <div className="service-icon mb-4">
                  <Image
                    src={services.Icon}
                    alt={services.name}
                    width={50}
                    height={50}
                    className="rounded group-hover:bg-(--text-light) transition-all shadow-lg shadow-white/10 object-cover bg-(--body-color) h-15 w-15 p-3"
                  />
                </div>
                <h3 className="font-semibold text-2xl text-(--white) mb-3 Notoserif hover:text-(--prim-color) cursor-pointer">
                  {services.name}
                </h3>
                <p className="text-(--text-light) text-lg Notoserif">
                  {services.pere}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-5 leading-15 Unbounded font-bold">
            Built With Precision
          </h1>
          <p className="text-xl text-(--text-light) text-center lg:w-[50%] mb-10 Notoserif">
            As Reliable As A Handshake From A Man Of Honor.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-(--prim-color) text-(--white) font-semibold"
                  : "border-2 text-(--white) border-(--prim-color) hover:bg-(--prim-color) hover:border-transparent cursor-pointer hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-15">
          {activeTab === "all projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/ProjectDetails/${project.id}`}
                  key={index}
                >
                  <div className="project-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group">
                    <div className="project-image">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover w-full transition-all duration-500"
                      />
                    </div>

                    <div className="project-content absolute p-3 bottom-0 left-0 z-20">
                      <h3 className="text-3xl text-(--prim-color) Notoserif mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="Notoserif text-gray-400 text-sm">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "web development" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4">
              {projects.slice(0, 3).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/ProjectDetails/${project.id}`}
                  key={index}
                >
                  <div className="project-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group">
                    <div className="project-image">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover w-full transition-all duration-500"
                      />
                    </div>

                    <div className="project-content absolute p-3 bottom-0 left-0 z-20">
                      <h3 className="text-3xl text-(--prim-color) Notoserif mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="Notoserif text-gray-400 text-sm">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "mobile apps" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4">
              {projects.slice(2, 4).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/ProjectDetails/${project.id}`}
                  key={index}
                >
                  <div className="project-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group">
                    <div className="project-image">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover w-full transition-all duration-500"
                      />
                    </div>

                    <div className="project-content absolute p-3 bottom-0 left-0 z-20">
                      <h3 className="text-3xl text-(--prim-color) Notoserif mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="Notoserif text-gray-400 text-sm">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "website design" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4">
              {projects.slice(1, 3).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/ProjectDetails/${project.id}`}
                  key={index}
                >
                  <div className="project-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group">
                    <div className="project-image">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover w-full transition-all duration-500"
                      />
                    </div>

                    <div className="project-content absolute p-3 bottom-0 left-0 z-20">
                      <h3 className="text-3xl text-(--prim-color) Notoserif mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="Notoserif text-gray-400 text-sm">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {activeTab === "other" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4">
              {projects.slice(2, 5).map((project, index) => (
                <Link
                  href={`/UI-Components/Projects/ProjectDetails/${project.id}`}
                  key={index}
                >
                  <div className="project-section rounded-2xl overflow-hidden z-10 cursor-pointer relative group">
                    <div className="project-image">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover w-full transition-all duration-500"
                      />
                    </div>

                    <div className="project-content absolute p-3 bottom-0 left-0 z-20">
                      <h3 className="text-3xl text-(--prim-color) Notoserif mb-3 font-bold">
                        {project.title}
                      </h3>
                      <p className="Notoserif text-gray-400 text-sm">
                        {project.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pricing */}

      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="text-5xl Notoserif font-bold text-center lg:w-[60%] ">
            The Best Work Solution, For The Best Price.....
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          <div className="pricing-card bg-(--bg-color) p-5 rounded-xl border border-[#222f43]">
            <div className="pricing-content border-b py-6 border-[$222f43]">
              <h3 className="font-bold text-3xl mb-5 Notoserif text-(--white)">
                Personal
              </h3>
              <p className="text-(--text-light) Notoserif font-semibold text-xl mb-5">
                For Personal Use
              </p>

              <p className="text-(--text-light) Notoserif font-semibold text-lg mb-8">
                Get Started Without Credit.
              </p>
              <button className="px-5 py-1 rounded-full text-(--white) cursor-pointer font-bold transition-all duration-500 border-2 border-(--prim-color) hover:bg-(--prim-color) hover:border-transparent hover:text-white">
                Free
              </button>
            </div>
            <div className="pricing-list py-6">
              <h4 className="text-(--white) text-lg mb-5 font-semibold Notoserif">
                What You Get:
              </h4>
              <ul className="list-item px-3">
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
              </ul>
            </div>
          </div>
          <div className="pricing-card bg-(--bg-color) p-5 rounded-xl border border-[#222f43]">
            <div className="pricing-content border-b py-6 border-[$222f43]">
              <div className="pricing-heading flex justify-between items-center relative">
                <h3 className="font-bold text-3xl mb-5 Notoserif text-(--white)">
                  Business
                </h3>
                <label className="text-black absolute top-0 right-0 bg-[#6cffc1] px-4 py-2 rounded-full font-semibold">
                  Popular
                </label>
              </div>

              <p className="text-(--text-light) Notoserif font-semibold text-xl mb-5">
                For Business
              </p>

              <p className="text-(--text-light) Notoserif font-semibold text-lg mb-8">
                Get Started With Credit.
              </p>
              <button className="px-5 py-1 rounded-full text-(--white) cursor-pointer font-bold transition-all duration-500 border-2 border-(--prim-color) hover:bg-(--prim-color) hover:border-transparent hover:text-white">
                Business
              </button>
            </div>
            <div className="pricing-list py-6">
              <h4 className="text-(--white) text-lg mb-5 font-semibold Notoserif">
                What You Get:
              </h4>
              <ul className="list-item px-3">
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
              </ul>
            </div>
          </div>
          <div className="pricing-card bg-(--bg-color) p-5 rounded-xl border border-[#222f43]">
            <div className="pricing-content border-b py-6 border-[$222f43]">
              <div className="pricing-heading flex justify-between items-center relative">
                <h3 className="font-bold text-3xl mb-5 Notoserif text-(--white)">
                  Enterprise
                </h3>
                <label className="text-black absolute top-0 right-0 bg-[#ff756c] px-4 py-2 rounded-full font-semibold">
                  Premium
                </label>
              </div>

              <p className="text-(--text-light) Notoserif font-semibold text-xl mb-5">
                For Enterprise
              </p>

              <p className="text-(--text-light) Notoserif font-semibold text-lg mb-8">
                Get Started With Credit.
              </p>
              <button className="px-5 py-1 rounded-full text-(--white) cursor-pointer font-bold transition-all duration-500 border-2 border-(--prim-color) hover:bg-(--prim-color) hover:border-transparent hover:text-white">
                Business
              </button>
            </div>
            <div className="pricing-list py-6">
              <h4 className="text-(--white) text-lg mb-5 font-semibold Notoserif">
                What You Get:
              </h4>
              <ul className="list-item px-3">
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
                <li className="flex gap-2 Notoserif mb-2 text-[#94a9c9]">
                  <Image src={pricingIcon} alt="PricingIcon" />
                  Unlimited Storage
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ  */}
      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="title flex flex-col items-center justify-center">
          <h1 className="text-5xl Notoserif font-bold text-(--prim-color) text-center">
            FAQs.....
          </h1>
        </div>
        <div className="space-y-4 w-full py-10">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden border-b-2 py-2 border-[#222f43] transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center text-(--white) py-6 text-left focus:outline-none cursor-pointer"
                onClick={() => toggle(index)}
              >
                <span className="text-2xl Notoserif text-(--text-color)">{item.question}</span> {/* visible, discernible text */}
                <div className="relative w-10 h-10">
                    <Image 
                    src={plusIcon}
                    alt="plusIcon"
                    width={50}
                    height={50}
                    className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-0 scale-75 rotate-90" :"opacity-100 scale-100 rotate-0"}`}
                    />
                     <Image 
                    src={minusIcon}
                    alt="minusIcon"
                    width={50}
                    height={50}
                    className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 scale-100 rotate-0" :"opacity-0 scale-75 rotate-90"}`}
                    />
                </div>
              </button>
              <div style={{
                maxHeight: openIndex ===index ? "300px" : "0px",
                opacity: openIndex === index ? 1 :0,
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              className="overflow-hidden"
              >
                <p className="text-lg text-(--text-light) Notoserif py-3">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Testimonial */}

      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="title flex flex-col items-center justify-center ">
          <h1 className="Unbounded font-bold text-5xl mb-5">TEstimoniaLs</h1>
          <p className="text-xl text-(--text-light) Notoserif text-center mb-10">
            Hear what my clients have to say about working with me. Satisfaction
            is my top priority.
          </p>
        </div>
        <div className="w-full testi-swiper">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              1200: { slidesPerView: 3 },
              991: { slidesPerView: 2 },
              575: { slidesPerView: 1 },
              0: { slidesPerView: 1 },
            }}
            className="mt-5"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testi-card w-full border border-[#222f43] rounded-xl p-4 cursor-pointer">
                  <div className="testi-section mb-4 flex gap-3 items-center ">
                    <div className="testi-author">
                      {" "}
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover h-12 w-12"
                      />
                    </div>
                    <div className="author-text">
                      <h4 className="text-lg Notoserif text-(--text-light) font-bold">
                        {item.name}
                      </h4>
                      <span className="Notoserif text-[#66768f]">
                        {item.company}
                      </span>
                    </div>
                  </div>
                  <p className="Notoserif text-sm text-(--text-light)">
                    {item.dese}
                  </p>
                  <div className="text-quote flex justify-end">
                    <Image
                      src={testiQuote}
                      alt="Quote"
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

        {/* Partners */}

      <div className="px-[8%] lg:px-[16%] py-15">
         <div className="title flex flex-col items-center justify-center ">
           <h1 className="Notoserif font-bold text-4xl lg:w-[80%] leading-15 text-center mb-5">content publishing cooperation with my partners</h1>
         </div>
         <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay:2500,
            disableOnInteraction:false,
          }}
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            1200: {slidesPerView: 4},
            991: {slidesPerView: 3},
            575: {slidesPerView: 2},
            0: {slidesPerView: 1},
          }}
          className="mt-10 brands-swiper"
        >
            {[partner1, partner2, partner3, partner4, partner5].map((img, i) => (
                <SwiperSlide key={i}>
                    <Image
                    src={img}
                    alt={`Partner ${i + 1}`}
                    className="object-cover transition-all duration-300 opacity-50 hover:opacity-100 cursor-pointer"
                    />
                </SwiperSlide>
            ))}

        </Swiper>
      </div>

    </>
  );
}
