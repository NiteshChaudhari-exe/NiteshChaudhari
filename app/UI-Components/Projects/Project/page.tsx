"use client";

import Image from "next/image";

import { useState } from "react";

import serviceIcon1 from "@/public/service-Icon1.svg";
import serviceIcon2 from "@/public/service-Icon2.svg";
import serviceIcon3 from "@/public/service-Icon3.svg";
import serviceIcon4 from "@/public/service-Icon4.svg";
import serviceIcon5 from "@/public/service-Icon5.svg";
import serviceIcon6 from "@/public/service-Icon6.svg";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";

import testiAuthor1 from "@/public/testi-author1.webp";
import testiAuthor2 from "@/public/testi-author2.webp";
import testiAuthor3 from "@/public/testi-author3.webp";
import testiQuote from "@/public/testi-quote.svg";

import partner1 from "@/public/partner1.svg";
import partner2 from "@/public/partner2.svg";
import partner3 from "@/public/partner3.svg";
import partner4 from "@/public/partner4.svg";
import partner5 from "@/public/partner5.svg";

import projects from "@/app/JsonData/projects.json";

import Link from "next/link";

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

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all projects");
  return (
    <>
      {/* Projects */}
      <div className="px-[8%] lg:px-[16%] py-10">
        <div className="heading border-b border-(--light-border) pb-5 px-5 mb-10">
          <div className="flex">
            <Link
              href="/"
              className=" text-(--text-light)">
                <i className="bi bi-app text-white me-2 py-1 px-2 rounded-full  bg-(--prim-color)"></i>
              Home
            </Link>
            <span className="mx-2">
              <i className="ri-arrow-right-wide-line text-(--white)"></i>
            </span>
            <h2 className="text-(--text-light)">Projects</h2>
          </div>
        </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
